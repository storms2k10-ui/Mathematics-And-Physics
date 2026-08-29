import { Question } from '../types';

export const C11_CH7_ADVANCED_PART2: Question[] = [
  {
    "id": "c11-ch7-adv-q51",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The binomial theorem expands:",
    "options": {
      "A": "$x^n+y^n$",
      "B": "$xy^n$",
      "C": "$x^n-y^n$",
      "D": "($x+y$^n)"
    },
    "correct_answer": "D",
    "explanation": "It expresses a power of a two-term expression as a sum involving binomial coefficients.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q52",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "For a positive integer $n$, $(x+y)^n = $",
    "options": {
      "A": "(displaystylesum_{r=0}^n\binom nr x^{n-r}y^r)",
      "B": "(displaystylesum_{r=0}^n\binom nr x^ry^r)",
      "C": "$x^n+y^n$",
      "D": "(displaystylesum_{r=1}^n x^{n-r}y^r)"
    },
    "correct_answer": "A",
    "explanation": "The powers of $x$ decrease while those of $y$ increase.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q53",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The expansion of ($x+y$^n) contains:",
    "options": {
      "A": "$n$ terms",
      "B": "$n+1$ terms",
      "C": "$2n$ terms",
      "D": "$n-1$ terms"
    },
    "correct_answer": "B",
    "explanation": "The index $r$ takes the values (0,1,ldots,n).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q54",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The first term of ($x+y$^n) is:",
    "options": {
      "A": "$y^n$",
      "B": "$nx^{n-1}y$",
      "C": "$x^n$",
      "D": "$1$"
    },
    "correct_answer": "C",
    "explanation": "Set $1$ in the general term.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q55",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The last term of ($x+y$^n) is:",
    "options": {
      "A": "$x^n$",
      "B": "$ny^{n-1}$",
      "C": "$xy^{n-1}$",
      "D": "$y^n$"
    },
    "correct_answer": "D",
    "explanation": "Set $1$, making the power of $x$ zero.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q56",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($x+y$^2).",
    "options": {
      "A": "$x^2+2xy+y^2$",
      "B": "$x^2+y^2$",
      "C": "$x^2+xy+y^2$",
      "D": "$x^2-2xy+y^2$"
    },
    "correct_answer": "A",
    "explanation": "The binomial coefficients for $1$ are $1,2,1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q57",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($x-y$^2).",
    "options": {
      "A": "$x^2+2xy+y^2$",
      "B": "$x^2-2xy+y^2$",
      "C": "$x^2-y^2$",
      "D": "$x^2-xy+y^2$"
    },
    "correct_answer": "B",
    "explanation": "Substitute $-y$ for $y$ in the expansion of ($x+y$^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q58",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($x+y$^3).",
    "options": {
      "A": "$x^3+y^3$",
      "B": "$x^3+2x^2y+2xy^2+y^3$",
      "C": "$x^3+3x^2y+3xy^2+y^3$",
      "D": "$x^3-3x^2y+3xy^2-y^3$"
    },
    "correct_answer": "C",
    "explanation": "The coefficients are $1,3,3,1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q59",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($x-y$^3).",
    "options": {
      "A": "$x^3-3x^2y-3xy^2-y^3$",
      "B": "$x^3-y^3$",
      "C": "$x^3+3x^2y-3xy^2-y^3$",
      "D": "$x^3-3x^2y+3xy^2-y^3$"
    },
    "correct_answer": "D",
    "explanation": "Odd powers of $-y$ are negative and even powers are positive.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q60",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Expand ($a+b$^4).",
    "options": {
      "A": "$a^4+4a^3b+6a^2b^2+4ab^3+b^4$",
      "B": "$a^4+2a^2b^2+b^4$",
      "C": "$a^4+4a^2b^2+b^4$",
      "D": "$a^4+3a^3b+3ab^3+b^4$"
    },
    "correct_answer": "A",
    "explanation": "The fourth-row binomial coefficients are $1,4,6,4,1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q61",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^2y^2$ in ($x+y$^4) is:",
    "options": {
      "A": "$4$",
      "B": "$6$",
      "C": "$2$",
      "D": "$12$"
    },
    "correct_answer": "B",
    "explanation": "The coefficient is (\binom42=6).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q62",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^3y^2$ in ($x+y$^5) is:",
    "options": {
      "A": "$5$",
      "B": "$20$",
      "C": "$10$",
      "D": "$15$"
    },
    "correct_answer": "C",
    "explanation": "The power of $y$ is $2$, so the coefficient is (\binom52=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q63",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^2y^4$ in ($x+y$^6) is:",
    "options": {
      "A": "$6$",
      "B": "$20$",
      "C": "$30$",
      "D": "$15$"
    },
    "correct_answer": "D",
    "explanation": "The coefficient is (\binom64=\binom62=15).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q64",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+x$^5).",
    "options": {
      "A": "$10$",
      "B": "$5$",
      "C": "$20$",
      "D": "$1$"
    },
    "correct_answer": "A",
    "explanation": "The coefficient is (\binom53=10).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q65",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($1+x$^7).",
    "options": {
      "A": "$21$",
      "B": "$35$",
      "C": "$28$",
      "D": "$7$"
    },
    "correct_answer": "B",
    "explanation": "(\binom74=\binom73=35).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q66",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ($1+2x$^4).",
    "options": {
      "A": "$6$",
      "B": "$12$",
      "C": "$24$",
      "D": "$16$"
    },
    "correct_answer": "C",
    "explanation": "The term is (\binom42$2x$^2=6$4$x^2=24x^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q67",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($1+3x$^5).",
    "options": {
      "A": "$90$",
      "B": "$135$",
      "C": "$243$",
      "D": "$270$"
    },
    "correct_answer": "D",
    "explanation": "(\binom53 3^3=10$27$=270).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q68",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^2$ in ($2+x$^5).",
    "options": {
      "A": "$80$",
      "B": "$40$",
      "C": "$20$",
      "D": "$160$"
    },
    "correct_answer": "A",
    "explanation": "(\binom52 2^3x^2=10$8$x^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q69",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^3$ in ($2+x$^6).",
    "options": {
      "A": "$80$",
      "B": "$160$",
      "C": "$120$",
      "D": "$240$"
    },
    "correct_answer": "B",
    "explanation": "(\binom63 2^3=20$8$=160).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q70",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the coefficient of $x^4$ in ($3+x$^6).",
    "options": {
      "A": "$45$",
      "B": "$90$",
      "C": "$135$",
      "D": "$270$"
    },
    "correct_answer": "C",
    "explanation": "(\binom64 3^2=15$9$=135).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q71",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The general ($r+1$)th term of ($x+y$^n) is:",
    "options": {
      "A": "(\binom nr x^ry^{n-r})",
      "B": "(\binom n{r+1}x^{n-r}y^r)",
      "C": "(\binom nr x^{n+r}y^r)",
      "D": "(\binom nr x^{n-r}y^r)"
    },
    "correct_answer": "D",
    "explanation": "The indexing begins with $1$, corresponding to the first term.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q72",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The fourth term of ($x+y$^n) is:",
    "options": {
      "A": "(\binom n3x^{n-3}y^3)",
      "B": "(\binom n4x^{n-4}y^4)",
      "C": "(\binom n3x^3y^{n-3})",
      "D": "(\binom n2x^{n-2}y^2)"
    },
    "correct_answer": "A",
    "explanation": "The fourth term corresponds to $1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q73",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The third term of ($x+y$^8) is:",
    "options": {
      "A": "$8x^7y$",
      "B": "$28x^6y^2$",
      "C": "$56x^5y^3$",
      "D": "$x^8$"
    },
    "correct_answer": "B",
    "explanation": "Set $1$: (\binom82x^6y^2=28x^6y^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q74",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The fifth term of ($x+y$^7) is:",
    "options": {
      "A": "$21x^5y^2$",
      "B": "$7x^3y^4$",
      "C": "$35x^3y^4$",
      "D": "$35x^4y^3$"
    },
    "correct_answer": "C",
    "explanation": "Set $1$: (\binom74x^3y^4=35x^3y^4).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q75",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the fourth term of ($2x+y$^5).",
    "options": {
      "A": "$40x^3y^2$",
      "B": "$80x^2y^3$",
      "C": "$20x^2y^3$",
      "D": "$40x^2y^3$"
    },
    "correct_answer": "D",
    "explanation": "(T_4=\binom53$2x$^2y^3=10$4$x^2y^3=40x^2y^3).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q76",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the third term of ($x+2y$^6).",
    "options": {
      "A": "$60x^4y^2$",
      "B": "$30x^4y^2$",
      "C": "$120x^4y^2$",
      "D": "$15x^4y^2$"
    },
    "correct_answer": "A",
    "explanation": "(T_3=\binom62x^4$2y$^2=15$4$x^4y^2=60x^4y^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q77",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the fourth term of ($x-2y$^5).",
    "options": {
      "A": "$40x^2y^3$",
      "B": "$-80x^2y^3$",
      "C": "$-40x^2y^3$",
      "D": "$80x^2y^3$"
    },
    "correct_answer": "B",
    "explanation": "(T_4=\binom53x^2$-2y$^3=10$-8$x^2y^3=-80x^2y^3).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q78",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Find the third term of ($2x-3y$^4).",
    "options": {
      "A": "$144x^2y^2$",
      "B": "$-144x^2y^2$",
      "C": "$54x^2y^2$",
      "D": "$216x^2y^2$"
    },
    "correct_answer": "D",
    "explanation": "(\binom42$2x$^2$-3y$^2=6$4$$9$x^2y^2=216x^2y^2).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q79",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The sum of the powers of $x$ and $y$ in every term of ($x+y$^n) is:",
    "options": {
      "A": "$n$",
      "B": "$n+1$",
      "C": "$2n$",
      "D": "$r$"
    },
    "correct_answer": "A",
    "explanation": "Each term has powers $n-r$ and $r$, whose sum is $n$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q80",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In successive terms of ($x+y$^n), the power of $x$:",
    "options": {
      "A": "Increases by $1$",
      "B": "Decreases by $1$",
      "C": "Remains constant",
      "D": "Doubles"
    },
    "correct_answer": "B",
    "explanation": "The exponent changes from $n-r$ to $n-r-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q81",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "In successive terms of ($x+y$^n), the power of $y$:",
    "options": {
      "A": "Decreases by $1$",
      "B": "Remains zero",
      "C": "Increases by $1$",
      "D": "Doubles"
    },
    "correct_answer": "C",
    "explanation": "Its exponent is $r$, which increases successively from $0$ to $n$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q82",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The binomial coefficients in ($x+y$^n) are:",
    "options": {
      "A": "All equal",
      "B": "Strictly decreasing",
      "C": "Alternating in sign",
      "D": "Symmetric"
    },
    "correct_answer": "D",
    "explanation": "(\binom nr=\binom n{n-r}).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q83",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which coefficients occur in the expansion of ($x+y$^5)?",
    "options": {
      "A": "$1,5,10,10,5,1$",
      "B": "$1,4,6,4,1$",
      "C": "$1,5,5,1$",
      "D": "$1,6,15,20,15,6,1$"
    },
    "correct_answer": "A",
    "explanation": "These are the entries in row $5$ of Pascal’s triangle.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q84",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Which coefficients occur in ($x+y$^6)?",
    "options": {
      "A": "$1,5,10,10,5,1$",
      "B": "$1,6,15,20,15,6,1$",
      "C": "$1,7,21,35,35,21,7,1$",
      "D": "$1,6,6,1$"
    },
    "correct_answer": "B",
    "explanation": "They are (\binom60,\binom61,ldots,\binom66).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q85",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Pascal’s identity is:",
    "options": {
      "A": "(\binom nr=\binom n{n-r})",
      "B": "(\binom nr=\binom{n-1}r-\binom{n-1}{r-1})",
      "C": "(\binom nr=\binom{n-1}{r-1}+\binom{n-1}r)",
      "D": "(\binom nr=n\binom{n-1}r)"
    },
    "correct_answer": "C",
    "explanation": "Each interior Pascal-triangle entry is the sum of the two entries above it.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q86",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (\binom80+\binom81+cdots+\binom88).",
    "options": {
      "A": "$128$",
      "B": "$512$",
      "C": "$64$",
      "D": "$256$"
    },
    "correct_answer": "D",
    "explanation": "Set $x=y=1$ in ($x+y$^8), giving $2^8=256$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q87",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The sum of all coefficients in ($x+y$^n) is:",
    "options": {
      "A": "$2^n$",
      "B": "(n!)",
      "C": "$n^2$",
      "D": "$2n$"
    },
    "correct_answer": "A",
    "explanation": "Set $x=y=1$ in the expansion.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q88",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The alternating sum\n\n$$\n\\binom{n}{0} - \\binom{n}{1} + \\binom{n}{2} - \\cdots\n$$\n\nequals, for $nge1$:",
    "options": {
      "A": "$2^n$",
      "B": "$0$",
      "C": "$1$",
      "D": "$-1$"
    },
    "correct_answer": "B",
    "explanation": "Set $x=1,y=-1$ in ($x+y$^n), giving $0^n=0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q89",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The sum of the even-indexed binomial coefficients of order $nge1$ is:",
    "options": {
      "A": "$2^n$",
      "B": "(n!)",
      "C": "$2^{n-1}$",
      "D": "$n^2$"
    },
    "correct_answer": "C",
    "explanation": "The even and odd indexed coefficient sums are equal and together total $2^n$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q90",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The sum of the odd-indexed binomial coefficients of order $nge1$ is:",
    "options": {
      "A": "$2^n$",
      "B": "$0$",
      "C": "$2n$",
      "D": "$2^{n-1}$"
    },
    "correct_answer": "D",
    "explanation": "It equals the even-indexed sum.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q91",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (\binom70+\binom72+\binom74+\binom76).",
    "options": {
      "A": "$64$",
      "B": "$128$",
      "C": "$32$",
      "D": "$256$"
    },
    "correct_answer": "A",
    "explanation": "It is the even-indexed sum $2^{7-1}=64$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q92",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (\binom71+\binom73+\binom75+\binom77).",
    "options": {
      "A": "$32$",
      "B": "$64$",
      "C": "$128$",
      "D": "$56$"
    },
    "correct_answer": "B",
    "explanation": "It is the odd-indexed sum $2^{6}=64$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n, \\quad C_0 + C_2 + \\dots = C_1 + C_3 + \\dots = 2^{n-1}"
  },
  {
    "id": "c11-ch7-adv-q93",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}$-1$^r\binom nr).",
    "options": {
      "A": "$1$",
      "B": "$2^n$",
      "C": "$0$",
      "D": "($-1$^n)"
    },
    "correct_answer": "C",
    "explanation": "This is the expansion of ($1-1$^n).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q94",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}2^r\binom nr).",
    "options": {
      "A": "$2^n$",
      "B": "$4^n$",
      "C": "$n2^n$",
      "D": "$3^n$"
    },
    "correct_answer": "D",
    "explanation": "It is the expansion of ($1+2$^n).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q95",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}3^r\binom nr).",
    "options": {
      "A": "$4^n$",
      "B": "$3^n$",
      "C": "$2^n$",
      "D": "$n3^n$"
    },
    "correct_answer": "A",
    "explanation": "Set $x=1,y=3$ in the binomial theorem.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q96",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{n}$-2$^r\binom nr).",
    "options": {
      "A": "$2^n$",
      "B": "($-1$^n)",
      "C": "$3^n$",
      "D": "$0$"
    },
    "correct_answer": "B",
    "explanation": "The sum equals ($1-2$^n=$-1$^n).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q97",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{5}\binom5r).",
    "options": {
      "A": "$16$",
      "B": "$64$",
      "C": "$32$",
      "D": "$25$"
    },
    "correct_answer": "C",
    "explanation": "The sum equals $2^5=32$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q98",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "Evaluate (displaystylesum_{r=0}^{6}2^r\binom6r).",
    "options": {
      "A": "$64$",
      "B": "$216$",
      "C": "$729$",
      "D": "$729$"
    },
    "correct_answer": "D",
    "explanation": "The sum is $3^6=729$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  },
  {
    "id": "c11-ch7-adv-q99",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^r$ in ($1+x$^n) is:",
    "options": {
      "A": "(\binom nr)",
      "B": "$n^r$",
      "C": "(r!)",
      "D": "(\binom n{r+1})"
    },
    "correct_answer": "A",
    "explanation": "The general term is (\binom nr x^r).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(x+y)^n = \\sum_{r=0}^n \\binom{n}{r} x^{n-r} y^r, \\quad T_{r+1} = \\binom{n}{r} x^{n-r} y^r"
  },
  {
    "id": "c11-ch7-adv-q100",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch7",
    "question": "The coefficient of $x^r$ in ($1-x$^n) is:",
    "options": {
      "A": "(\binom nr)",
      "B": "($-1$^r\binom nr)",
      "C": "(-\binom nr) always",
      "D": "($-1$^n\binom nr)"
    },
    "correct_answer": "B",
    "explanation": "The factor ($-x$^r) supplies the sign ($-1$^r).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r"
  }
];
