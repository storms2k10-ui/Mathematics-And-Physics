import { Question } from '../types';

export const C11_CH7_ADVANCED_PART3: Question[] = [
  {
    "id": "c11-ch7-adv-q101",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1-x$^7).",
    "options": {
      "A": "$35$",
      "B": "$-21$",
      "C": "$-35$",
      "D": "$21$"
    },
    "correct_answer": "C",
    "explanation": "($-1$^3\binom73=-35).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q102",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1-x$^8).",
    "options": {
      "A": "$-70$",
      "B": "$56$",
      "C": "$-56$",
      "D": "$70$"
    },
    "correct_answer": "D",
    "explanation": "The power is even, so the coefficient is (+\binom84=70).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q103",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ($2-3x$^4).",
    "options": {
      "A": "$216$",
      "B": "$108$",
      "C": "$54$",
      "D": "$-216$"
    },
    "correct_answer": "A",
    "explanation": "(\binom42$2$^2$-3$^2=6$4$$9$=216).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q104",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($2-3x$^5).",
    "options": {
      "A": "$1080$",
      "B": "$-1080$",
      "C": "$-540$",
      "D": "$540$"
    },
    "correct_answer": "B",
    "explanation": "(\binom53$2$^2$-3$^3=10$4$$-27$=-1080).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q105",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ($3+2x$^5).",
    "options": {
      "A": "$720$",
      "B": "$540$",
      "C": "$1080$",
      "D": "$360$"
    },
    "correct_answer": "C",
    "explanation": "(\binom52 3^3 2^2=10$27$$4$=1080).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q106",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+2x$^6).",
    "options": {
      "A": "$80$",
      "B": "$120$",
      "C": "$240$",
      "D": "$160$"
    },
    "correct_answer": "D",
    "explanation": "(\binom63 2^3=20$8$=160).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q107",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^5$ in ($2+x$^8).",
    "options": {
      "A": "$448$",
      "B": "$224$",
      "C": "$896$",
      "D": "$112$"
    },
    "correct_answer": "A",
    "explanation": "(\binom85 2^3=56$8$=448).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q108",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ((x+\\dfrac{1}{x})^4).",
    "options": {
      "A": "$4$",
      "B": "$4$",
      "C": "$6$",
      "D": "$1$"
    },
    "correct_answer": "B",
    "explanation": "The general exponent is $4-2r$. Setting it to $2$ gives $1$, with coefficient (\binom41=4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q109",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the constant term in ((x+\\dfrac{1}{x})^6).",
    "options": {
      "A": "$6$",
      "B": "$15$",
      "C": "$20$",
      "D": "$30$"
    },
    "correct_answer": "C",
    "explanation": "The exponent $6-2r$ is zero at $1$, giving (\binom63=20).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q110",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the constant term in ((x^2+\\dfrac{1}{x})^6).",
    "options": {
      "A": "$15$",
      "B": "$6$",
      "C": "$30$",
      "D": "$20$"
    },
    "correct_answer": "A",
    "explanation": "The exponent is $12-3r$; it is zero at $1$, giving (\binom64=15).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q111",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the term independent of $x$ in ((x+\\dfrac2x)^4).",
    "options": {
      "A": "$6$",
      "B": "$24$",
      "C": "$16$",
      "D": "$12$"
    },
    "correct_answer": "B",
    "explanation": "At $1$, the constant term is (\binom42$2$^2=24).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q112",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the constant term in ((2x+\\dfrac{1}{x})^6).",
    "options": {
      "A": "$20$",
      "B": "$80$",
      "C": "$160$",
      "D": "$320$"
    },
    "correct_answer": "C",
    "explanation": "At $1$, the term is (\binom63$2$^3=20$8$=160).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q113",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the constant term in ((x^3+\\dfrac1{x^2})^5).",
    "options": {
      "A": "$5$",
      "B": "$1$",
      "C": "$10$",
      "D": "$10$"
    },
    "correct_answer": "D",
    "explanation": "The exponent is $15-5r$, zero at $1$; the coefficient is (\binom53=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q114",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Does ((x^2+\\dfrac{1}{x})^5) contain a constant term?",
    "options": {
      "A": "No",
      "B": "Yes, $10$",
      "C": "Yes, $5$",
      "D": "Yes, $1$"
    },
    "correct_answer": "A",
    "explanation": "The exponent $10-3r=0$ would require $r=10/3$, not an integer.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q115",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In ($x^a+x^{-b}$^n), a constant term occurs when:",
    "options": {
      "A": "(r=\\dfrac{n}{a+b})",
      "B": "(r=\\dfrac{an}{a+b}) is an integer",
      "C": "(r=\\dfrac{bn}{a+b})",
      "D": "$1$"
    },
    "correct_answer": "B",
    "explanation": "The exponent (a$n-r$-br) vanishes when (r=an/$a+b$).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q116",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^0$ in ((x^2+\\dfrac3x)^6).",
    "options": {
      "A": "$1215$",
      "B": "$2430$",
      "C": "$1215$",
      "D": "$729$"
    },
    "correct_answer": "C",
    "explanation": "$12-3r=0$ gives $1$; coefficient (=\binom64 3^4=15$81$=1215).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q117",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ((x^2+\\dfrac{1}{x})^5).",
    "options": {
      "A": "$5$",
      "B": "$10$",
      "C": "$1$",
      "D": "$10$"
    },
    "correct_answer": "D",
    "explanation": "The exponent is $10-3r$. Setting $10-3r=4$ gives $1$, coefficient (\binom52=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q118",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^{-2}$ in ((x+\\dfrac{1}{x})^6).",
    "options": {
      "A": "$15$",
      "B": "$20$",
      "C": "$6$",
      "D": "$30$"
    },
    "correct_answer": "A",
    "explanation": "$6-2r=-2$ gives $1$, with coefficient (\binom64=15).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q119",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ((x+\\dfrac2x)^7).",
    "options": {
      "A": "$42$",
      "B": "$84$",
      "C": "$168$",
      "D": "$336$"
    },
    "correct_answer": "B",
    "explanation": "$7-2r=3$ gives $1$; coefficient (=\binom72 2^2=21$4$=84).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q120",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^{-1}$ in ((x+\\dfrac3x)^5).",
    "options": {
      "A": "$90$",
      "B": "$135$",
      "C": "$270$",
      "D": "$405$"
    },
    "correct_answer": "C",
    "explanation": "$5-2r=-1$ gives $1$; coefficient (=\binom53 3^3=270).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q121",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $n$ is even, the expansion of ($x+y$^n) has:",
    "options": {
      "A": "One middle term",
      "B": "Two middle terms",
      "C": "No middle term",
      "D": "Three middle terms"
    },
    "correct_answer": "A",
    "explanation": "There are $n+1$ terms, an odd number when $n$ is even.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q122",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $n$ is odd, ($x+y$^n) has:",
    "options": {
      "A": "One middle term",
      "B": "Two middle terms",
      "C": "Three middle terms",
      "D": "No middle terms"
    },
    "correct_answer": "B",
    "explanation": "Then $n+1$ is even, producing two central terms.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q123",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The middle term of ($x+y$^{2m}) is:",
    "options": {
      "A": "$T_m$",
      "B": "$T_{2m}$",
      "C": "$T_{m+1}$",
      "D": "$T_{m+2}$"
    },
    "correct_answer": "C",
    "explanation": "An expansion with $2m+1$ terms has its centre at position $m+1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q124",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The two middle terms of ($x+y$^{2m+1}) are:",
    "options": {
      "A": "$T_m,T_{m+1}$",
      "B": "$T_1,T_{2m+2}$",
      "C": "$T_{m+1}$ only",
      "D": "$T_{m+1},T_{m+2}$"
    },
    "correct_answer": "D",
    "explanation": "There are $2m+2$ terms, so these are the two central positions.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q125",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the middle term of ($x+y$^6).",
    "options": {
      "A": "$20x^3y^3$",
      "B": "$15x^4y^2$",
      "C": "$6x^5y$",
      "D": "$15x^2y^4$"
    },
    "correct_answer": "A",
    "explanation": "The middle is (T_4=\binom63x^3y^3=20x^3y^3).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q126",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the middle term of ($x+y$^8).",
    "options": {
      "A": "$56x^5y^3$",
      "B": "$70x^4y^4$",
      "C": "$28x^6y^2$",
      "D": "$56x^3y^5$"
    },
    "correct_answer": "B",
    "explanation": "The middle is (T_5=\binom84x^4y^4=70x^4y^4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q127",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The two middle terms of ($x+y$^5) are:",
    "options": {
      "A": "$5x^4y,5xy^4$",
      "B": "$x^5,y^5$",
      "C": "$10x^3y^2,10x^2y^3$",
      "D": "$10x^4y,10xy^4$"
    },
    "correct_answer": "C",
    "explanation": "A six-term expansion has middle terms $T_3,T_4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q128",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The two middle terms of ($x+y$^7) are:",
    "options": {
      "A": "$21x^5y^2,21x^2y^5$",
      "B": "$7x^6y,7xy^6$",
      "C": "$35x^4y^3$ only",
      "D": "$35x^4y^3,35x^3y^4$"
    },
    "correct_answer": "D",
    "explanation": "The eight terms have central positions $T_4,T_5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q129",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the middle term of ($2x+y$^4).",
    "options": {
      "A": "$24x^2y^2$",
      "B": "$16x^2y^2$",
      "C": "$12x^2y^2$",
      "D": "$6x^2y^2$"
    },
    "correct_answer": "A",
    "explanation": "(T_3=\binom42$2x$^2y^2=6$4$x^2y^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q130",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the middle term of ($x-2y$^6).",
    "options": {
      "A": "$80x^3y^3$",
      "B": "$-160x^3y^3$",
      "C": "$160x^3y^3$",
      "D": "$-80x^3y^3$"
    },
    "correct_answer": "B",
    "explanation": "(T_4=\binom63x^3$-2y$^3=20$-8$x^3y^3=-160x^3y^3).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "T_{\\text{middle}} = T_{\\dfrac{n}{2}+1} \\; (n \\text{ even}), \\quad T_{\\dfrac{n+1}{2}}, T_{\\dfrac{n+3}{2}} \\; (n \\text{ odd})"
  },
  {
    "id": "c11-ch7-adv-q131",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The largest binomial coefficient in ($1+x$^8) is:",
    "options": {
      "A": "$56$",
      "B": "$28$",
      "C": "$70$",
      "D": "$35$"
    },
    "correct_answer": "C",
    "explanation": "The largest coefficient for even $n$ is the central coefficient (\binom84=70).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q132",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The largest binomial coefficient in ($1+x$^7) is:",
    "options": {
      "A": "$21$",
      "B": "$70$",
      "C": "$28$",
      "D": "$35$"
    },
    "correct_answer": "D",
    "explanation": "The two equal central coefficients are (\binom73=\binom74=35).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q133",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find (\binom{10}{5}).",
    "options": {
      "A": "$252$",
      "B": "$210$",
      "C": "$120$",
      "D": "$1024$"
    },
    "correct_answer": "A",
    "explanation": "(\binom{10}{5}=\\dfrac{10!}{5!5!}=252).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q134",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find (\binom{12}{6}).",
    "options": {
      "A": "$462$",
      "B": "$924$",
      "C": "$792$",
      "D": "$4096$"
    },
    "correct_answer": "B",
    "explanation": "Direct evaluation of the central coefficient gives $924$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q135",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The ratio of consecutive terms $T_{r+2}/T_{r+1}$ in ($x+y$^n) is:",
    "options": {
      "A": "(\\dfrac{r+1}{n-r}\\dfrac{x}{y})",
      "B": "(\\dfrac{n-r}{r}\\dfrac yx)",
      "C": "(\\dfrac{n-r}{r+1}\\dfrac yx)",
      "D": "(\\dfrac{n+r}{r+1}\\dfrac xy)"
    },
    "correct_answer": "C",
    "explanation": "Divide the general term with index $r+1$ by the one with index $r$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q136",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In ($1+x$^n), consecutive coefficients increase while:",
    "options": {
      "A": "$r>n$",
      "B": "$1$",
      "C": "$r<0$",
      "D": "(\\dfrac{n-r}{r+1}>1)"
    },
    "correct_answer": "D",
    "explanation": "A ratio greater than $1$ means the next coefficient is larger.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q137",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (\binom n3=\binom n5), then:",
    "options": {
      "A": "$1$",
      "B": "$1$",
      "C": "$1$",
      "D": "$1$"
    },
    "correct_answer": "A",
    "explanation": "By symmetry, $3+5=n$, so $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q138",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (\binom n2=\binom n7), find $n$.",
    "options": {
      "A": "$7$",
      "B": "$9$",
      "C": "$14$",
      "D": "$5$"
    },
    "correct_answer": "B",
    "explanation": "For distinct lower indices, symmetry requires $2+7=n$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q139",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find $n$ if (\binom n2=28).",
    "options": {
      "A": "$7$",
      "B": "$9$",
      "C": "$8$",
      "D": "$14$"
    },
    "correct_answer": "C",
    "explanation": "(n$n-1$/2=28) gives $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q140",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find $n$ if (\binom n3=20).",
    "options": {
      "A": "$5$",
      "B": "$4$",
      "C": "$7$",
      "D": "$6$"
    },
    "correct_answer": "D",
    "explanation": "(\binom63=20).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q141",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If the coefficient of $x^2$ in ($1+x$^n) is $45$, find $n$.",
    "options": {
      "A": "$10$",
      "B": "$9$",
      "C": "$11$",
      "D": "$12$"
    },
    "correct_answer": "A",
    "explanation": "(\binom n2=45) gives (n$n-1$=90), so $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q142",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If the coefficient of $x^3$ in ($1+x$^n) is $35$, find $n$.",
    "options": {
      "A": "$6$",
      "B": "$7$",
      "C": "$8$",
      "D": "$5$"
    },
    "correct_answer": "B",
    "explanation": "(\binom73=35).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q143",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If the number of terms in ($x+y$^n) is $12$, find $n$.",
    "options": {
      "A": "$12$",
      "B": "$10$",
      "C": "$11$",
      "D": "$13$"
    },
    "correct_answer": "C",
    "explanation": "The number of terms is $n+1$, so $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q144",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If ($x+y$^n) has $21$ terms, find $n$.",
    "options": {
      "A": "$21$",
      "B": "$19$",
      "C": "$22$",
      "D": "$20$"
    },
    "correct_answer": "D",
    "explanation": "$n+1=21$, hence $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q145",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In the expansion of ($x+y$^{10}), the term containing $x^6$ is:",
    "options": {
      "A": "The fifth term",
      "B": "The sixth term",
      "C": "The fourth term",
      "D": "The seventh term"
    },
    "correct_answer": "A",
    "explanation": "$10-r=6$ gives $1$, corresponding to $T_{r+1}=T_5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q146",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In ($x+y$^9), the term containing $y^6$ is:",
    "options": {
      "A": "The sixth term",
      "B": "The seventh term",
      "C": "The fifth term",
      "D": "The eighth term"
    },
    "correct_answer": "B",
    "explanation": "The exponent of $y$ is $1$, so the term is $T_7$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q147",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In ($x^2+y$^8), the term containing $x^{10}$ is:",
    "options": {
      "A": "$T_2$",
      "B": "$T_3$",
      "C": "$T_4$",
      "D": "$T_5$"
    },
    "correct_answer": "C",
    "explanation": "The exponent is (2$8-r$=10), so $1$, giving $T_4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q148",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In ($x^3+y$^6), the term containing $x^9$ is:",
    "options": {
      "A": "$T_3$",
      "B": "$T_5$",
      "C": "$T_2$",
      "D": "$T_4$"
    },
    "correct_answer": "D",
    "explanation": "(3$6-r$=9) gives $1$, corresponding to $T_4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q149",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^6$ in ($1+x^2$^5).",
    "options": {
      "A": "$10$",
      "B": "$5$",
      "C": "$20$",
      "D": "$1$"
    },
    "correct_answer": "A",
    "explanation": "$x^{2r}=x^6$ gives $1$, so the coefficient is (\binom53=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q150",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^8$ in ($1+x^2$^6).",
    "options": {
      "A": "$20$",
      "B": "$15$",
      "C": "$6$",
      "D": "$30$"
    },
    "correct_answer": "B",
    "explanation": "$2r=8$ gives $1$, so the coefficient is (\binom64=15).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  }
];
