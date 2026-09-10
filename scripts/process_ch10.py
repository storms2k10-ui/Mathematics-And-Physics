import re
import json
import sys
sys.path.append('scripts')
from raw_ch10_1_100 import RAW_1_100
from raw_ch10_101_200 import RAW_101_200

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
        # 3/4 -> \frac{3}{4}
        content = re.sub(r'\b3/4\b', r'\\frac{3}{4}', content)
        # 5/3 -> \frac{5}{3}
        content = re.sub(r'\b5/3\b', r'\\frac{5}{3}', content)
        # 4/3 -> \frac{4}{3}
        content = re.sub(r'\b4/3\b', r'\\frac{4}{3}', content)
        # 5/4 -> \frac{5}{4}
        content = re.sub(r'\b5/4\b', r'\\frac{5}{4}', content)
        # 2/3 -> \frac{2}{3}
        content = re.sub(r'\b2/3\b', r'\\frac{2}{3}', content)
        # 1/4 -> \frac{1}{4}
        content = re.sub(r'\b1/4\b', r'\\frac{1}{4}', content)
        # 1/5 -> \frac{1}{5}
        content = re.sub(r'\b1/5\b', r'\\frac{1}{5}', content)
        # 4/5 -> \frac{4}{5}
        content = re.sub(r'\b4/5\b', r'\\frac{4}{5}', content)
        # 3/5 -> \frac{3}{5}
        content = re.sub(r'\b3/5\b', r'\\frac{3}{5}', content)
        # 16/9 -> \frac{16}{9}
        content = re.sub(r'\b16/9\b', r'\\frac{16}{9}', content)
        # 9/16 -> \frac{9}{16}
        content = re.sub(r'\b9/16\b', r'\\frac{9}{16}', content)
        # 25/12 -> \frac{25}{12}
        content = re.sub(r'\b25/12\b', r'\\frac{25}{12}', content)
        # 12/25 -> \frac{12}{25}
        content = re.sub(r'\b12/25\b', r'\\frac{12}{25}', content)
        # \sqrt3\,c/2 -> \frac{\sqrt{3}c}{2} or keep as standard
        content = re.sub(r'\\sqrt3\\,c/2', r'\\frac{\\sqrt{3}c}{2}', content)
        content = re.sub(r'\\sqrt3/2', r'\\frac{\\sqrt{3}}{2}', content)
        content = re.sub(r'c/\\sqrt2', r'\\frac{c}{\\sqrt{2}}', content)
        content = re.sub(r'c/\\sqrt3', r'\\frac{c}{\\sqrt{3}}', content)
        content = re.sub(r'c/2', r'\\frac{c}{2}', content)
        content = re.sub(r'c/3', r'\\frac{c}{3}', content)
        content = re.sub(r'c/4', r'\\frac{c}{4}', content)
        content = re.sub(r'2c/3', r'\\frac{2c}{3}', content)
        content = re.sub(r'3c/4', r'\\frac{3c}{4}', content)
        content = re.sub(r'\\sqrt8\\,c/3', r'\\frac{\\sqrt{8}c}{3}', content)
        content = re.sub(r'\\sqrt5\\,c/3', r'\\frac{\\sqrt{5}c}{3}', content)
        content = re.sub(r'\\sqrt\{15\}\\,c/4', r'\\frac{\\sqrt{15}c}{4}', content)
        return f"${content}$"
        
    text = re.sub(r'\$(.*?)\$', enhance_inner, text)
    return text

q1 = parse_raw(RAW_1_100)
q2 = parse_raw(RAW_101_200)

print(f"Parsed {len(q1)} questions from part 1")
print(f"Parsed {len(q2)} questions from part 2")

all_questions = q1 + q2
assert len(all_questions) == 200, f"Expected 200 questions, got {len(all_questions)}"

# Verify all question numbers from 1 to 200 exist
for idx, q in enumerate(all_questions, 1):
    assert q['num'] == idx, f"Question number mismatch: expected {idx}, got {q['num']}"

