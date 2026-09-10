import re
import json

from raw_ch11_1_100 import RAW_1_100
from raw_ch11_101_200 import RAW_101_200
from expanded_formatter import format_text

raw_total = RAW_1_100 + "\n\n" + RAW_101_200
pattern = re.compile(
    r'(?ms)^\s*(\d+)\.\s+\*\*(.*?)\*\*\s*\n\s*'
    r'A\.\s+(.*?)\s*\n\s*'
    r'B\.\s+(.*?)\s*\n\s*'
    r'C\.\s+(.*?)\s*\n\s*'
    r'D\.\s+(.*?)\s*\n\s*'
    r'\*\*Answer:\s*([A-D])\.\*\*\s*(.*?)(?=(?:^\s*\d+\.|\Z))'
)

matches = list(pattern.finditer(raw_total))
if len(matches) != 200:
    raise ValueError(f"Expected 200 questions, got {len(matches)}")

def get_formula_for_q(num: int, qtext: str, exp: str) -> str:
    combined = (qtext + " " + exp).lower()
    
    # Check topics by keywords
    if "uncertainty" in combined or "heisenberg" in combined or "\\hbar" in combined or "\\delta x" in combined:
        if "\\Delta p_{\\min}" in exp or "\\Delta v_{\\min}" in exp:
            return "\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}, \\quad \\Delta v_{\\min} = \\frac{\\hbar}{2m\\Delta x}"
        return "\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}, \\quad \\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}"
    elif "compton" in combined or "\\lambda_c" in combined or "recoil electron" in combined:
        return "\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\lambda_C (1 - \\cos\\theta)"
    elif "pair production" in combined or "annihilation" in combined or "positron" in combined:
        return "E_{\\min} = 2m_e c^2 = 1.022\\text{ MeV}, \\quad e^- + e^+ \\to 2\\gamma"
    elif "de broglie" in combined or "davisson" in combined or "electron microscope" in combined or "microscopy" in combined or "wavelength of a" in combined or "matter wave" in combined:
        if "1.227" in exp or "accelerat" in combined or "volt" in combined or "potential" in combined:
            return "\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m_e e V}} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}"
        return "\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}"
    elif "photoelectric" in combined or "work function" in combined or "threshold frequency" in combined or "stopping potential" in combined or "photocell" in combined or "photocurrent" in combined or "saturation current" in combined or "einstein" in combined:
        if "v_s" in combined or "stopping" in combined:
            return "K_{\\max} = hf - \\Phi_0 = e V_s, \\quad V_s = \\left(\\frac{h}{e}\\right)f - \\frac{\\Phi_0}{e}"
        elif "threshold" in combined:
            return "K_{\\max} = hf - \\Phi_0, \\quad f_0 = \\frac{\\Phi_0}{h}, \\quad \\lambda_0 = \\frac{hc}{\\Phi_0}"
        return "K_{\\max} = hf - \\Phi_0 = e V_s = \\frac{1}{2}m_e v_{\\max}^2"
    elif "blackbody" in combined or "stefan" in combined or "wien" in combined or "cavity" in combined or "catastrophe" in combined:
        if "wien" in combined or "\\lambda_{\\max}" in combined:
            return "\\lambda_{\\max} T = b \\approx 2.90 \\times 10^{-3}\\text{ m}\\cdot\\text{K}"
        elif "stefan" in combined or "power" in combined or "t^4" in combined or "sigma" in combined:
            return "\\frac{P}{A} = \\sigma T^4, \\quad \\sigma \\approx 5.67 \\times 10^{-8}\\text{ W/(m}^2\\cdot\\text{K}^4)"
        return "\\lambda_{\\max} T = b, \\quad \\frac{P}{A} = \\sigma T^4"
    elif "solar cell" in combined or "photodiode" in combined or "quantum efficiency" in combined:
        return "P_{\\text{out}} = \\eta P_{\\text{in}}, \\quad I = \\eta e \\left(\\frac{P}{hf}\\right)"
    elif "photon" in combined or "planck" in combined or "quanta" in combined:
        return "E = hf = \\frac{hc}{\\lambda}, \\quad p = \\frac{E}{c} = \\frac{h}{\\lambda}"
    else:
        return "E = hf = \\frac{hc}{\\lambda}, \\quad \\lambda = \\frac{h}{p}"

def get_difficulty(num: int, qtext: str, exp: str) -> str:
    combined = (qtext + " " + exp).lower()
    
    # Hard questions: multi-step calculations, system of equations, ratio combinations, uncertainty kinetic energy
    hard_nums = {
        84, 91, 93, 95, 96, 97, 99, 100, 105, 106, 110, 112, 113, 114, 119,
        141, 157, 158, 179, 180, 194, 198, 200
    }
    if num in hard_nums:
        return "Hard"
    
    # Medium questions: standard numericals, calculations, two-variable ratios
    has_math_calc = any(k in exp for k in ["=", "\\times", "\\approx", "/", "gives", "yields", "calculate"])
    if has_math_calc and num not in {1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 121, 122, 124, 125, 126, 142, 143, 144, 146, 147, 148, 149, 161, 162, 163, 164, 165, 167, 169, 170, 171, 172, 173, 174, 175, 176, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 195, 196, 197}:
        return "Medium"
    
    return "Easy"

questions = []
for m in matches:
    qnum = int(m.group(1))
    qtext = format_text(m.group(2).strip())
    op_a = format_text(m.group(3).strip())
    op_b = format_text(m.group(4).strip())
    op_c = format_text(m.group(5).strip())
    op_d = format_text(m.group(6).strip())
    ans = m.group(7).strip()
    exp = format_text(m.group(8).strip())
    
    formula = get_formula_for_q(qnum, qtext, exp)
    difficulty = get_difficulty(qnum, qtext, exp)
    
    questions.append({
        "id": f"el-phy12-ch11-q{qnum}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch11",
        "chapter": "Chapter 11 — Quantum Physics",
        "question": qtext,
        "options": {
            "A": op_a,
            "B": op_b,
            "C": op_c,
            "D": op_d
        },
        "option_a": op_a,
        "option_b": op_b,
        "option_c": op_c,
        "option_d": op_d,
        "correct_answer": ans,
        "correct_option": ans,
        "explanation": exp,
        "difficulty": difficulty,
        "difficulty_tier": "Normal",
        "formula": formula
    })

print(f"Prepared {len(questions)} questions.")

# Generate TypeScript code
ts_header = """import { Question } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 11: QUANTUM PHYSICS (200 MCQs)
// Difficulty: Normal
// Physical Constants & Conventions:
// h = 6.63 × 10^-34 J·s, c = 3.0 × 10^8 m/s, e = 1.60 × 10^-19 C,
// hc ≈ 1240 eV·nm, m_e c^2 = 0.511 MeV, lambda_C ≈ 2.43 pm.
// Assumptions: Single-photon photoelectric emission, stationary free electrons
// in Compton scattering, positive magnitude stopping potentials,
// standard-deviation uncertainty: Delta x * Delta p_x >= hbar / 2.
// ============================================================================

export const EL_PHY12_CH11_QUESTIONS: Question[] = """

ts_content = ts_header + json.dumps(questions, indent=2) + ";\n"

with open("src/data/el_phy12_chapter11_data.ts", "w") as f:
    f.write(ts_content)

print("Wrote src/data/el_phy12_chapter11_data.ts successfully!")
