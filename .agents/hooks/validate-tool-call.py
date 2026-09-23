#!/usr/bin/env python3
import sys
import json
import re

BLOCK_RULES = [
    {
        "id": "unix-root-delete",
        "pattern": re.compile(r"(?:^|[;&|]\s*)(?:sudo\s+)?rm\s+(?:-[A-Za-z]*r[A-Za-z]*f[A-Za-z]*|-[A-Za-z]*f[A-Za-z]*r[A-Za-z]*)\s+(?:--\s+)?/(?:\*|\s|$)", re.IGNORECASE),
        "message": "recursive deletion of the filesystem root"
    },
    {
        "id": "filesystem-format",
        "pattern": re.compile(r"(?:^|[;&|]\s*)(?:sudo\s+)?mkfs(?:\.[A-Za-z0-9_-]+)?\b", re.IGNORECASE),
        "message": "filesystem formatting command"
    },
    {
        "id": "raw-disk-overwrite",
        "pattern": re.compile(r"\bdd\b[^\n]*\bof=/dev/(?:sd|nvme|vd|xvd)[A-Za-z0-9_-]*", re.IGNORECASE),
        "message": "raw disk overwrite"
    },
    {
        "id": "windows-drive-format",
        "pattern": re.compile(r"(?:^|[;&|]\s*)format(?:\.com)?\s+[A-Za-z]:", re.IGNORECASE),
        "message": "Windows drive format"
    },
    {
        "id": "windows-root-delete",
        "pattern": re.compile(r"remove-item\b[^\n]*-(?:recurse|r)\b[^\n]*-(?:force|fo)\b[^\n]*(?:[A-Za-z]:\\(?:\s|$)|[A-Za-z]:\\\*)", re.IGNORECASE),
        "message": "recursive deletion of a Windows drive root"
    }
]

def extract_command(payload):
    args = payload.get("tool_args") or payload.get("toolArgs") or payload.get("arguments") or {}
    for key in ["CommandLine", "commandLine", "command", "cmd"]:
        val = args.get(key)
        if isinstance(val, str) and val.strip():
            return val.strip()
    for key in ["command", "cmd"]:
        val = payload.get(key)
        if isinstance(val, str) and val.strip():
            return val.strip()
    return ""

def evaluate_command(command):
    for rule in BLOCK_RULES:
        if rule["pattern"].search(command):
            return False, rule["id"], rule["message"]
    return True, None, "no destructive command pattern matched"

def main():
    try:
        raw = sys.stdin.read(1024 * 1024 + 1)
        if len(raw) > 1024 * 1024:
            sys.stderr.write("AG Kit hook warning: hook payload exceeds 1 MiB\n")
            return 0
    except Exception as e:
        sys.stderr.write(f"AG Kit hook warning: {e}\n")
        return 0

    try:
        payload = json.loads(raw or "{}")
    except Exception:
        sys.stderr.write("AG Kit hook warning: Antigravity sent invalid JSON; allowing the call to avoid a runtime-wide lockout.\n")
        return 0

    command = extract_command(payload)
    if not command:
        print("AG Kit hook: no command payload detected; allowed.")
        return 0

    allowed, rule_id, reason = evaluate_command(command)
    if not allowed:
        sys.stderr.write(f"BLOCKED by AG Kit ({rule_id}): {reason}.\n")
        return 1

    print("APPROVED by AG Kit: command passed the destructive-operation gate.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
