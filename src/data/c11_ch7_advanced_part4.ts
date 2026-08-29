import { Question } from '../types';

export const C11_CH7_ADVANCED_PART4: Question[] = [
  {
    "id": "c11-ch7-adv-q151",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^5$ in ($1+x+x^2$^2).",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$0$",
      "D": "$3$"
    },
    "correct_answer": "C",
    "explanation": "The greatest possible power is $x^4$, so $x^5$ does not occur.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q152",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+x$^4$1+x$^3).",
    "options": {
      "A": "$21$",
      "B": "$28$",
      "C": "$14$",
      "D": "$35$"
    },
    "correct_answer": "D",
    "explanation": "Combine the factors to obtain ($1+x$^7), whose $x^3$ coefficient is (\binom73=35).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q153",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1+x$^5$1-x$^5).",
    "options": {
      "A": "$10$",
      "B": "$-10$",
      "C": "$5$",
      "D": "$-5$"
    },
    "correct_answer": "A",
    "explanation": "The product is ($1-x^2$^5); $x^4$ corresponds to (\binom52$-1$^2=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q154",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^6$ in ($1+x$^4$1-x$^4).",
    "options": {
      "A": "$4$",
      "B": "$6$",
      "C": "$-4$",
      "D": "$-6$"
    },
    "correct_answer": "C",
    "explanation": "The product is ($1-x^2$^4); $x^6$ corresponds to $1$, giving ($-1$^3\binom43=-4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q155",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1+x$^8+$1-x$^8).",
    "options": {
      "A": "$140$",
      "B": "$70$",
      "C": "$112$",
      "D": "$56$"
    },
    "correct_answer": "A",
    "explanation": "The even-power coefficients add, so the result is (2\binom84=140).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q156",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+x$^8+$1-x$^8).",
    "options": {
      "A": "$112$",
      "B": "$0$",
      "C": "$56$",
      "D": "$-56$"
    },
    "correct_answer": "B",
    "explanation": "Odd-power coefficients cancel between the two expansions.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q157",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+x$^8-$1-x$^8).",
    "options": {
      "A": "$56$",
      "B": "$0$",
      "C": "$112$",
      "D": "$28$"
    },
    "correct_answer": "C",
    "explanation": "Odd-power coefficients subtract to (2\binom83=112).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q158",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1+x$^8-$1-x$^8).",
    "options": {
      "A": "$140$",
      "B": "$70$",
      "C": "$-70$",
      "D": "$0$"
    },
    "correct_answer": "D",
    "explanation": "Even-power coefficients are identical and therefore cancel in the difference.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q159",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (x+\\dfrac{1}{x}=3), then (x^2+\\dfrac1{x^2}) equals:",
    "options": {
      "A": "$7$",
      "B": "$9$",
      "C": "$5$",
      "D": "$11$"
    },
    "correct_answer": "A",
    "explanation": "Squaring gives $x^2+2+x^{-2}=9$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q160",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (x-\\dfrac{1}{x}=2), then (x^2+\\dfrac1{x^2}) equals:",
    "options": {
      "A": "$4$",
      "B": "$6$",
      "C": "$2$",
      "D": "$8$"
    },
    "correct_answer": "B",
    "explanation": "Squaring gives $x^2-2+x^{-2}=4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q161",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For any real or rational exponent $m$, $(1+x)^m = $",
    "options": {
      "A": "$1+mx$ exactly",
      "B": "$1+x^m$",
      "C": "(1+mx+\\dfrac{m$m-1$}{2!}x^2+cdots)",
      "D": "(1-mx+\\dfrac{m$m+1$}2x^2+cdots) always"
    },
    "correct_answer": "C",
    "explanation": "This is the generalized binomial expansion.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q162",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "When $m$ is not a nonnegative integer, the generalized expansion is generally valid for:",
    "options": {
      "A": "$|x|>1$",
      "B": "Every $x$ automatically",
      "C": "$1$ only",
      "D": "$|x|<1$"
    },
    "correct_answer": "D",
    "explanation": "This condition ensures convergence of the infinite binomial series.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q163",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($1+x$^{-1}).",
    "options": {
      "A": "(1-x+x^2-x^3+cdots)",
      "B": "(1+x+x^2+x^3+cdots)",
      "C": "(1-x-x^2-x^3+cdots)",
      "D": "(1+x-x^2+x^3+cdots)"
    },
    "correct_answer": "A",
    "explanation": "It is the infinite geometric series with common ratio $-x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q164",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($1-x$^{-1}).",
    "options": {
      "A": "(1-x+x^2-cdots)",
      "B": "(1+x+x^2+x^3+cdots)",
      "C": "(1+x-x^2+cdots)",
      "D": "(1-x-x^2-cdots)"
    },
    "correct_answer": "B",
    "explanation": "This is the geometric series (1/$1-x$).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q165",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first three terms of ($1+x$^{-2}) are:",
    "options": {
      "A": "$1-2x+x^2$",
      "B": "$1+2x+3x^2$",
      "C": "$1-2x+3x^2$",
      "D": "$1-x+2x^2$"
    },
    "correct_answer": "C",
    "explanation": "Substitute $1$ into the generalized coefficients.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q166",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first four terms of ($1-x$^{-2}) are:",
    "options": {
      "A": "$1-2x+3x^2-4x^3$",
      "B": "$1+x+x^2+x^3$",
      "C": "$1+2x+2x^2+2x^3$",
      "D": "$1+2x+3x^2+4x^3$"
    },
    "correct_answer": "D",
    "explanation": "Replace $x$ by $-x$ in the expansion of ($1+x$^{-2}).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q167",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first three terms of ($1+x$^{1/2}) are:",
    "options": {
      "A": "(1+\\dfrac{1}{2}x-\\dfrac{1}{8}x^2)",
      "B": "(1+\\dfrac{1}{2}x+\\dfrac{1}{8}x^2)",
      "C": "(1+x-\\dfrac{1}{2}x^2)",
      "D": "(1-\\dfrac{1}{2}x-\\dfrac{1}{8}x^2)"
    },
    "correct_answer": "A",
    "explanation": "The quadratic coefficient is (\\dfrac{$1/2$$-1/2$}2=-1/8).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q168",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first four terms of ($1+x$^{1/2}) are:",
    "options": {
      "A": "(1+\\dfrac{1}{2}x-\\dfrac{1}{8}x^2-\\dfrac1{16}x^3)",
      "B": "(1+\\dfrac{1}{2}x-\\dfrac{1}{8}x^2+\\dfrac1{16}x^3)",
      "C": "(1+x-\\dfrac{1}{2}x^2+\\dfrac{1}{4}x^3)",
      "D": "(1-\\dfrac{1}{2}x-\\dfrac{1}{8}x^2-\\dfrac1{16}x^3)"
    },
    "correct_answer": "B",
    "explanation": "The cubic coefficient is (\\dfrac{$1/2$-1/2$-3/2$}{3!}=1/16).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q169",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first three terms of ($1+x$^{-1/2}) are:",
    "options": {
      "A": "(1+\\dfrac{1}{2}x+\\dfrac{3}{8}x^2)",
      "B": "(1-\\dfrac{1}{2}x-\\dfrac{3}{8}x^2)",
      "C": "(1-\\dfrac{1}{2}x+\\dfrac{3}{8}x^2)",
      "D": "(1-x+\\dfrac{1}{2}x^2)"
    },
    "correct_answer": "C",
    "explanation": "Substitute $m=-1/2$ into the generalized binomial formula.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q170",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first four terms of ($1-x$^{-1/2}) are:",
    "options": {
      "A": "(1-\\dfrac{1}{2}x+\\dfrac{3}{8}x^2-\\dfrac5{16}x^3)",
      "B": "(1+\\dfrac{1}{2}x-\\dfrac{3}{8}x^2+\\dfrac5{16}x^3)",
      "C": "$1+x+x^2+x^3$",
      "D": "(1+\\dfrac{1}{2}x+\\dfrac{3}{8}x^2+\\dfrac5{16}x^3)"
    },
    "correct_answer": "D",
    "explanation": "Replace $x$ by $-x$ in ($1+x$^{-1/2}).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q171",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first three terms of ($1+x$^{1/3}) are:",
    "options": {
      "A": "(1+\\dfrac{1}{3}x-\\dfrac{1}{9}x^2)",
      "B": "(1+\\dfrac{1}{3}x+\\dfrac{1}{9}x^2)",
      "C": "(1+x-\\dfrac{1}{3}x^2)",
      "D": "(1-\\dfrac{1}{3}x-\\dfrac{1}{9}x^2)"
    },
    "correct_answer": "A",
    "explanation": "The quadratic coefficient is (\\dfrac{$1/3$$-2/3$}2=-1/9).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q172",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^2$ in ($1+x$^m) is:",
    "options": {
      "A": "$1$",
      "B": "(\\dfrac{m$m-1$}2)",
      "C": "(\\dfrac{m$m+1$}2)",
      "D": "$m^2$"
    },
    "correct_answer": "B",
    "explanation": "It equals the generalized binomial coefficient (\binom m2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q173",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^3$ in ($1+x$^m) is:",
    "options": {
      "A": "(\\dfrac{m$m-1$}6)",
      "B": "(\\dfrac{m$m+1$$m+2$}6)",
      "C": "(\\dfrac{m$m-1$$m-2$}6)",
      "D": "$m^3$"
    },
    "correct_answer": "C",
    "explanation": "It is the generalized coefficient (\binom m3).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q174",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using the first-order binomial approximation, ($1+x$^m) is approximately:",
    "options": {
      "A": "$1+x^m$",
      "B": "(mx)",
      "C": "$1-mx$",
      "D": "$1+mx$"
    },
    "correct_answer": "D",
    "explanation": "For small (|x|), terms involving (x^2,x^3,ldots) are much smaller.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q175",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate ($1.01$^5) to first order.",
    "options": {
      "A": "$1.05$",
      "B": "$1.5$",
      "C": "$1.01$",
      "D": "$1.25$"
    },
    "correct_answer": "A",
    "explanation": "Write $1.01=1+0.01$; then (1+5$0.01$=1.05).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q176",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate ($0.99$^4) to first order.",
    "options": {
      "A": "$1.04$",
      "B": "$0.96$",
      "C": "$0.99$",
      "D": "$0.94$"
    },
    "correct_answer": "B",
    "explanation": "($1-0.01$^4approx1-4$0.01$=0.96).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q177",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate $sqrt{1.04}$ to first order.",
    "options": {
      "A": "$1.04$",
      "B": "$1.04$",
      "C": "$1.02$",
      "D": "$0.98$"
    },
    "correct_answer": "C",
    "explanation": "($1+0.04$^{1/2}approx1+\\dfrac{1}{2}$0.04$=1.02).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q178",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate (dfrac1{1.02}) to first order.",
    "options": {
      "A": "$1.02$",
      "B": "$0.02$",
      "C": "$1.98$",
      "D": "$0.98$"
    },
    "correct_answer": "D",
    "explanation": "($1+0.02$^{-1}approx1-0.02=0.98).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q179",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate (dfrac1{sqrt{1.04}}) to first order.",
    "options": {
      "A": "$0.98$",
      "B": "$1.02$",
      "C": "$0.96$",
      "D": "$1.04$"
    },
    "correct_answer": "A",
    "explanation": "($1+0.04$^{-1/2}approx1-\\dfrac{1}{2}$0.04$=0.98).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q180",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Approximate (sqrt[3]{1.06}) to first order.",
    "options": {
      "A": "$1.06$",
      "B": "$1.02$",
      "C": "$0.98$",
      "D": "$1.03$"
    },
    "correct_answer": "B",
    "explanation": "($1+0.06$^{1/3}approx1+\\dfrac{1}{3}$0.06$=1.02).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q181",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using terms through $x^2$, approximate $sqrt{1.04}$.",
    "options": {
      "A": "$1.0200$",
      "B": "$1.0180$",
      "C": "$1.0198$",
      "D": "$1.0220$"
    },
    "correct_answer": "C",
    "explanation": "(1+\\dfrac{1}{2}$0.04$-\\dfrac{1}{8}$0.04$^2=1+0.02-0.0002=1.0198).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q182",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using terms through $x^2$, approximate ($1.02$^{-1}).",
    "options": {
      "A": "$0.98$",
      "B": "$0.9796$",
      "C": "$0.9810$",
      "D": "$0.9804$"
    },
    "correct_answer": "D",
    "explanation": "(1-0.02+$0.02$^2=0.9804).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q183",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The generalized expansion of ($1+x$^{-3}) begins:",
    "options": {
      "A": "(1-3x+6x^2-10x^3+cdots)",
      "B": "(1+3x+6x^2+10x^3+cdots)",
      "C": "$1-3x+3x^2-x^3$",
      "D": "$1+3x-6x^2+10x^3$"
    },
    "correct_answer": "A",
    "explanation": "Substitute $1$ into the generalized binomial coefficients.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q184",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The expansion of ($1-x$^{-3}) begins:",
    "options": {
      "A": "(1-3x+6x^2-10x^3+cdots)",
      "B": "(1+3x+6x^2+10x^3+cdots)",
      "C": "$1+3x+3x^2+x^3$",
      "D": "$1-3x-6x^2-10x^3$"
    },
    "correct_answer": "B",
    "explanation": "Replace $x$ by $-x$ in the preceding expansion.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q185",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1-x$^{-2}).",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$5$"
    },
    "correct_answer": "C",
    "explanation": "($1-x$^{-2}=1+2x+3x^2+4x^3+cdots).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q186",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1-x$^{-1}).",
    "options": {
      "A": "$4$",
      "B": "$5$",
      "C": "$-1$",
      "D": "$1$"
    },
    "correct_answer": "D",
    "explanation": "Every coefficient in (1+x+x^2+cdots) equals $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q187",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1-x$^{-2}).",
    "options": {
      "A": "$5$",
      "B": "$4$",
      "C": "$6$",
      "D": "$10$"
    },
    "correct_answer": "A",
    "explanation": "The coefficient of $x^r$ is $r+1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q188",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1-x$^{-3}).",
    "options": {
      "A": "$6$",
      "B": "$10$",
      "C": "$15$",
      "D": "$20$"
    },
    "correct_answer": "B",
    "explanation": "The coefficient is (\binom{3+3-1}{3}=\binom53=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q189",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^r$ in ($1-x$^{-1}) is:",
    "options": {
      "A": "$r$",
      "B": "$r+1$",
      "C": "$1$",
      "D": "($-1$^r)"
    },
    "correct_answer": "C",
    "explanation": "It is the geometric expansion (1+x+x^2+cdots).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q190",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^r$ in ($1-x$^{-2}) is:",
    "options": {
      "A": "$1$",
      "B": "$r$",
      "C": "$2r$",
      "D": "$r+1$"
    },
    "correct_answer": "D",
    "explanation": "The expansion is (1+2x+3x^2+cdots).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\dfrac{m(m-1)(m-2)}{3!}x^3 + \\dots"
  },
  {
    "id": "c11-ch7-adv-q191",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ($1+x$^5$1-x$^5).",
    "options": {
      "A": "$-5$",
      "B": "$5$",
      "C": "$-10$",
      "D": "$10$"
    },
    "correct_answer": "A",
    "explanation": "The product is ($1-x^2$^5); the $x^2$ coefficient is (-\binom51=-5).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(1+x)^m = 1 + mx + \\dfrac{m(m-1)}{2!}x^2 + \\cdots, \\quad |x| < 1"
  },
  {
    "id": "c11-ch7-adv-q192",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the constant term in ((x^2+\\dfrac2x)^9).",
    "options": {
      "A": "$5376$",
      "B": "(\binom96 2^6=5376)",
      "C": "$84$",
      "D": "$512$"
    },
    "correct_answer": "B",
    "explanation": "The exponent $18-3r$ vanishes at $1$, giving (\binom96 2^6=84$64$=5376).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q193",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ((x^2+\\dfrac{1}{x})^6).",
    "options": {
      "A": "$15$",
      "B": "$6$",
      "C": "$20$",
      "D": "$30$"
    },
    "correct_answer": "C",
    "explanation": "The exponent $12-3r=3$ gives $1$, with coefficient (\binom63=20).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q194",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the term independent of $x$ in ((2x^2-\\dfrac{1}{x})^6).",
    "options": {
      "A": "$240$",
      "B": "$-240$",
      "C": "$960$",
      "D": "$60$"
    },
    "correct_answer": "D",
    "explanation": "$12-3r=0$ gives $1$; the term is (\binom64$2$^2$-1$^4=15\times 4\times 1=60).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q195",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If the coefficients of the second and third terms of ($1+x$^n) are equal, find $n$.",
    "options": {
      "A": "$3$",
      "B": "$2$",
      "C": "$4$",
      "D": "$1$"
    },
    "correct_answer": "A",
    "explanation": "(\binom n1=\binom n2) gives (n=n$n-1$/2), so $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q196",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If the coefficients of the third and fourth terms of ($1+x$^n) are equal, find $n$.",
    "options": {
      "A": "$4$",
      "B": "$5$",
      "C": "$6$",
      "D": "$7$"
    },
    "correct_answer": "B",
    "explanation": "(\binom n2=\binom n3) implies symmetry with $2+3=n$, hence $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q197",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If ($1+x$^n) has two equal middle coefficients (\binom n4) and (\binom n5), find $n$.",
    "options": {
      "A": "$8$",
      "B": "$10$",
      "C": "$9$",
      "D": "$7$"
    },
    "correct_answer": "C",
    "explanation": "Symmetry requires $4+5=n$, so $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q198",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find $\\sum_{r=0}^{n}(r+1)\\binom{n}{r}$.",
    "options": {
      "A": "$n2^{n-1}$",
      "B": "$2^n$",
      "C": "($n-1$2^{n-1})",
      "D": "($n+2$2^{n-1})"
    },
    "correct_answer": "D",
    "explanation": "(sum r\binom nr=n2^{n-1}) and (sum\binom nr=2^n); adding gives ($n+2$2^{n-1}).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n r\\binom{n}{r} = n 2^{n-1}, \\quad \\sum_{r=0}^n r(r-1)\\binom{n}{r} = n(n-1)2^{n-2}"
  },
  {
    "id": "c11-ch7-adv-q199",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}r\binom nr).",
    "options": {
      "A": "$n2^{n-1}$",
      "B": "$2^n$",
      "C": "(n!)",
      "D": "$n^2$"
    },
    "correct_answer": "A",
    "explanation": "Differentiate ($1+x$^n), multiply by $x$, and set $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n r\\binom{n}{r} = n 2^{n-1}, \\quad \\sum_{r=0}^n r(r-1)\\binom{n}{r} = n(n-1)2^{n-2}"
  },
  {
    "id": "c11-ch7-adv-q200",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}r$r-1$\binom nr).",
    "options": {
      "A": "$n2^{n-1}$",
      "B": "(n$n-1$2^{n-2})",
      "C": "$n^2 2^n$",
      "D": "(n$n+1$2^{n-1})"
    },
    "correct_answer": "B",
    "explanation": "Differentiate ($1+x$^n) twice, multiply by $x^2$, and set $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n r\\binom{n}{r} = n 2^{n-1}, \\quad \\sum_{r=0}^n r(r-1)\\binom{n}{r} = n(n-1)2^{n-2}"
  }
];
