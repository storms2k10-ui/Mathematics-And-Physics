import re
from scripts.raw_ch12_1_100 import RAW_1_100
from scripts.raw_ch12_101_200 import RAW_101_200

raw_total = RAW_1_100 + '\n\n' + RAW_101_200
pattern = re.compile(
    r'(?ms)^\s*(\d+)\.\s+\*\*(.*?)\*\*\s*\n\s*'
    r'A\.\s+(.*?)\s*\n\s*'
    r'B\.\s+(.*?)\s*\n\s*'
    r'C\.\s+(.*?)\s*\n\s*'
    r'D\.\s+(.*?)\s*\n\s*'
    r'\*\*Answer:\s*([A-D])\.\*\*\s*(.*?)(?=(?:^\s*\d+\.|\Z))'
)
matches = list(pattern.finditer(raw_total))

for m in matches:
    qnum = int(m.group(1))
    qtext = m.group(2).strip()
    options = {
        'A': m.group(3).strip(),
        'B': m.group(4).strip(),
        'C': m.group(5).strip(),
        'D': m.group(6).strip()
    }
    ans = m.group(7).strip()
    exp = m.group(8).strip()
    chosen_opt = options[ans]
    
    # Print out any suspicious calculations or verify numerical questions
    # E.g., check transitions
    print(f"Q{qnum:3d} [{ans}]: {chosen_opt}")
