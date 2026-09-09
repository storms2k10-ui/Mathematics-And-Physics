import re
import json
import sys
sys.path.append('scripts')
from raw_ch6_1_100 import RAW_1_100
from raw_ch6_101_200 import RAW_101_200

def parse_raw(text):
    pattern = re.compile(
        r'(\d+)\.\s*\*\*(.*?)\*\*\s*\n+'
        r'\s*A\.\s*(.*?)\n+'
        r'\s*B\.\s*(.*?)\n+'
        r'\s*C\.\s*(.*?)\n+'
        r'\s*D\.\s*(.*?)\n+'
        r'\s*\*\*Answer:\s*([A-D])\.\*\*\s*(.*?)(?=\n\s*\d+\.\s*\*\*|\Z)',
        re.DOTALL
    )
    
    questions = []
    for match in pattern.finditer(text):
        q_num = int(match.group(1))
        q_text = match.group(2).strip()
        opt_a = match.group(3).strip()
        opt_b = match.group(4).strip()
        opt_c = match.group(5).strip()
        opt_d = match.group(6).strip()
        ans = match.group(7).strip()
        expl = match.group(8).strip()
        
        questions.append({
            'num': q_num,
            'question': q_text,
            'options': {'A': opt_a, 'B': opt_b, 'C': opt_c, 'D': opt_d},
            'correct_answer': ans,
            'explanation': expl
        })
    return questions

def convert_latex(text):
    # Convert \( ... \) to $ ... $
    def repl(match):
        inner = match.group(1)
        return f"${inner}$"
    return re.sub(re.escape(r'\(') + r'(.*?)' + re.escape(r'\)'), repl, text)

q1 = parse_raw(RAW_1_100)
q2 = parse_raw(RAW_101_200)

print(f"Parsed Q1-100: {len(q1)}")
print(f"Parsed Q101-200: {len(q2)}")

all_questions = q1 + q2
print(f"Total parsed: {len(all_questions)}")

counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
for q in all_questions:
    counts[q['correct_answer']] += 1

print("Answer counts:", counts)

found_nums = set(q['num'] for q in all_questions)
missing = [i for i in range(1, 201) if i not in found_nums]
if missing:
    print("Missing numbers:", missing)
else:
    print("All numbers 1 to 200 present!")

# Verify backslashes outside math
full_text = RAW_1_100 + RAW_101_200
text_no_math = re.sub(re.escape(r'\(') + r'.*?' + re.escape(r'\)'), '', full_text)
print('Any backslashes outside math:', set(re.findall(r'\\+[a-zA-Z]+', text_no_math)))

# Generate ts questions
ts_questions = []
for q in all_questions:
    num = q['num']
    q_text = convert_latex(q['question'])
    opt_a = convert_latex(q['options']['A'])
    opt_b = convert_latex(q['options']['B'])
    opt_c = convert_latex(q['options']['C'])
    opt_d = convert_latex(q['options']['D'])
    ans = q['correct_answer']
    expl = convert_latex(q['explanation'])
    
    # Estimate difficulty
    has_calc = any(char.isdigit() for char in q['question']) or '=' in q['question'] or any(char.isdigit() for char in opt_a)
    if has_calc and ('resonance' in q['question'].lower() or 'resonant' in q['question'].lower() or 'impedance' in q['question'].lower() or 'power factor' in q['question'].lower() or '\\sqrt' in q['question'] or '^2' in q['question']):
        difficulty = 'Hard'
    elif has_calc:
        difficulty = 'Medium'
    else:
        difficulty = 'Easy'
        
    ts_obj = {
        "id": f"el-phy12-ch6-q{num}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch6",
        "chapter": "Chapter 6 — AC Circuits",
        "question": q_text,
        "options": {
            "A": opt_a,
            "B": opt_b,
            "C": opt_c,
            "D": opt_d
        },
        "option_a": opt_a,
        "option_b": opt_b,
        "option_c": opt_c,
        "option_d": opt_d,
        "correct_answer": ans,
        "correct_option": ans,
        "explanation": expl,
        "difficulty": difficulty,
        "difficulty_tier": "Normal",
        "formula": None
    }
    ts_questions.append(ts_obj)

header = """import { Question } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 6: AC CIRCUITS (200 MCQs)
// Difficulty: Normal
// Answer balance: A = 50, B = 50, C = 50, D = 50
// Conventions: Unless stated otherwise, voltages and currents are RMS values,
// sources are sinusoidal, and inductors and capacitors are ideal.
// Numerical results involving pi are approximate. "Parallel RLC" means separate ideal R, L, and C branches.
// ============================================================================

export const EL_PHY12_CH6_QUESTIONS: Question[] = """

with open('src/data/el_phy12_chapter6_data.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(json.dumps(ts_questions, indent=2, ensure_ascii=False))
    f.write(';\n')

print("Successfully wrote src/data/el_phy12_chapter6_data.ts")
