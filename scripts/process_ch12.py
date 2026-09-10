import re
import json

from scripts.raw_ch12_1_100 import RAW_1_100
from scripts.raw_ch12_101_200 import RAW_101_200

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

def format_text(text: str) -> str:
    # First replace \( and \) with $
    s = text.replace(r'\(', '$').replace(r'\)', '$')
    
    # Specific mathematical fraction and expression replacements
    math_replacements = [
        (r'L=h/n', r'L = \frac{h}{n}'),
        (r'L=nh', r'L = nh'),
        (r'L=n^2h', r'L = n^2 h'),
        (r'L=n\hbar', r'L = n\hbar'),
        (r'\hbar=h/(2\pi)', r'\hbar = \frac{h}{2\pi}'),
        (r'r_n=a_0n^2', r'r_n = a_0 n^2'),
        (r'E_n=-13.6/n^2\text{ eV}', r'E_n = -\frac{13.6}{n^2}\text{ eV}'),
        (r'1/n^2', r'\frac{1}{n^2}'),
        (r'1/n^3', r'\frac{1}{n^3}'),
        (r'1/n^4', r'\frac{1}{n^4}'),
        (r'1/n', r'\frac{1}{n}'),
        (r'\Delta E=h/f', r'\Delta E = \frac{h}{f}'),
        (r'\Delta E=hc\lambda', r'\Delta E = hc\lambda'),
        (r'\Delta E=hf', r'\Delta E = hf'),
        (r'\Delta E=f/h', r'\Delta E = \frac{f}{h}'),
        (r'4^2/1^2=16', r'\frac{4^2}{1^2} = 16'),
        (r'3^2/2^2=9/4', r'\frac{3^2}{2^2} = \frac{9}{4}'),
        (r'K=-E', r'K = -E'),
        (r'K=E/2', r'K = \frac{E}{2}'),
        (r'K=2E', r'K = 2E'),
        (r'K=E', r'K = E'),
        (r'U=-2K', r'U = -2K'),
        (r'U=-K', r'U = -K'),
        (r'U=2K', r'U = 2K'),
        (r'U=K', r'U = K'),
        (r'U=-2E', r'U = -2E'),
        (r'U=2E', r'U = 2E'),
        (r'U=E/2', r'U = \frac{E}{2}'),
        (r'U=-E', r'U = -E'),
        (r'E_2=-13.6/4=-3.4\text{ eV}', r'E_2 = -\frac{13.6}{4} = -3.4\text{ eV}'),
        (r'E_4=-13.6/16=-0.85\text{ eV}', r'E_4 = -\frac{13.6}{16} = -0.85\text{ eV}'),
        (r'r_2=4a_0=0.2116\text{ nm}', r'r_2 = 4a_0 = 0.2116\text{ nm}'),
        (r'n^2=9', r'n^2 = 9'),
        (r'n=3', r'n = 3'),
        (r'n^2=13.6/0.544=25', r'n^2 = \frac{13.6}{0.544} = 25'),
        (r'E_3=-13.6/9\text{ eV}', r'E_3 = -\frac{13.6}{9}\text{ eV}'),
        (r'\Delta E=-3.4-(-13.6)=10.2\text{ eV}', r'\Delta E = -3.4 - (-13.6) = 10.2\text{ eV}'),
        (r'\Delta E=-0.85-(-3.4)=2.55\text{ eV}', r'\Delta E = -0.85 - (-3.4) = 2.55\text{ eV}'),
        (r'E_\gamma=13.6(1/4-1/9)\approx1.89\text{ eV}', r'E_\gamma = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) \approx 1.89\text{ eV}'),
        (r'\lambda=1240/2.55\approx486\text{ nm}', r'\lambda = \frac{1240}{2.55} \approx 486\text{ nm}'),
        (r'\lambda=1240/10.2\approx121.6\text{ nm}', r'\lambda = \frac{1240}{10.2} \approx 121.6\text{ nm}'),
        (r'\lambda=1240/13.6', r'\lambda = \frac{1240}{13.6}'),
        (r'13.6/2^2=3.4\text{ eV}', r'\frac{13.6}{2^2} = 3.4\text{ eV}'),
        (r'f=E/h=(2.55\times1.60\times10^{-19})/(6.63\times10^{-34})', r'f = \frac{E}{h} = \frac{2.55 \times 1.60 \times 10^{-19}}{6.63 \times 10^{-34}}'),
        (r'p=h/\lambda=6.63\times10^{-34}/5.00\times10^{-7}', r'p = \frac{h}{\lambda} = \frac{6.63 \times 10^{-34}}{5.00 \times 10^{-7}}'),
        (r'1/\lambda=R_H(1/2^2-1/3^2)=5R_H/36', r'\frac{1}{\lambda} = R_H\left(\frac{1}{2^2} - \frac{1}{3^2}\right) = \frac{5R_H}{36}'),
        (r'3R_H/4', r'\frac{3R_H}{4}'),
        (r'R_H/4', r'\frac{R_H}{4}'),
        (r'5R_H/36', r'\frac{5R_H}{36}'),
        (r'8R_H/9', r'\frac{8R_H}{9}'),
        (r'R_Hp^2', r'R_H p^2'),
        (r'R_H/p^2', r'\frac{R_H}{p^2}'),
        (r'R_H/p', r'\frac{R_H}{p}'),
        (r'p/R_H', r'\frac{p}{R_H}'),
        (r'4(4-1)/2=6', r'\frac{4(4-1)}{2} = 6'),
        (r'2,\ 4,\ 1/4', r'2, \ 4, \ \frac{1}{4}'),
        (r'4,\ 2,\ 1/2', r'4, \ 2, \ \frac{1}{2}'),
        (r'2,\ 2,\ 1/4', r'2, \ 2, \ \frac{1}{4}'),
        (r'1/2,\ 1/4,\ 4', r'\frac{1}{2}, \ \frac{1}{4}, \ 4'),
        (r'T=2\pi r/v', r'T = \frac{2\pi r}{v}'),
        (r'a=v^2/r\propto n^{-2}/n^2=n^{-4}', r'a = \frac{v^2}{r} \propto \frac{n^{-2}}{n^2} = n^{-4}'),
        (r'13.6/9\text{ eV}', r'\frac{13.6}{9}\text{ eV}'),
        (r'E=U/2=-3.4\text{ eV}', r'E = \frac{U}{2} = -3.4\text{ eV}'),
        (r'v_n=v_1/n', r'v_n = \frac{v_1}{n}'),
        (r'E=-13.6/16\text{ eV}', r'E = -\frac{13.6}{16}\text{ eV}'),
        (r'\lambda\approx1240/0.661', r'\lambda \approx \frac{1240}{0.661}'),
        (r'13.6(1/9-1/36)=1.13\text{ eV}', r'13.6\left(\frac{1}{9} - \frac{1}{36}\right) = 1.13\text{ eV}'),
        (r'(13.6/4)/(13.6/16)=4', r'\frac{13.6/4}{13.6/16} = 4'),
        (r'-0.544-(-0.850)=0.306\text{ eV}', r'-0.544 - (-0.850) = 0.306\text{ eV}'),
        (r'f_{31}=f_{32}-f_{21}', r'f_{31} = f_{32} - f_{21}'),
        (r'f_{31}=f_{32}+f_{21}', r'f_{31} = f_{32} + f_{21}'),
        (r'f_{31}=f_{32}f_{21}', r'f_{31} = f_{32} f_{21}'),
        (r'f_{31}=f_{21}/f_{32}', r'f_{31} = \frac{f_{21}}{f_{32}}'),
        (r'E_3-E_1=(E_3-E_2)+(E_2-E_1)', r'E_3 - E_1 = (E_3 - E_2) + (E_2 - E_1)'),
        (r'\lambda_{31}=\lambda_{32}+\lambda_{21}', r'\lambda_{31} = \lambda_{32} + \lambda_{21}'),
        (r'\lambda_{31}=\lambda_{32}-\lambda_{21}', r'\lambda_{31} = \lambda_{32} - \lambda_{21}'),
        (r'\lambda_{31}\lambda_{32}=\lambda_{21}', r'\lambda_{31} \lambda_{32} = \lambda_{21}'),
        (r'\dfrac1{\lambda_{31}}=\dfrac1{\lambda_{32}}+\dfrac1{\lambda_{21}}', r'\frac{1}{\lambda_{31}} = \frac{1}{\lambda_{32}} + \frac{1}{\lambda_{21}}'),
        (r'p^2/R_H', r'\frac{p^2}{R_H}'),
        (r'3^2/2^2=9/4', r'\frac{3^2}{2^2} = \frac{9}{4}'),
        (r'4/9', r'\frac{4}{9}'),
        (r'3/2', r'\frac{3}{2}'),
        (r'9/4', r'\frac{9}{4}'),
        (r'5/4', r'\frac{5}{4}'),
        (r'7/108', r'\frac{7}{108}'),
        (r'16/9', r'\frac{16}{9}'),
        (r'108/7', r'\frac{108}{7}'),
        (r'R_H=1.097\times10^7\text{ m}^{-1}', r'R_H = 1.097 \times 10^7\text{ m}^{-1}'),
        (r'f=cR_H', r'f = c R_H'),
        (r'R_H/[p(p+1)]', r'\frac{R_H}{p(p+1)}'),
        (r'(2p+1)/[R_Hp^2(p+1)^2]', r'\frac{2p+1}{R_H p^2 (p+1)^2}'),
        (r'p^2(p+1)^2/[R_H(2p+1)]', r'\frac{p^2 (p+1)^2}{R_H (2p+1)}'),
        (r'7/16', r'\frac{7}{16}'),
        (r'4/3', r'\frac{4}{3}'),
        (r'16/7', r'\frac{16}{7}'),
        (r'(p+1)^2/(2p+1)', r'\frac{(p+1)^2}{2p+1}'),
        (r'5(4)/2=10', r'\frac{5 \times 4}{2} = 10'),
        (r'N(N-1)/2=15', r'\frac{N(N-1)}{2} = 15'),
        (r'N=6', r'N = 6'),
        (r'14.0-13.6=0.4\text{ eV}', r'14.0 - 13.6 = 0.4\text{ eV}'),
        (r'-13.6/0.544=25', r'\frac{13.6}{0.544} = 25'),
        (r'\lambda=1.240/9\text{ nm}', r'\lambda = \frac{1.240}{9}\text{ nm}'),
        (r'K_\alpha=15-3=12\text{ keV}', r'K_\alpha = 15 - 3 = 12\text{ keV}'),
        (r'K_\beta=15-1=14\text{ keV}', r'K_\beta = 15 - 1 = 14\text{ keV}'),
        (r'E_{\max}=1.240/0.062=20\text{ keV}', r'E_{\max} = \frac{1.240}{0.062} = 20\text{ keV}'),
        (r'\lambda=1240/2=620\text{ nm}', r'\lambda = \frac{1240}{2} = 620\text{ nm}'),
        (r'10^{-3}/10^{-8}=10^5', r'\frac{10^{-3}}{10^{-8}} = 10^5'),
        (r'(N_u-N_l)/(N_u+N_l)', r'\frac{N_u - N_l}{N_u + N_l}'),
        (r'N_u=600', r'N_u = 600'),
        (r'N_l=400', r'N_l = 400'),
        (r'\Delta E=1240/620=2.0\text{ eV}', r'\Delta E = \frac{1240}{620} = 2.0\text{ eV}'),
        (r'hf=1.989\times10^{-19}\text{ J}\approx1.24\text{ eV}', r'hf = 1.989 \times 10^{-19}\text{ J} \approx 1.24\text{ eV}'),
        (r'\lambda=hc/\Delta E\approx6.22\times10^{-7}\text{ m}', r'\lambda = \frac{hc}{\Delta E} \approx 6.22 \times 10^{-7}\text{ m}'),
        (r'11.0-10.2=0.8\text{ eV}', r'11.0 - 10.2 = 0.8\text{ eV}'),
        (r'-13.6+12.75=-0.85\text{ eV}', r'-13.6 + 12.75 = -0.85\text{ eV}'),
        (r'F/4', r'\frac{F}{4}'),
        (r'F/16', r'\frac{F}{16}'),
        (r'\lambda=1.240/8.0=0.155\text{ nm}', r'\lambda = \frac{1.240}{8.0} = 0.155\text{ nm}'),
        (r'E=1240/632.8\approx1.96\text{ eV}', r'E = \frac{1240}{632.8} \approx 1.96\text{ eV}'),
        (r'f=c/\lambda=3.00\times10^8/(632.8\times10^{-9})', r'f = \frac{c}{\lambda} = \frac{3.00 \times 10^8}{632.8 \times 10^{-9}}'),
        (r'N=10^{-6}/(2\times1.60\times10^{-19})', r'N = \frac{10^{-6}}{2 \times 1.60 \times 10^{-19}}'),
        (r'P=Nhf', r'P = N hf'),
        (r'hf=E_i-E_f', r'hf = E_i - E_f'),
        (r'E=K+U', r'E = K + U'),
        (r'E_n=-13.6/n^2\text{ eV}', r'E_n = -\frac{13.6}{n^2}\text{ eV}'),
        (r'15.0-13.6=1.4\text{ eV}', r'15.0 - 13.6 = 1.4\text{ eV}'),
        (r'n\rightarrow\infty', r'n \to \infty'),
        (r'1/\lambda=1/400+1/600', r'\frac{1}{\lambda} = \frac{1}{400} + \frac{1}{600}'),
        (r'E=1240/80=15.5\text{ eV}', r'E = \frac{1240}{80} = 15.5\text{ eV}'),
        (r'qE', r'qE'),
        (r'1/4', r'\frac{1}{4}'),
        (r'1/2', r'\frac{1}{2}'),
        (r'1/3', r'\frac{1}{3}'),
        (r'2/3', r'\frac{2}{3}'),
        (r'3/4', r'\frac{3}{4}'),
        (r'2/5=40\%', r'\frac{2}{5} = 40\%'),
        (r'2/5', r'\frac{2}{5}'),
        (r'1240/2=620\text{ nm}', r'\frac{1240}{2} = 620\text{ nm}'),
        (r'1240/2.55', r'\frac{1240}{2.55}'),
        (r'1240/10.2', r'\frac{1240}{10.2}'),
        (r'1240/13.6', r'\frac{1240}{13.6}'),
        (r'1240/3', r'\frac{1240}{3}'),
        (r'1240/7', r'\frac{1240}{7}'),
        (r'1240/80', r'\frac{1240}{80}'),
        (r'1240/632.8', r'\frac{1240}{632.8}'),
        (r'1.240/9\text{ nm}', r'\frac{1.240}{9}\text{ nm}'),
        (r'1.240/8.0', r'\frac{1.240}{8.0}'),
        (r'1.240/0.062', r'\frac{1.240}{0.062}'),
        (r'N(N-1)/2', r'\frac{N(N-1)}{2}'),
    ]
    
    for old, new in math_replacements:
        s = s.replace(old, new)
        
    return s

