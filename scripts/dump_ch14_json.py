import json
import re
from raw_ch14_1_100 import RAW_1_100
from raw_ch14_101_200 import RAW_101_200

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
print(f"Total matched questions: {len(matches)}")

questions = []
counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
duplicates = []

for m in matches:
    qnum = int(m[0])
    qtext = m[1].strip()
    opt_a = m[2].strip()
    opt_b = m[3].strip()
    opt_c = m[4].strip()
    opt_d = m[5].strip()
    ans = m[6].strip()
    exp = m[7].strip()

    counts[ans] += 1

    opts = [opt_a, opt_b, opt_c, opt_d]
    if len(set(opts)) < 4:
        duplicates.append((qnum, opts, ans))

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

print("Answer counts:", counts)
if duplicates:
    print(f"Duplicate options found in {len(duplicates)} questions:")
    for d in duplicates:
        print(f"  Q{d[0]}: opts={d[1]}, ans={d[2]}")
else:
    print("No duplicate options found in any question!")

with open("scripts/raw_ch14_questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Dumped {len(questions)} questions to scripts/raw_ch14_questions.json")
