import json
import re

with open("scripts/raw_ch14_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

fractions = set()
powers = set()
w_bosons = set()
charges = set()

for q in questions:
    full_text = " ".join([q['question'], q['opt_a'], q['opt_b'], q['opt_c'], q['opt_d'], q['explanation']])
    
    # Check powers like 10^-39 or 10^−39
    pws = re.findall(r'10\^?[−\-]?\d+', full_text)
    for p in pws:
        powers.add(p)
        
    # Check fractions like 2/3, 1/3, 1/2, 3/2
    frs = re.findall(r'[+−\-]?\d+/\d+\s*e?', full_text)
    for f in frs:
        fractions.add(f)

    # Check W bosons
    wb = re.findall(r'W[+−\-\^]', full_text)
    for w in wb:
        w_bosons.add(w)

print("Powers found:", powers)
print("Fractions found:", fractions)
print("W bosons found:", w_bosons)
