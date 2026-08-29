import { Question } from '../types';

export const C11_CH7_ADVANCED_PART1: Question[] = [
  {
    "id": "c11-ch7-adv-q1",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Mathematical induction is mainly used to prove statements involving:",
    "options": {
      "A": "Positive integers",
      "B": "Irrational numbers only",
      "C": "Complex roots only",
      "D": "Matrices only"
    },
    "correct_answer": "A",
    "explanation": "Induction proves that a proposition is true for every positive integer $n$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q2",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first step in mathematical induction is to:",
    "options": {
      "A": "Assume $1$",
      "B": "Verify the base case",
      "C": "Find a counterexample",
      "D": "Expand a determinant"
    },
    "correct_answer": "B",
    "explanation": "The proof begins by checking that the statement holds at the initial value, usually $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q3",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The assumption that $1$ is true is called:",
    "options": {
      "A": "Conclusion",
      "B": "Base case",
      "C": "Induction hypothesis",
      "D": "Contradiction"
    },
    "correct_answer": "C",
    "explanation": "It is temporarily assumed so that $1$ can be established.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q4",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In the inductive step, one proves:",
    "options": {
      "A": "(P$1$Rightarrow P$2$) only",
      "B": "(P$k+1$Rightarrow P$k$)",
      "C": "$1$ is false",
      "D": "(P$k$Rightarrow P$k+1$)"
    },
    "correct_answer": "D",
    "explanation": "This implication carries the truth of the statement from one integer to the next.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q5",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $1$ is true and (P$k$Rightarrow P$k+1$), then:",
    "options": {
      "A": "$1$ is true for every positive integer $n$",
      "B": "Only $1$ is true",
      "C": "$1$ is false for even $n$",
      "D": "Nothing follows"
    },
    "correct_answer": "A",
    "explanation": "This is the principle of mathematical induction.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q6",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For (1+2+cdots+n=\\dfrac{n$n+1$}2), the base case $1$ gives:",
    "options": {
      "A": "$1=0$",
      "B": "$1=1$",
      "C": "$1=2$",
      "D": "$2=1$"
    },
    "correct_answer": "B",
    "explanation": "The left side is $1$, while the formula gives (\\dfrac{1$2$}2=1).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 2 + \\dots + n = \\dfrac{n(n+1)}{2}"
  },
  {
    "id": "c11-ch7-adv-q7",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Assuming (1+2+cdots+k=\\dfrac{k$k+1$}2), the expression for the sum up to $k+1$ is:",
    "options": {
      "A": "(\\dfrac{k$k+1$}2+k)",
      "B": "(\\dfrac{k$k+1$}2+1)",
      "C": "(\\dfrac{k$k+1$}2+$k+1$)",
      "D": "(\\dfrac{$k+1$$k+2$}2+1)"
    },
    "correct_answer": "C",
    "explanation": "The next term $k+1$ must be added to the sum through $k$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 2 + \\dots + n = \\dfrac{n(n+1)}{2}"
  },
  {
    "id": "c11-ch7-adv-q8",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Simplify (\\dfrac{k$k+1$}2+$k+1$).",
    "options": {
      "A": "(\\dfrac{k$k+2$}2)",
      "B": "($k+1$^2)",
      "C": "(\\dfrac{k$k+1$}2)",
      "D": "(\\dfrac{$k+1$$k+2$}2)"
    },
    "correct_answer": "D",
    "explanation": "Factor $k+1$: ($k+1$$k/2+1$=\\dfrac{$k+1$$k+2$}2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 2 + \\dots + n = \\dfrac{n(n+1)}{2}"
  },
  {
    "id": "c11-ch7-adv-q9",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The formula (1+3+5+cdots+$2n-1$=n^2) has base case:",
    "options": {
      "A": "$1=1^2$",
      "B": "$1=2$",
      "C": "$3=1$",
      "D": "$0=1$"
    },
    "correct_answer": "A",
    "explanation": "For $1$, the series contains only $1$, and the right side is $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 3 + 5 + \\dots + (2n-1) = n^2"
  },
  {
    "id": "c11-ch7-adv-q10",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In the induction step for the sum of odd numbers, the next odd term is:",
    "options": {
      "A": "$2k-1$",
      "B": "$2k+1$",
      "C": "$k+1$",
      "D": "$2k+2$"
    },
    "correct_answer": "B",
    "explanation": "The ($k+1$)th odd number is (2$k+1$-1=2k+1).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 3 + 5 + \\dots + (2n-1) = n^2"
  },
  {
    "id": "c11-ch7-adv-q11",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Simplify (k^2+$2k+1$).",
    "options": {
      "A": "(k$k+1$)",
      "B": "$k^2+1$",
      "C": "($k+1$^2)",
      "D": "($k+2$^2)"
    },
    "correct_answer": "C",
    "explanation": "(k^2+2k+1=$k+1$^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 3 + 5 + \\dots + (2n-1) = n^2"
  },
  {
    "id": "c11-ch7-adv-q12",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The statement (2+4+cdots+2n=n$n+1$) is true at $1$ because:",
    "options": {
      "A": "$2=1$",
      "B": "$2=0$",
      "C": "$1=2$",
      "D": "(2=1$2$)"
    },
    "correct_answer": "D",
    "explanation": "Both sides equal $2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "2 + 4 + \\dots + 2n = n(n+1)"
  },
  {
    "id": "c11-ch7-adv-q13",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (2+4+cdots+2k=k$k+1$), adding the next term gives:",
    "options": {
      "A": "(k$k+1$+2$k+1$)",
      "B": "(k$k+1$+2k)",
      "C": "(k$k+1$+k+1)",
      "D": "(2k$k+1$)"
    },
    "correct_answer": "A",
    "explanation": "The next even number is (2$k+1$).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "2 + 4 + \\dots + 2n = n(n+1)"
  },
  {
    "id": "c11-ch7-adv-q14",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Simplify (k$k+1$+2$k+1$).",
    "options": {
      "A": "(k$k+2$)",
      "B": "($k+1$$k+2$)",
      "C": "$k^2+1$",
      "D": "(2$k+1$^2)"
    },
    "correct_answer": "B",
    "explanation": "Factoring $k+1$ gives ($k+1$$k+2$).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "2 + 4 + \\dots + 2n = n(n+1)"
  },
  {
    "id": "c11-ch7-adv-q15",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For (1^2+2^2+cdots+n^2=\\dfrac{n$n+1$$2n+1$}6), the next term after the $k$th stage is:",
    "options": {
      "A": "$k^2$",
      "B": "$2k+1$",
      "C": "($k+1$^2)",
      "D": "$k+1$"
    },
    "correct_answer": "C",
    "explanation": "The ($k+1$)th square is ($k+1$^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}"
  },
  {
    "id": "c11-ch7-adv-q16",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For (1^3+2^3+cdots+n^3=left[\\dfrac{n$n+1$}2\right]^2), the base case gives:",
    "options": {
      "A": "$1=0$",
      "B": "$1=4$",
      "C": "$0=1$",
      "D": "(1=left(\\dfrac{1cdot2}{2}\right)^2)"
    },
    "correct_answer": "D",
    "explanation": "Both sides equal $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1^3 + 2^3 + \\dots + n^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2"
  },
  {
    "id": "c11-ch7-adv-q17",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which statement can be proved directly by mathematical induction?",
    "options": {
      "A": "(1+2+cdots+n=\\dfrac{n$n+1$}2)",
      "B": "Every real number is rational",
      "C": "(pi) is an integer",
      "D": "Every equation has a real root"
    },
    "correct_answer": "A",
    "explanation": "It is a proposition indexed by positive integers.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q18",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "A failed base case means:",
    "options": {
      "A": "The inductive step is unnecessary",
      "B": "The proposed statement is not true for every stated integer",
      "C": "The statement is automatically true",
      "D": "Only $1$ matters"
    },
    "correct_answer": "B",
    "explanation": "If the first required case is false, the universal claim is already disproved.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q19",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Proving only (P$k$Rightarrow P$k+1$), without a base case, is insufficient because:",
    "options": {
      "A": "$k$ cannot be an integer",
      "B": "The implication is always false",
      "C": "There is no established starting point",
      "D": "$1$ is the base case"
    },
    "correct_answer": "C",
    "explanation": "The chain of implications cannot begin unless at least one case is verified.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q20",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Mathematical induction is similar to:",
    "options": {
      "A": "Solving one isolated equation",
      "B": "Multiplying matrices",
      "C": "Drawing a circle",
      "D": "A chain of falling dominoes"
    },
    "correct_answer": "D",
    "explanation": "The base case starts the chain, and the inductive implication passes truth forward.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q21",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "To prove (3mid$2^{2n}-1$), the base case $1$ gives:",
    "options": {
      "A": "$2^2-1=3$",
      "B": "$2-1=1$",
      "C": "$4-1=2$",
      "D": "$2^3-1=7$"
    },
    "correct_answer": "A",
    "explanation": "The result $3$ is divisible by $3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q22",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $2^{2k}-1$ is divisible by $3$, write it as:",
    "options": {
      "A": "$2^{2k}-1=m$",
      "B": "$2^{2k}-1=3m$",
      "C": "$2^{2k}=3$",
      "D": "$2^{2k}-1=2m$"
    },
    "correct_answer": "B",
    "explanation": "Divisibility by $3$ means the expression equals $3$ times an integer.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q23",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Express (2^{2$k+1$}-1) in terms of $2^{2k}$.",
    "options": {
      "A": "$2^{2k}+1$",
      "B": "(2$2^{2k}$-1)",
      "C": "(4$2^{2k}$-1)",
      "D": "$2^{2k}-4$"
    },
    "correct_answer": "C",
    "explanation": "(2^{2$k+1$}=2^{2k+2}=4cdot2^{2k}).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q24",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $2^{2k}-1=3m$, then (2^{2$k+1$}-1) equals:",
    "options": {
      "A": "$3m+1$",
      "B": "$4m$",
      "C": "$12m$",
      "D": "$12m+3$"
    },
    "correct_answer": "D",
    "explanation": "(4$2^{2k}$-1=4$3m+1$-1=12m+3), divisible by $3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q25",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For every positive integer $n$, $5^n-1$ is divisible by:",
    "options": {
      "A": "$4$",
      "B": "$5$",
      "C": "$3$",
      "D": "$2$ only"
    },
    "correct_answer": "A",
    "explanation": "Since (5equiv1pmod4), (5^n-1equiv0pmod4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q26",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "To prove (4mid$5^n-1$), the base case is:",
    "options": {
      "A": "$5^0-1=0$ only",
      "B": "$5^1-1=4$",
      "C": "$5^2-1=24$ only",
      "D": "$5-4=1$"
    },
    "correct_answer": "B",
    "explanation": "For $1$, the expression equals $4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q27",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $5^k-1=4m$, then $5^{k+1}-1$ equals:",
    "options": {
      "A": "$4m+1$",
      "B": "$5m$",
      "C": "$20m+4$",
      "D": "$20m+5$"
    },
    "correct_answer": "C",
    "explanation": "(5^{k+1}-1=5$4m+1$-1=20m+4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q28",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For every positive integer $n$, $7^n-1$ is divisible by:",
    "options": {
      "A": "$5$",
      "B": "$7$",
      "C": "$12$",
      "D": "$6$"
    },
    "correct_answer": "D",
    "explanation": "Since (7equiv1pmod6), every positive power is also congruent to $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q29",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For positive integer $n$, $3^{2n}-1$ is divisible by:",
    "options": {
      "A": "$8$",
      "B": "$9$",
      "C": "$3$ only",
      "D": "$6$ only"
    },
    "correct_answer": "A",
    "explanation": "(3^2=9equiv1pmod8), so (3^{2n}-1equiv0pmod8).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q30",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The base case of (8mid$3^{2n}-1$) gives:",
    "options": {
      "A": "$3-1=2$",
      "B": "$3^2-1=8$",
      "C": "$3^3-1=26$",
      "D": "$9-1=7$"
    },
    "correct_answer": "B",
    "explanation": "At $1$, the expression equals $8$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q31",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which expression is divisible by $6$ for every positive integer $n$?",
    "options": {
      "A": "$5^n+1$",
      "B": "$3^n-1$",
      "C": "$7^n-1$",
      "D": "$2^n+1$"
    },
    "correct_answer": "C",
    "explanation": "(7equiv1pmod6).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q32",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For every positive integer $n$, (n$n+1$) is:",
    "options": {
      "A": "Odd",
      "B": "Prime",
      "C": "A square",
      "D": "Even"
    },
    "correct_answer": "D",
    "explanation": "Two consecutive integers include exactly one even integer.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q33",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For every integer $n$, (n$n+1$$n+2$) is divisible by:",
    "options": {
      "A": "$6$",
      "B": "$4$ only",
      "C": "$5$",
      "D": "$8$"
    },
    "correct_answer": "A",
    "explanation": "Among three consecutive integers, one is divisible by $3$ and at least one is even.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q34",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which expression is always even?",
    "options": {
      "A": "$n^2+n+1$",
      "B": "$n^2+n$",
      "C": "$n^2-n+1$",
      "D": "$2n+1$"
    },
    "correct_answer": "B",
    "explanation": "(n^2+n=n$n+1$), the product of consecutive integers.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q35",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which expression is divisible by $3$ for every integer $n$?",
    "options": {
      "A": "$n^2+1$",
      "B": "$n+1$",
      "C": "$n^3-n$",
      "D": "$n^2-n+1$"
    },
    "correct_answer": "C",
    "explanation": "(n^3-n=n$n-1$$n+1$), a product of three consecutive integers.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q36",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The induction hypothesis for proving $n^3-n$ divisible by $3$ is:",
    "options": {
      "A": "$k^3-k=3m$",
      "B": "$k^3-k=m$",
      "C": "($k+1$^3-$k+1$=3m)",
      "D": "$k^3=3$"
    },
    "correct_answer": "A",
    "explanation": "It states the divisibility claim at the arbitrary integer $k$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q37",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluating the difference $[(k+1)^3-(k+1)]-(k^3-k)$ gives:",
    "options": {
      "A": "$3k+1$",
      "B": "(3k$k+1$)",
      "C": "$k^2+k$",
      "D": "$3k^2$"
    },
    "correct_answer": "B",
    "explanation": "Expansion gives (3k^2+3k=3k$k+1$), which is divisible by $3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q38",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The statement $2^nge n+1$ begins with equality at:",
    "options": {
      "A": "$1$ only",
      "B": "$1$ only",
      "C": "$1$",
      "D": "$1$"
    },
    "correct_answer": "C",
    "explanation": "At $1$, $2^1=2=1+1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q39",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $2^kge k+1$, then (2^{k+1}ge2$k+1$). To prove $2^{k+1}ge k+2$, we use:",
    "options": {
      "A": "$2kle k$",
      "B": "$k+1le0$",
      "C": "(2$k+1$=k+1)",
      "D": "(2$k+1$ge k+2) for $kge0$"
    },
    "correct_answer": "D",
    "explanation": "Their difference is $k$, which is nonnegative.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q40",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Bernoulli’s inequality for $x>-1$ and positive integer $n$ is:",
    "options": {
      "A": "($1+x$^nge1+nx)",
      "B": "($1+x$^n=1+x^n)",
      "C": "($1+x$^nle1+nx) always",
      "D": "($1+x$^n=nx)"
    },
    "correct_answer": "A",
    "explanation": "This standard inequality can be proved by induction.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q41",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If (1+2+cdots+n=\\dfrac{n$n+1$}2), then (2+4+cdots+2n) equals:",
    "options": {
      "A": "(\\dfrac{n$n+1$}2)",
      "B": "(n$n+1$)",
      "C": "$2n^2$",
      "D": "$n^2$"
    },
    "correct_answer": "B",
    "explanation": "Multiply the sum of the first $n$ natural numbers by $2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "2 + 4 + \\dots + 2n = n(n+1)"
  },
  {
    "id": "c11-ch7-adv-q42",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The formula (1+3+cdots+$2n-1$=n^2) implies the sum of the first $20$ odd numbers is:",
    "options": {
      "A": "$200$",
      "B": "$420$",
      "C": "$400$",
      "D": "$380$"
    },
    "correct_answer": "C",
    "explanation": "Substitute $1$: $20^2=400$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1 + 3 + 5 + \\dots + (2n-1) = n^2"
  },
  {
    "id": "c11-ch7-adv-q43",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using (sum_{r=1}^nr=\\dfrac{n$n+1$}2), find $sum_{r=1}^{30}r$.",
    "options": {
      "A": "$435$",
      "B": "$450$",
      "C": "$495$",
      "D": "$465$"
    },
    "correct_answer": "D",
    "explanation": "(\\dfrac{30$31$}2=465).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q44",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using the square-sum formula, find (1^2+cdots+10^2).",
    "options": {
      "A": "$385$",
      "B": "$3025$",
      "C": "$100$",
      "D": "$55$"
    },
    "correct_answer": "A",
    "explanation": "(\\dfrac{10$11$$21$}6=385).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}"
  },
  {
    "id": "c11-ch7-adv-q45",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Using the cube-sum formula, find (1^3+cdots+8^3).",
    "options": {
      "A": "$666$",
      "B": "$1296$",
      "C": "$512$",
      "D": "$2025$"
    },
    "correct_answer": "B",
    "explanation": "([\\dfrac{8$9$}2]^2=36^2=1296).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "1^3 + 2^3 + \\dots + n^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2"
  },
  {
    "id": "c11-ch7-adv-q46",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which statement is false?",
    "options": {
      "A": "Induction needs a base case",
      "B": "Induction assumes $1$ temporarily",
      "C": "Proving only $1$ proves every case",
      "D": "The inductive step proves $1$"
    },
    "correct_answer": "C",
    "explanation": "A verified base case without an inductive implication proves only that single case.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q47",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Strong induction differs because it assumes:",
    "options": {
      "A": "Only $1$",
      "B": "No previous cases",
      "C": "Only the base case",
      "D": "All cases through $1$"
    },
    "correct_answer": "D",
    "explanation": "Strong induction uses (P$1$,P$2$,ldots,P$k$) to establish the next case.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q48",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "A counterexample to a universal statement:",
    "options": {
      "A": "Is enough to disprove it",
      "B": "Proves it for all integers",
      "C": "Is irrelevant",
      "D": "Must be positive"
    },
    "correct_answer": "A",
    "explanation": "A claim asserted for every case is false if even one valid case fails.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q49",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If an induction proof starts at $1$, the required base case is:",
    "options": {
      "A": "$1$",
      "B": "$1$",
      "C": "$1$",
      "D": "$1$ only"
    },
    "correct_answer": "B",
    "explanation": "The induction chain must begin at the first integer included in the claim.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  },
  {
    "id": "c11-ch7-adv-q50",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "If $1$ is true and (P$k$Rightarrow P$k+1$) for every $kge5$, then $1$ is proved for:",
    "options": {
      "A": "All integers",
      "B": "$n<5$ only",
      "C": "Every integer $nge5$",
      "D": "Even integers only"
    },
    "correct_answer": "C",
    "explanation": "The chain begins at $5$ and advances through all subsequent integers.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "P(1) \\text{ is true} \\;\\land\\; [P(k) \\implies P(k+1)] \\implies P(n) \\text{ holds } \\forall n \\in \\mathbb{N}"
  }
];
