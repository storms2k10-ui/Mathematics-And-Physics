import * as fs from "fs";
import * as path from "path";

export const p1Explanations: Record<string, string> = {
  "c11-ch1-normal-q1": "For any complex number $z = a + bi$ where $a, b \\in \\mathbb{R}$, the real part is denoted by $\\operatorname{Re}(z) = a$. For $z = 3 - 4i$, $a = 3$ and $b = -4$, so $\\operatorname{Re}(3 - 4i) = 3$.",
  "c11-ch1-normal-q2": "For any complex number $z = a + bi$ with $a, b \\in \\mathbb{R}$, the imaginary part is the real coefficient of $i$, denoted by $\\operatorname{Im}(z) = b$. For $z = 3 - 4i$, the coefficient of $i$ is $-4$, so $\\operatorname{Im}(3 - 4i) = -4$.",
  "c11-ch1-normal-q3": "For a complex number $z = a + bi$, its complex conjugate is defined as $\\bar{z} = a - bi$. For $z = -2 + 5i$, reversing the sign of the imaginary part yields $\\bar{z} = -2 - 5i$.",
  "c11-ch1-normal-q4": "Two complex numbers $x + iy$ and $a + ib$ are equal if and only if their real and imaginary parts are respectively equal: $x = a$ and $y = b$. Equating parts from $x + iy = 4 - 7i$ gives $x = 4$ and $y = -7$, so $(x, y) = (4, -7)$.",
  "c11-ch1-normal-q5": "A complex number $z = X + Yi$ is purely real if and only if its imaginary part is zero, i.e., $\\operatorname{Im}(z) = 0$. Here, the imaginary part is $3a - 6$. Setting $3a - 6 = 0 \\implies 3a = 6 \\implies a = 2$.",
  "c11-ch1-normal-q6": "A complex number $z = X + Yi$ is purely imaginary if and only if its real part is zero, i.e., $\\operatorname{Re}(z) = 0$. Here, the real part is $2x - 6$. Setting $2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$.",
  "c11-ch1-normal-q7": "A complex number equals zero if and only if both its real and imaginary parts are zero. For $(a - 2) + (b + 3)i = 0 + 0i$, equating parts yields $a - 2 = 0 \\implies a = 2$ and $b + 3 = 0 \\implies b = -3$.",
  "c11-ch1-normal-q8": "For $z = a + bi$, the complex conjugate is $\\bar{z} = a - bi$. Adding them yields $z + \\bar{z} = (a + bi) + (a - bi) = (a + a) + (b - b)i = 2a = 2\\operatorname{Re}(z)$.",
  "c11-ch1-normal-q9": "For $z = a + bi$, the complex conjugate is $\\bar{z} = a - bi$. Subtracting them yields $z - \\bar{z} = (a + bi) - (a - bi) = (a - a) + (b - (-b))i = 2bi = 2i\\operatorname{Im}(z)$.",
  "c11-ch1-normal-q10": "For $z = a + bi$, its conjugate is $\\bar{z} = a - bi$. Multiplying them gives $z\\bar{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 - b^2(-1) = a^2 + b^2 = |z|^2$.",
  "c11-ch1-normal-q11": "Let $z = a + bi$. Its conjugate is $\\bar{z} = a - bi$. Taking the conjugate a second time yields $\\overline{\\bar{z}} = \\overline{a - bi} = a - (-b)i = a + bi = z$.",
  "c11-ch1-normal-q12": "Let $z_1 = a_1 + b_1 i$ and $z_2 = a_2 + b_2 i$. Then $z_1 + z_2 = (a_1 + a_2) + (b_1 + b_2)i$. Conjugating gives $\\overline{z_1 + z_2} = (a_1 + a_2) - (b_1 + b_2)i = (a_1 - b_1 i) + (a_2 - b_2 i) = \\bar{z}_1 + \\bar{z}_2$.",
  "c11-ch1-normal-q13": "By the algebraic properties of complex conjugation, the conjugate of a product is the product of the conjugates: $\\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2$.",
  "c11-ch1-normal-q14": "For any two complex numbers $z_1$ and $z_2$ with $z_2 \\neq 0$, the conjugate of a quotient is the quotient of the conjugates: $\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\bar{z}_1}{\\bar{z}_2}$.",
  "c11-ch1-normal-q15": "For a complex number $z = a + bi$, the conjugate is $\\bar{z} = a - bi$. If $z = \\bar{z}$, then $a + bi = a - bi \\implies 2bi = 0 \\implies b = 0$. Since $\\operatorname{Im}(z) = 0$, $z = a \\in \\mathbb{R}$, which is purely real.",
  "c11-ch1-normal-q16": "Let $z = a + bi$ where $a, b \\in \\mathbb{R}$. Then $\\bar{z} = a - bi$ and $-\\bar{z} = -a + bi$. The condition $z = -\\bar{z}$ gives $a + bi = -a + bi \\implies 2a = 0 \\implies a = 0$. Thus $z = 0 + bi = bi$, which is purely imaginary.",
  "c11-ch1-normal-q17": "For $z = a + bi$, the modulus is $|z| = \\sqrt{a^2 + b^2} \\ge 0$. Here $|z| = 0 \\iff \\sqrt{a^2 + b^2} = 0 \\iff a^2 + b^2 = 0 \\iff a = 0 \\text{ and } b = 0$, which is equivalent to $z = 0$.",
  "c11-ch1-normal-q18": "In the Argand plane, a complex number $z = x + iy$ is represented by the Cartesian coordinates $(x, y)$. For $z = -3 + 4i$, the real part is $x = -3$ and the imaginary part is $y = 4$, corresponding to the point $(-3, 4)$.",
  "c11-ch1-normal-q19": "The distance of a complex number $z = x + iy$ from the origin $(0, 0)$ is given by its modulus $|z| = \\sqrt{x^2 + y^2}$. For $z = -3 + 4i$, the distance is $|-3 + 4i| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
  "c11-ch1-normal-q20": "For $z = -2 - 5i$, the corresponding point in the Argand plane is $(x, y) = (-2, -5)$. Since both coordinates are strictly negative ($x < 0$ and $y < 0$), the point lies in the third quadrant (Quadrant III).",
  "c11-ch1-normal-q21": "To add two complex numbers, add their real parts and imaginary parts separately: $(3 + 2i) + (1 - 5i) = (3 + 1) + (2 - 5)i = 4 - 3i$.",
  "c11-ch1-normal-q22": "To subtract two complex numbers, subtract their real parts and imaginary parts separately: $(5 - 3i) - (2 + 4i) = (5 - 2) + (-3 - 4)i = 3 - 7i$.",
  "c11-ch1-normal-q23": "Using the distributive property with $i^2 = -1$: $(2 + i)(3 - 2i) = 2(3) + 2(-2i) + i(3) - 2i^2 = 6 - 4i + 3i - 2(-1) = 6 - i + 2 = 8 - i$.",
  "c11-ch1-normal-q24": "Expanding using the binomial square formula with $i^2 = -1$: $(1 + i)^2 = 1^2 + 2(1)(i) + i^2 = 1 + 2i - 1 = 2i$.",
  "c11-ch1-normal-q25": "Expanding using the binomial square formula with $i^2 = -1$: $(1 - i)^2 = 1^2 - 2(1)(i) + i^2 = 1 - 2i - 1 = -2i$.",
  "c11-ch1-normal-q26": "Using the difference of squares identity with $i^2 = -1$: $(2 + 3i)(2 - 3i) = 2^2 - (3i)^2 = 4 - 9i^2 = 4 - 9(-1) = 4 + 9 = 13$.",
  "c11-ch1-normal-q27": "Multiplying numerator and denominator by the conjugate $3 + 4i$: $\\frac{3+4i}{3-4i} = \\frac{(3+4i)(3+4i)}{(3-4i)(3+4i)} = \\frac{9 + 24i + 16i^2}{3^2 - (4i)^2} = \\frac{9 + 24i - 16}{9 + 16} = \\frac{-7 + 24i}{25}$.",
  "c11-ch1-normal-q28": "Multiplying numerator and denominator by the complex conjugate $1 - i$: $\\frac{1}{1+i} = \\frac{1(1-i)}{(1+i)(1-i)} = \\frac{1-i}{1^2 - i^2} = \\frac{1-i}{1 - (-1)} = \\frac{1-i}{2}$.",
  "c11-ch1-normal-q29": "Using the division algorithm, $23 = 4 \\times 5 + 3$. Since $i^4 = 1$: $i^{23} = (i^4)^5 \\cdot i^3 = (1)^5 \\cdot (-i) = -i$.",
  "c11-ch1-normal-q30": "Dividing the exponent by $4$: $2026 = 4 \\times 506 + 2$. Since $i^4 = 1$: $i^{2026} = (i^4)^{506} \\cdot i^2 = (1)^{506} \\cdot (-1) = -1$.",
  "c11-ch1-normal-q31": "Using properties of powers: $(-i)^{15} = (-1)^{15} \\cdot i^{15} = -1 \\cdot (i^4)^3 \\cdot i^3 = -1 \\cdot (1)^3 \\cdot (-i) = i$.",
  "c11-ch1-normal-q32": "Factoring out $i^n$: $i^n + i^{n+2} = i^n(1 + i^2) = i^n(1 + (-1)) = i^n(0) = 0$.",
  "c11-ch1-normal-q33": "Using laws of exponents with $i^4 = 1$: $i^n = i^{4k+r} = (i^4)^k \\cdot i^r = (1)^k \\cdot i^r = i^r$.",
  "c11-ch1-normal-q34": "Evaluating each term using $i^2 = -1$ and $i^3 = -i$: $1 + i + i^2 + i^3 = 1 + i + (-1) + (-i) = (1 - 1) + (i - i) = 0$.",
  "c11-ch1-normal-q35": "Multiplying numerator and denominator by $-i$: $i^{-1} = \\frac{1}{i} = \\frac{-i}{i(-i)} = \\frac{-i}{-i^2} = \\frac{-i}{1} = -i$.",
  "c11-ch1-normal-q36": "Using the division algorithm, $17 = 4 \\times 4 + 1 \\implies i^{17} = (i^4)^4 \\cdot i = 1 \\cdot i = i$. Therefore $i^{-17} = \\frac{1}{i^{17}} = \\frac{1}{i} = -i$.",
  "c11-ch1-normal-q37": "Since $(1+i)^2 = 2i$, we have $(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = 4(-1) = -4$.",
  "c11-ch1-normal-q38": "Since $(1-i)^2 = -2i$, we have $(1-i)^6 = ((1-i)^2)^3 = (-2i)^3 = (-2)^3 i^3 = -8(-i) = 8i$.",
  "c11-ch1-normal-q39": "Evaluating powers of $i$: $i^{101} = (i^4)^{25} \\cdot i = 1 \\cdot i = i$, and $i^{103} = (i^4)^{25} \\cdot i^3 = 1 \\cdot (-i) = -i$. Thus $i^{101} + i^{103} = i + (-i) = 0$.",
  "c11-ch1-normal-q40": "Evaluating each power: $i^5 = i$, $i^{10} = (i^2)^5 = (-1)^5 = -1$, $i^{15} = (i^4)^3 \\cdot i^3 = -i$, and $i^{20} = (i^4)^5 = 1$. Summing gives $i + (-1) + (-i) + 1 = 0$.",
  "c11-ch1-normal-q41": "Expanding using the binomial formula with $i^2 = -1$: $(2 + i)^2 = 2^2 + 2(2)(i) + i^2 = 4 + 4i - 1 = 3 + 4i$.",
  "c11-ch1-normal-q42": "Expanding using the binomial formula with $i^2 = -1$: $(3 - 2i)^2 = 3^2 - 2(3)(2i) + (2i)^2 = 9 - 12i + 4(-1) = 9 - 12i - 4 = 5 - 12i$.",
  "c11-ch1-normal-q43": "Expanding using the distributive law: $(1 + 2i)(2 - i) = 1(2) - 1(i) + 2i(2) - 2i^2 = 2 - i + 4i - 2(-1) = 2 + 3i + 2 = 4 + 3i$.",
  "c11-ch1-normal-q44": "Expanding using the distributive law: $(4 + i)(1 - 2i) = 4(1) - 4(2i) + i(1) - 2i^2 = 4 - 8i + i - 2(-1) = 4 - 7i + 2 = 6 - 7i$.",
  "c11-ch1-normal-q45": "Multiplying numerator and denominator by $1 - i$: $\\frac{2-i}{1+i} = \\frac{(2-i)(1-i)}{(1+i)(1-i)} = \\frac{2 - 2i - i + i^2}{1^2 - i^2} = \\frac{2 - 3i - 1}{1 - (-1)} = \\frac{1 - 3i}{2}$.",
  "c11-ch1-normal-q46": "Multiplying numerator and denominator by $2 + i$: $\\frac{1+3i}{2-i} = \\frac{(1+3i)(2+i)}{(2-i)(2+i)} = \\frac{2 + i + 6i + 3i^2}{2^2 - i^2} = \\frac{2 + 7i - 3}{4 - (-1)} = \\frac{-1 + 7i}{5}$.",
  "c11-ch1-normal-q47": "Multiplying conjugate pairs gives the sum of squares: $(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 - b^2(-1) = a^2 + b^2$.",
  "c11-ch1-normal-q48": "The equation $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$ shows that grouping of complex numbers does not alter their sum, which is the Associative property of addition in $\\mathbb{C}$.",
  "c11-ch1-normal-q49": "For any complex number $z = a + bi \\in \\mathbb{C}$, $(a + bi)(1 + 0i) = a + bi = z$. Thus, $1 + 0i = 1$ is the multiplicative identity element in $\\mathbb{C}$.",
  "c11-ch1-normal-q50": "The additive inverse of a complex number $z = a + bi$ is $-z = -(a + bi) = -a - bi$, such that $z + (-z) = 0$. For $z = 4 - 7i$, the additive inverse is $-(4 - 7i) = -4 + 7i$."
};

const filePath = path.join(process.cwd(), "src/data/c11_ch1_normal_part1.ts");
let content = fs.readFileSync(filePath, "utf8");

Object.entries(p1Explanations).forEach(([id, exp]) => {
  const regex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"explanation":\\s*")[^"]*(")`);
  content = content.replace(regex, (match, prefix, suffix) => {
    return prefix + exp.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + suffix;
  });
});

fs.writeFileSync(filePath, content, "utf8");
console.log("Successfully updated c11_ch1_normal_part1.ts");
