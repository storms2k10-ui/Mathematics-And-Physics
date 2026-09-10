import re
from raw_ch13_1_100 import RAW_1_100
from raw_ch13_101_200 import RAW_101_200

raw = RAW_1_100 + "\n" + RAW_101_200

# Parse each question
# Pattern matches:
# **<num>. <question>**
# A. <opt_a>
# B. <opt_b>
# C. <opt_c>
# D. <opt_d>
# **Answer: <ans>**
# **Explanation:** <exp>

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
print(f"Total matches found: {len(matches)}")
if len(matches) != 200:
    print("Mismatch in count! Let's check which numbers were parsed:")
    nums = [int(m[0]) for m in matches]
    for i in range(1, 201):
        if i not in nums:
            print(f"Missing question #{i}")

ans_counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
for m in matches:
    ans_counts[m[6]] += 1

print("Answer distribution in provided questions:", ans_counts)

