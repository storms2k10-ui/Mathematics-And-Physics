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

for m in matches:
    qnum, qtext, a, b, c, d, ans, exp = m[0], m[1].strip(), m[2].strip(), m[3].strip(), m[4].strip(), m[5].strip(), m[6].strip(), m[7].strip()
    opts = [a, b, c, d]
    if len(set(opts)) < 4:
        print(f"Question {qnum} has duplicate options: A='{a}', B='{b}', C='{c}', D='{d}' | Answer={ans}")