def format_all_fields(qnum: int, qtext: str, opa: str, opb: str, opc: str, opd: str, ans: str, exp: str):
    qtext_f = format_text(qtext)
    opa_f = format_text(opa)
    opb_f = format_text(opb)
    opc_f = format_text(opc)
    opd_f = format_text(opd)
    exp_f = format_text(exp)
    
    # Specific fixups for options with plain units/numbers
    # Q49 options: 0.0529 nm, 0.1058 nm, 0.4761 nm, 0.2116 nm
    if qnum == 49:
        opa_f = "$0.0529\\text{ nm}$"
        opb_f = "$0.1058\\text{ nm}$"
        opc_f = "$0.4761\\text{ nm}$"
        opd_f = "$0.2116\\text{ nm}$"
    elif qnum == 52:
        opa_f = "$13.6\\text{ eV}$"
        opb_f = "$12.09\\text{ eV}$"
        opc_f = "$3.4\\text{ eV}$"
        opd_f = "$1.51\\text{ eV}$"
    elif qnum == 53:
        opa_f = "$3.4\\text{ eV}$"
        opb_f = "$13.6\\text{ eV}$"
        opc_f = "$10.2\\text{ eV}$"
        opd_f = "$17.0\\text{ eV}$"
    elif qnum == 54:
        opa_f = "$4.25\\text{ eV}$"
        opb_f = "$0.85\\text{ eV}$"
        opc_f = "$2.55\\text{ eV}$"
        opd_f = "$3.40\\text{ eV}$"
    elif qnum == 55:
        opa_f = "$10.2\\text{ eV}$"
        opb_f = "$12.09\\text{ eV}$"
        opc_f = "$0.66\\text{ eV}$"
        opd_f = "$1.89\\text{ eV}$"
    elif qnum == 56:
        opa_f = "$121.6\\text{ nm}$"
        opb_f = "$486\\text{ nm}$"
        opc_f = "$656\\text{ nm}$"
        opd_f = "$1876\\text{ nm}$"
    elif qnum == 57:
        opa_f = "$656\\text{ nm}$"
        opb_f = "$365\\text{ nm}$"
        opc_f = "$121.6\\text{ nm}$"
        opd_f = "$91.2\\text{ nm}$"
    elif qnum == 59:
        opa_f = "$121.6\\text{ nm}$"
        opb_f = "$91.2\\text{ nm}$"
        opc_f = "$364.7\\text{ nm}$"
        opd_f = "$656\\text{ nm}$"
    elif qnum == 60:
        opa_f = "$364.7\\text{ nm}$"
        opb_f = "$91.2\\text{ nm}$"
        opc_f = "$121.6\\text{ nm}$"
        opd_f = "$820\\text{ nm}$"
    elif qnum == 62:
        qtext_f = qtext_f.replace("2.55 eV", "$2.55\\text{ eV}$")
    elif qnum == 63:
        qtext_f = qtext_f.replace("500 nm", "$500\\text{ nm}$")
    elif qnum == 85:
        opa_f = "$4.53\\text{ eV}$"
        opb_f = "$1.51\\text{ eV}$"
        opc_f = "$3.40\\text{ eV}$"
        opd_f = "$12.09\\text{ eV}$"
    elif qnum == 88:
        opa_f = "$486\\text{ nm}$"
        opb_f = "$656\\text{ nm}$"
        opc_f = "$121.6\\text{ nm}$"
        opd_f = "$1876\\text{ nm}$"
    elif qnum == 89:
        opa_f = "Emits $1.13\\text{ eV}$"
        opb_f = "Absorbs $1.13\\text{ eV}$"
        opc_f = "Absorbs $3.40\\text{ eV}$"
        opd_f = "Emits $0.38\\text{ eV}$"
    elif qnum == 91:
        qtext_f = qtext_f.replace("0.85 eV", "$0.85\\text{ eV}$")
        opa_f = "$0.306\\text{ eV}$"
        opb_f = "$0.544\\text{ eV}$"
        opc_f = "$0.850\\text{ eV}$"
        opd_f = "$1.394\\text{ eV}$"
    elif qnum == 92:
        exp_f = exp_f.replace("2.55 eV and 10.2 eV", "$2.55\\text{ eV}$ and $10.2\\text{ eV}$")
    elif qnum == 103:
        qtext_f = qtext_f.replace("12.0 eV", "$12.0\\text{ eV}$")
        exp_f = exp_f.replace("12.09 eV", "$12.09\\text{ eV}$").replace("13.6 eV", "$13.6\\text{ eV}$")
    elif qnum == 104:
        qtext_f = qtext_f.replace("14.0 eV", "$14.0\\text{ eV}$")
        opa_f = "$14.0\\text{ eV}$"
        opb_f = "$13.6\\text{ eV}$"
        opc_f = "$27.6\\text{ eV}$"
        opd_f = "$0.4\\text{ eV}$"
    elif qnum == 105:
        qtext_f = qtext_f.replace("2.55 eV", "$2.55\\text{ eV}$")
    elif qnum == 106:
        qtext_f = qtext_f.replace("2.0 eV", "$2.0\\text{ eV}$")
        exp_f = exp_f.replace("1.89 eV", "$1.89\\text{ eV}$").replace("2.55 eV", "$2.55\\text{ eV}$")
    elif qnum == 107:
        qtext_f = qtext_f.replace("3.4 eV", "$3.4\\text{ eV}$")
        exp_f = exp_f.replace("3.4 eV", "$3.4\\text{ eV}$")
    elif qnum == 108:
        qtext_f = qtext_f.replace("−10, −6, and −2 eV", "$-10\\text{ eV}$, $-6\\text{ eV}$, and $-2\\text{ eV}$")
        exp_f = exp_f.replace("4, 4, and 8 eV", "$4\\text{ eV}$, $4\\text{ eV}$, and $8\\text{ eV}$")
    elif qnum == 109:
        qtext_f = qtext_f.replace("−9, −5, and −2 eV", "$-9\\text{ eV}$, $-5\\text{ eV}$, and $-2\\text{ eV}$")
        opa_f = "$413\\text{ nm}$"
        opb_f = "$310\\text{ nm}$"
        opc_f = "$177\\text{ nm}$"
        opd_f = "$124\\text{ nm}$"
        exp_f = exp_f.replace("3 eV", "$3\\text{ eV}$")
    elif qnum == 110:
        qtext_f = qtext_f.replace("−8, −3, and −1 eV", "$-8\\text{ eV}$, $-3\\text{ eV}$, and $-1\\text{ eV}$")
        opa_f = "$248\\text{ nm}$"
        opb_f = "$177\\text{ nm}$"
        opc_f = "$620\\text{ nm}$"
        opd_f = "$413\\text{ nm}$"
        exp_f = exp_f.replace("7 eV", "$7\\text{ eV}$")
    elif qnum == 111:
        qtext_f = qtext_f.replace("12 keV and 3 keV", "$12\\text{ keV}$ and $3\\text{ keV}$")
        opa_f = "$0.413\\text{ nm}$"
        opb_f = "$0.138\\text{ nm}$"
        opc_f = "$0.103\\text{ nm}$"
        opd_f = "$0.083\\text{ nm}$"
        exp_f = exp_f.replace("9 keV", "$9\\text{ keV}$")
    elif qnum == 112:
        qtext_f = qtext_f.replace("15, 3, and 1 keV", "$15\\text{ keV}$, $3\\text{ keV}$, and $1\\text{ keV}$")
        opa_f = "$2\\text{ keV}$"
        opb_f = "$12\\text{ keV}$"
        opc_f = "$14\\text{ keV}$"
        opd_f = "$4\\text{ keV}$"
    elif qnum == 113:
        qtext_f = qtext_f.replace("25 keV", "$25\\text{ keV}$")
        opa_f = "$25\\text{ keV}$"
        opb_f = "$12.5\\text{ keV}$"
        opc_f = "$50\\text{ keV}$"
        opd_f = "$511\\text{ keV}$"
    elif qnum == 114:
        qtext_f = qtext_f.replace("0.062 nm", "$0.062\\text{ nm}$")
        opa_f = "$2\\text{ keV}$"
        opb_f = "$10\\text{ keV}$"
        opc_f = "$20\\text{ keV}$"
        opd_f = "$62\\text{ keV}$"
    elif qnum == 115:
        qtext_f = qtext_f.replace("8 keV", "$8\\text{ keV}$").replace("6 keV", "$6\\text{ keV}$").replace("7 keV", "$7\\text{ keV}$")
        exp_f = exp_f.replace("8 keV", "$8\\text{ keV}$")
        opa_f = opa_f.replace("too large", "too large")
        opc_f = opc_f.replace("6 keV", "$6\\text{ keV}$")
        opd_f = opd_f.replace("6 keV", "$6\\text{ keV}$")
    elif qnum == 116:
        qtext_f = qtext_f.replace("−2 eV and −4 eV", "$-2\\text{ eV}$ and $-4\\text{ eV}$")
        opa_f = "$620\\text{ nm}$"
        opb_f = "$310\\text{ nm}$"
        opc_f = "$1240\\text{ nm}$"
        opd_f = "$248\\text{ nm}$"
        exp_f = exp_f.replace("2 eV", "$2\\text{ eV}$")
    elif qnum == 118:
        qtext_f = qtext_f.replace("3 eV", "$3\\text{ eV}$").replace("2 eV", "$2\\text{ eV}$")
    elif qnum == 125:
        qtext_f = qtext_f.replace("620 nm", "$620\\text{ nm}$")
        opa_f = "$0.5\\text{ eV}$"
        opb_f = "$1.0\\text{ eV}$"
        opc_f = "$2.0\\text{ eV}$"
        opd_f = "$4.0\\text{ eV}$"
    elif qnum == 126:
        opa_f = "$0.124\\text{ eV}$"
        opb_f = "$12.4\\text{ eV}$"
        opc_f = "$1.24\\text{ eV}$"
        opd_f = "$3.0\\text{ eV}$"
    elif qnum == 127:
        opa_f = "$310\\text{ nm}$"
        opb_f = "$622\\text{ nm}$"
        opc_f = "$1240\\text{ nm}$"
        opd_f = "$155\\text{ nm}$"
    elif qnum == 128:
        qtext_f = qtext_f.replace("10.0 eV", "$10.0\\text{ eV}$")
        exp_f = exp_f.replace("10.2 eV", "$10.2\\text{ eV}$")
        opb_f = opb_f.replace("10.2 eV", "$10.2\\text{ eV}$")
        opc_f = opc_f.replace("13.6 eV", "$13.6\\text{ eV}$")
    elif qnum == 129:
        qtext_f = qtext_f.replace("11.0 eV", "$11.0\\text{ eV}$")
        opa_f = "$10.2\\text{ eV}$"
        opb_f = "$11.0\\text{ eV}$"
        opc_f = "$1.8\\text{ eV}$"
        opd_f = "$0.8\\text{ eV}$"
        exp_f = exp_f.replace("10.2 eV", "$10.2\\text{ eV}$")
    elif qnum == 130:
        qtext_f = qtext_f.replace("13.0 eV", "$13.0\\text{ eV}$")
        exp_f = exp_f.replace("12.75 eV", "$12.75\\text{ eV}$").replace("13.056 eV", "$13.056\\text{ eV}$")
    elif qnum == 134:
        qtext_f = qtext_f.replace("12.75 eV", "$12.75\\text{ eV}$")
    elif qnum == 135:
        qtext_f = qtext_f.replace("1.00 eV", "$1.00\\text{ eV}$")
        opa_f = "$0.85\\text{ eV}$"
        opb_f = "$0.15\\text{ eV}$"
        opc_f = "$1.85\\text{ eV}$"
        opd_f = "$1.00\\text{ eV}$"
        exp_f = exp_f.replace("0.85 eV", "$0.85\\text{ eV}$").replace("0.15 eV", "$0.15\\text{ eV}$")
    elif qnum == 136:
        qtext_f = qtext_f.replace("−3.4 eV", "$-3.4\\text{ eV}$")
        opa_f = "$10.2\\text{ eV}$"
        opb_f = "$3.4\\text{ eV}$"
        opc_f = "$2.55\\text{ eV}$"
        opd_f = "$1.89\\text{ eV}$"
    elif qnum == 137:
        qtext_f = qtext_f.replace("4 eV", "$4\\text{ eV}$").replace("3 eV", "$3\\text{ eV}$")
        opa_f = "$1\\text{ eV}$ transferred through other processes"
        opb_f = "$7\\text{ eV}$ created inside the atom"
        opd_f = "A negative photon energy of $-1\\text{ eV}$"
        exp_f = exp_f.replace("1 eV", "$1\\text{ eV}$")
    elif qnum == 138:
        qtext_f = qtext_f.replace("486 nm", "$486\\text{ nm}$")
        exp_f = exp_f.replace("2.55 eV", "$2.55\\text{ eV}$").replace("486 nm", "$486\\text{ nm}$")
    elif qnum == 139:
        qtext_f = qtext_f.replace("1876 nm", "$1876\\text{ nm}$")
    elif qnum == 141:
        qtext_f = qtext_f.replace("0.4761 nm", "$0.4761\\text{ nm}$")
    elif qnum == 148:
        qtext_f = qtext_f.replace("8.0 keV", "$8.0\\text{ keV}$")
        opa_f = "$0.155\\text{ nm}$"
        opb_f = "$1.55\\text{ nm}$"
        opc_f = "$0.0155\\text{ nm}$"
        opd_f = "$8.0\\text{ nm}$"
    elif qnum == 154:
        qtext_f = qtext_f.replace("632.8 nm", "$632.8\\text{ nm}$")
        opa_f = "$0.98\\text{ eV}$"
        opb_f = "$3.92\\text{ eV}$"
        opc_f = "$6.33\\text{ eV}$"
        opd_f = "$1.96\\text{ eV}$"
    elif qnum == 155:
        qtext_f = qtext_f.replace("632.8 nm", "$632.8\\text{ nm}$")
    elif qnum == 156:
        qtext_f = qtext_f.replace("632.8 nm", "$632.8\\text{ nm}$").replace("1.0 mW", "$1.0\\text{ mW}$")
    elif qnum == 157:
        qtext_f = qtext_f.replace("1.0\,\mu\text{J}", "$1.0\\,\\mu\\text{J}$").replace("2.0 eV", "$2.0\\text{ eV}$")
    elif qnum == 170:
        qtext_f = qtext_f.replace("15.0 eV", "$15.0\\text{ eV}$")
        opa_f = "$1.4\\text{ eV}$"
        opb_f = "$15.0\\text{ eV}$"
        opc_f = "$13.6\\text{ eV}$"
        opd_f = "$28.6\\text{ eV}$"
    elif qnum == 177:
        qtext_f = qtext_f.replace("0, 1, 3, and 6 eV", "$0\\text{ eV}$, $1\\text{ eV}$, $3\\text{ eV}$, and $6\\text{ eV}$")
        exp_f = exp_f.replace("1, 2, 3, 3, 5, and 6 eV", "$1\\text{ eV}$, $2\\text{ eV}$, $3\\text{ eV}$, $3\\text{ eV}$, $5\\text{ eV}$, and $6\\text{ eV}$")
    elif qnum == 178:
        qtext_f = qtext_f.replace("400 nm and 600 nm", "$400\\text{ nm}$ and $600\\text{ nm}$")
        opa_f = "$240\\text{ nm}$"
        opb_f = "$1000\\text{ nm}$"
        opc_f = "$200\\text{ nm}$"
        opd_f = "$500\\text{ nm}$"
        exp_f = exp_f.replace("240 nm", "$240\\text{ nm}$")
    elif qnum == 180:
        qtext_f = qtext_f.replace("14 eV", "$14\\text{ eV}$")
        opa_f = opa_f.replace("13.6 eV", "$13.6\\text{ eV}$")
        opc_f = opc_f.replace("14 eV", "$14\\text{ eV}$")
        exp_f = exp_f.replace("13.6 eV", "$13.6\\text{ eV}$")
    elif qnum == 181:
        qtext_f = qtext_f.replace("80 nm", "$80\\text{ nm}$")
        opa_f = opa_f.replace("first excitation energy", "first excitation energy")
        opb_f = opb_f.replace("10.2 eV", "$10.2\\text{ eV}$")
        opd_f = opd_f.replace("13.6 eV", "$13.6\\text{ eV}$")
    elif qnum == 184:
        qtext_f = qtext_f.replace("20 keV", "$20\\text{ keV}$").replace("25 keV", "$25\\text{ keV}$")
    elif qnum == 198:
        qtext_f = qtext_f.replace("20.0 eV", "$20.0\\text{ eV}$").replace("20.1 eV", "$20.1\\text{ eV}$")
        opd_f = opd_f.replace("−1 eV", "$-1\\text{ eV}$")
        exp_f = exp_f.replace("0.1 eV", "$0.1\\text{ eV}$")
    elif qnum == 200:
        qtext_f = qtext_f.replace("−6, −4, and −1 eV", "$-6\\text{ eV}$, $-4\\text{ eV}$, and $-1\\text{ eV}$")
        opa_f = "$3\\text{ eV}$, $413\\text{ nm}$, $100\\%$"
        opb_f = "$5\\text{ eV}$, $248\\text{ nm}$, $100\\%$"
        opc_f = "$2\\text{ eV}$, $620\\text{ nm}$, $40\\%$"
        opd_f = "$5\\text{ eV}$, $620\\text{ nm}$, $40\\%$"
        exp_f = exp_f.replace("5 eV", "$5\\text{ eV}$").replace("2 eV", "$2\\text{ eV}$")

    return qtext_f, opa_f, opb_f, opc_f, opd_f, ans, exp_f

