# -*- coding: utf-8 -*-
import re
from raw_p1 import RAW_QUESTIONS_P1
from raw_p2 import RAW_QUESTIONS_P2
from raw_p3 import RAW_QUESTIONS_P3
from raw_p4 import RAW_QUESTIONS_P4

all_raw = [RAW_QUESTIONS_P1, RAW_QUESTIONS_P2, RAW_QUESTIONS_P3, RAW_QUESTIONS_P4]
full_text = "\n\n".join(all_raw)

# Split by **number.
# Match pattern like: **(\d+)\.\s*(.*?)(?=\n\*\*\d+\.|\Z)
blocks = re.findall(r'\*\*(\d+)\.\s*(.*?)(?=\n\*\*\d+\.|\Z)', full_text, re.DOTALL)
print(f"Total blocks found: {len(blocks)}")
for num_str, block in blocks:
    num = int(num_str)
    # Check if number matches
    # print first and last few
    if num in [1, 50, 51, 100, 101, 150, 151, 200]:
        print(f"Q{num}: {block[:60].strip()}...")
