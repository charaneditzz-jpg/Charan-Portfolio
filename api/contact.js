const https = require("https");

/**
 * Vercel Serverless Function: /api/contact
 * Handles "Work With Me" inquiry submissions and delivers notifications to charaneditzz@gmail.com.
 */
module.exports = async (req, res) => {
  // CORS Preflight
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    let data = req.body;
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        const querystring = require("querystring");
        data = querystring.parse(data);
      }
    }
    data = data || {};

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const discipline = (data.discipline || "Commercial Project").trim();
    const message = (data.message || "").trim();

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required fields.",
      });
    }

    console.log(`[Vercel Contact] New inquiry from ${name} <${email}> for "${discipline}"`);

    // 1. If Resend API Key is set in Vercel environment variables, send email
    if (process.env.RESEND_API_KEY) {
      try {
        const resendPayload = JSON.stringify({
          from: "Charan Portfolio <onboarding@resend.dev>",
          to: ["charaneditzz@gmail.com"],
          reply_to: email,
          subject: `Portfolio Inquiry: ${discipline} from ${name}`,
          text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\nDiscipline: ${discipline}\n\nProject Details:\n${message}\n\nTimestamp: ${new Date().toISOString()}`,
        });

        const resendRes = await new Promise((resolve, reject) => {
          const r = https.request(
            "https://api.resend.com/emails",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(resendPayload),
              },
            },
            (apiRes) => {
              let body = "";
              apiRes.on("data", (chunk) => (body += chunk));
              apiRes.on("end", () => resolve({ status: apiRes.statusCode, body }));
            }
          );
          r.on("error", reject);
          r.write(resendPayload);
          r.end();
        });

        if (resendRes.status >= 200 && resendRes.status < 300) {
          return res.status(200).json({
            success: true,
            message: "Message sent successfully! Charan will respond shortly.",
          });
        }
      } catch (resendErr) {
        console.warn("[Vercel Contact] Resend failed, falling back to FormSubmit gateway:", resendErr.message);
      }
    }

    // 2. Direct HTTPS Server-to-Server forward to FormSubmit email delivery to charaneditzz@gmail.com
    const formSubmitPayload = JSON.stringify({
      name: name,
      email: email,
      discipline: discipline,
      message: message,
      _subject: `New Portfolio Inquiry: ${discipline} from ${name}`,
      _replyto: email,
      _template: "table",
    });

    await new Promise((resolve) => {
      const r = https.request(
        "https://formsubmit.co/ajax/charaneditzz@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(formSubmitPayload),
            Accept: "application/json",
          },
        },
        (gatewayRes) => {
          let body = "";
          gatewayRes.on("data", (chunk) => (body += chunk));
          gatewayRes.on("end", () => resolve(body));
        }
      );
      r.on("error", (err) => {
        console.warn("[Vercel Contact] Gateway forward error:", err.message);
        resolve(null);
      });
      r.write(formSubmitPayload);
      r.end();
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! Charan will respond shortly.",
    });
  } catch (err) {
    console.error("[Vercel Contact] Fatal error:", err);
    return res.status(500).json({
      success: false,
      error: "Unable to process inquiry at this moment.",
    });
  }
};