def get_formula_for_q(num: int, qtext: str, exp: str) -> str:
    combined = (qtext + " " + exp).lower()
    
    # Check topics by keywords
    if "laser" in combined or "stimulated emission" in combined or "population inversion" in combined or "metastable" in combined or "optical cavity" in combined or "resonator" in combined or "he–ne" in combined:
        if "efficiency" in combined or "pump" in combined:
            return "\\Delta E = hf = \\frac{hc}{\\lambda}, \\quad \\eta = \\frac{E_{\\text{laser}}}{E_{\\text{pump}}}"
        elif "rate" in combined or "power" in combined or "\\mu\\text{j}" in combined or "pulse" in combined:
            return "P = \\frac{E}{\\Delta t} = N_{\\text{photons}} \\left(\\frac{hc}{\\lambda}\\right), \\quad E = hf"
        return "E_2 - E_1 = hf = \\frac{hc}{\\lambda}, \\quad N_2 > N_1"
    elif "x-ray" in combined or "characteristic" in combined or "k_\\alpha" in combined or "k_\\beta" in combined or "l_\\alpha" in combined or "vacancy" in combined or "bremsstrahlung" in combined:
        if "binding" in combined or "shell" in combined or "threshold" in combined:
            return "\\Delta E_{\\text{shell}} = E_i - E_f = hf = \\frac{hc}{\\lambda}"
        elif "minimum wavelength" in combined or "cut-off" in combined or "\\lambda_{\\min}" in combined:
            return "\\lambda_{\\min} = \\frac{hc}{eV_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{eV_0}"
        return "\\Delta E = E_{\\text{initial}} - E_{\\text{final}} = hf = \\frac{hc}{\\lambda}"
    elif "lyman" in combined or "balmer" in combined or "paschen" in combined or "brackett" in combined or "pfund" in combined or "rydberg" in combined or "r_h" in combined or "series" in combined:
        if "limit" in combined:
            return "\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad \\lambda_{\\text{limit}} = \\frac{n_1^2}{R_H}"
        return "\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\quad \\Delta E = \\frac{hc}{\\lambda}"
    elif "radius" in combined or "radii" in combined or "a_0" in combined or "orbit" in combined:
        if "centripetal" in combined or "force" in combined or "acceleration" in combined:
            return "F_e = \\frac{k e^2}{r^2} = \\frac{m v^2}{r}, \\quad a_c = \\frac{v^2}{r} \\propto \\frac{1}{n^4}"
        elif "speed" in combined or "period" in combined or "velocity" in combined:
            return "v_n = \\frac{v_1}{n} = \\frac{e^2}{2\\epsilon_0 h n}, \\quad T_n = \\frac{2\\pi r_n}{v_n} \\propto n^3"
        return "r_n = a_0 n^2, \\quad a_0 \\approx 5.29 \\times 10^{-11}\\text{ m}"
    elif "angular momentum" in combined or "bohr's postulate" in combined or "\\hbar" in combined:
        return "L = mvr = n\\hbar = \\frac{nh}{2\\pi}"
    elif "kinetic energy" in combined or "potential energy" in combined or "u = -2k" in combined or "virial" in combined:
        return "E_n = K + U = -\\frac{13.6}{n^2}\\text{ eV}, \\quad K = -E_n, \\quad U = 2E_n = -2K"
    elif "ioniz" in combined or "ground state" in combined or "excited state" in combined or "excitation" in combined:
        return "E_n = -\\frac{13.6}{n^2}\\text{ eV}, \\quad E_{\\text{ionization}} = -E_n = \\frac{13.6}{n^2}\\text{ eV}"
    elif "cascade" in combined or "distinct" in combined or "levels" in combined or "number of lines" in combined:
        return "N_{\\text{lines}} = \\frac{N(N-1)}{2}, \\quad \\Delta E = E_i - E_f"
    else:
        return "E_n = -\\frac{13.6}{n^2}\\text{ eV}, \\quad \\Delta E = hf = \\frac{hc}{\\lambda}"

