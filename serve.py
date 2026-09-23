#!/usr/bin/env python3
"""
High-Performance Zero-Exception Multi-Threaded HTTP Server with HTTP 206 Byte Ranges.
Specially tuned for video streaming in macOS Chrome and Safari without socket stalls.
"""
import os
import re
import sys
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
