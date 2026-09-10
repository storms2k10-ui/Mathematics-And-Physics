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
    opa = m.group(3).strip()
    opb = m.group(4).strip()
    opc = m.group(5).strip()
    opd = m.group(6).strip()
    ans = m.group(7).strip()
    exp = m.group(8).strip()
    
    # Check for units or math variables not inside \( ... \)
    # e.g., eV, nm, keV, MeV, a_0, R_H, \hbar, K_alpha, etc.
    full = f"Q{qnum}: {qtext} | A: {opa} | B: {opb} | C: {opc} | D: {opd} | Ans: {ans} | Exp: {exp}"
    
    # Find any existing \( ... \)
    in_math = re.findall(r'\\\((.*?)\\\)', full)
    # Remove \( ... \) to check remaining text
    no_math = re.sub(r'\\\((.*?)\\\)', '', full)
    
    # Check if numbers with units like "13.6 eV", "0.85 eV", "656 nm", "10^7", "1.0 mW", "3\hbar" appear outside math
    # or variables like "n = 1", "a_0", "R_H", "K_\alpha", etc.
    leaks = re.findall(r'(\b\d+(?:\.\d+)?\s*(?:eV|keV|MeV|nm|pm|m|s|J|Hz|mW|W|kg·m/s)\b|[nN] = \d+|\b[nN]\b\s*(?:=|increases|varies|levels)|\ba_0\b|\bR_H\b|K_\\alpha|K_\\beta|L_\\alpha)', no_math)
    if leaks:
        print(f"Q{qnum} has unbracketed math/units: {leaks}")
