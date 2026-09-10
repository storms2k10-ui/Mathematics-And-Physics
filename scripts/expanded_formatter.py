import re
import json

from raw_ch11_1_100 import RAW_1_100
from raw_ch11_101_200 import RAW_101_200

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

def format_text(text: str) -> str:
    s = text.replace(r'\(', '$').replace(r'\)', '$')
    
    # Textual enhancements for variables outside or inside
    replacements = [
        # Fractions and equations
        (r'\lambda_{\max}T=b', r'\lambda_{\max} T = b'),
        (r'\lambda_{\max}/T=\text{constant}', r'\frac{\lambda_{\max}}{T} = \text{constant}'),
        (r'\lambda_{\max}T=\text{constant}', r'\lambda_{\max} T = \text{constant}'),
        (r'\lambda_{\max}T^4=\text{constant}', r'\lambda_{\max} T^4 = \text{constant}'),
        (r'\lambda_{\max}=T', r'\lambda_{\max} = T'),
        (r'P/A=\sigma T^4', r'\frac{P}{A} = \sigma T^4'),
        (r'1/T', r'\frac{1}{T}'),
        (r'h/f', r'\frac{h}{f}'),
        (r'h/\lambda', r'\frac{h}{\lambda}'),
        (r'\lambda/h', r'\frac{\lambda}{h}'),
        (r'p=E/c=h/\lambda', r'p = \frac{E}{c} = \frac{h}{\lambda}'),
        (r'f_0=\phi/h', r'f_0 = \frac{\phi}{h}'),
        (r'f_0=h/\phi', r'f_0 = \frac{h}{\phi}'),
        (r'f_0=\phi c', r'f_0 = \phi c'),
        (r'f_0=hc/\phi', r'f_0 = \frac{hc}{\phi}'),
        (r'K_{\max}=V_s/e', r'K_{\max} = \frac{V_s}{e}'),
        (r'K_{\max}=e/V_s', r'K_{\max} = \frac{e}{V_s}'),
        (r'K_{\max}=eV_s', r'K_{\max} = e V_s'),
        (r'K_{\max}=hV_s', r'K_{\max} = h V_s'),
        (r'K_{\max}=hf-\phi', r'K_{\max} = hf - \phi'),
        (r'h/(m_ec)', r'\frac{h}{m_e c}'),
        (r'p/h', r'\frac{p}{h}'),
        (r'hc/p', r'\frac{hc}{p}'),
        (r'h/p', r'\frac{h}{p}'),
        (r'\Delta x\Delta p_x\ge\hbar/2', r'\Delta x \, \Delta p_x \ge \frac{\hbar}{2}'),
        (r'\Delta x\,\Delta p_x\ge\hbar/2', r'\Delta x \, \Delta p_x \ge \frac{\hbar}{2}'),
        (r'1/\sqrt V', r'\frac{1}{\sqrt{V}}'),
        (r'1/V^2', r'\frac{1}{V^2}'),
        (r'3/2', r'\frac{3}{2}'),
        (r'81/16', r'\frac{81}{16}'),
        (r'16/81', r'\frac{16}{81}'),
        (r'9/4', r'\frac{9}{4}'),
        (r'1/2', r'\frac{1}{2}'),
        (r'1/4', r'\frac{1}{4}'),
        (r'1/3', r'\frac{1}{3}'),
        (r'2/3', r'\frac{2}{3}'),
        (r'1/16', r'\frac{1}{16}'),
        (r'1/1836', r'\frac{1}{1836}'),
        (r'175/256', r'\frac{175}{256}'),
        (r'3/4', r'\frac{3}{4}'),
        (r'\phi/2', r'\frac{\phi}{2}'),
        (r'\phi/3', r'\frac{\phi}{3}'),
        (r'f_0/2', r'\frac{f_0}{2}'),
        (r'\lambda_C/2', r'\frac{\lambda_C}{2}'),
        (r'\lambda/2', r'\frac{\lambda}{2}'),
        (r'1/\lambda', r'\frac{1}{\lambda}'),
        (r'(\Delta p)^2/(2m)', r'\frac{(\Delta p)^2}{2m}'),
        (r'1.227/\sqrt2\text{ nm}', r'\frac{1.227}{\sqrt{2}}\text{ nm}'),
        (r'1.227/\sqrt{V}', r'\frac{1.227}{\sqrt{V}}'),
        (r'1.227/\sqrt{K_{\text{eV}}}', r'\frac{1.227}{\sqrt{K_{\text{eV}}}}'),
        (r'\lambda_e/\lambda_p', r'\frac{\lambda_e}{\lambda_p}'),
        (r'\Delta p_{\min}=\hbar/(2\Delta x)', r'\Delta p_{\min} = \frac{\hbar}{2\Delta x}'),
        (r'\Delta v_{\min}=\hbar/(2m\Delta x)', r'\Delta v_{\min} = \frac{\hbar}{2m\Delta x}'),
        (r'\Delta v_{\min}=\hbar/(2m_e\Delta x)', r'\Delta v_{\min} = \frac{\hbar}{2m_e \Delta x}'),
        (r'h=e\Delta V_s/\Delta f', r'h = \frac{e\Delta V_s}{\Delta f}'),
        (r'eV_s=hc(1/400-1/600)', r'e V_s = hc\left(\frac{1}{400} - \frac{1}{600}\right)'),
        (r"E'=E/[1+(E/511\text{ keV})(1-\cos\theta)]", r"E' = \frac{E}{1 + \left(\frac{E}{511\text{ keV}}\right)(1 - \cos\theta)}"),
        (r"E'=100/(1+100/511)\approx83.6\text{ keV}", r"E' = \frac{100}{1 + \frac{100}{511}} \approx 83.6\text{ keV}"),
        (r"E'=0.662/[1+2(0.662/0.511)]\approx0.184\text{ MeV}", r"E' = \frac{0.662}{1 + 2\left(\frac{0.662}{0.511}\right)} \approx 0.184\text{ MeV}"),
        (r"\lambda_{\max}=hc/(1.022\text{ MeV})\approx1.24/1.022=1.21\text{ pm}", r"\lambda_{\max} = \frac{hc}{1.022\text{ MeV}} \approx 1.21\text{ pm}"),
        (r"\Delta\lambda=h(1-\cos\theta)/(mc)", r"\Delta\lambda = \frac{h}{mc}(1 - \cos\theta)"),
        (r"\Delta\lambda/(\lambda+\Delta\lambda)", r"\frac{\Delta\lambda}{\lambda + \Delta\lambda}"),
        (r"T_{\text{K}}=T_{\!^\circ\text{C}}+273", r"T_{\text{K}} = T_{^\circ\text{C}} + 273"),
        (r"\Delta p_x\rightarrow0", r"\Delta p_x \to 0"),
        (r"\Delta x\rightarrow\infty", r"\Delta x \to \infty"),
        (r"\lambda=h/(mv)", r"\lambda = \frac{h}{mv}"),
        (r"(hf_{\max}-\phi)/e", r"\frac{hf_{\max} - \phi}{e}"),
        (r"b=2.90\times10^{-3}\text{ m·K}", r"b = 2.90 \times 10^{-3}\text{ m}\cdot\text{K}"),
        (r"\lambda_{\max}=b/T=9.67\times10^{-6}\text{ m}", r"\lambda_{\max} = \frac{b}{T} = 9.67 \times 10^{-6}\text{ m}"),
        (r"E=hf=6.63\times10^{-34}\times6.0\times10^{14}", r"E = hf = (6.63 \times 10^{-34})(6.0 \times 10^{14})"),
        (r"E=1240/620=2.00\text{ eV}", r"E = \frac{1240}{620} = 2.00\text{ eV}"),
        (r"f=E/h=(3\times1.60\times10^{-19})/(6.63\times10^{-34})", r"f = \frac{E}{h} = \frac{3 \times 1.60 \times 10^{-19}}{6.63 \times 10^{-34}}"),
        (r"P_2/P_1=(2T/T)^4=16", r"\frac{P_2}{P_1} = \left(\frac{2T}{T}\right)^4 = 16"),
        (r"N=E_{\text{total}}/E_{\text{photon}}=10/2=5", r"N = \frac{E_{\text{total}}}{E_{\text{photon}}} = \frac{10}{2} = 5"),
        (r"\lambda_0=1240/2.48=500\text{ nm}", r"\lambda_0 = \frac{1240}{2.48} = 500\text{ nm}"),
        (r"\phi=hf_0\approx3.315\times10^{-19}\text{ J}=2.07\text{ eV}", r"\phi = hf_0 \approx 3.315 \times 10^{-19}\text{ J} = 2.07\text{ eV}"),
        (r"f=\phi/h=f_0", r"f = \frac{\phi}{h} = f_0"),
        (r"K_{\max}=hf-\phi", r"K_{\max} = hf - \phi"),
        (r"K_e=E-E'", r"K_e = E - E'"),
        (r"K_{\text{total}}=1.50-1.022=0.478\text{ MeV}", r"K_{\text{total}} = 1.50 - 1.022 = 0.478\text{ MeV}"),
        (r"p=\sqrt{2mK}", r"p = \sqrt{2mK}"),
        (r"\lambda=h/\sqrt{2mK}", r"\lambda = \frac{h}{\sqrt{2mK}}"),
        (r"K=eV", r"K = eV"),
        (r"\lambda=h/\sqrt{2m_eK}", r"\lambda = \frac{h}{\sqrt{2m_e K}}"),
        (r"1-(300/400)^4=1-81/256=175/256", r"1 - \left(\frac{300}{400}\right)^4 = 1 - \frac{81}{256} = \frac{175}{256}"),
        (r"1/0.8=1.25", r"\frac{1}{0.8} = 1.25"),
        (r"1.25^4\approx2.44", r"1.25^4 \approx 2.44"),
        (r"3.2\times10^{-19}\text{ J}=2\text{ eV}", r"3.2 \times 10^{-19}\text{ J} = 2\text{ eV}"),
        (r"\lambda=1240/2=620\text{ nm}", r"\lambda = \frac{1240}{2} = 620\text{ nm}"),
        (r"2\times10^{-6}\text{ J}", r"2 \times 10^{-6}\text{ J}"),
        (r"3.2\times10^{-19}\text{ J}", r"3.2 \times 10^{-19}\text{ J}"),
        (r"3hf_0-\phi=3\phi-\phi=2\phi", r"3hf_0 - \phi = 3\phi - \phi = 2\phi"),
        (r"2hf-\phi=3(hf-\phi)", r"2hf - \phi = 3(hf - \phi)"),
        (r"hf=2\phi", r"hf = 2\phi"),
        (r"v_{\max}=\sqrt{2K_{\max}/m_e}", r"v_{\max} = \sqrt{\frac{2K_{\max}}{m_e}}"),
        (r"v=\sqrt{2(4e)/m_e}\approx1.19\times10^6\text{ m/s}", r"v = \sqrt{\frac{2(4e)}{m_e}} \approx 1.19 \times 10^6\text{ m/s}"),
        (r"\lambda=1.227/\sqrt2\approx0.868\text{ nm}", r"\lambda = \frac{1.227}{\sqrt{2}} \approx 0.868\text{ nm}"),
        (r"P/E", r"\frac{P}{E}"),
        (r"I=eP/E=0.50\text{ mA}", r"I = \frac{eP}{E} = 0.50\text{ mA}"),
        (r"I=0.40(10^{15})e=64\,\mu\text{A}", r"I = 0.40(10^{15})e = 64\,\mu\text{A}"),
        (r"E=hf=6.63\times10^{-34}\times10^9", r"E = hf = (6.63 \times 10^{-34})(10^9)"),
        (r"N=P/(hf)=6.63\times10^{-3}/6.63\times10^{-19}=10^{16}\text{ s}^{-1}", r"N = \frac{P}{hf} = \frac{6.63 \times 10^{-3}}{6.63 \times 10^{-19}} = 10^{16}\text{ s}^{-1}"),
        (r"\phi=hf_0=2.484\text{ eV}", r"\phi = hf_0 = 2.484\text{ eV}"),
        (r"\lambda\approx1.37\text{ nm}", r"\lambda \approx 1.37\text{ nm}"),
        (r"\lambda=hc/E\approx2.43\text{ pm}", r"\lambda = \frac{hc}{E} \approx 2.43\text{ pm}"),
        (r"E/c", r"\frac{E}{c}"),
        (r"\sqrt{m_p/m_e}=\sqrt{1836}\approx42.8", r"\sqrt{\frac{m_p}{m_e}} = \sqrt{1836} \approx 42.8"),
        (r"T=b/\lambda_{\max}=500\text{ K}", r"T = \frac{b}{\lambda_{\max}} = 500\text{ K}"),
        (r"T=2.90\times10^{-3}/290\times10^{-9}=10^4\text{ K}", r"T = \frac{2.90 \times 10^{-3}}{290 \times 10^{-9}} = 10^4\text{ K}"),
        (r"P=\sigma AT^4=567\text{ W}", r"P = \sigma A T^4 = 567\text{ W}"),
        (r"P_{\text{out}}=0.20(5.0)=1.0\text{ W}", r"P_{\text{out}} = 0.20(5.0) = 1.0\text{ W}"),
        (r"1.022\text{ MeV}", r"1.022\text{ MeV}"),
        (r"\sqrt{100}=10", r"\sqrt{100} = 10"),
        (r"\lambda=1.227/10", r"\lambda = \frac{1.227}{10}"),
        (r"\sqrt K=1.227/0.2454=5", r"\sqrt{K} = \frac{1.227}{0.2454} = 5"),
        (r"mv=1.0\text{ kg·m/s}", r"mv = 1.0\text{ kg}\cdot\text{m/s}"),
        (r"\lambda=h/p=6.63\times10^{-34}\text{ m}", r"\lambda = \frac{h}{p} = 6.63 \times 10^{-34}\text{ m}"),
        (r"p=h/\lambda=6.63\times10^{-34}/10^{-10}", r"p = \frac{h}{\lambda} = \frac{6.63 \times 10^{-34}}{10^{-10}}"),
        (r"\Delta p_{\min}=\hbar/(2\Delta x)=5.275\times10^{-26}\text{ kg·m/s}", r"\Delta p_{\min} = \frac{\hbar}{2\Delta x} = 5.275 \times 10^{-26}\text{ kg}\cdot\text{m/s}"),
        (r"\Delta v_{\min}=\hbar/(2m_e\Delta x)\approx5.79\times10^5\text{ m/s}", r"\Delta v_{\min} = \frac{\hbar}{2m_e \Delta x} \approx 5.79 \times 10^5\text{ m/s}"),
        (r"2(0.511+0.20)=1.422\text{ MeV}", r"2(0.511 + 0.20) = 1.422\text{ MeV}"),
        (r"2.50-1.022=1.478\text{ MeV}", r"2.50 - 1.022 = 1.478\text{ MeV}"),
        (r"E=pc", r"E = pc"),
        (r"E=\sqrt{p^2c^2+m_e^2c^4}>pc", r"E = \sqrt{p^2 c^2 + m_e^2 c^4} > pc"),
    ]
    
    for old, new in replacements:
        s = s.replace(old, new)

    # Specific cleanups for variable references in plain text
    # e.g., "proportionality constant h." -> "proportionality constant $h$."
    s = s.replace("constant h.", "constant $h$.")
    s = s.replace("increases with f.", "increases with $f$.")
    s = s.replace("is proportional to A.", "is proportional to $A$.")
    s = s.replace("Dividing Einstein’s equation by e gives", "Dividing Einstein’s equation by $e$ gives")
    s = s.replace("multiplying by e gives", "multiplying by $e$ gives")
    s = s.replace("by e.", "by $e$.")
    s = s.replace("decreases as f increases.", "decreases as $f$ increases.")
    s = s.replace("is universal h,", "is universal $h$,")
    s = s.replace("the slope stays h.", "the slope stays $h$.")
    s = s.replace("while h remains unchanged.", "while $h$ remains unchanged.")
    s = s.replace("beams at f and 2f", "beams at $f$ and $2f$")
    s = s.replace("Arbitrarily precise x and $p_x$", "Arbitrarily precise $x$ and $p_x$")
    s = s.replace("Arbitrarily precise y and $p_y$", "Arbitrarily precise $y$ and $p_y$")
    s = s.replace("Arbitrarily precise x and $p_y$", "Arbitrarily precise $x$ and $p_y$")
    s = s.replace("x and $p_y$ only", "$x$ and $p_y$ only")
    s = s.replace("x and $p_x$", "$x$ and $p_x$")
    s = s.replace("x and electric charge", "$x$ and electric charge")
    s = s.replace("depends on both A and $T^4$", "depends on both $A$ and $T^4$")
    s = s.replace("Large $hf$ makes", "Large $hf$ makes")
    
    return s

print("Expanded formatter created.")
