import re
import json
import sys
sys.path.append('scripts')
from raw_ch8_1_100 import RAW_1_100
from raw_ch8_101_200 import RAW_101_200

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
    
    # Inside $...$ or in specific patterns, enhance fractions
    def enhance_inner(m):
        content = m.group(1)
        
        # Specific transistor current ratios
        content = re.sub(r'I_B/I_C', r'\\frac{I_B}{I_C}', content)
        content = re.sub(r'I_E/I_C', r'\\frac{I_E}{I_C}', content)
        content = re.sub(r'I_C/I_E', r'\\frac{I_C}{I_E}', content)
        content = re.sub(r'I_C/I_B', r'\\frac{I_C}{I_B}', content)
        content = re.sub(r'I_B/I_E', r'\\frac{I_B}{I_E}', content)
        content = re.sub(r'I_E/I_B', r'\\frac{I_E}{I_B}', content)
        content = re.sub(r'I_{C2}/I_{B1}', r'\\frac{I_{C2}}{I_{B1}}', content)
        
        # Op-amp resistor ratios
        content = re.sub(r'R_f/R_{\\text\{in\}}', r'\\frac{R_f}{R_{\\text{in}}}', content)
        content = re.sub(r'R_{\\text\{in\}}/R_f', r'\\frac{R_{\\text{in}}}{R_f}', content)
        content = re.sub(r'R_f/R_g', r'\\frac{R_f}{R_g}', content)
        content = re.sub(r'R_g/R_f', r'\\frac{R_g}{R_f}', content)
        
        # Frequency and simple fractions
        content = re.sub(r'\bf/2\b', r'\\frac{f}{2}', content)
        content = re.sub(r'\b1/2\b', r'\\frac{1}{2}', content)
        content = re.sub(r'99/100', r'\\frac{99}{100}', content)
        content = re.sub(r'100/99', r'\\frac{100}{99}', content)
        content = re.sub(r'1/99', r'\\frac{1}{99}', content)
        content = re.sub(r'99/101', r'\\frac{99}{101}', content)
        content = re.sub(r'26/3', r'\\frac{26}{3}', content)
        content = re.sub(r'5/3', r'\\frac{5}{3}', content)
        content = re.sub(r'1/\(1\+A\)', r'\\frac{1}{1+A}', content)
        
        # Alpha/beta formulas
        content = re.sub(r'\\alpha/\(1-\\alpha\)', r'\\frac{\\alpha}{1-\\alpha}', content)
        content = re.sub(r'\\beta/\(\\beta\+1\)', r'\\frac{\\beta}{\\beta+1}', content)
        content = re.sub(r'I_E/\(\\beta\+1\)', r'\\frac{I_E}{\\beta+1}', content)
        content = re.sub(r'I_C/\\alpha', r'\\frac{I_C}{\\alpha}', content)
        content = re.sub(r'I_C/\\beta_{\\min}', r'\\frac{I_C}{\\beta_{\\min}}', content)
        content = re.sub(r'V_o/A_{\\mathrm\{OL\}}', r'\\frac{V_o}{A_{\\mathrm{OL}}}', content)
        content = re.sub(r'V_p/\\pi', r'\\frac{V_p}{\\pi}', content)
        content = re.sub(r'2V_p/\\pi', r'\\frac{2V_p}{\\pi}', content)
        content = re.sub(r'hc/\\lambda', r'\\frac{hc}{\\lambda}', content)
        content = re.sub(r'hc/E', r'\\frac{hc}{E}', content)
        
        return f"${content}$"
        
    text = re.sub(r'\$(.*?)\$', enhance_inner, text)
    
    # Q81 options cleanup: $3\times10^{15}$ electrons/cm³ -> $3\times 10^{15}\text{ electrons/cm}^3$
    text = re.sub(r'\$3\\times10\^\{15\}\$\s*electrons/cm[³3]', r'$3\\times 10^{15}\\text{ electrons/cm}^3$', text)
    text = re.sub(r'\$7\\times10\^\{15\}\$\s*holes/cm[³3]', r'$7\\times 10^{15}\\text{ holes/cm}^3$', text)
    text = re.sub(r'\$2\\times10\^\{15\}\$\s*electrons/cm[³3]', r'$2\\times 10^{15}\\text{ electrons/cm}^3$', text)
    text = re.sub(r'\$5\\times10\^\{15\}\$\s*holes/cm[³3]', r'$5\\times 10^{15}\\text{ holes/cm}^3$', text)
    text = re.sub(r'3\\times10\^\{15\}\s*\\text\{ cm\}\^\{-3\}', r'3\\times 10^{15}\\text{ cm}^{-3}', text)
    
    return text

