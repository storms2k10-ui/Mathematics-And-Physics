import json
import re
from raw_ch13_1_100 import RAW_1_100
from raw_ch13_101_200 import RAW_101_200

raw = RAW_1_100 + "\n" + RAW_101_200

pattern = re.compile(
    r'\*\*(\d+)\.\s*(.*?)\*\*\s*\n'
    r'A\.\s*(.*?)\s*\n'
    r'B\.\s*(.*?)\s*\n'
    r'C\.\s*(.*?)\s*\n'
    r'D\.\s*(.*?)\s*\n\s*'
    r'\*\*Answer:\s*([A-D])\*\*\s*\n'
    r'\*\*Explanation:\*\*\s*(.*?)(?=\n\s*(?:---\s*\n\s*)?\*\*\d+\.|\Z)',
    re.DOTALL
)

matches = pattern.findall(raw)
questions = []

for m in matches:
    qnum = int(m[0])
    qtext = m[1].strip()
    opt_a = m[2].strip()
    opt_b = m[3].strip()
    opt_c = m[4].strip()
    opt_d = m[5].strip()
    ans = m[6].strip()
    exp = m[7].strip()

    # Fix duplicates in Q118, Q168, Q182
    if qnum == 118:
        # A and B were identical 4.8 x 10^-13 J. Ans is B.
        opt_a = r"\(4.8\times10^{-16}\) J"
    elif qnum == 168:
        # B and D were identical 9 x 10^13 J. Ans is D.
        opt_b = r"\(9\times10^{16}\) J"
    elif qnum == 182:
        # A and B were identical 90. Ans is B (90).
        opt_a = "88"

    questions.append({
        "qnum": qnum,
        "question": qtext,
        "opt_a": opt_a,
        "opt_b": opt_b,
        "opt_c": opt_c,
        "opt_d": opt_d,
        "answer": ans,
        "explanation": exp
    })

with open("scripts/raw_ch13_questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Dumped {len(questions)} questions to scripts/raw_ch13_questions.json")