def get_difficulty(num: int, qtext: str, exp: str) -> str:
    combined = (qtext + " " + exp).lower()
    
    # Hard questions: multi-step calculations, series limits comparisons, ratios with powers of n
    hard_nums = {
        82, 83, 84, 88, 89, 91, 92, 94, 96, 97, 99, 100, 102, 108, 109, 110,
        111, 112, 114, 120, 155, 156, 157, 174, 177, 178, 200
    }
    if num in hard_nums:
        return "Hard"
    
    # Medium questions: standard numerical calculations, transitions
    has_math_calc = any(k in exp for k in ["=", "\\times", "\\approx", "\\frac", "/", "gives", "yields", "calculate", "ratio", "subtract"])
    if has_math_calc and num not in {
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        121, 122, 123, 124, 140, 143, 144, 145, 146, 147, 149, 150, 151, 152, 153,
        161, 162, 163, 164, 165, 166, 167, 168, 169, 171, 172, 173, 175, 176, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 199
    }:
        return "Medium"
    
    return "Easy"

questions = []
for m in matches:
    qnum = int(m.group(1))
    qtext = m.group(2).strip()
    opa = m.group(3).strip()
    opb = m.group(4).strip()
    opc = m.group(5).strip()
    opd = m.group(6).strip()
    ans = m.group(7).strip()
    exp = m.group(8).strip()
    
    qtext_f, opa_f, opb_f, opc_f, opd_f, ans_f, exp_f = format_all_fields(qnum, qtext, opa, opb, opc, opd, ans, exp)
    
    formula = get_formula_for_q(qnum, qtext_f, exp_f)
    difficulty = get_difficulty(qnum, qtext_f, exp_f)
    
    questions.append({
        "id": f"el-phy12-ch12-q{qnum}",
        "class": 12,
        "subject": "Physics",
        "chapter_id": "el-phy12-ch12",
        "chapter": "Chapter 12 — Atomic Physics",
        "question": qtext_f,
        "options": {
            "A": opa_f,
            "B": opb_f,
            "C": opc_f,
            "D": opd_f
        },
        "option_a": opa_f,
        "option_b": opb_f,
        "option_c": opc_f,
        "option_d": opd_f,
        "correct_answer": ans_f,
        "correct_option": ans_f,
        "explanation": exp_f,
        "difficulty": difficulty,
        "difficulty_tier": "Normal",
        "formula": formula
    })

print(f"Prepared {len(questions)} questions.")

# Generate TypeScript file
ts_header = """import { Question } from '../types';

// ============================================================================
// ⚛️ ELEMENTARY PHYSICS CLASS 12 — CHAPTER 12: ATOMIC PHYSICS (200 MCQs)
// Difficulty: Normal
// Physical Constants & Models:
// E_n = -13.6 / n^2 eV, r_n = a_0 n^2, a_0 = 5.29 × 10^-11 m, hc ≈ 1240 eV·nm,
// R_H = 1.097 × 10^7 m^-1, hbar = h / (2*pi).
// Assumptions: Ideal Bohr energy-level model, neglect recoil and fine structure,
// ignore selection-rule restrictions in spectral-line counting.
// ============================================================================

export const EL_PHY12_CH12_QUESTIONS: Question[] = """

ts_content = ts_header + json.dumps(questions, indent=2) + ";\n"

with open("src/data/el_phy12_chapter12_data.ts", "w") as f:
    f.write(ts_content)

print("Wrote src/data/el_phy12_chapter12_data.ts successfully!")
