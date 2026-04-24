#!/usr/bin/env python3
"""Verify image prompt vocab matches rooms.ts"""
import re

with open("src/data/rooms.ts", "r", encoding="utf-8") as f:
    text = f.read()

zones = [
    ("fontana-piazza", ["essere", "stare", "avere", "fare", "dare"]),
    ("bar-piazza", ["volere", "potere", "dovere", "prendere", "mettere"]),
    ("fermata-piazza", ["andare", "venire", "partire", "arrivare", "uscire", "tornare"]),
    ("panchina-piazza", ["dire", "parlare", "vedere", "sapere", "capire"]),
    ("settimana", ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"]),
    ("mesi", ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]),
    ("stagioni", ["primavera", "estate", "autunno", "inverno"]),
    ("avverbi-tempo", ["oggi", "ieri", "domani", "adesso", "dopo", "prima", "sempre", "mai", "ancora", "tardi", "spesso"]),
]

print("Verifying image prompt vocab against rooms.ts...\n")
all_ok = True
for zid, expected in zones:
    m = re.search(r"id:\s*'" + zid + r"'.*?interiorVocab:\s*\[(.*?)\]", text, re.DOTALL)
    if not m:
        print(f"MISS  {zid}: zone not found")
        all_ok = False
        continue
    vocab = re.findall(r"wordId:\s*'([^']+)'", m.group(1))
    if set(vocab) == set(expected):
        print(f"OK    {zid}: {len(vocab)} words match")
    else:
        print(f"BAD   {zid}")
        print(f"      Expected: {sorted(expected)}")
        print(f"      Found:    {sorted(vocab)}")
        all_ok = False

print()
if all_ok:
    print("All 8 zones verified. Image prompts are accurate.")
else:
    print("Some mismatches found. Please review.")
