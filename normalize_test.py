# -*- coding: utf-8 -*-
import json
from test_parse_full import parsed

# Let's inspect all formulas and check conversions
def normalize_latex(text: str) -> str:
    if not text:
        return ""
    # Convert \( ... \) to $ ... $
    # Note: text can have multiple \( ... \)
    s = text
    s = s.replace(r'\(', '$').replace(r'\)', '$')

    # Replace \mathbb R with \mathbb{R}, etc.
    s = s.replace(r'\mathbb R', r'\mathbb{R}')
    s = s.replace(r'\mathbb N', r'\mathbb{N}')
    s = s.replace(r'\mathbb Z', r'\mathbb{Z}')
    s = s.replace(r'\mathbb C', r'\mathbb{C}')
    s = s.replace(r'\mathbb Q', r'\mathbb{Q}')

    # Replace \frac b{2a} with \frac{b}{2a}
    s = s.replace(r'\frac b{2a}', r'\frac{b}{2a}')
    s = s.replace(r'\frac a{2b}', r'\frac{a}{2b}')
    s = s.replace(r'\frac c{2a}', r'\frac{c}{2a}')
    s = s.replace(r'\frac95', r'\frac{9}{5}')

    # Replace degree symbol or ^\circ
    s = s.replace(r'^\circ', r'^{\circ}')

    # Clean up multiple spaces inside $ $ if any
    return s

for q in parsed:
    q['question'] = normalize_latex(q['question'])
    q['A'] = normalize_latex(q['A'])
    q['B'] = normalize_latex(q['B'])
    q['C'] = normalize_latex(q['C'])
    q['D'] = normalize_latex(q['D'])
    q['explanation'] = normalize_latex(q['explanation'])

with open('parsed_questions.json', 'w', encoding='utf-8') as f:
    json.dump(parsed, f, indent=2, ensure_ascii=False)

print(f"Saved {len(parsed)} normalized questions to parsed_questions.json")
