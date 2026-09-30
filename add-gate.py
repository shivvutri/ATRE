#!/usr/bin/env python3
"""Quiz aur mock pages mein login gate jodta hai. Repo ke folder mein chalayein: python3 add-gate.py
Dobara chalane par jo pehle se gated hain unhe chhod deta hai."""
import pathlib, re

SAMPLE = {"hindi-quiz-1.html"}   # jo pages bina login ke khule rakhne hain (free sample)

GATE = ('<style id="gate-hide">html{visibility:hidden}</style>\n'
        '<script type="module" src="./auth-gate.js"></script>')

for f in sorted(pathlib.Path(".").glob("*.html")):
    n = f.name
    protected = re.fullmatch(r".+-quiz-\d+\.html", n) or re.fullmatch(r"mock-test-\d+\.html", n)
    if not protected or n in SAMPLE:
        continue
    t = f.read_text(encoding="utf-8")
    if "auth-gate.js" in t:
        print("pehle se gated:", n); continue
    new, k = re.subn(r"<head[^>]*>", lambda m: m.group(0) + "\n" + GATE, t, count=1, flags=re.I)
    if not k:
        print("HEAD nahi mila:", n); continue
    f.write_text(new, encoding="utf-8"); print("gate laga:", n)
