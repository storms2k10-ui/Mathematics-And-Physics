import { Question } from '../types';

export const C11_CH8_ADVANCED_PART3: Question[] = [
  {
    "id": "c11-ch8-adv-q101",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f$x$+5$ is obtained from $y=f$x$$ by shifting it:",
    "options": {
      "A": "$5$ units left",
      "B": "$5$ units right",
      "C": "$5$ units upward",
      "D": "$5$ units downward"
    },
    "correct_answer": "C",
    "explanation": "Adding a positive constant to the function output shifts the graph vertically upward.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q102",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f(x-2)$ is obtained by shifting $y=f(x)$:",
    "options": {
      "A": "$2$ units right",
      "B": "$2$ units left",
      "C": "$2$ units upward",
      "D": "$2$ units downward"
    },
    "correct_answer": "A",
    "explanation": "Subtracting $2$ inside the input shifts the graph horizontally $2$ units to the right.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q103",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f$x+3$$ is shifted:",
    "options": {
      "A": "$3$ units right",
      "B": "$3$ units left",
      "C": "$3$ units upward",
      "D": "$3$ units downward"
    },
    "correct_answer": "B",
    "explanation": "Adding $3$ inside the input shifts the graph horizontally $3$ units to the left.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q104",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=-f(x)$ is the reflection of $y=f(x)$ across the:",
    "options": {
      "A": "$x$-axis",
      "B": "$y$-axis",
      "C": "Origin only",
      "D": "Line $y=x$"
    },
    "correct_answer": "A",
    "explanation": "Negating the function value negates the $y$-coordinates $(x,y) \\to (x,-y)$, reflecting across the $x$-axis.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q105",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f(-x)$ is the reflection of $y=f(x)$ across the:",
    "options": {
      "A": "$x$-axis",
      "B": "$y$-axis",
      "C": "Line $y=x$",
      "D": "Line $y=-x$"
    },
    "correct_answer": "B",
    "explanation": "Negating the input negates the $x$-coordinates $(x,y) \\to (-x,y)$, reflecting across the $y$-axis.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q106",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $(2,5)$ lies on $y=f(x)$, which point lies on $y=f(x-3)$?",
    "options": {
      "A": "$-1,5$",
      "B": "$2,8$",
      "C": "$5,5$",
      "D": "$2,2$"
    },
    "correct_answer": "C",
    "explanation": "The transformation shifts the graph right by $3$, changing $(x,y)$ to $(x+3,y)$. Thus $(2,5) \\to (5,5)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q107",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $-1,4$ lies on $y=f$x$$, which point lies on $y=f$x$+2$?",
    "options": {
      "A": "$1,4$",
      "B": "$-1,6$",
      "C": "$-3,4$",
      "D": "$-1,2$"
    },
    "correct_answer": "B",
    "explanation": "The vertical shift upward by $2$ transforms $(x,y)$ into $(x,y+2)$, giving $(-1, 4+2) = (-1, 6)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q108",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $(3,-2)$ lies on $y=f(x)$, which point lies on $y=-f(x)$?",
    "options": {
      "A": "$-3,-2$",
      "B": "$3,2$",
      "C": "$-3,2$",
      "D": "$2,3$"
    },
    "correct_answer": "B",
    "explanation": "Reflecting across the $x$-axis changes $(x,y)$ to $(x,-y)$, so $(3,-2) \\to (3,2)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q109",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If $(4,1)$ lies on $y=f(x)$, which point lies on $y=f(-x)$?",
    "options": {
      "A": "$-4,1$",
      "B": "$4,-1$",
      "C": "$-4,-1$",
      "D": "$1,4$"
    },
    "correct_answer": "A",
    "explanation": "Reflecting across the $y$-axis changes $(x,y)$ to $-x,y$, giving $-4,1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q110",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=2f$x$$ is obtained by:",
    "options": {
      "A": "Halving every $x$-coordinate",
      "B": "Doubling every $y$-coordinate (vertical stretch)",
      "C": "Shifting upward by $2$",
      "D": "Doubling every $x$-coordinate"
    },
    "correct_answer": "B",
    "explanation": "Multiplying f(x)$$ by $2$ multiplies all $y$-values by $2$, creating a vertical stretch by a factor of $2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q111",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=\\dfrac{1}{2}f$x$$ represents a:",
    "options": {
      "A": "Vertical compression by factor $\\dfrac{1}{2}$",
      "B": "Horizontal compression by factor $\\dfrac{1}{2}$",
      "C": "Reflection in the $x$-axis",
      "D": "Shift downward"
    },
    "correct_answer": "A",
    "explanation": "Multiplying the output by $1/2$ reduces each $y$-coordinate by half, compressing the graph vertically.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q112",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f$2x$$ is obtained by:",
    "options": {
      "A": "Horizontal compression by factor $\\dfrac{1}{2}$",
      "B": "Horizontal stretch by factor $2$",
      "C": "Vertical stretch by factor $2$",
      "D": "Shifting two units left"
    },
    "correct_answer": "A",
    "explanation": "For $y=f$2x$$, each output that occurred at input $u$ now occurs at $x=u/2$, compressing horizontally by a factor of $1/2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q113",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f$x/3$$ represents a:",
    "options": {
      "A": "Horizontal compression by factor $3$",
      "B": "Horizontal stretch by factor $3$",
      "C": "Vertical stretch by factor $3$",
      "D": "Vertical compression by factor $1/3$"
    },
    "correct_answer": "B",
    "explanation": "Replacing $x$ with $x/3$ triples the distance of every point from the $y$-axis, stretching horizontally by a factor of $3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = A f$1$ + k \\implies (x,y) \\mapsto \\left(\\dfrac{x}{B}+h, Ay+k\\right)"
  },
  {
    "id": "c11-ch8-adv-q114",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph $y=|x|$ has its vertex at:",
    "options": {
      "A": "$0,0$",
      "B": "$1,0$",
      "C": "$0,1$",
      "D": "$-1,0$"
    },
    "correct_answer": "A",
    "explanation": "$|x|\\ge0$ with equality uniquely at $x=0$, giving the vertex (corner point) at $0,0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q115",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=|x-3|+2$ has vertex:",
    "options": {
      "A": "$-3,2$",
      "B": "$3,-2$",
      "C": "$3,2$",
      "D": "$-2,3$"
    },
    "correct_answer": "C",
    "explanation": "In the standard form $y=a|x-h|+k$, the vertex is $(h,k)=$3,2$$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q116",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of $y=-|x+1|+4$ is:",
    "options": {
      "A": "$y\\ge4$",
      "B": "$y\\le4$",
      "C": "$y\\ge-1$",
      "D": "$y\\le-1$"
    },
    "correct_answer": "B",
    "explanation": "Since $-|x+1|\\le0$, $y=-|x+1|+4\\le4$. Thus the range is $(-\\infty,4]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q117",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The zeros of $y=|x|-5$ are:",
    "options": {
      "A": "$x=5$ only",
      "B": "$x=-5$ only",
      "C": "$x=\\pm5$",
      "D": "$x=0$"
    },
    "correct_answer": "C",
    "explanation": "$|x|-5=0 \\implies |x|=5 \\implies x=5$ or $x=-5$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q118",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The equation $|x-2|=6$ has solutions:",
    "options": {
      "A": "$x=4,-8$",
      "B": "$x=8,-4$",
      "C": "$x=6,-2$",
      "D": "$x=8,4$"
    },
    "correct_answer": "B",
    "explanation": "$x-2=6 \\implies x=8$, and $x-2=-6 \\implies x=-4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q119",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=|f$x$|$ is obtained from $y=f$x$$ by:",
    "options": {
      "A": "Reflecting the whole graph across the $y$-axis",
      "B": "Reflecting the portions below the $x$-axis across the $x$-axis",
      "C": "Removing portions above the $x$-axis",
      "D": "Shifting the graph upward by one unit"
    },
    "correct_answer": "B",
    "explanation": "Where $f(x) \\ge 0$, $|f(x)| = f(x)$ (unchanged); where $f(x) < 0$, $|f(x)| = -f(x)$ (reflected above the $x$-axis).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q120",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=f(|x|)$ is always:",
    "options": {
      "A": "Odd",
      "B": "Even",
      "C": "Constant",
      "D": "One-one on $\\mathbb{R}$"
    },
    "correct_answer": "B",
    "explanation": "Let g(x)$=f(|x|)$. Then g(-x)$=f$|-x|$=f(|x|)=g$x$$, which satisfies the definition of an even function.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q121",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=\\sqrt{x}$ begins at the initial point:",
    "options": {
      "A": "$-1,0$",
      "B": "$0,0$",
      "C": "$0,1$",
      "D": "$1,0$"
    },
    "correct_answer": "B",
    "explanation": "The domain is $[0,\\infty)$, and at $x=0$, $y=\\sqrt{0}=0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q122",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of $y=\\sqrt{x-4}+3$ is:",
    "options": {
      "A": "$y\\ge3$",
      "B": "$y\\ge4$",
      "C": "$y\\le3$",
      "D": "$\\mathbb{R}$"
    },
    "correct_answer": "A",
    "explanation": "Since $\\sqrt{x-4}\\ge0$, $y=\\sqrt{x-4}+3\\ge3$. Thus the range is $[3,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q123",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of $y=\\sqrt{5-2x}$ is:",
    "options": {
      "A": "$x\\ge\\dfrac{5}{2}$",
      "B": "$x\\le\\dfrac{5}{2}$",
      "C": "$x>\\dfrac{5}{2}$",
      "D": "$x<5$"
    },
    "correct_answer": "B",
    "explanation": "$5-2x\\ge0 \\implies 2x\\le5 \\implies x\\le\\dfrac{5}{2}$, or $\\left(-\\infty, \\dfrac{5}{2}\\right]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q124",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain and range of $y=\\sqrt[3]{x}$ are respectively:",
    "options": {
      "A": "$[0,\\infty),[0,\\infty)$",
      "B": "$\\mathbb{R},[0,\\infty)$",
      "C": "$[0,\\infty),\\mathbb{R}$",
      "D": "$\\mathbb{R},\\mathbb{R}$"
    },
    "correct_answer": "D",
    "explanation": "The cube root is defined for all real numbers (domain $\\mathbb{R}$) and takes all real values (range $\\mathbb{R}$).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q125",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph of $y=\\sqrt[3]{x}$ is symmetric about:",
    "options": {
      "A": "The $x$-axis",
      "B": "The $y$-axis",
      "C": "The origin",
      "D": "The line $x=1$"
    },
    "correct_answer": "C",
    "explanation": "Since $\\sqrt[3]{-x}=-\\sqrt[3]{x}$, the function is odd and therefore symmetric with respect to the origin.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q126",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The inverse of f(x)$=x^3$ is:",
    "options": {
      "A": "$x^2$",
      "B": "$\\sqrt{x}$",
      "C": "$\\sqrt[3]{x}$",
      "D": "$\\dfrac{1}{x^3}$"
    },
    "correct_answer": "C",
    "explanation": "Solving $y=x^3$ for $x$ gives $x=\\sqrt[3]{y}$. Thus $f^{-1}$x$=\\sqrt[3]{x}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q127",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The vertical asymptote of $y=\\dfrac{1}{x-4}$ is:",
    "options": {
      "A": "$x=0$",
      "B": "$x=4$",
      "C": "$y=0$",
      "D": "$y=4$"
    },
    "correct_answer": "B",
    "explanation": "The denominator is zero at $x=4$, so $\\lim_{x\\to4} \\dfrac{1}{x-4} = \\pm\\infty$, creating a vertical asymptote at $x=4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q128",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The horizontal asymptote of $y=\\dfrac{1}{x-4}$ is:",
    "options": {
      "A": "$x=4$",
      "B": "$y=4$",
      "C": "$x=0$",
      "D": "$y=0$"
    },
    "correct_answer": "D",
    "explanation": "As $x\\to\\pm\\infty$, $\\dfrac{1}{x-4}\\to0$. Thus the horizontal asymptote is $y=0$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q129",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The asymptotes of $y=\\dfrac{2}{x+3}-1$ are:",
    "options": {
      "A": "$x=3,\\ y=1$",
      "B": "$x=-3,\\ y=-1$",
      "C": "$x=-1,\\ y=-3$",
      "D": "$x=2,\\ y=-1$"
    },
    "correct_answer": "B",
    "explanation": "Vertical asymptote occurs where $x+3=0 \\implies x=-3$. Horizontal asymptote is $y=-1$ as $x\\to\\pm\\infty$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q130",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The center of symmetry of the rectangular hyperbola $y=\\dfrac{5}{x-2}+4$ is:",
    "options": {
      "A": "$-2,4$",
      "B": "$2,-4$",
      "C": "$2,4$",
      "D": "$5,4$"
    },
    "correct_answer": "C",
    "explanation": "The center is the intersection of its vertical asymptote $x=2$ and horizontal asymptote $y=4$, which is $2,4$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q131",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The domain of $y=\\dfrac{x+1}{x^2-4}$ is:",
    "options": {
      "A": "$\\mathbb{R}\\setminus\\{-2,2\\}$",
      "B": "$\\mathbb{R}\\setminus\\{-1,1\\}$",
      "C": "$\\mathbb{R}\\setminus\\{2\\}$",
      "D": "$[-2,2]$"
    },
    "correct_answer": "A",
    "explanation": "$x^2-4=0 \\implies x=\\pm2$. Thus the domain is $\\mathbb{R}\\setminus\\{-2,2\\}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q132",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The vertical asymptotes of $y=\\dfrac{1}{x^2-9}$ are:",
    "options": {
      "A": "$x=\\pm9$",
      "B": "$y=\\pm3$",
      "C": "$x=\\pm3$",
      "D": "$y=0$"
    },
    "correct_answer": "C",
    "explanation": "Setting the denominator to zero: $x^2-9=0 \\implies x=3$ and $x=-3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q133",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=\\dfrac{1}{x^2+1}$ has no vertical asymptote because:",
    "options": {
      "A": "Its numerator is constant",
      "B": "$x^2+1$ is never zero for any real $x$",
      "C": "Its range is positive",
      "D": "It is an even function"
    },
    "correct_answer": "B",
    "explanation": "Since $x^2+1\\ge1>0$ for all $x\\in\\mathbb{R}$, the denominator has no real zeros, so there are no vertical asymptotes.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q134",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function has vertical asymptote $x=2$ and horizontal asymptote $y=3$?",
    "options": {
      "A": "$y=\\dfrac{1}{x+2}+3$",
      "B": "$y=\\dfrac{1}{x-2}-3$",
      "C": "$y=\\dfrac{1}{x-2}+3$",
      "D": "$y=\\dfrac{3}{x}+2$"
    },
    "correct_answer": "C",
    "explanation": "In $y=\\dfrac{a}{x-h}+k$, the vertical asymptote is $x=h=2$ and the horizontal asymptote is $y=k=3$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q135",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The $y$-intercept of $y=\\dfrac{1}{x+1}$ is:",
    "options": {
      "A": "$0,0$",
      "B": "$0,1$",
      "C": "$1,0$",
      "D": "$0,-1$"
    },
    "correct_answer": "B",
    "explanation": "Setting $x=0$: $y=\\dfrac{1}{0+1}=1$, giving the point $0,1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q136",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The rational function $y=\\dfrac{x}{x+1}$ can be rewritten as:",
    "options": {
      "A": "$1+\\dfrac{1}{x+1}$",
      "B": "$1-\\dfrac{1}{x+1}$",
      "C": "$-1+\\dfrac{1}{x+1}$",
      "D": "$x-\\dfrac{1}{x+1}$"
    },
    "correct_answer": "B",
    "explanation": "$\\dfrac{x}{x+1}=\\dfrac{x+1-1}{x+1}=1-\\dfrac{1}{x+1}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q137",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The horizontal asymptote of $y=\\dfrac{x}{x+1}$ is:",
    "options": {
      "A": "$y=-1$",
      "B": "$y=0$",
      "C": "$y=1$",
      "D": "$x=-1$"
    },
    "correct_answer": "C",
    "explanation": "As $x\\to\\pm\\infty$, $\\dfrac{1}{x+1}\\to0 \\implies y\\to1$. Thus the horizontal asymptote is $y=1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "y = \\dfrac{ax+b}{cx+d} \\implies \\text{V.A.: } x = -\\dfrac{d}{c}, \\; \\text{H.A.: } y = \\dfrac{a}{c}"
  },
  {
    "id": "c11-ch8-adv-q138",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The range of $y=\\dfrac{x}{x+1}$ is:",
    "options": {
      "A": "$\\mathbb{R}\\setminus\\{-1\\}$",
      "B": "$\\mathbb{R}\\setminus\\{0\\}$",
      "C": "$\\mathbb{R}\\setminus\\{1\\}$",
      "D": "$[0,1]$"
    },
    "correct_answer": "C",
    "explanation": "Solving $y=\\dfrac{x}{x+1}$ for $x$: $yx+y=x \\implies x$1-y$=y \\implies x=\\dfrac{y}{1-y}$. This is valid for all $y\\ne1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "\\text{Range}(f) = \\{f(x) : x \\in \\text{Dom}(f)\\}"
  },
  {
    "id": "c11-ch8-adv-q139",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which point lies on the curve $y=x^3-2$?",
    "options": {
      "A": "$1,-1$",
      "B": "$1,1$",
      "C": "$2,4$",
      "D": "$0,2$"
    },
    "correct_answer": "A",
    "explanation": "When $x=1$, $y=1^3-2=-1$, matching $1,-1$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q140",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The graph $y=$x-1$^3+2$ has its inflection point (central point of symmetry) at:",
    "options": {
      "A": "$-1,2$",
      "B": "$1,-2$",
      "C": "$1,2$",
      "D": "$2,1$"
    },
    "correct_answer": "C",
    "explanation": "The base inflection point $0,0$ of $y=x^3$ is shifted right by $1$ and upward by $2$, landing at $1,2$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q141",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which equation represents the reflection of $y=x^3$ across the $x$-axis?",
    "options": {
      "A": "$y=$-x$^3$",
      "B": "$y=-x^3$",
      "C": "Both A and B",
      "D": "$y=x^3+1$"
    },
    "correct_answer": "C",
    "explanation": "Reflecting across the $x$-axis yields $y=-x^3$. Since $$-x$^3=-x^3$, both expressions represent the same curve.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q142",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=x^3$ is strictly increasing on:",
    "options": {
      "A": "Only $(0,\\infty)$",
      "B": "Only $(-\\infty,0)$",
      "C": "All real numbers $\\mathbb{R}$",
      "D": "No interval"
    },
    "correct_answer": "C",
    "explanation": "For any $x_1 < x_2$, $x_1^3 < x_2^3$. Thus f(x)$=x^3$ is strictly increasing on $(-\\infty,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q143",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=x^2$ is strictly decreasing on:",
    "options": {
      "A": "$(-\\infty,0]$",
      "B": "$[0,\\infty)$",
      "C": "$\\mathbb{R}$",
      "D": "No real interval"
    },
    "correct_answer": "A",
    "explanation": "For $x_1 < x_2 \\le 0$, $x_1^2 > x_2^2$, so f(x)$=x^2$ is strictly decreasing on $(-\\infty,0]$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q144",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=x^2$ is strictly increasing on:",
    "options": {
      "A": "$(-\\infty,0]$",
      "B": "$[0,\\infty)$",
      "C": "$(-\\infty,\\infty)$",
      "D": "$[-1,1]$"
    },
    "correct_answer": "B",
    "explanation": "For $0 \\le x_1 < x_2$, $x_1^2 < x_2^2$, so f(x)$=x^2$ is strictly increasing on $[0,\\infty)$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q145",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The function f(x)$=|x|$ is decreasing on:",
    "options": {
      "A": "$(-\\infty,0]$",
      "B": "$[0,\\infty)$",
      "C": "$\\mathbb{R}$",
      "D": "$[1,\\infty)$"
    },
    "correct_answer": "A",
    "explanation": "For $x\\le0$, f(x)$=-x$, which is a line with negative slope (decreasing).",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q146",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If every horizontal line intersects a graph in at most one point, the function is:",
    "options": {
      "A": "Onto",
      "B": "One-one (injective)",
      "C": "Constant",
      "D": "Even"
    },
    "correct_answer": "B",
    "explanation": "The horizontal line test verifies injectivity (one-to-one property): distinct inputs never produce identical outputs.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q147",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "Which function fails the horizontal-line test on $\\mathbb{R}$?",
    "options": {
      "A": "$y=2x+1$",
      "B": "$y=x^3$",
      "C": "$y=x^2$",
      "D": "$y=\\sqrt[3]{x}$"
    },
    "correct_answer": "C",
    "explanation": "Any horizontal line $y=c$ ($c>0$) intersects $y=x^2$ at two distinct points $x=\\pm\\sqrt{c}$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q148",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "If a relation's graph intersects a vertical line at three points, then it:",
    "options": {
      "A": "Represents an onto function",
      "B": "Represents a one-one function",
      "C": "Does not represent $y$ as a function of $x$",
      "D": "Must be a parabola"
    },
    "correct_answer": "C",
    "explanation": "A function must assign exactly one output to each input. Three intersections mean one $x$ gives three $y$'s, failing the vertical line test.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q149",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The total number of functions from a $3$-element set $A$ to a $2$-element set $B$ is:",
    "options": {
      "A": "$6$",
      "B": "$8$",
      "C": "$9$",
      "D": "$12$"
    },
    "correct_answer": "B",
    "explanation": "Each of the $3$ elements of $A$ has $2$ independent choices of image in $B$: $|B|^{|A|} = 2^3 = 8$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  },
  {
    "id": "c11-ch8-adv-q150",
    "class": 11,
    "subject": "Mathematics",
    "chapter_id": "c11-ch8",
    "question": "The number of one-one (injective) functions from a $2$-element set $A$ to a $4$-element set $B$ is:",
    "options": {
      "A": "$6$",
      "B": "$8$",
      "C": "$12$",
      "D": "$16$"
    },
    "correct_answer": "C",
    "explanation": "The number of injective functions is $^4P_2 = 4 \\times 3 = 12$.",
    "difficulty": "Hard",
    "difficulty_tier": "Advanced",
    "formula": "f: A \\to B, \\quad \\forall x \\in A, \\; \\exists! y \\in B \\text{ such that } f(x) = y"
  }
];
