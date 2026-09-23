#!/usr/bin/env node
/**
 * Charan Golkonda Portfolio - Dedicated Node.js Web & Inquiries Server
 * Zero external dependencies: uses native Node.js http, fs, path, and https modules.
 * Features:
 * - HTTP 206 Partial Content / Byte-Range support for smooth video streaming
 * - Clean REST API endpoint: POST /api/contact
 * - Automated email forwarding to charaneditzz@gmail.com
 * - Local file persistence to inquiries.json
 */

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

function forwardToEmail(inquiry) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      name: inquiry.name,
      email: inquiry.email,
      discipline: inquiry.discipline,
      message: inquiry.message,
      _subject: `New Portfolio Inquiry: ${inquiry.discipline} from ${inquiry.name}`,
      _replyto: inquiry.email,
      _template: "table",
    });

    const req = https.request(
      "https://formsubmit.co/ajax/charaneditzz@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
          Accept: "application/json",
          "User-Agent": "Charan-Portfolio-NodeServer/1.0",
        },
      },
      (res) => {
        let resBody = "";
        res.on("data", (chunk) => (resBody += chunk));
        res.on("end", () => {
          console.log(`[Server] Email delivery forwarded to charaneditzz@gmail.com`);
          resolve(true);
        });
      }
    );

    req.on("error", (err) => {
      console.warn(`[Server] Email gateway forward note: ${err.message}`);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

function saveInquiryLocal(inquiry) {
  try {
    const logPath = path.join(ROOT_DIR, "inquiries.json");
    let entries = [];
    if (fs.existsSync(logPath)) {
      entries = JSON.parse(fs.readFileSync(logPath, "utf8") || "[]");
    }
    entries.push({
      timestamp: new Date().toISOString(),
      ...inquiry,
    });
    fs.writeFileSync(logPath, JSON.stringify(entries, null, 2), "utf8");
  } catch (err) {
    console.error(`[Server] Error saving inquiry locally:`, err.message);
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname.replace(/\/$/, "") || "/";

  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // API Endpoint: /api/contact
  if (req.method === "POST" && (pathname === "/api/contact" || pathname === "/api/inquiry")) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.connection.destroy();
      }
    });

    req.on("end", async () => {
      try {
        let data = {};
        if (body.trim().startsWith("{")) {
          data = JSON.parse(body);
        } else {
          const qs = require("querystring");
          data = qs.parse(body);
        }

        const name = (data.name || "").trim();
        const email = (data.email || "").trim();
        const discipline = (data.discipline || "Commercial Project").trim();
        const message = (data.message || "").trim();

        if (!name || !email) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: false, error: "Name and email are required." }));
          return;
        }

        console.log(`\n=======================================================`);
        console.log(`[WORK WITH ME INQUIRY RECEIVED]`);
        console.log(`Time:       ${new Date().toLocaleString()}`);
        console.log(`Name:       ${name}`);
        console.log(`Email:      ${email}`);
        console.log(`Discipline: ${discipline}`);
        console.log(`Message:\n${message}`);
        console.log(`=======================================================\n`);

        const inquiry = { name, email, discipline, message };
        saveInquiryLocal(inquiry);
        await forwardToEmail(inquiry);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "Message sent successfully! Charan will respond shortly.",
          })
        );
      } catch (err) {
        console.error(`[Server] Error processing contact inquiry:`, err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: "Server error" }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(ROOT_DIR, pathname === "/" ? "index.html" : pathname);

  // Clean URL rewrite: /films -> films.html
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + ".html")) {
      filePath = filePath + ".html";
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>404 Not Found</h1>");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const fileSize = stats.size;
    const range = req.headers.range;

    // HTTP 206 Partial Content for Video Streams
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (start >= fileSize || start > end) {
        res.writeHead(416, { "Content-Range": `bytes */${fileSize}` });
        res.end();
        return;
      }

      const chunksize = end - start + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": contentType,
      });

      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": contentType,
        "Accept-Ranges": "bytes",
        "Cache-Control": ext.match(/\.(html|css|js)$/)
          ? "no-cache, must-revalidate"
          : "public, max-age=31536000",
      });

      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n=======================================================`);
  console.log(`Charan Golkonda Portfolio Server active on:`);
  console.log(`http://localhost:${PORT}`);
  console.log(`Inquiry Endpoint: POST http://localhost:${PORT}/api/contact`);
  console.log(`Target Email: charaneditzz@gmail.com`);
  console.log(`=======================================================\n`);
});
