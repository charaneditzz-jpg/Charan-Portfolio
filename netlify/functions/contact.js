const https = require("https");

/**
 * Netlify Serverless Function: /api/contact
 * Handles "Work With Me" inquiry submissions and delivers notifications to charaneditzz@gmail.com.
 */
exports.handler = async function (event, context) {
  // CORS Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    let data;
    try {
      data = JSON.parse(event.body || "{}");
    } catch (e) {
      const querystring = require("querystring");
      data = querystring.parse(event.body || "");
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const discipline = (data.discipline || "Commercial Project").trim();
    const message = (data.message || "").trim();

    if (!name || !email) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          success: false,
          error: "Name and email are required fields.",
        }),
      };
    }

    console.log(`[Contact Function] New inquiry from ${name} <${email}> for "${discipline}"`);

    // 1. If Resend API Key is set in Netlify environment variables, send high-deliverability email
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
          const req = https.request(
            "https://api.resend.com/emails",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(resendPayload),
              },
            },
            (res) => {
              let body = "";
              res.on("data", (chunk) => (body += chunk));
              res.on("end", () => resolve({ status: res.statusCode, body }));
            }
          );
          req.on("error", reject);
          req.write(resendPayload);
          req.end();
        });

        if (resendRes.status >= 200 && resendRes.status < 300) {
          return {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              success: true,
              message: "Message sent successfully! Charan will respond shortly.",
            }),
          };
        }
      } catch (resendErr) {
        console.warn("[Contact Function] Resend failed, falling back to FormSubmit gateway:", resendErr.message);
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
      const req = https.request(
        "https://formsubmit.co/ajax/charaneditzz@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(formSubmitPayload),
            Accept: "application/json",
          },
        },
        (res) => {
          let body = "";
          res.on("data", (chunk) => (body += chunk));
          res.on("end", () => resolve(body));
        }
      );
      req.on("error", (err) => {
        console.warn("[Contact Function] Gateway forward error:", err.message);
        resolve(null);
      });
      req.write(formSubmitPayload);
      req.end();
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully! Charan will respond shortly.",
      }),
    };
  } catch (err) {
    console.error("[Contact Function] Fatal error:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: false,
        error: "Unable to process inquiry at this moment.",
      }),
    };
  }
};
