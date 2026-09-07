# -*- coding: utf-8 -*-
import re
from raw_p1 import RAW_QUESTIONS_P1
from raw_p2 import RAW_QUESTIONS_P2
from raw_p3 import RAW_QUESTIONS_P3
from raw_p4 import RAW_QUESTIONS_P4

all_raw = [RAW_QUESTIONS_P1, RAW_QUESTIONS_P2, RAW_QUESTIONS_P3, RAW_QUESTIONS_P4]
full_text = "\n\n".join(all_raw)

blocks = re.findall(r'\*\*(\d+)\.\s*(.*?)(?=\n\*\*\d+\.|\Z)', full_text, re.DOTALL)

parsed = []
errors = []

for num_str, block in blocks:
    num = int(num_str)
    # Extract Answer and explanation
    ans_match = re.search(r'\*\*Answer:\s*([A-D])\.?\*\*\s*(.*)', block, re.DOTALL)
    if not ans_match:
        errors.append(f"Q{num}: No answer match in block: {block}")
        continue
    correct_ans = ans_match.group(1).strip()
    explanation = ans_match.group(2).strip()

    # Pre-answer text contains Question and Options
    pre_ans = block[:ans_match.start()].strip()

    # Sometimes question ends with :** or : or ?
    # Let's find where option A starts:
    # Option A usually starts with \nA. or \n\nA. or A. (after question line)
    # Notice questions might end with :**
    pre_ans = re.sub(r':\*\*\s*', ':\n', pre_ans)

    # Let's find A.
    a_match = re.search(r'(?:^|\n)\s*A\.\s*', pre_ans)
    if not a_match:
        # try anywhere A.
        a_match = re.search(r'\s+A\.\s*', pre_ans)
    if not a_match:
        errors.append(f"Q{num}: No A. found in {pre_ans}")
        continue

    q_text = pre_ans[:a_match.start()].strip()
    # Clean q_text of trailing ** or quotes
    q_text = re.sub(r'^\s*\*\*', '', q_text)
    q_text = re.sub(r'\*\*\s*$', '', q_text).strip()

    opts_text = pre_ans[a_match.end():].strip()

    # Now we need to split opts_text into A, B, C, D
    # Look for B., C., D.
    # Note that in Q8, Q10, Q13, Q185 we have things like "RationalD. Quadratic"
    # So B, C, D can be preceded by whitespace, em-space (\u2003), or directly attached to letter/closing paren
    # Let's normalize opts_text: insert space before [B-D]\. if preceded by word char or \)
    opts_text_norm = re.sub(r'([^\s])([BCD]\.)', r'\1 \2', opts_text)

    # Now match B., C., D.
    b_match = re.search(r'(?:[\s\u2003]+|^)B\.\s*', opts_text_norm)
    c_match = re.search(r'(?:[\s\u2003]+|^)C\.\s*', opts_text_norm)
    d_match = re.search(r'(?:[\s\u2003]+|^)D\.\s*', opts_text_norm)

    if not (b_match and c_match and d_match):
        errors.append(f"Q{num}: Failed to match all options. B:{bool(b_match)}, C:{bool(c_match)}, D:{bool(d_match)}. Text: {opts_text}")
        continue

    # Split using positions
    opt_a = opts_text_norm[:b_match.start()].strip()
    opt_b = opts_text_norm[b_match.end():c_match.start()].strip()
    opt_c = opts_text_norm[c_match.end():d_match.start()].strip()
    opt_d = opts_text_norm[d_match.end():].strip()

    parsed.append({
        'num': num,
        'question': q_text,
        'A': opt_a,
        'B': opt_b,
        'C': opt_c,
        'D': opt_d,
        'correct': correct_ans,
        'explanation': explanation
    })

print(f"Parsed {len(parsed)} questions. Errors: {len(errors)}")
if errors:
    for e in errors:
        print(e)
else:
    print("All 200 questions parsed successfully!")
    print("Sample Q1:")
    print(parsed[0])
    print("Sample Q8:")
    print(parsed[7])
    print("Sample Q185:")
    print(parsed[184])