q1 = parse_raw(RAW_1_100)
q2 = parse_raw(RAW_101_200)

all_questions = q1 + q2

# Generate ts questions
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
    has_calc = any(char.isdigit() for char in q['question']) or '=' in q['question'] or any(char.isdigit() for char in opt_a)
    if has_calc and ('op-amp' in q['question'].lower() or 'amplifier' in q['question'].lower() or 'inverting' in q['question'].lower() or 'transistor' in q['question'].lower() or '\\beta' in q['question']):
        difficulty = 'Medium'
    elif has_calc:
        difficulty = 'Medium'
    else:
        difficulty = 'Easy'
        
    formula = None
    q_lower = q_text.lower()
    if 'beta' in q_lower or '\\beta' in q_text or 'common-emitter' in q_lower or 'collector current' in q_lower or 'base current' in q_lower:
        formula = "I_E = I_B + I_C, \\quad \\beta = \\frac{I_C}{I_B}, \\quad \\alpha = \\frac{I_C}{I_E}"
    elif 'alpha' in q_lower or '\\alpha' in q_text or 'common-base' in q_lower:
        formula = "\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}"
    elif 'inverting' in q_lower and 'amplifier' in q_lower:
        formula = "A_v = -\\frac{R_f}{R_{\\text{in}}}, \\quad V_o = -\\frac{R_f}{R_{\\text{in}}} V_{\\text{in}}"
    elif 'non-inverting' in q_lower or 'voltage follower' in q_lower:
        formula = "A_v = 1 + \\frac{R_f}{R_g}, \\quad V_o = \\left(1 + \\frac{R_f}{R_g}\\right) V_{\\text{in}}"
    elif 'rectifier' in q_lower or 'rectification' in q_lower:
        formula = "f_{\\text{pulse, full}} = 2f, \\quad V_{\\text{avg, full}} = \\frac{2V_p}{\\pi}, \\quad V_{\\text{avg, half}} = \\frac{V_p}{\\pi}"
    elif 'photodiode' in q_lower or 'photovoltaic' in q_lower or 'led' in q_lower:
        formula = "E_g \\approx \\frac{hc}{\\lambda}, \\quad P_{\\text{out}} = V I, \\quad \\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}}"
    elif 'diode' in q_lower:
        formula = "I = \\frac{V_s - V_D}{R}, \\quad r_d = \\frac{\\Delta V}{\\Delta I}"
    elif 'comparator' in q_lower or 'op-amp' in q_lower:
        formula = "V_o = A_{\\mathrm{OL}}(V_+ - V_-)"
        
    ts_obj = {
        "id": f"el-phy12-ch8-q{num}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch8",
        "chapter": "Chapter 8 — Solid State Electronics",
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
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 8: SOLID STATE ELECTRONICS (200 MCQs)
// Difficulty: Normal
// Conventions: Unless stated otherwise, neglect leakage currents, use transistor
// current magnitudes, and assume ideal op-amps operating within their output limits.
// ============================================================================

export const EL_PHY12_CH8_QUESTIONS: Question[] = """

with open('src/data/el_phy12_chapter8_data.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write(json.dumps(ts_questions, indent=2, ensure_ascii=False))
    f.write(';\n')

print("Successfully wrote src/data/el_phy12_chapter8_data.ts")
