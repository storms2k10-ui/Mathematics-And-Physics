# -*- coding: utf-8 -*-
import json

with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

for q in questions:
    # Check if question has algebraic symbols not inside $
    text = q['question']
    # Check options too
    for opt in ['A', 'B', 'C', 'D']:
        opt_val = q[opt]
        # check if opt_val has e.g. x^2, /x, \pm without $
        if ('^' in opt_val or '_' in opt_val or '\\' in opt_val or '±' in opt_val) and '$' not in opt_val:
            print(f"Q{q['num']} opt {opt} has math without $: {opt_val}")
    # check question
    if ('^' in text or '\\' in text or '±' in text) and '$' not in text:
        print(f"Q{q['num']} question has math without $: {text}")

print("Checked math delimiters.")
