import { Question } from '../types';

export const C11_CH8_ADVANCED_PART4: Question[] = [
  {
    "id": "c11-ch8-adv-q151",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Let f(x)$=x^2-1$. If $f$a$=f$b$$, then:",
    "options": {
      "A": "$a=b$ only",
      "B": "$a=-b$ only",
      "C": "$a=b$ or $a=-b$",
      "D": "$a+b=1$"
    },
    "correct_answer": "C",
    "explanation": "$a^2-1=b^2-1 \\implies a^2=b^2 \\implies a=\\pm b$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q152",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For what value of $k$ is the linear function f(x)$=kx+4$ not one-one on $\\mathbb{R}$?",
    "options": {
      "A": "$k=-1$",
      "B": "$k=0$",
      "C": "$k=1$",
      "D": "$k=4$"
    },
    "correct_answer": "B",
    "explanation": "When $k=0$, f(x)$=4$ is a constant function, mapping every input to $4$ $many-to-one$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q153",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{x}{2}+3$, solve f(x)$=f$10$$.",
    "options": {
      "A": "$x=5$",
      "B": "$x=8$",
      "C": "$x=10$",
      "D": "$x=20$"
    },
    "correct_answer": "C",
    "explanation": "Since $f$ is a linear function with non-zero slope ($m=1/2$), it is strictly one-one. Hence f(x)$=f$10$ \\implies x=10$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q154",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2+2x$, then $f$1$=f$a$$ gives:",
    "options": {
      "A": "$a=1$ only",
      "B": "$a=-3$ only",
      "C": "$a=1$ or $a=-3$",
      "D": "$a=-1$ or $a=3$"
    },
    "correct_answer": "C",
    "explanation": "$f$1$=1+2=3$. Then $a^2+2a=3 \\implies a^2+2a-3=0 \\implies $a-1$$a+3$=0 \\implies a=1$ or $a=-3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q155",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)+1$=2x+5$, find the expression for f(x)$$.",
    "options": {
      "A": "$2x+3$",
      "B": "$2x+5$",
      "C": "$2x+7$",
      "D": "$x+4$"
    },
    "correct_answer": "A",
    "explanation": "Substitute $u=x+1 \\implies x=u-1$. Then $f(u)=2$u-1$+5=2u-2+5=2u+3$. Thus f(x)$=2x+3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q156",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$2x$=6x-1$, then f(x)$=$:",
    "options": {
      "A": "$6x-1$",
      "B": "$3x-1$",
      "C": "$3x+1$",
      "D": "$12x-1$"
    },
    "correct_answer": "B",
    "explanation": "Let $u=2x \\implies x=u/2$. Then $f(u)=6$u/2$-1=3u-1$. Thus f(x)$=3x-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q157",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)-2$=x^2-4x+7$, find f(x)$$.",
    "options": {
      "A": "$x^2+3$",
      "B": "$x^2-4$",
      "C": "$x^2+4x+7$",
      "D": "$x^2-1$"
    },
    "correct_answer": "A",
    "explanation": "Let $u=x-2 \\implies x=u+2$. Then $f(u)=$u+2$^2-4$u+2$+7=u^2+4u+4-4u-8+7=u^2+3$. Thus f(x)$=x^2+3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q158",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x+1$ and $g$1$=x^2+2x$, then g(x)$=$:",
    "options": {
      "A": "$x^2-1$",
      "B": "$x^2+1$",
      "C": "$x^2-2x$",
      "D": "$$x+1$^2$"
    },
    "correct_answer": "A",
    "explanation": "Let $u=f$x$=x+1 \\implies x=u-1$. Then $g(u)=$u-1$^2+2$u-1$=u^2-2u+1+2u-2=u^2-1$. Thus g(x)$=x^2-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q159",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=2x-1$ and $f$1$=6x+3$, then g(x)$=$:",
    "options": {
      "A": "$3x+1$",
      "B": "$3x+2$",
      "C": "$6x+4$",
      "D": "$2x+3$"
    },
    "correct_answer": "B",
    "explanation": "$f$1$=2g$x$-1=6x+3 \\implies 2g$x$=6x+4 \\implies g$x$=3x+2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q160",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2$ and g(x)$=\\sqrt{x}$, then $f\\circ g$x$=x$ holds for:",
    "options": {
      "A": "$x\\in\\mathbb{R}$",
      "B": "$x\\g \ne 0$",
      "C": "$x\\l \ne 0$",
      "D": "$x\\n \ne 0$"
    },
    "correct_answer": "B",
    "explanation": "$f\\circ g$x$=$\\sqrt{x}$^2=x$, but $\\sqrt{x}$ is only defined for real numbers when $x\\g \ne 0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q161",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For the functions in Question 160, $g\\circ f$x$=$:",
    "options": {
      "A": "$x$ for all $x\\in\\mathbb{R}$",
      "B": "$x^2$",
      "C": "$|x|$",
      "D": "$-x$"
    },
    "correct_answer": "C",
    "explanation": "$g\\circ f$x$=g$x^2$=\\sqrt{x^2}=|x|$ for all $x\\in\\mathbb{R}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q162",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^2$, which domain restriction makes g(x)$=\\sqrt{x}$ its true two-sided inverse?",
    "options": {
      "A": "$(-\\infty,0]$",
      "B": "$[0,\\infty)$",
      "C": "$\\mathbb{R}\\setminus\\{0\\}$",
      "D": "No restriction"
    },
    "correct_answer": "B",
    "explanation": "Restricting the domain of $f$ to $[0,\\infty)$ makes $f$ bijective onto $[0,\\infty)$, where $\\sqrt{x^2}=x$ and $$\\sqrt{x}$^2=x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q163",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{x-1}{x+1}$, then $f\\circ f$x$$ equals:",
    "options": {
      "A": "$x$",
      "B": "$-\\dfrac{1}{x}$",
      "C": "$\\dfrac{1}{x}$",
      "D": "$-x$"
    },
    "correct_answer": "B",
    "explanation": "$f(f(x))=\\dfrac{\\dfrac{x-1}{x+1}-1}{\\dfrac{x-1}{x+1}+1}=\\dfrac{(x-1)-(x+1)}{(x-1)+(x+1)}=\\dfrac{-2}{2x}=-\\dfrac{1}{x}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q164",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{1-x}{1+x}$, then $f\\circ f$x$=$:",
    "options": {
      "A": "$x$",
      "B": "$-x$",
      "C": "$\\dfrac{1}{x}$",
      "D": "$1-x$"
    },
    "correct_answer": "A",
    "explanation": "$f(f(x))=\\dfrac{1-\\dfrac{1-x}{1+x}}{1+\\dfrac{1-x}{1+x}}=\\dfrac{(1+x)-(1-x)}{(1+x)+(1-x)}=\\dfrac{2x}{2}=x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q165",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f^{-1}$x$=2x+3$, then f(x)$=$:",
    "options": {
      "A": "$\\dfrac{x-3}{2}$",
      "B": "$\\dfrac{x+3}{2}$",
      "C": "$2x-3$",
      "D": "$\\dfrac{2}{x+3}$"
    },
    "correct_answer": "A",
    "explanation": "Setting $y=2x+3 \\implies 2x=y-3 \\implies x=\\dfrac{y-3}{2}$. Thus f(x)$=\\dfrac{x-3}{2}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q166",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{3x-2}{5}$, then $f^{-1}$4$=$:",
    "options": {
      "A": "$6$",
      "B": "$\\dfrac{18}{5}$",
      "C": "$\\dfrac{22}{3}$",
      "D": "$8$"
    },
    "correct_answer": "C",
    "explanation": "Setting f(x)$=4 \\implies \\dfrac{3x-2}{5}=4 \\implies 3x-2=20 \\implies 3x=22 \\implies x=\\dfrac{22}{3}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q167",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=x^3-1$, calculate $f^{-1}$7$$.",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$\\sqrt[3]{7}$",
      "D": "$8$"
    },
    "correct_answer": "A",
    "explanation": "Setting f(x)$=7 \\implies x^3-1=7 \\implies x^3=8 \\implies x=2$. Thus $f^{-1}$7$=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q168",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=4x+1$, then $f^{-1}\\circ f$-3$=$:",
    "options": {
      "A": "$-11$",
      "B": "$-3$",
      "C": "$3$",
      "D": "$11$"
    },
    "correct_answer": "B",
    "explanation": "For any invertible function, $f^{-1}$1$=x$. Hence $f^{-1}\\circ f$-3$=-3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q169",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $g=f^{-1}$, $f$2$=5$, and $f$5$=9$, then $g$9$=$:",
    "options": {
      "A": "$2$",
      "B": "$5$",
      "C": "$7$",
      "D": "$9$"
    },
    "correct_answer": "B",
    "explanation": "Since $f$5$=9$, reversing the mapping gives $g$9$=f^{-1}$9$=5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q170",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Suppose $f$ is an odd function and $f$3$=7$. Then $f$-3$=$:",
    "options": {
      "A": "$7$",
      "B": "$-7$",
      "C": "$3$",
      "D": "$-3$"
    },
    "correct_answer": "B",
    "explanation": "By definition of an odd function, f(-x)$=-f$x$$. Thus $f$-3$=-f$3$=-7$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q171",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Suppose $f$ is an even function and $f$-4$=6$. Then $f$4$=$:",
    "options": {
      "A": "$-6$",
      "B": "$4$",
      "C": "$6$",
      "D": "Cannot be determined"
    },
    "correct_answer": "C",
    "explanation": "For an even function, f(x)$=f$-x$$. Thus $f$4$=f$-4$=6$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q172",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If a function $f$ is simultaneously even and odd on $\\mathbb{R}$, then:",
    "options": {
      "A": "f(x)$=x$",
      "B": "f(x)$=1$",
      "C": "f(x)$=0$",
      "D": "f(x)$=|x|$"
    },
    "correct_answer": "C",
    "explanation": "Even implies $f(-x)=f(x)$ and odd implies $f(-x)=-f(x)$. Hence $f(x)=-f(x) \\implies 2f(x)=0 \\implies f(x)=0$ for all $x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q173",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$ and $g$ are both odd functions, then their sum $f+g$ is:",
    "options": {
      "A": "Even",
      "B": "Odd",
      "C": "Neither necessarily",
      "D": "Constant"
    },
    "correct_answer": "B",
    "explanation": "$f+g$-x$=f$-x$+g$-x$=-f$x$-g$x$=-(f$x$+g$x$)=-$f+g$x$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q174",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$ and $g$ are both odd functions, then their product $(fg)$ is:",
    "options": {
      "A": "Even",
      "B": "Odd",
      "C": "Constant",
      "D": "One-one"
    },
    "correct_answer": "A",
    "explanation": "$(fg)$-x$=f$-xg(-x)$=(-f$x$)(-g$x$)=f$xg(x)$=(fg)$x$$, so the product is even.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q175",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$ is even and $g$ is odd, then their product $(fg)$ is:",
    "options": {
      "A": "Even",
      "B": "Odd",
      "C": "Constant",
      "D": "Neither"
    },
    "correct_answer": "B",
    "explanation": "$(fg)$-x$=f$-xg(-x)$=f$x$(-g$x$)=-(fg)$x$$, so the product is odd.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q176",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $f$ is an odd function defined at $x=0$, then $f$0$=$:",
    "options": {
      "A": "$-1$",
      "B": "$0$",
      "C": "$1$",
      "D": "Any real number"
    },
    "correct_answer": "B",
    "explanation": "$f$-0$=-f$0$ \\implies f$0$=-f$0$ \\implies 2f$0$=0 \\implies f$0$=0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q177",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is even?",
    "options": {
      "A": "$\\dfrac{x}{x^2+1}$",
      "B": "$\\dfrac{x^2}{x^2+1}$",
      "C": "$x^3+1$",
      "D": "$x^2+x+1$"
    },
    "correct_answer": "B",
    "explanation": "$f(-x)=\\dfrac{(-x)^2}{(-x)^2+1}=\\dfrac{x^2}{x^2+1}=f(x)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q178",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function is odd?",
    "options": {
      "A": "$\\dfrac{1}{x^2+1}$",
      "B": "$\\dfrac{x}{x^2+1}$",
      "C": "$\\dfrac{x+1}{x^2+1}$",
      "D": "$x^2-1$"
    },
    "correct_answer": "B",
    "explanation": "$f(-x)=\\dfrac{-x}{(-x)^2+1}=-\\dfrac{x}{x^2+1}=-f(x)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f(-x) = f(x) \\; (\\text{Even}), \\quad f(-x) = -f(x) \\; (\\text{Odd})"
  },
  {
    "id": "c11-ch8-adv-q179",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\sqrt{\\dfrac{x-1}{x+2}}$ is:",
    "options": {
      "A": "$-2,1$",
      "B": "$(-\\infty,-2)\\cup[1,\\infty)$",
      "C": "$(-\\infty,-2]\\cup[1,\\infty)$",
      "D": "$[-2,1]$"
    },
    "correct_answer": "B",
    "explanation": "The radicand must be non-negative $\\dfrac{x-1}{x+2}\\g \ne 0$ and denominator non-zero $x\\ne-2$. Sign chart gives $(-\\infty,-2)\\cup[1,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q180",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\dfrac{1}{\\sqrt{4-x^2}}$ is:",
    "options": {
      "A": "$[-2,2]$",
      "B": "$-2,2$",
      "C": "$(-\\infty,-2)\\cup(2,\\infty)$",
      "D": "$\\mathbb{R}\\setminus\\{-2,2\\}$"
    },
    "correct_answer": "B",
    "explanation": "The radicand is in the denominator, so $4-x^2>0 \\implies x^2<4 \\implies -2<x<2$, or $-2,2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q181",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of f(x)$=\\sqrt{x-1}+\\sqrt{5-x}$ is:",
    "options": {
      "A": "$[1,5]$",
      "B": "$1,5$",
      "C": "$(-\\infty,1]$",
      "D": "$[5,\\infty)$"
    },
    "correct_answer": "A",
    "explanation": "$x-1\\g \ne 0 \\implies x\\ge1$ and $5-x\\g \ne 0 \\implies x\\le5$. The intersection is $[1,5]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Dom}(f) = \\{x \\in \\mathbb{R} : f(x) \\in \\mathbb{R}\\}"
  },
  {
    "id": "c11-ch8-adv-q182",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The maximum value of f(x)$=\\sqrt{x-1}+\\sqrt{5-x}$ on its domain $[1,5]$ is:",
    "options": {
      "A": "$2$",
      "B": "$2\\sqrt{2}$",
      "C": "$4$",
      "D": "$\\sqrt{6}$"
    },
    "correct_answer": "B",
    "explanation": "By symmetry or Cauchy-Schwarz, the maximum occurs at the midpoint $x=3$: $f$3$=\\sqrt{3-1}+\\sqrt{5-3}=\\sqrt{2}+\\sqrt{2}=2\\sqrt{2}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q183",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=x+\\dfrac{1}{x}$ for $x>0$ is:",
    "options": {
      "A": "$(0,\\infty)$",
      "B": "$[1,\\infty)$",
      "C": "$[2,\\infty)$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "C",
    "explanation": "By the AM-GM inequality, $x+\\dfrac{1}{x}\\ge2\\sqrt{x\\cdot\\dfrac{1}{x}}=2$, with equality at $x=1$. Thus the range is $[2,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q184",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=x+\\dfrac{1}{x}$ for $x<0$ is:",
    "options": {
      "A": "$(-\\infty,-2]$",
      "B": "$[-2,\\infty)$",
      "C": "$(-\\infty,0)$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "A",
    "explanation": "Let $t=-x>0$. Then $x+\\dfrac{1}{x}=-$t+1/t$\\le-2$. Thus the range is $(-\\infty,-2]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q185",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=x^2-4x+7$ is:",
    "options": {
      "A": "$[3,\\infty)$",
      "B": "$[7,\\infty)$",
      "C": "$(-\\infty,3]$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "A",
    "explanation": "Completing the square: f(x)$=$(x-2)^2+3$. Since $$(x-2)^2\\g \ne 0$, f(x)$\\ge3$. Thus range is $[3,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q186",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=\\dfrac{x^2}{x^2+1}$ for $x\\in\\mathbb{R}$ is:",
    "options": {
      "A": "$0,1$",
      "B": "$[0,1)$",
      "C": "$[0,1]$",
      "D": "$(-\\infty,1)$"
    },
    "correct_answer": "B",
    "explanation": "f(x)$=1-\\dfrac{1}{x^2+1}$. At $x=0$, $f$0$=0$. For all $x$, $0\\le f$x$<1$, and $\\lim_{x\\to\\pm\\infty}f$x$=1$. Thus the range is $[0,1)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q187",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=\\dfrac{x^2-1}{x^2+1}$ is:",
    "options": {
      "A": "$[-1,1)$",
      "B": "$-1,1$",
      "C": "$[-1,1]$",
      "D": "$(-\\infty,1)$"
    },
    "correct_answer": "A",
    "explanation": "f(x)$=1-\\dfrac{2}{x^2+1}$. At $x=0$, $f$0$=-1$. As $x\\to\\pm\\infty$, f(x)$\\to1$. Thus the range is $[-1,1)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q188",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The horizontal asymptote of f(x)$=\\dfrac{2x+3}{x-1}$ is:",
    "options": {
      "A": "$y=1$",
      "B": "$y=2$",
      "C": "$x=1$",
      "D": "$y=3$"
    },
    "correct_answer": "B",
    "explanation": "$\\lim_{x\\to\\pm\\infty}\\dfrac{2x+3}{x-1}=\\lim_{x\\to\\pm\\infty}\\dfrac{2+3/x}{1-1/x}=2$. Thus $y=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q189",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of f(x)$=\\dfrac{2x+3}{x-1}$ excludes:",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$3$",
      "D": "$-2$"
    },
    "correct_answer": "B",
    "explanation": "Setting $y=\\dfrac{2x+3}{x-1} \\implies yx-y=2x+3 \\implies x$y-2$=y+3 \\implies x=\\dfrac{y+3}{y-2}$. Hence $y=2$ is excluded.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q190",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of $f\\circ g$x$$, where f(x)$=\\sqrt{x}$ and g(x)$=x^2-9$, is:",
    "options": {
      "A": "$[-3,3]$",
      "B": "$(-\\infty,-3]\\cup[3,\\infty)$",
      "C": "$[0,\\infty)$",
      "D": "$\\mathbb{R}\\setminus\\{-3,3\\}$"
    },
    "correct_answer": "B",
    "explanation": "$f\\circ g$x$=\\sqrt{x^2-9}$, which requires $x^2-9\\g \ne 0 \\implies |x|\\ge3 \\implies x\\le-3$ or $x\\ge3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q191",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=\\dfrac{1}{x-1}$ and g(x)$=\\dfrac{1}{x}$, the domain of $f\\circ g$ excludes:",
    "options": {
      "A": "Only $0$",
      "B": "Only $1$",
      "C": "Both $0$ and $1$",
      "D": "Neither $0$ nor $1$"
    },
    "correct_answer": "C",
    "explanation": "$g(x)$ requires $x\\n \ne 0$. Furthermore, $g(x)$ cannot equal $1$, so $1/x\\ne1 \\implies x\\ne1$. Thus both $0$ and $1$ are excluded.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q192",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "For the functions in Question 191, $f\\circ g$x$=$:",
    "options": {
      "A": "$\\dfrac{1}{x-1}$",
      "B": "$\\dfrac{x}{1-x}$",
      "C": "$\\dfrac{x}{x-1}$",
      "D": "$1-x$"
    },
    "correct_answer": "B",
    "explanation": "$f\\circ g$x$=\\dfrac{1}{\\dfrac{1}{x}-1}=\\dfrac{1}{\\dfrac{1-x}{x}}=\\dfrac{x}{1-x}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q193",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Let f(x)$=x+2$ and g(x)$=3x$. For which $x\\in\\mathbb{R}$ is $f\\circ g$x$=$g\\circ f$x$?",
    "options": {
      "A": "$x=-3$",
      "B": "$x=0$",
      "C": "$x=2$",
      "D": "No real $x$"
    },
    "correct_answer": "D",
    "explanation": "$f\\circ g$x$=3x+2$ and $g\\circ f$x$=3$x+2$=3x+6$. Setting $3x+2=3x+6 \\implies 2=6$, which is impossible.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ g)(x) = f$1$, \\quad \\text{Dom}(f \\circ g) = \\{x \\in \\text{Dom}(g) : g(x) \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q194",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=ax+b$ and $f\\circ f$x$=4x+3$, then $a^2=$:",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$6$"
    },
    "correct_answer": "C",
    "explanation": "$f$1$=a$ax+b$+b=a^2x+b$a+1$=4x+3$. Equating linear coefficients gives $a^2=4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q195",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "In Question 194, if $a=2$, then $b=$:",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$3$",
      "D": "$-1$"
    },
    "correct_answer": "A",
    "explanation": "$b$a+1$=3 \\implies b$2+1$=3 \\implies 3b=3 \\implies b=1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q196",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If f(x)$=ax+b$ is its own inverse (self-inverse) and $a\\ne1$, then:",
    "options": {
      "A": "$a=0$",
      "B": "$a=-1$",
      "C": "$b=0$ necessarily",
      "D": "$a=b$"
    },
    "correct_answer": "B",
    "explanation": "$f$1$=a^2x+b$a+1$=x \\implies a^2=1$. Since $a\\ne1$, we must have $a=-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x, \\quad y = f(x) \\iff x = f^{-1}(y)"
  },
  {
    "id": "c11-ch8-adv-q197",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A quadratic function has vertex $2,-3$ and passes through $0,5$. Its equation is:",
    "options": {
      "A": "$y=2(x-2)^2-3$",
      "B": "$y=(x-2)^2-3$",
      "C": "$y=2$x+2$^2-3$",
      "D": "$y=(x-2)^2+3$"
    },
    "correct_answer": "A",
    "explanation": "In vertex form: $y=a(x-2)^2-3$. Using $(0,5)$: $5=a(0-2)^2-3 \\implies 5=4a-3 \\implies 4a=8 \\implies a=2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q198",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "A parabola has zeros at $x=1$ and $x=5$, and passes through $0,5$. Its equation is:",
    "options": {
      "A": "$y=$x-1$x-5$",
      "B": "$y=-$x-1$x-5$",
      "C": "$y=5$x-1$x-5$",
      "D": "$y=x^2-5$"
    },
    "correct_answer": "A",
    "explanation": "Let $y=a$x-1$x-5$. Using $(0,5)$: $5=a$-1$$-5$ \\implies 5=5a \\implies a=1$. Thus $y=$x-1$x-5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q199",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If the range of $f$ is $[2,\\infty)$, then the range of g(x)$=-f$x$+5$ is:",
    "options": {
      "A": "$[3,\\infty)$",
      "B": "$(-\\infty,3]$",
      "C": "$[2,5]$",
      "D": "$(-\\infty,5]$"
    },
    "correct_answer": "B",
    "explanation": "f(x)$\\ge2 \\implies -f$x$\\le-2 \\implies -f$x$+5\\le3$. Thus the range of $g$ is $(-\\infty,3]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q200",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function $y=f$x$$ has domain $[-2,4]$ and range $[1,7]$. The domain and range of $y=2f$x-3$-5$ are:",
    "options": {
      "A": "Domain $[-5,1]$, range $[-3,9]$",
      "B": "Domain $[1,7]$, range $[-3,9]$",
      "C": "Domain $[1,7]$, range $[2,14]$",
      "D": "Domain $[-2,4]$, range $[-3,9]$"
    },
    "correct_answer": "B",
    "explanation": "For domain: $-2\\le x-3\\le4 \\implies 1\\le x\\le7$. For range: $1\\le f$x-3$\\le7 \\implies 2$1$-5\\le 2f$x-3$-5\\le 2$7$-5 \\implies -3\\le y\\le9$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  }
];
