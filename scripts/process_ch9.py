import re
import json
import sys
sys.path.append('scripts')
from raw_ch9_1_100 import RAW_1_100
from raw_ch9_101_200 import RAW_101_200

def parse_raw(text):
    pattern = re.compile(
        r'(\d+)\.\s*(?:\*\*)?(.*?)(?:\*\*)?\s*\n+'
        r'\s*A\.\s*(.*?)\n+'
        r'\s*B\.\s*(.*?)\n+'
        r'\s*C\.\s*(.*?)\n+'
        r'\s*D\.\s*(.*?)\n+'
        r'\s*(?:\*\*)?Answer:\s*([A-D])\.(?:\*\*)?\s*(.*?)(?=\n\s*\d+\.|\Z)',
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

def improve_math(text):
    # Convert \( ... \) to $ ... $
    def repl_delim(match):
        inner = match.group(1).strip()
        return f"${inner}$"
    text = re.sub(re.escape(r'\(') + r'(.*?)' + re.escape(r'\)'), repl_delim, text)
    
    # Inside $...$, improve notation if needed
    def enhance_inner(m):
        content = m.group(1)
        # 1/2 -> \frac{1}{2}
        content = re.sub(r'\b1/2\b', r'\\frac{1}{2}', content)
        return f"${content}$"
        
    text = re.sub(r'\$(.*?)\$', enhance_inner, text)
    
    # Convert standalone fractions like 1/2 outside math if appropriate, or leave as is
    return text

q1 = parse_raw(RAW_1_100)
q2 = parse_raw(RAW_101_200)

print(f"Parsed {len(q1)} questions from part 1")
print(f"Parsed {len(q2)} questions from part 2")

all_questions = q1 + q2
assert len(all_questions) == 200, f"Expected 200 questions, got {len(all_questions)}"

ts_questions = []
for q in all_questions:
    num = q['num']
    q_text = improve_math(q['question'])
    opt_a = improve_math(q['options']['A'])
    opt_b = improve_math(q['options']['B'])
    opt_c = improve_math(q['options']['C'])
    opt_d = improve_math(q['options']['D'])
    ans = q['correct_answer']
    expl = improve_math(q['explanation'])
    
    # Estimate difficulty
    has_math = any(char in q_text for char in ['\\oplus', '\\overline', '$', '+']) or any(char in opt_a for char in ['\\oplus', '\\overline', '$'])
    has_analysis = any(word in q_text.lower() for word in ['simplify', 'evaluate', 'equivalent', 'detect', 'fault', 'truth table', 'how many', 'distinguish'])
    
    if (has_math and has_analysis) or num > 100:
        difficulty = 'Medium' if (num % 4 != 0) else 'Hard'
    else:
        difficulty = 'Easy' if num <= 60 else 'Medium'
        
    formula = None
    q_all = (q_text + " " + expl).lower()
    
    if 'xnor' in q_all or 'equality' in q_all and 'gate' in q_all:
        formula = "Y = \\overline{A \\oplus B} = AB + \\overline{A}\\,\\overline{B}"
    elif 'xor' in q_all or '\\oplus' in q_text or '\\oplus' in expl:
        formula = "Y = A \\oplus B = A\\overline{B} + \\overline{A}B"
    elif 'de morgan' in q_all or ('nand' in q_all and 'nor' in q_all) or '\\overline{ab}' in q_text.lower() or '\\overline{a+b}' in q_text.lower():
        formula = "\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\quad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}"
    elif 'nand' in q_all:
        formula = "Y = \\overline{A \\cdot B} = \\overline{A} + \\overline{B}"
    elif 'nor' in q_all:
        formula = "Y = \\overline{A + B} = \\overline{A} \\cdot \\overline{B}"
    elif 'not' in q_all or 'inverter' in q_all:
        formula = "Y = \\overline{A}"
    elif 'and' in q_all:
        formula = "Y = A \\cdot B"
    elif 'or' in q_all:
        formula = "Y = A + B"
    elif 'truth table' in q_all or 'combination' in q_all:
        formula = "N = 2^n"
    else:
        formula = "Y = f(A, B, C)"
        
    ts_obj = {
        "id": f"el-phy12-ch9-q{num}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch9",
        "chapter": "Chapter 9 — Digital Electronics",
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
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 9: DIGITAL ELECTRONICS (200 MCQs)
// Difficulty: Normal
// Conventions: Notation: (+) means OR, multiplication means AND, \\overline{A} means NOT A,
// and (\\oplus) means XOR. Assume ideal gates and ignore switching delays unless stated
// otherwise. In switch circuits, closed = 1, open = 0, and lamp on = 1.
// ============================================================================

export const EL_PHY12_CH9_QUESTIONS: Question[] = """

with open('src/data/el_phy12_chapter9_data.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(json.dumps(ts_questions, indent=2, ensure_ascii=False))
    f.write(';\n')

print("Successfully wrote src/data/el_phy12_chapter9_data.ts")
