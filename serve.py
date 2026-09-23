#!/usr/bin/env python3
"""
High-Performance Zero-Exception Multi-Threaded HTTP Server with HTTP 206 Byte Ranges.
Specially tuned for video streaming in macOS Chrome and Safari without socket stalls.
"""
import datetime
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn

PORT = 8080
if len(sys.argv) > 1:
    PORT = int(sys.argv[1])

BYTE_RANGE_RE = re.compile(r"^bytes=(\d+)-(\d+)?$")

class QuietRangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    # Use HTTP/1.1 for Range headers, but close connections explicitly to prevent keep-alive socket resets
    protocol_version = "HTTP/1.1"

    def handle(self):
        try:
            super().handle()
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass

    def finish(self):
        try:
            super().finish()
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Connection', 'close')
        path = self.path.split('?')[0]
        if path.endswith(('.html', '.css', '.js')) or path == '/' or not os.path.splitext(path)[1]:
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Accept')
        self.send_header('Content-Length', '0')
        self.end_headers()

    def do_POST(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path in ('/api/contact', '/api/inquiry'):
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length).decode('utf-8', errors='replace')
            
            try:
                data = json.loads(post_body)
            except Exception:
                data = dict(urllib.parse.parse_qsl(post_body))

            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            discipline = data.get('discipline', 'Commercial Project').strip()
            message = data.get('message', '').strip()

            print(f"\n{'='*55}")
            print(f"[WORK WITH ME INQUIRY RECEIVED]")
            print(f"Time:       {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"Name:       {name}")
            print(f"Email:      {email}")
            print(f"Discipline: {discipline}")
            print(f"Message:\n{message}")
            print(f"{'='*55}\n")

            # Persist to local inquiries log
            try:
                log_file = os.path.join(os.path.dirname(__file__), "inquiries.json")
                entries = []
                if os.path.exists(log_file):
                    with open(log_file, "r", encoding="utf-8") as f:
                        entries = json.load(f)
                entries.append({
                    "timestamp": datetime.datetime.now().isoformat(),
                    "name": name,
                    "email": email,
                    "discipline": discipline,
                    "message": message
                })
                with open(log_file, "w", encoding="utf-8") as f:
                    json.dump(entries, f, indent=2)
            except Exception as e:
                sys.stderr.write(f"[Server] Failed to write inquiries.json: {e}\n")

            # Forward to FormSubmit email delivery to charaneditzz@gmail.com
            try:
                forward_payload = json.dumps({
                    "name": name,
                    "email": email,
                    "discipline": discipline,
                    "message": message,
                    "_subject": f"Portfolio Inquiry: {discipline} from {name}",
                    "_template": "table"
                }).encode('utf-8')
                req = urllib.request.Request(
                    "https://formsubmit.co/ajax/charaneditzz@gmail.com",
                    data=forward_payload,
                    headers={
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "User-Agent": "Charan-Portfolio-Server/1.0"
                    }
                )
                with urllib.request.urlopen(req, timeout=5) as resp:
                    pass
                print(f"[Server] Forwarded inquiry to email delivery for charaneditzz@gmail.com")
            except Exception as e:
                print(f"[Server] Email forward status: {e}")

            resp_data = json.dumps({
                "success": True,
                "message": "Message sent successfully! Charan will respond shortly."
            }).encode('utf-8')

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Content-Length', str(len(resp_data)))
            self.end_headers()
            self.wfile.write(resp_data)
            return

        self.send_error(404, "Not Found")

    def do_GET(self):
        self.close_connection = True
        path = self.translate_path(self.path)
        if not os.path.exists(path) or os.path.isdir(path):
            return super().do_GET()

        range_header = self.headers.get('Range')
        if not range_header:
            return super().do_GET()

        match = BYTE_RANGE_RE.match(range_header.strip())
        if not match:
            return super().do_GET()

        file_size = os.path.getsize(path)
        start_str, end_str = match.groups()
        start = int(start_str)
        end = int(end_str) if end_str else file_size - 1

        if start >= file_size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return

        end = min(end, file_size - 1)
        content_length = end - start + 1

        ctype = self.guess_type(path)
        self.send_response(206)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Range', f"bytes {start}-{end}/{file_size}")
        self.send_header('Content-Length', str(content_length))
        self.end_headers()

        try:
            with open(path, 'rb') as f:
                f.seek(start)
                remaining = content_length
                chunk_size = 64 * 1024
                while remaining > 0:
                    read_len = min(chunk_size, remaining)
                    data = f.read(read_len)
                    if not data:
                        break
                    self.wfile.write(data)
                    remaining -= len(data)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass

    def log_message(self, format, *args):
        # Clean terminal output
        sys.stderr.write(f"[Server] {self.address_string()} - {format % args}\n")

class ThreadingServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == "__main__":
    with ThreadingServer(("", PORT), QuietRangeHTTPRequestHandler) as httpd:
        print(f"Dev server running on http://localhost:{PORT} (HTTP 206 Enabled, Clean Connection Closure)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
