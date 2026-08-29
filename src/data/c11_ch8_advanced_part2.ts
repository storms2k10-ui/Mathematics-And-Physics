import { Question } from '../types';

export const C11_CH8_ADVANCED_PART2: Question[] = [
  {
    "id": "c11-ch8-adv-q51",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For the functions in Question 50, $g\\circ f$x$=$:",
    "options": {
      "A": "$x^2+2$",
      "B": "$$x+2$^2$",
      "C": "$x^2+4x+2$",
      "D": "$2x^2+2$"
    },
    "correct_answer": "A",
    "explanation": "$g\\circ f$x$=g$1$=g$x^2$=x^2+2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q52",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=3x-1$ and g(x)$=2x+4$, find $f\\circ g$2$$.",
    "options": {
      "A": "$15$",
      "B": "$19$",
      "C": "$23$",
      "D": "$25$"
    },
    "correct_answer": "C",
    "explanation": "$g$2$=2$2$+4=8$. Then $f\\circ g$2$=f$1$=f$8$=3$8$-1=23$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q53",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2+1$ and g(x)$=x-3$, then $g\\circ f$x$=$:",
    "options": {
      "A": "$x^2-2$",
      "B": "$x^2+4$",
      "C": "$$x-3$^2+1$",
      "D": "$x^2-3x+1$"
    },
    "correct_answer": "A",
    "explanation": "$g\\circ f$x$=g$1$=g$x^2+1$=$x^2+1$-3=x^2-2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q54",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\sqrt{x}$ and g(x)$=x-4$, the domain of $f\\circ g$ is:",
    "options": {
      "A": "$x\\ge0$",
      "B": "$x>4$",
      "C": "$x\\ge4$",
      "D": "$x\\le4$"
    },
    "correct_answer": "C",
    "explanation": "$f\\circ g$x$=f$1$=\\sqrt{x-4}$, which requires $x-4\\ge0 \\implies x\\ge4$, i.e. $[4,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q55",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{1}{x}$ and g(x)$=x-2$, then $f\\circ g$x$=$:",
    "options": {
      "A": "$\\dfrac{1}{x}-2$",
      "B": "$\\dfrac{1}{x-2}$",
      "C": "$\\dfrac{x-2}{x}$",
      "D": "$x+2$"
    },
    "correct_answer": "B",
    "explanation": "$f\\circ g$x$=f$1$=f$x-2$=\\dfrac{1}{x-2}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q56",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of the composite function $f\\circ g$x$=\\dfrac{1}{x-2}$ is:",
    "options": {
      "A": "$\\mathbb{R}\\setminus\\{0\\}$",
      "B": "$\\mathbb{R}\\setminus\\{2\\}$",
      "C": "$x>2$",
      "D": "$x<2$"
    },
    "correct_answer": "B",
    "explanation": "The denominator cannot be zero: $x-2\\ne0 \\implies x\\ne2$, so the domain is $\\mathbb{R}\\setminus\\{2\\}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q57",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=2x$, g(x)$=x+1$, and h(x)$=x^2$, then $h\\circ g\\circ f$1$=$:",
    "options": {
      "A": "$4$",
      "B": "$6$",
      "C": "$9$",
      "D": "$16$"
    },
    "correct_answer": "C",
    "explanation": "$f$1$=2$1$=2$, $g$1$=g$2$=3$, and $h(g$1$)=h$3$=3^2=9$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q58",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f\\circ g=g\\circ f$, then the functions are said to:",
    "options": {
      "A": "Be inverses necessarily",
      "B": "Commute under composition",
      "C": "Be constant",
      "D": "Have equal domains only"
    },
    "correct_answer": "B",
    "explanation": "Two functions commute under the operation of composition when $f\\circ g=g\\circ f$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q59",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which statement about function composition is generally true?",
    "options": {
      "A": "$f\\circ g=g\\circ f$",
      "B": "$(f \\circ g) \\circ h = f \\circ (g \\circ h)$",
      "C": "$f\\circ g=f+g$",
      "D": "$f\\circ f=f$"
    },
    "correct_answer": "B",
    "explanation": "Function composition is always associative: $(f \\circ g) \\circ h = f \\circ (g \\circ h)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q60",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If I(x)$=x$ is the identity function, then:",
    "options": {
      "A": "$f\\circ I=I$",
      "B": "$I\\circ f=I$",
      "C": "$f\\circ I=I\\circ f=f$",
      "D": "$f\\circ I=f^{-1}$"
    },
    "correct_answer": "C",
    "explanation": "$(f \\circ I_A)(x) = f(I_A(x)) = f(x)$, so $f \\circ I_A = f$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q61",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=5x-7$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$\\dfrac{x-7}{5}$",
      "B": "$\\dfrac{x+7}{5}$",
      "C": "$5x+7$",
      "D": "$\\dfrac{5}{x+7}$"
    },
    "correct_answer": "B",
    "explanation": "Set $y=5x-7 \\implies 5x=y+7 \\implies x=\\dfrac{y+7}{5}$. Hence $f^{-1}$x$=\\dfrac{x+7}{5}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q62",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{x-2}{3}$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$3x-2$",
      "B": "$\\dfrac{x+2}{3}$",
      "C": "$3x+2$",
      "D": "$\\dfrac{3}{x-2}$"
    },
    "correct_answer": "C",
    "explanation": "Set $y=\\dfrac{x-2}{3} \\implies x-2=3y \\implies x=3y+2$. Thus $f^{-1}$x$=3x+2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q63",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A function has an inverse function on its stated domain and codomain if and only if it is:",
    "options": {
      "A": "Constant",
      "B": "Bijective",
      "C": "Even",
      "D": "Periodic"
    },
    "correct_answer": "B",
    "explanation": "An inverse function exists if and only if $f$ is a bijection (both injective and surjective).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q64",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^3+4$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$\\sqrt{x-4}$",
      "B": "$\\sqrt[3]{x-4}$",
      "C": "$\\sqrt[3]{x}+4$",
      "D": "$x^3-4$"
    },
    "correct_answer": "B",
    "explanation": "Set $y=x^3+4 \\implies x^3=y-4 \\implies x=\\sqrt[3]{y-4}$. Thus $f^{-1}$x$=\\sqrt[3]{x-4}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q65",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{2x+1}{3}$, find $f^{-1}$5$$.",
    "options": {
      "A": "$5$",
      "B": "$6$",
      "C": "$7$",
      "D": "$8$"
    },
    "correct_answer": "C",
    "explanation": "Set f(x)$=5 \\implies \\dfrac{2x+1}{3}=5 \\implies 2x+1=15 \\implies 2x=14 \\implies x=7$. Thus $f^{-1}$5$=7$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q66",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{1}{x}$, $x\\ne0$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$x$",
      "B": "$-x$",
      "C": "$\\dfrac{1}{x}$",
      "D": "$x^2$"
    },
    "correct_answer": "C",
    "explanation": "Setting $y=1/x \\implies x=1/y$. Thus $f^{-1}$x$=1/x=f$x$$, so $f$ is its own inverse (an involution).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q67",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=2-x$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$x-2$",
      "B": "$2-x$",
      "C": "$x+2$",
      "D": "$-2-x$"
    },
    "correct_answer": "B",
    "explanation": "Setting $y=2-x \\implies x=2-y$. Thus $f^{-1}$x$=2-x=f$x$$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q68",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f^{-1}$ exists, then $f^{-1}\\circ f$a$=$:",
    "options": {
      "A": "$f$a$$",
      "B": "$a$",
      "C": "$0$",
      "D": "$1$"
    },
    "correct_answer": "B",
    "explanation": "By definition of inverse, $f^{-1}$1$=a$ for all $a$ in the domain of $f$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q69",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$3$=8$ and $f$ is invertible, then $f^{-1}$8$=$:",
    "options": {
      "A": "$3$",
      "B": "$8$",
      "C": "$11$",
      "D": "$24$"
    },
    "correct_answer": "A",
    "explanation": "Since $f$3$=8$, applying the inverse gives $f^{-1}$8$=3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q70",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graphs of $f$ and $f^{-1}$ are reflections of each other across the:",
    "options": {
      "A": "$x$-axis",
      "B": "$y$-axis",
      "C": "Line $y=x$",
      "D": "Origin"
    },
    "correct_answer": "C",
    "explanation": "Inverting a function swaps the coordinates $$(x,y)$ \\leftrightarrow (y,x)$, which corresponds geometrically to reflection across the line $y=x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q71",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2$ is restricted to domain $[0,\\infty)$, its inverse is:",
    "options": {
      "A": "$f^{-1}$x$=x^2$",
      "B": "$f^{-1}$x$=\\sqrt{x}$",
      "C": "$f^{-1}$x$=-\\sqrt{x}$",
      "D": "$f^{-1}$x$=\\dfrac{1}{x^2}$"
    },
    "correct_answer": "B",
    "explanation": "For $x\\ge0$, $y=x^2 \\implies x=\\sqrt{y}$ (the principal square root). Thus $f^{-1}$x$=\\sqrt{x}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q72",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2$ is restricted to domain $(-\\infty,0]$, its inverse is:",
    "options": {
      "A": "$\\sqrt{x}$",
      "B": "$-\\sqrt{x}$",
      "C": "$x^2$",
      "D": "$-x^2$"
    },
    "correct_answer": "B",
    "explanation": "For $x\\le0$, $y=x^2 \\implies x=-\\sqrt{y}$. Thus $f^{-1}$x$=-\\sqrt{x}$ for $x\\ge0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q73",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{x+1}{x-2}$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$\\dfrac{2x+1}{x-1}$",
      "B": "$\\dfrac{2x-1}{x+1}$",
      "C": "$\\dfrac{x-1}{x+2}$",
      "D": "$\\dfrac{x+2}{x-1}$"
    },
    "correct_answer": "A",
    "explanation": "$y=\\dfrac{x+1}{x-2} \\implies y$x-2$=x+1 \\implies yx-2y=x+1 \\implies x$y-1$=2y+1 \\implies x=\\dfrac{2y+1}{y-1}$. Hence $f^{-1}$x$=\\dfrac{2x+1}{x-1}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q74",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=\\dfrac{x+1}{x-2}$ is:",
    "options": {
      "A": "$\\mathbb{R}\\setminus\\{1\\}$",
      "B": "$\\mathbb{R}\\setminus\\{2\\}$",
      "C": "$[0,\\infty)$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "A",
    "explanation": "$\\text{Range}(f) = \\text{Dom}$f^{-1}$$. Since $f^{-1}$x$=\\dfrac{2x+1}{x-1}$, the denominator is zero at $x=1$. Thus the range is $\\mathbb{R}\\setminus\\{1\\}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q75",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=ax+b$, $a\\ne0$, then $f^{-1}$x$=$:",
    "options": {
      "A": "$\\dfrac{x+b}{a}$",
      "B": "$\\dfrac{x-b}{a}$",
      "C": "$ax-b$",
      "D": "$\\dfrac{a}{x-b}$"
    },
    "correct_answer": "B",
    "explanation": "Setting $y=ax+b \\implies ax=y-b \\implies x=\\dfrac{y-b}{a}$. Thus $f^{-1}$x$=\\dfrac{x-b}{a}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q76",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=3x+2$ and g(x)$=\\dfrac{x-2}{3}$, then:",
    "options": {
      "A": "$f+g=I$",
      "B": "$fg=I$",
      "C": "$f\\circ g=g\\circ f=I$",
      "D": "$f=g$"
    },
    "correct_answer": "C",
    "explanation": "$(f \\circ g)(x)=3\\left(\\dfrac{x-2}{3}\\right)+2=x$ and $(g \\circ f)(x)=\\dfrac{(3x+2)-2}{3}=x$. Thus $f$ and $g$ are inverse functions.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q77",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f\\circ g=I$ and both functions are bijections, then:",
    "options": {
      "A": "$g=f$",
      "B": "$g=f^{-1}$",
      "C": "$g=-f$",
      "D": "$g=I$"
    },
    "correct_answer": "B",
    "explanation": "The unique function satisfying $f\\circ g=I$ for a bijection $f$ is its inverse $f^{-1}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q78",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The inverse of a strictly increasing one-one function is:",
    "options": {
      "A": "Strictly decreasing",
      "B": "Strictly increasing",
      "C": "Constant",
      "D": "Always even"
    },
    "correct_answer": "B",
    "explanation": "If $x_1 < x_2 \\implies f(x_1) < f(x_2)$, then setting $y_1 = f(x_1) < y_2 = f(x_2)$ yields $f^{-1}(y_1) < f^{-1}(y_2)$, preserving the increasing order.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q79",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is its own inverse?",
    "options": {
      "A": "f(x)$=x+1$",
      "B": "f(x)$=2x$",
      "C": "f(x)$=-x$",
      "D": "f(x)$=x^3$"
    },
    "correct_answer": "C",
    "explanation": "$f$1$=-$-x$=x$. Thus $f^{-1}$x$=f$x$=-x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q80",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{3}{x}$, $x\\ne0$, then $f\\circ f$x$=$:",
    "options": {
      "A": "$3x$",
      "B": "$x$",
      "C": "$\\dfrac{9}{x}$",
      "D": "$\\dfrac{1}{x}$"
    },
    "correct_answer": "B",
    "explanation": "$f$1$=\\dfrac{3}{3/x}=x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q81",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=4$ is:",
    "options": {
      "A": "A vertical line",
      "B": "A horizontal line",
      "C": "A parabola",
      "D": "A hyperbola"
    },
    "correct_answer": "B",
    "explanation": "The equation $y=4$ defines a straight line with slope $0$, which is a horizontal line parallel to the $x$-axis.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q82",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $x=4$ fails the vertical-line test because:",
    "options": {
      "A": "It has no points",
      "B": "One $x$-value corresponds to infinitely many $y$-values",
      "C": "Every $y$-value has one $x$-value",
      "D": "Its slope is zero"
    },
    "correct_answer": "B",
    "explanation": "The vertical line test requires any vertical line to intersect the graph at most once. The line $x=4$ intersects itself at infinitely many points.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q83",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The $y$-intercept of $y=3x-6$ is:",
    "options": {
      "A": "$0,-6$",
      "B": "$-6,0$",
      "C": "$0,3$",
      "D": "$2,0$"
    },
    "correct_answer": "A",
    "explanation": "Setting $x=0$: $y=3$0$-6=-6$, so the $y$-intercept is $0,-6$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q84",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The $x$-intercept of $y=3x-6$ is:",
    "options": {
      "A": "$-6,0$",
      "B": "$0,-6$",
      "C": "$2,0$",
      "D": "$3,0$"
    },
    "correct_answer": "C",
    "explanation": "Setting $y=0$: $3x-6=0 \\implies 3x=6 \\implies x=2$, giving $2,0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q85",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The slope of the line through $1,2$ and $4,8$ is:",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$3$",
      "D": "$6$"
    },
    "correct_answer": "B",
    "explanation": "$m=\\dfrac{y_2-y_1}{x_2-x_1}=\\dfrac{8-2}{4-1}=\\dfrac{6}{3}=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q86",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A line parallel to $y=5x-3$ has slope:",
    "options": {
      "A": "$-5$",
      "B": "$-\\dfrac{1}{5}$",
      "C": "$\\dfrac{1}{5}$",
      "D": "$5$"
    },
    "correct_answer": "D",
    "explanation": "Parallel non-vertical lines have identical slopes, so $m=5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q87",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A line perpendicular to $y=2x+1$ has slope:",
    "options": {
      "A": "$2$",
      "B": "$-2$",
      "C": "$-\\dfrac{1}{2}$",
      "D": "$\\dfrac{1}{2}$"
    },
    "correct_answer": "C",
    "explanation": "Perpendicular lines have slopes satisfying $m_1 m_2 = -1$. Thus $m=-\\dfrac{1}{2}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q88",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The equation of the line with slope $3$ passing through $2,1$ is:",
    "options": {
      "A": "$y=3x+5$",
      "B": "$y=3x-5$",
      "C": "$y=2x-3$",
      "D": "$y=3x-1$"
    },
    "correct_answer": "B",
    "explanation": "In point-slope form: $y-1=3$x-2$ \\implies y-1=3x-6 \\implies y=3x-5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q89",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The vertex of $y=$x-3$^2+2$ is:",
    "options": {
      "A": "$-3,2$",
      "B": "$3,-2$",
      "C": "$3,2$",
      "D": "$-3,-2$"
    },
    "correct_answer": "C",
    "explanation": "In standard vertex form $y=a$x-h$^2+k$, the vertex is $(h,k)=$3,2$$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q90",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The axis of symmetry of $y=$x+4$^2-1$ is:",
    "options": {
      "A": "$x=4$",
      "B": "$x=-4$",
      "C": "$y=-1$",
      "D": "$x=1$"
    },
    "correct_answer": "B",
    "explanation": "The axis of symmetry is the vertical line passing through the vertex $x=h=-4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q91",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=-x^2$ opens:",
    "options": {
      "A": "Upward",
      "B": "Downward",
      "C": "Rightward",
      "D": "Leftward"
    },
    "correct_answer": "B",
    "explanation": "Since the coefficient of $x^2$ is negative ($-1<0$), the parabola opens downward.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q92",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The minimum value of $y=$(x-2)^2-5$ is:",
    "options": {
      "A": "$-5$",
      "B": "$-2$",
      "C": "$2$",
      "D": "$5$"
    },
    "correct_answer": "A",
    "explanation": "Since $(x-2)^2 \\ge 0$, the minimum value is attained when $(x-2)^2=0$, yielding $y=-5$ at $x=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q93",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The maximum value of $y=-2$x+1$^2+7$ is:",
    "options": {
      "A": "$-2$",
      "B": "$1$",
      "C": "$7$",
      "D": "No maximum"
    },
    "correct_answer": "C",
    "explanation": "Since $-2$x+1$^2\\le0$, the expression attains its maximum value $7$ at $x=-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q94",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The roots (zeros) of $y=x^2-5x+6$ are:",
    "options": {
      "A": "$1,6$",
      "B": "$2,3$",
      "C": "$-2,-3$",
      "D": "$-1,-6$"
    },
    "correct_answer": "B",
    "explanation": "Factoring: $x^2-5x+6=$x-2$$x-3$=0 \\implies x=2, 3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q95",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The parabola $y=x^2+4x+7$ has:",
    "options": {
      "A": "Two real $x$-intercepts",
      "B": "One real $x$-intercept",
      "C": "No real $x$-intercepts",
      "D": "Three real $x$-intercepts"
    },
    "correct_answer": "C",
    "explanation": "Discriminant $\\Delta = b^2-4ac = 4^2-4$1$$7$=16-28=-12<0$. Since $\\Delta<0$, there are no real zeros.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q96",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The vertex of $y=x^2-6x+5$ is:",
    "options": {
      "A": "$3,-4$",
      "B": "$-3,-4$",
      "C": "$3,4$",
      "D": "$-3,4$"
    },
    "correct_answer": "A",
    "explanation": "Completing the square: $y=$x^2-6x+9$-9+5=$x-3$^2-4$. The vertex is $3,-4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q97",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of $y=$x+2$^2+1$ is:",
    "options": {
      "A": "$y\\le1$",
      "B": "$y\\ge1$",
      "C": "$y\\ge-2$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "B",
    "explanation": "$$x+2$^2\\ge0 \\implies y=$x+2$^2+1\\ge1$. Thus the range is $[1,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q98",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of $y=-3$x-1$^2+4$ is:",
    "options": {
      "A": "$y\\ge4$",
      "B": "$y\\le4$",
      "C": "$y\\ge1$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "B",
    "explanation": "$-3$x-1$^2\\le0 \\implies y\\le4$. Hence the range is $(-\\infty,4]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q99",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If the graph of $y=x^2$ is shifted $3$ units upward, its equation becomes:",
    "options": {
      "A": "$y=$x+3$^2$",
      "B": "$y=$x-3$^2$",
      "C": "$y=x^2+3$",
      "D": "$y=x^2-3$"
    },
    "correct_answer": "C",
    "explanation": "A vertical shift upward by $c$ units transforms $y=f$x$$ into $y=f$x$+c$. Here $y=x^2+3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  },
  {
    "id": "c11-ch8-adv-q100",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If the graph of $y=x^2$ is shifted $4$ units right, its equation becomes:",
    "options": {
      "A": "$y=$x+4$^2$",
      "B": "$y=$x-4$^2$",
      "C": "$y=x^2+4$",
      "D": "$y=x^2-4$"
    },
    "correct_answer": "B",
    "explanation": "A horizontal shift to the right by $h$ units transforms $y=f(x)$ into $y=f(x-h)$. Here $y=(x-4)^2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = a(x-h)^2 + k, \\quad \\text{Vertex: } (h,k)"
  }
];
