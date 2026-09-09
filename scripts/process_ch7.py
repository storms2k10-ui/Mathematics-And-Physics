import re
import json
import sys
sys.path.append('scripts')
from raw_ch7_1_100 import RAW_1_100
from raw_ch7_101_200 import RAW_101_200

def parse_raw(text):
    pattern = re.compile(
        r'(\d+)\.\s*(?:\*\*)?(.*?)(?:\*\*)?\s*\n+'
        r'\s*A\.\s*(.*?)\n+'
        r'\s*B\.\s*(.*?)\n+'
        r'\s*C\.\s*(.*?)\n+'
        r'\s*D\.\s*(.*?)\n+'
        r'\s*\*\*Answer:\s*([A-D])\.\*\*\s*(.*?)(?=\n\s*\d+\.|\Z)',
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
        inner = match.group(1).strip()
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
    if has_calc and ('modulus' in q['question'].lower() or 'bragg' in q['question'].lower() or 'energy density' in q['question'].lower() or 'hall' in q['question'].lower() or 'hysteresis' in q['question'].lower()):
        difficulty = 'Hard'
    elif has_calc:
        difficulty = 'Medium'
    else:
        difficulty = 'Easy'
        
    formula = None
    if 'young' in q_text.lower() or 'modulus' in q_text.lower():
        formula = "Y = \\frac{\\sigma}{\\varepsilon} = \\frac{F L}{A \\Delta L}"
    elif 'strain energy' in q_text.lower() or 'energy density' in q_text.lower():
        formula = "u = \\frac{1}{2}\\sigma \\varepsilon = \\frac{\\sigma^2}{2Y}"
    elif 'bulk' in q_text.lower() or 'compressibility' in q_text.lower():
        formula = "K = -\\frac{\\Delta P}{\\Delta V / V}, \\quad \\beta = \\frac{1}{K}"
    elif 'shear' in q_text.lower():
        formula = "G = \\frac{\\tau}{\\gamma} = \\frac{F/A}{x/h}"
    elif 'bragg' in q_text.lower():
        formula = "2d \\sin\\theta = n\\lambda"
    elif 'hall' in q_text.lower():
        formula = "V_H = \\frac{R_H I B}{t}, \\quad R_H = \\frac{1}{n q}"
    elif 'superconduct' in q_text.lower() or 'meissner' in q_text.lower():
        formula = "B_c(T) = B_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right]"
    elif 'curie' in q_text.lower():
        formula = "\\chi = \\frac{C}{T}"
        
    ts_obj = {
        "id": f"el-phy12-ch7-q{num}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch7",
        "chapter": "Chapter 7 — Physics of Solids",
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
        "formula": formula
    }
    ts_questions.append(ts_obj)

header = """import { Question } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 7: PHYSICS OF SOLIDS (200 MCQs)
// Difficulty: Normal
// Conventions: Unless stated otherwise, deformation is small and linearly elastic,
// dimensions are original dimensions, and stress means engineering stress.
// Use Y for Young's modulus, G for shear modulus, and K for bulk modulus.
// For Curie's law, use absolute temperature and assume the material obeys that law.
// ============================================================================

export const EL_PHY12_CH7_QUESTIONS: Question[] = """

with open('src/data/el_phy12_chapter7_data.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(json.dumps(ts_questions, indent=2, ensure_ascii=False))
    f.write(';\n')

print("Successfully wrote src/data/el_phy12_chapter7_data.ts")
