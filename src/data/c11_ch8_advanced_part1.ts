import { Question } from '../types';

export const C11_CH8_ADVANCED_PART1: Question[] = [
  {
    "id": "c11-ch8-adv-q1",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which relation from $A=\\{1,2,3\\}$ to $B=\\{a,b\\}$ represents a function?",
    "options": {
      "A": "$\\{$1,a$,$1,b$,$2,a$,$3,b$\\}$",
      "B": "$\\{$1,a$,$2,a$,$3,b$\\}$",
      "C": "$\\{$1,a$,$2,b$\\}$",
      "D": "$\\{$1,a$,$2,a$,$2,b$,$3,b$\\}$"
    },
    "correct_answer": "B",
    "explanation": "A relation is a function when every element of the domain has exactly one image. In B, each of $1,2,3$ occurs exactly once as a first component.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q2",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=3x-5$, then $f$4$$ equals:",
    "options": {
      "A": "$5$",
      "B": "$7$",
      "C": "$9$",
      "D": "$12$"
    },
    "correct_answer": "B",
    "explanation": "Substitute $x=4$: $f$4$=3$4$-5=12-5=7$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q3",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2-2x+1$, find $f$-2$$.",
    "options": {
      "A": "$1$",
      "B": "$5$",
      "C": "$9$",
      "D": "$-7$"
    },
    "correct_answer": "C",
    "explanation": "$f$-2$=$-2$^2-2$-2$+1=4+4+1=9$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q4",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\dfrac{1}{x-3}$ is:",
    "options": {
      "A": "$\\mathbb{R}$",
      "B": "$\\mathbb{R}\\setminus\\{0\\}$",
      "C": "$\\mathbb{R}\\setminus\\{3\\}$",
      "D": "$x>3$"
    },
    "correct_answer": "C",
    "explanation": "The denominator cannot be zero. Hence $x-3\\ne0$, so $x\\ne3$, giving domain $\\mathbb{R}\\setminus\\{3\\}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q5",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\sqrt{x-5}$ is:",
    "options": {
      "A": "$x>5$",
      "B": "$x\\ge5$",
      "C": "$x\\le5$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "B",
    "explanation": "For a real square root, the radicand must be non-negative: $x-5\\ge0 \\implies x\\ge5$, i.e. $[5,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q6",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=x^2$, where $x\\in\\mathbb{R}$, is:",
    "options": {
      "A": "$\\mathbb{R}$",
      "B": "$(-\\infty,0]$",
      "C": "$[0,\\infty)$",
      "D": "$(0,\\infty)$"
    },
    "correct_answer": "C",
    "explanation": "A real square is never negative, and every non-negative number is the square of some real number. Hence the range is $[0,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q7",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=2x+1$ and $f$a$=11$, then $a=$:",
    "options": {
      "A": "$4$",
      "B": "$5$",
      "C": "$6$",
      "D": "$10$"
    },
    "correct_answer": "B",
    "explanation": "$2a+1=11 \\implies 2a=10 \\implies a=5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q8",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is constant?",
    "options": {
      "A": "f(x)$=x+4$",
      "B": "f(x)$=x^2$",
      "C": "f(x)$=7$",
      "D": "f(x)$=\\dfrac{1}{x}$"
    },
    "correct_answer": "C",
    "explanation": "A constant function assigns the same output to every input. Here f(x)$=7$ for all $x\\in\\mathbb{R}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q9",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The identity function on $\\mathbb{R}$ is:",
    "options": {
      "A": "f(x)$=0$",
      "B": "f(x)$=1$",
      "C": "f(x)$=x$",
      "D": "f(x)$=-x$"
    },
    "correct_answer": "C",
    "explanation": "An identity function maps every element to itself, so f(x)$=x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q10",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=|x|$, then $f$-7$+f$3$=$:",
    "options": {
      "A": "$-4$",
      "B": "$4$",
      "C": "$10$",
      "D": "$-10$"
    },
    "correct_answer": "C",
    "explanation": "$|-7|=7$ and $|3|=3$. Thus the sum is $7+3=10$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q11",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which set of ordered pairs does not represent a function?",
    "options": {
      "A": "$\\{$1,2$,$2,3$,$3,4$\\}$",
      "B": "$\\{$1,2$,$2,2$,$3,2$\\}$",
      "C": "$\\{$1,2$,$1,3$,$2,4$\\}$",
      "D": "$\\{$-1,1$,$0,0$,$1,1$\\}$"
    },
    "correct_answer": "C",
    "explanation": "The input $1$ has two different outputs, $2$ and $3$, violating the definition of a function.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q12",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^3$, then $f$-2$=$:",
    "options": {
      "A": "$-8$",
      "B": "$-6$",
      "C": "$6$",
      "D": "$8$"
    },
    "correct_answer": "A",
    "explanation": "$f$-2$=$-2$^3=-8$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q13",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\dfrac{x+1}{x^2-9}$ excludes:",
    "options": {
      "A": "$0$ and $3$",
      "B": "$-3$ and $3$",
      "C": "$-1$ and $1$",
      "D": "Only $3$"
    },
    "correct_answer": "B",
    "explanation": "$x^2-9=$x-3$$x+3$=0 \\implies x=\\pm3$. Hence $\\pm3$ are excluded from the domain.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q14",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\sqrt{9-x^2}$ is:",
    "options": {
      "A": "$[-3,3]$",
      "B": "$(-\\infty,-3]$",
      "C": "$[3,\\infty)$",
      "D": "$\\mathbb{R}\\setminus\\{-3,3\\}$"
    },
    "correct_answer": "A",
    "explanation": "$9-x^2\\ge0 \\implies x^2\\le9 \\implies -3\\le x\\le3$, which is $[-3,3]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q15",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=x^2+4$ is:",
    "options": {
      "A": "$[0,\\infty)$",
      "B": "$(-\\infty,4]$",
      "C": "$[4,\\infty)$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "C",
    "explanation": "Since $x^2\\ge0$, $x^2+4\\ge4$. The minimum value $4$ occurs at $x=0$, so the range is $[4,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q16",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For f(x)$=2-x^2$, the maximum value is:",
    "options": {
      "A": "$-2$",
      "B": "$0$",
      "C": "$2$",
      "D": "No maximum"
    },
    "correct_answer": "C",
    "explanation": "Since $-x^2\\le0$, $2-x^2\\le2$. The maximum value is $2$, occurring at $x=0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q17",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\sqrt{x+2}$, then $f$7$=$:",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$5$",
      "D": "$9$"
    },
    "correct_answer": "B",
    "explanation": "$f$7$=\\sqrt{7+2}=\\sqrt{9}=3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q18",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=|x-2|$ is:",
    "options": {
      "A": "$\\mathbb{R}$",
      "B": "$(-\\infty,0]$",
      "C": "$[0,\\infty)$",
      "D": "$[2,\\infty)$"
    },
    "correct_answer": "C",
    "explanation": "The absolute value function produces only non-negative outputs, with a minimum of $0$ at $x=2$. Thus the range is $[0,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q19",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x+2$, then f(x)+h$-f$x$=$:",
    "options": {
      "A": "$2h$",
      "B": "$h$",
      "C": "$x+h$",
      "D": "$2$"
    },
    "correct_answer": "B",
    "explanation": "f(x)+h$=$x+h$+2$. Therefore f(x)+h$-f$x$=$x+h+2$-$x+2$=h$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q20",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For $f(x)=x^2$, the difference quotient $\\dfrac{f(x+h)-f(x)}{h}$ simplifies to:",
    "options": {
      "A": "$2x$",
      "B": "$x+h$",
      "C": "$2x+h$",
      "D": "$2x-h$"
    },
    "correct_answer": "C",
    "explanation": "$\\dfrac{(x+h)^2-x^2}{h}=\\dfrac{x^2+2xh+h^2-x^2}{h}=\\dfrac{2xh+h^2}{h}=2x+h$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q21",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is even?",
    "options": {
      "A": "f(x)$=x^3$",
      "B": "f(x)$=x^2+1$",
      "C": "f(x)$=x+1$",
      "D": "f(x)$=2x^3-x$"
    },
    "correct_answer": "B",
    "explanation": "f(-x)$=$-x$^2+1=x^2+1=f$x$$, satisfying the condition for an even function.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q22",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is odd?",
    "options": {
      "A": "f(x)$=x^3-2x$",
      "B": "f(x)$=x^2+x$",
      "C": "f(x)$=x^2-1$",
      "D": "f(x)$=|x|$"
    },
    "correct_answer": "A",
    "explanation": "f(-x)$=$-x$^3-2$-x$=-x^3+2x=-$x^3-2x$=-f$x$$, so $f$ is an odd function.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q23",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of an even function is symmetric about the:",
    "options": {
      "A": "$x$-axis",
      "B": "$y$-axis",
      "C": "Origin",
      "D": "Line $y=x$"
    },
    "correct_answer": "B",
    "explanation": "For an even function, f(-x)$=f$x$, meaning points $(x,y)$ and $-x,y$$ both lie on the graph, giving reflectional symmetry across the $y$-axis.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q24",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of an odd function is symmetric about the:",
    "options": {
      "A": "Origin",
      "B": "$x$-axis",
      "C": "$y$-axis",
      "D": "Line $y=-x$"
    },
    "correct_answer": "A",
    "explanation": "For an odd function, f(-x)$=-f$x$, meaning $(x,y)$ and $-x,-y$$ both lie on the graph, giving $180^\\circ$ rotational symmetry about the origin.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q25",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is neither even nor odd?",
    "options": {
      "A": "f(x)$=x^2$",
      "B": "f(x)$=x^3$",
      "C": "f(x)$=x^2+x$",
      "D": "f(x)$=x^5-3x$"
    },
    "correct_answer": "C",
    "explanation": "$f(-x)=(-x)^2-2(-x)=x^2+2x$, which is neither equal to $f(x)$ nor $-f(x)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q26",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If the domain is $\\{-2,-1,0,1,2\\}$ and f(x)$=x^2$, its range is:",
    "options": {
      "A": "$\\{0,1,2,4\\}$",
      "B": "$\\{0,1,4\\}$",
      "C": "$\\{-4,-1,0,1,4\\}$",
      "D": "$\\{1,4\\}$"
    },
    "correct_answer": "B",
    "explanation": "Evaluating $f$ at each element: $f$-2$=4, f$-1$=1, f$0$=0, f$1$=1, f$2$=4$. The set of distinct values is $\\{0,1,4\\}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q27",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{1}{x^2+1}$, its range is:",
    "options": {
      "A": "$(0,1]$",
      "B": "$[0,1]$",
      "C": "$[1,\\infty)$",
      "D": "$\\mathbb{R}\\setminus\\{0\\}$"
    },
    "correct_answer": "A",
    "explanation": "Since $x^2+1\\ge1$, we have $0 < \\dfrac{1}{x^2+1} \\le 1$. The maximum $1$ is attained at $x=0$, and as $x\\to\\pm\\infty$, f(x)$\\to0$ but never reaches $0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q28",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=\\dfrac{1}{x}$, $x\\ne0$, is:",
    "options": {
      "A": "$\\mathbb{R}$",
      "B": "$[0,\\infty)$",
      "C": "$\\mathbb{R}\\setminus\\{0\\}$",
      "D": "$(-\\infty,0)$"
    },
    "correct_answer": "C",
    "explanation": "For any $y\\in\\mathbb{R}\\setminus\\{0\\}$, setting $x=1/y$ gives f(x)$=y$. The output $0$ is never achieved.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q29",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\sqrt{4-x}$, its domain is:",
    "options": {
      "A": "$x\\ge4$",
      "B": "$x\\le4$",
      "C": "$x<4$",
      "D": "$x>4$"
    },
    "correct_answer": "B",
    "explanation": "$4-x\\ge0 \\implies x\\le4$, which in interval notation is $(-\\infty,4]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q30",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\sqrt{x^2-4}$, its domain is:",
    "options": {
      "A": "$[-2,2]$",
      "B": "$(-\\infty,-2]\\cup[2,\\infty)$",
      "C": "$\\mathbb{R}\\setminus\\{-2,2\\}$",
      "D": "$[2,\\infty)$"
    },
    "correct_answer": "B",
    "explanation": "$x^2-4\\ge0 \\implies x^2\\ge4 \\implies x\\le-2$ or $x\\ge2$, i.e. $(-\\infty,-2]\\cup[2,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q31",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\dfrac{1}{\\sqrt{x-1}}$ is:",
    "options": {
      "A": "$x\\ge1$",
      "B": "$x>1$",
      "C": "$x<1$",
      "D": "$x\\ne1$"
    },
    "correct_answer": "B",
    "explanation": "The expression inside the radical must be strictly positive since it is in the denominator: $x-1>0 \\implies x>1$, i.e. $(1,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q32",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{x-1}{x+2}$, then $f$0$=$:",
    "options": {
      "A": "$-2$",
      "B": "$-\\dfrac{1}{2}$",
      "C": "$\\dfrac{1}{2}$",
      "D": "$2$"
    },
    "correct_answer": "B",
    "explanation": "Substitute $x=0$: $f$0$=\\dfrac{0-1}{0+2}=-\\dfrac{1}{2}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q33",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For f(x)$=ax+b$, if $f$1$=5$ and $f$3$=11$, then $a=$:",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$6$"
    },
    "correct_answer": "B",
    "explanation": "$a=\\dfrac{f(3)-f(1)}{3-1}=\\dfrac{11-5}{2}=\\dfrac{6}{2}=3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q34",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "In Question 33, the value of $b$ is:",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$3$",
      "D": "$4$"
    },
    "correct_answer": "B",
    "explanation": "Using $f$1$=5 \\implies 3$1$+b=5 \\implies b=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q35",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A function $f:A\\to B$ is one-one (injective) if:",
    "options": {
      "A": "Every element of $B$ has a preimage",
      "B": "Distinct inputs always map to distinct outputs",
      "C": "Every input has two outputs",
      "D": "Its range is empty"
    },
    "correct_answer": "B",
    "explanation": "By definition, $f$ is injective $one-to-one$ if f(x)_1$=f$x_2$ \\implies x_1=x_2$, i.e. distinct inputs have distinct outputs.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q36",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function from $\\mathbb{R}$ to $\\mathbb{R}$ is one-one?",
    "options": {
      "A": "f(x)$=x^2$",
      "B": "f(x)$=|x|$",
      "C": "f(x)$=2x-3$",
      "D": "f(x)$=x^4$"
    },
    "correct_answer": "C",
    "explanation": "For f(x)$=2x-3$, $2x_1-3=2x_2-3 \\implies x_1=x_2$. The other functions map both $x$ and $-x$ to the same value.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q37",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=x^2$ becomes one-one if its domain is restricted to:",
    "options": {
      "A": "$\\mathbb{R}$",
      "B": "$[0,\\infty)$",
      "C": "$[-1,1]$",
      "D": "$\\mathbb{R}\\setminus\\{0\\}$"
    },
    "correct_answer": "B",
    "explanation": "On $[0,\\infty)$, f(x)$=x^2$ is strictly increasing, so $x_1^2=x_2^2 \\implies x_1=x_2$ for $x_1,x_2\\ge0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q38",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A function $f:A\\to B$ is onto (surjective) if:",
    "options": {
      "A": "Every element of $A$ has two images",
      "B": "Its domain equals its range",
      "C": "Every element of $B$ is the image of at least one element of $A$",
      "D": "Distinct inputs have distinct outputs"
    },
    "correct_answer": "C",
    "explanation": "A function is surjective (onto) when its range equals its codomain $B$: $\\text{Range}(f)=B$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q39",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function $f:\\mathbb{R}\\to\\mathbb{R}$, f(x)$=x^3$, is:",
    "options": {
      "A": "One-one only",
      "B": "Onto only",
      "C": "Both one-one and onto (bijective)",
      "D": "Neither"
    },
    "correct_answer": "C",
    "explanation": "$x^3$ is strictly increasing (hence one-one) and for every $y\\in\\mathbb{R}$, $x=\\sqrt[3]{y}$ satisfies f(x)$=y$ (hence onto).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q40",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function $f:\\mathbb{R}\\to\\mathbb{R}$, f(x)$=x^2$, is:",
    "options": {
      "A": "One-one and onto",
      "B": "One-one but not onto",
      "C": "Onto but not one-one",
      "D": "Neither one-one nor onto"
    },
    "correct_answer": "D",
    "explanation": "Not one-one since $f$-1$=f$1$=1$. Not onto $\\mathbb{R}$ since negative reals have no preimages.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q41",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function $f:\\mathbb{R}\\to[0,\\infty)$, f(x)$=x^2$, is:",
    "options": {
      "A": "Onto but not one-one",
      "B": "One-one but not onto",
      "C": "Bijective",
      "D": "Neither"
    },
    "correct_answer": "A",
    "explanation": "The range is $[0,\\infty)$, matching the codomain, so it is onto. However, f(-x)$=f$x$$, so it is not one-one.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q42",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A function that is both one-one and onto is called:",
    "options": {
      "A": "Constant",
      "B": "Composite",
      "C": "Bijective",
      "D": "Periodic"
    },
    "correct_answer": "C",
    "explanation": "A bijection is defined as a function that is simultaneously injective $one-one$ and surjective (onto).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q43",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function $f:\\mathbb{R}\\to\\mathbb{R}$ is onto?",
    "options": {
      "A": "f(x)$=x^2$",
      "B": "f(x)$=|x|$",
      "C": "f(x)$=x^3+1$",
      "D": "f(x)$=x^4+2$"
    },
    "correct_answer": "C",
    "explanation": "For any $y\\in\\mathbb{R}$, solving $y=x^3+1$ yields a unique real preimage $x=\\sqrt[3]{y-1}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q44",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $A$ has three elements and $B$ has two elements, can a function $A\\to B$ be one-one?",
    "options": {
      "A": "Always",
      "B": "Never",
      "C": "Only if it is constant",
      "D": "Only if it is onto"
    },
    "correct_answer": "B",
    "explanation": "By the Pigeonhole Principle, mapping 3 domain elements into a 2-element codomain forces at least two elements to share an image.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q45",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If finite sets $A$ and $B$ have the same number of elements, every one-one function $A\\to B$ is:",
    "options": {
      "A": "Constant",
      "B": "Onto",
      "C": "Many-one",
      "D": "Undefined"
    },
    "correct_answer": "B",
    "explanation": "For finite sets of equal cardinality $|A|=|B|=n$, an injection must cover all $n$ distinct elements of $B$, making it surjective (onto).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q46",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=2x+3$ and g(x)$=x^2$, then $f+g$x$=$:",
    "options": {
      "A": "$x^2+2x+3$",
      "B": "$2x^2+3$",
      "C": "$$2x+3$^2$",
      "D": "$x^2-2x-3$"
    },
    "correct_answer": "A",
    "explanation": "$f+g$x$=f$x$+g$x$=$2x+3$+x^2=x^2+2x+3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q47",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For the functions in Question 46, $f-g$x$=$:",
    "options": {
      "A": "$x^2-2x-3$",
      "B": "$2x+3-x^2$",
      "C": "$2x^3+3$",
      "D": "$x^2+2x+3$"
    },
    "correct_answer": "B",
    "explanation": "$f-g$x$=f$x$-g$x$=$2x+3$-x^2=2x+3-x^2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q48",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x+1$ and g(x)$=x-1$, then $(fg)$x$=$:",
    "options": {
      "A": "$x^2-1$",
      "B": "$x^2+1$",
      "C": "$2x$",
      "D": "$x^2-2x+1$"
    },
    "correct_answer": "A",
    "explanation": "$(fg)$x$=f$xg(x)$=$x+1$$x-1$=x^2-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q49",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For the functions in Question 48, $\\left(\\dfrac{f}{g}\\right)$x$$ equals:",
    "options": {
      "A": "$\\dfrac{x-1}{x+1}$",
      "B": "$\\dfrac{x+1}{x-1}$, $x\\ne1$",
      "C": "$1$",
      "D": "$x^2-1$"
    },
    "correct_answer": "B",
    "explanation": "$\\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{f(x)}{g(x)}=\\dfrac{x+1}{x-1}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q50",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2$ and g(x)$=x+2$, then $f\\circ g$x$=$:",
    "options": {
      "A": "$x^2+2$",
      "B": "$x^2+4$",
      "C": "$$x+2$^2$",
      "D": "$2x^2$"
    },
    "correct_answer": "C",
    "explanation": "$f\\circ g$x$=f$1$=f$x+2$=$x+2$^2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  }
];