def assign_formula(q_text, expl):
    q_all = (q_text + " " + expl).lower()
    if 'doppler' in q_all or 'blue shift' in q_all or 'red shift' in q_all or 'receding' in q_all and 'frequency' in q_all:
        return "f = f_0 \\sqrt{\\frac{1 \\pm v/c}{1 \\mp v/c}}"
    elif 'radiation pressure' in q_all or 'pressure on a' in q_all:
        return "P = \\frac{I}{c} \\quad (\\text{absorb}), \\quad P = \\frac{2I}{c} \\quad (\\text{reflect})"
    elif 'spacetime interval' in q_all or 'timelike' in q_all or 'spacelike' in q_all or 'lightlike' in q_all:
        return "(\\Delta s)^2 = c^2(\\Delta t)^2 - (\\Delta x)^2"
    elif 'lorentz transformation' in q_all or "x'=\\gamma" in q_all or "x'" in q_all and "t'" in q_all or 'simultaneity' in q_all:
        return "x' = \\gamma(x - vt), \\quad t' = \\gamma\\left(t - \\frac{vx}{c^2}\\right)"
    elif 'addition' in q_all or 'velocity' in q_all and ('opposite directions' in q_all or "v_x'" in q_all or 'relative' in q_all and 'c' in q_all and 'station' in q_all):
        return "v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}"
    elif 'momentum' in q_all and ('energy' in q_all or 'gev' in q_all or 'mev' in q_all or 'p^2c^2' in q_all or 'photon' in q_all):
        return "E^2 = p^2 c^2 + m_0^2 c^4, \\quad p = \\frac{E}{c} \\; (m_0 = 0)"
    elif 'kinetic energy' in q_all or 'work' in q_all and ('energy' in q_all or 'accelerat' in q_all):
        return "K = (\\gamma - 1)m_0 c^2 = E - E_0"
    elif 'rest energy' in q_all or 'rest mass' in q_all or 'sun' in q_all or 'nuclear' in q_all or 'e=mc' in q_all:
        return "E_0 = m_0 c^2, \\quad E = m_{\\mathrm{rel}} c^2 = \\gamma m_0 c^2"
    elif 'momentum' in q_all or 'p=\\gamma' in q_all:
        return "p = \\gamma m_0 v = m_{\\mathrm{rel}} v"
    elif 'length' in q_all or 'contraction' in q_all or 'rod' in q_all or 'volume' in q_all:
        return "L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}"
    elif 'time' in q_all or 'clock' in q_all or 'tick' in q_all or 'muon' in q_all or 'twin' in q_all or 'lifetime' in q_all:
        return "\\Delta t = \\gamma \\Delta t_0 = \\frac{\\Delta t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}"
    elif 'galilean' in q_all or 'newton' in q_all or 'inertial' in q_all:
        return "x' = x - ut, \\quad t' = t, \\quad v' = v - u"
    elif 'lorentz factor' in q_all or '\\gamma' in q_all:
        return "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}"
    else:
        return "E = \\gamma m_0 c^2, \\quad \\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}"

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
    # Normal practice difficulty overall; within Normal: Easy (conceptual fundamentals), Medium (standard calculations), Hard (multi-step relativistic physics)
    is_calc = any(char in q_text for char in ['\\times', '\\sqrt', 'Calculate', 'find', 'Using', 'At what speed', 'ratio', 'fraction']) or \
              any(re.search(r'\d+\.?\d*\s*(?:c|m/s|GeV|MeV|kg|J|s|\\mu\s*s)', opt) for opt in [opt_a, opt_b, opt_c, opt_d])
    
    if num <= 40 and not is_calc:
        difficulty = 'Easy'
    elif num <= 100:
        difficulty = 'Medium' if is_calc else ('Easy' if num % 3 != 0 else 'Medium')
    elif num <= 160:
        difficulty = 'Hard' if (is_calc and num % 3 == 0) else 'Medium'
    else:
        difficulty = 'Hard' if is_calc else 'Medium'
        
    formula = assign_formula(q_text, expl)
        
    ts_obj = {
        "id": f"el-phy12-ch10-q{num}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch10",
        "chapter": "Chapter 10 — Relativity",
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
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 10: RELATIVITY (200 MCQs)
// Difficulty: Normal
// Conventions: c = 3.0 × 10^8 m/s, m_0 = rest mass, E_0 = m_0 c^2,
// gamma = 1/sqrt(1 - v^2/c^2), m_rel = gamma * m_0.
// ============================================================================

export const EL_PHY12_CH10_QUESTIONS: Question[] = """

with open('src/data/el_phy12_chapter10_data.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(json.dumps(ts_questions, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"Successfully wrote 200 questions to src/data/el_phy12_chapter10_data.ts")
