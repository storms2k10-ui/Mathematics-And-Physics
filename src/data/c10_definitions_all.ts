import { MathDefinition } from '../types';

export const C10_DEFINITIONS_ALL: MathDefinition[] = [
  {
    "id": "def-c10-ch1-1",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Set",
    "category": "Set Theory & Logic",
    "definition": "A well-defined collection of distinct objects is called a set.",
    "formula": "A = \\{x \\mid P(x)\\}",
    "keyPoints": [
      "Well-defined means it is universally clear whether an object belongs to the set or not",
      "Distinct means no two elements in a set are identical (no repetition)",
      "Sets are typically denoted by capital letters $A, B, C, \\dots$ and elements by lowercase letters"
    ],
    "example": "Set of even natural numbers: $E = \\{2, 4, 6, 8, \\dots\\}$."
  },
  {
    "id": "def-c10-ch1-form-desc",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Descriptive Form",
    "category": "Set Representations",
    "definition": "A method of specifying a set by stating the common defining characteristic property of all its elements in plain words.",
    "formula": "A = \\text{Set of all prime numbers less than } 15",
    "keyPoints": [
      "Uses clear verbal or written natural language descriptions instead of listing elements",
      "Clearly states the scope and boundary condition of the members without mathematical symbols",
      "Can be easily converted to tabular or set-builder form"
    ],
    "example": "$N = \\text{Set of natural numbers less than } 10$.",
    "diagramType": "set_representations_forms"
  },
  {
    "id": "def-c10-ch1-form-tab",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Tabular Form (Roster Form)",
    "category": "Set Representations",
    "definition": "A method of representing a set by listing all its actual elements explicitly enclosed within curly braces $\\{ \\}$, separated by commas.",
    "formula": "A = \\{a_1, a_2, a_3, \\dots, a_n\\}",
    "keyPoints": [
      "Every distinct element is written explicitly once inside braces (repetition is omitted)",
      "The order of elements inside the set does not matter: $\\{1, 2, 3\\} = \\{3, 1, 2\\}$",
      "Ellipsis $\\dots$ is used for large or infinite systematic sets: $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$"
    ],
    "example": "Set of vowels in English alphabet: $V = \\{a, e, i, o, u\\}$.",
    "diagramType": "set_representations_forms"
  },
  {
    "id": "def-c10-ch1-form-builder",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Set Builder Form",
    "category": "Set Representations",
    "definition": "A symbolic mathematical notation where a set is described by stating a representative variable and the precise logical condition or rule $P(x)$ that characterizes its elements.",
    "formula": "A = \\{x \\mid P(x)\\} \\quad \\text{or} \\quad A = \\{x : x \\in \\mathbb{N} \\land 1 \\le x \\le 10\\}",
    "keyPoints": [
      "The vertical bar $\\mid$ or colon $:$ is read as 'such that'",
      "Specifies the universe/number system and the filtering constraint simultaneously",
      "Most compact and standard notation for infinite or continuous mathematical sets"
    ],
    "example": "$E = \\{x \\mid x = 2k, \\; k \\in \\mathbb{Z}\\}$ represents all even integers.",
    "diagramType": "set_representations_forms"
  },
  {
    "id": "def-c10-ch1-2",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Element",
    "category": "Set Theory & Logic",
    "definition": "An object belonging to a set is called an element or member of the set.",
    "formula": "x \\in A \\quad (x \\text{ belongs to } A), \\qquad y \\notin A \\quad (y \\text{ does not belong to } A)",
    "keyPoints": [
      "The Greek symbol $\\in$ (epsilon) denotes set membership",
      "If an object is not a member of the set, we write $\\notin$"
    ],
    "example": "If $A = \\{1, 2, 3\\}$, then $2 \\in A$ and $5 \\notin A$."
  },
  {
    "id": "def-c10-ch1-3",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Empty Set (Null Set)",
    "category": "Set Theory & Logic",
    "definition": "A set containing no element is called an empty or null set.",
    "formula": "\\emptyset \\quad \\text{or} \\quad \\{\\}",
    "keyPoints": [
      "Denoted by the symbol $\\emptyset$ (phi) or empty braces $\\{\\}$",
      "The empty set is a subset of every set ($\\emptyset \\subseteq A$ for all $A$)",
      "The cardinality of the empty set is zero: $n(\\emptyset) = 0$"
    ],
    "example": "Set of real solutions to $x^2 + 1 = 0$ over $\\mathbb{R}$ is $\\emptyset$."
  },
  {
    "id": "def-c10-ch1-4",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Singleton Set",
    "category": "Set Theory & Logic",
    "definition": "A set containing exactly one single element is called a singleton set or unit set.",
    "formula": "S = \\{a\\}, \\quad n(S) = 1",
    "keyPoints": [
      "Has cardinality equal to $1$",
      "The total number of subsets for a singleton set is $2^1 = 2$ (namely $\\emptyset$ and $\\{a\\}$)",
      "The total number of proper subsets is $2^1 - 1 = 1$ (namely $\\emptyset$)"
    ],
    "example": "$S = \\{0\\}$ or the set of even prime numbers $P_{even} = \\{2\\}$.",
    "diagramType": "sets_venn_subsets"
  },
  {
    "id": "def-c10-ch1-5",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Universal Set",
    "category": "Set Theory & Logic",
    "definition": "A set containing all possible elements under consideration in a given problem or mathematical context is called the universal set, denoted $U$ or $\\xi$.",
    "formula": "U = \\{x \\mid x \\text{ is in mathematical context}\\}, \\quad \\forall A, \\; A \\subseteq U",
    "keyPoints": [
      "Denoted by $U$ or Greek letter $\\xi$ (xi)",
      "All other sets in the given context are subsets of $U$",
      "Represented as the enclosing bounding rectangle in Venn diagrams",
      "The complement of the universal set is the empty set: $U' = \\emptyset$"
    ],
    "example": "In integer arithmetic, $U = \\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$.",
    "diagramType": "sets_venn_subsets"
  },
  {
    "id": "def-c10-ch1-subset",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Subset",
    "category": "Set Theory & Logic",
    "definition": "If every element of set $A$ is also an element of set $B$, then $A$ is called a subset of $B$, denoted $A \\subseteq B$.",
    "formula": "A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B)",
    "keyPoints": [
      "Every set is an improper subset of itself ($A \\subseteq A$)",
      "The empty set is a subset of every set ($\\emptyset \\subseteq A$)",
      "If a set has $n$ elements, the total number of its subsets is $2^n$"
    ],
    "example": "If $A = \\{1, 3\\}$ and $B = \\{1, 2, 3, 4\\}$, then $A \\subseteq B$.",
    "diagramType": "sets_venn_subsets"
  },
  {
    "id": "def-c10-ch1-superset",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Super Set",
    "category": "Set Theory & Logic",
    "definition": "If set $A$ is a subset of set $B$ ($A \\subseteq B$), then set $B$ is called a super set of set $A$, denoted $B \\supseteq A$.",
    "formula": "B \\supseteq A \\iff A \\subseteq B",
    "keyPoints": [
      "If $B$ contains at least one element not in $A$, then $B$ is a proper super set ($B \\supset A$)",
      "Every set is an improper super set of itself ($A \\supseteq A$)",
      "The universal set $U$ is the super set of all sets in that discussion ($U \\supseteq A$)"
    ],
    "example": "If $B = \\{1, 2, 3, 4, 5\\}$ and $A = \\{2, 4\\}$, then $B \\supseteq A$ ($B$ is a super set of $A$).",
    "diagramType": "sets_venn_subsets"
  },
  {
    "id": "def-c10-ch1-7",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Power Set",
    "category": "Set Theory & Logic",
    "definition": "The set consisting of all possible subsets of a set $A$ is called the power set of $A$, denoted $P(A)$ or $2^A$.",
    "formula": "P(A) = \\{S \\mid S \\subseteq A\\}, \\quad n(P(A)) = 2^n",
    "keyPoints": [
      "The power set always contains $\\emptyset$ and the full set $A$ itself as elements",
      "If $n(A) = 3$, cardinality of power set is $n(P(A)) = 2^3 = 8$",
      "The power set is never empty, even if $A = \\emptyset$: $P(\\emptyset) = \\{\\emptyset\\}$"
    ],
    "example": "If $A = \\{x, y\\}$, then $P(A) = \\{\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\}$."
  },
  {
    "id": "def-c10-ch1-exhaustive",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Exhaustive Set",
    "category": "Set Theory & Logic",
    "definition": "A collection of subsets $A_1, A_2, \\dots, A_k$ of a set $S$ is called exhaustive if their combined union is equal to the entire set $S$.",
    "formula": "\\bigcup_{i=1}^k A_i = A_1 \\cup A_2 \\cup \\dots \\cup A_k = S",
    "keyPoints": [
      "No element of $S$ is left out of the collection",
      "In probability, a set of events is exhaustive if at least one of them must occur during the trial",
      "If exhaustive subsets are also mutually disjoint, they partition the set $S$ into cells"
    ],
    "example": "For rolling a die with $S = \\{1, 2, 3, 4, 5, 6\\}$, $E = \\{2, 4, 6\\}$ and $O = \\{1, 3, 5\\}$ form an exhaustive set since $E \\cup O = S$.",
    "diagramType": "set_partitions_cells"
  },
  {
    "id": "def-c10-ch1-cells",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Cells (Partition Cells)",
    "category": "Set Theory & Logic",
    "definition": "When a non-empty set $S$ is partitioned into a collection of non-empty, pairwise mutually disjoint subsets $A_1, A_2, \\dots, A_k$ whose union is $S$, each individual component subset $A_i$ is called a cell or block of the partition.",
    "formula": "\\text{Cell } A_i \\subseteq S \\quad \\text{where } A_i \\neq \\emptyset, \\; A_i \\cap A_j = \\emptyset \\; (i \\neq j), \\; \\bigcup_{i=1}^k A_i = S",
    "keyPoints": [
      "Every element of $S$ belongs to exactly one cell (no overlap and no gaps)",
      "No cell in a valid mathematical partition can be empty ($A_i \\neq \\emptyset$)",
      "Equivalence relations on a set induce a natural partition into equivalence class cells"
    ],
    "example": "Partitioning the integers $\\mathbb{Z}$ into two cells: $A_1 = \\{\\text{even integers}\\}$ and $A_2 = \\{\\text{odd integers}\\}$.",
    "diagramType": "set_partitions_cells"
  },
  {
    "id": "def-c10-ch1-8",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Union of Sets",
    "category": "Set Operations",
    "definition": "The union of sets $A$ and $B$, denoted $A \\cup B$, is the set of all elements belonging to $A$, $B$, or both.",
    "formula": "A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}",
    "keyPoints": [
      "Commutative: $A \\cup B = B \\cup A$",
      "Associative: $(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
      "Identity: $A \\cup \\emptyset = A$"
    ],
    "example": "$\\{1, 2\\} \\cup \\{2, 3\\} = \\{1, 2, 3\\}$."
  },
  {
    "id": "def-c10-ch1-9",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Intersection of Sets",
    "category": "Set Operations",
    "definition": "The intersection of sets $A$ and $B$, denoted $A \\cap B$, is the set of all elements common to both $A$ and $B$.",
    "formula": "A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}",
    "keyPoints": [
      "Commutative: $A \\cap B = B \\cap A$",
      "Disjoint sets if $A \\cap B = \\emptyset$"
    ],
    "example": "$\\{1, 2, 3\\} \\cap \\{2, 3, 4\\} = \\{2, 3\\}$."
  },
  {
    "id": "def-c10-ch1-10",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Complement of a Set",
    "category": "Set Operations",
    "definition": "The complement of set $A$, denoted $A'$ or $A^c$, is the set of all elements in universal set $U$ that do not belong to $A$.",
    "formula": "A' = U - A = \\{x \\in U \\mid x \\notin A\\}",
    "keyPoints": [
      "$(A')' = A$",
      "$A \\cup A' = U$ and $A \\cap A' = \\emptyset$",
      "$U' = \\emptyset$ and $\\emptyset' = U$"
    ],
    "example": "If $U = \\{1, 2, 3, 4, 5\\}$ and $A = \\{2, 4\\}$, then $A' = \\{1, 3, 5\\}$."
  },
  {
    "id": "def-c10-ch1-11",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "De Morgan's Laws",
    "category": "Set Theory & Logic",
    "definition": "Two fundamental laws governing set complementation over unions and intersections.",
    "formula": "(A \\cup B)' = A' \\cap B', \\qquad (A \\cap B)' = A' \\cup B'",
    "keyPoints": [
      "Complement of union equals intersection of complements",
      "Complement of intersection equals union of complements"
    ],
    "example": "Used for set simplification and logical circuit analysis."
  },
  {
    "id": "def-c10-ch1-12",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Cartesian Product",
    "category": "Relations & Functions",
    "definition": "The Cartesian product of two non-empty sets $A$ and $B$, denoted $A \\times B$, is the set of all ordered pairs $(a, b)$ such that $a \\in A$ and $b \\in B$.",
    "formula": "A \\times B = \\{(a, b) \\mid a \\in A \\land b \\in B\\}, \\quad n(A \\times B) = n(A) \\cdot n(B)",
    "keyPoints": [
      "If $n(A) = p$ and $n(B) = q$, then $n(A \\times B) = p \\cdot q$",
      "Non-commutative: $A \\times B \\neq B \\times A$ unless $A = B$",
      "The total number of binary relations from $A$ to $B$ is $2^{p \\cdot q}$"
    ],
    "example": "$\\{1, 2\\} \\times \\{a, b\\} = \\{(1, a), (1, b), (2, a), (2, b)\\}$.",
    "diagramType": "cartesian_product_relation"
  },
  {
    "id": "def-c10-ch1-13",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Relation (Binary Relation)",
    "category": "Relations & Functions",
    "definition": "Any subset $R$ of the Cartesian product $A \\times B$ is called a binary relation from set $A$ to set $B$.",
    "formula": "R \\subseteq A \\times B, \\quad \\text{Total Relations} = 2^{n(A) \\cdot n(B)}",
    "keyPoints": [
      "Domain: Set of all first elements of ordered pairs in $R$ ($\\text{Dom}(R)$)",
      "Range: Set of all second elements of ordered pairs in $R$ ($\\text{Ran}(R)$)",
      "Inverse relation $R^{-1} = \\{(b, a) \\mid (a, b) \\in R\\}$"
    ],
    "example": "For $A = \\{1, 2, 3\\}, B = \\{2, 4, 6\\}$, $R = \\{(a, b) \\mid b = 2a\\} = \\{(1, 2), (2, 4), (3, 6)\\}$.",
    "diagramType": "cartesian_product_relation"
  },
  {
    "id": "def-c10-ch1-14",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Function (Mapping)",
    "category": "Relations & Functions",
    "definition": "A binary relation $f$ from set $A$ to set $B$ is called a function (or mapping) if the domain of $f$ equals $A$, and for every $x \\in A$, there is a unique $y \\in B$ such that $(x, y) \\in f$.",
    "formula": "f: A \\to B \\iff \\operatorname{Dom}(f) = A \\;\\land\\; [(x, y_1) \\in f \\land (x, y_2) \\in f \\implies y_1 = y_2]",
    "keyPoints": [
      "Every element of domain $A$ must have an associated image in codomain $B$",
      "No element in domain $A$ can be mapped to more than one distinct element in $B$",
      "Set $A$ is the domain, set $B$ is the codomain, and $f(A) = \\{f(x) \\mid x \\in A\\}$ is the range"
    ],
    "example": "If $A = \\{1, 2, 3\\}$ and $B = \\{2, 4, 6\\}$, then $f = \\{(1, 2), (2, 4), (3, 6)\\}$ is a function where $f(x) = 2x$.",
    "diagramType": "function_mapping"
  },
  {
    "id": "def-c10-ch1-15a",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Injective Function (One-to-One / 1-1 Function)",
    "category": "Relations & Functions",
    "definition": "A function $f: A \\to B$ is called an injective function (or one-to-one function, denoted $1-1$) if distinct elements of domain $A$ have distinct images in codomain $B$.",
    "formula": "f(x_1) = f(x_2) \\implies x_1 = x_2 \\qquad (\\text{or equivalently: } x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2))",
    "keyPoints": [
      "No two distinct elements in domain $A$ map to the same element in codomain $B$",
      "Horizontal Line Test: A horizontal line intersects the graph of an injective function at most once",
      "Strictly monotonic functions (strictly increasing or strictly decreasing) are always injective"
    ],
    "example": "$f(x) = 3x + 5$ is injective on $\\mathbb{R}$ because $3x_1 + 5 = 3x_2 + 5 \\implies x_1 = x_2$."
  },
  {
    "id": "def-c10-ch1-15b",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Surjective Function (Onto Function)",
    "category": "Relations & Functions",
    "definition": "A function $f: A \\to B$ is called a surjective function (or onto function) if every element in the codomain $B$ is the image of at least one element in domain $A$, meaning the range of $f$ is equal to codomain $B$.",
    "formula": "\\operatorname{Range}(f) = B \\iff \\forall y \\in B, \\; \\exists x \\in A \\text{ such that } f(x) = y",
    "keyPoints": [
      "There are no unmapped or leftover elements in codomain $B$",
      "Range $(f) = \\text{Codomain } B$",
      "If the codomain is made equal to the range of any function, the function becomes surjective"
    ],
    "example": "For $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 2x - 7$, for any $y \\in \\mathbb{R}$, $x = \\frac{y+7}{2} \\in \\mathbb{R}$ satisfies $f(x) = y$, hence $f$ is surjective (onto)."
  },
  {
    "id": "def-c10-ch1-15c",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Bijective Function (One-to-One Correspondence)",
    "category": "Relations & Functions",
    "definition": "A function $f: A \\to B$ is called a bijective function (or a one-to-one correspondence / $(1-1)$ and onto function) if it is both injective (one-to-one) and surjective (onto).",
    "formula": "f \\text{ is Bijective} \\iff [f(x_1) = f(x_2) \\implies x_1 = x_2] \\;\\land\\; [\\operatorname{Range}(f) = B]",
    "keyPoints": [
      "Pairs every element of $A$ with exactly one unique element of $B$, and vice-versa",
      "A function is invertible ($f^{-1}$ exists) if and only if it is bijective",
      "For finite sets, if $f: A \\to B$ is bijective, then $n(A) = n(B)$"
    ],
    "example": "$f(x) = x^3$ from $\\mathbb{R} \\to \\mathbb{R}$ is bijective because every real number has a unique cube and cube root."
  },
  {
    "id": "def-c10-ch1-15d",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Into Function",
    "category": "Relations & Functions",
    "definition": "A function $f: A \\to B$ is called an into function if there is at least one element in codomain $B$ which is not the image of any element in domain $A$, i.e., Range$(f) \\subset B$ is a proper subset of $B$.",
    "formula": "\\operatorname{Range}(f) \\subset B \\quad (\\operatorname{Range}(f) \\neq B)",
    "keyPoints": [
      "At least one element in $B$ has no pre-image in $A$",
      "A function that is not surjective (onto) is always an into function"
    ],
    "example": "If $A = \\{1, 2\\}, B = \\{3, 4, 5\\}$ and $f = \\{(1, 3), (2, 4)\\}$, then $\\operatorname{Range}(f) = \\{3, 4\\} \\subset B$, so $f$ is an into function."
  },
  {
    "id": "def-c10-ch1-15e",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Constant Function",
    "category": "Relations & Functions",
    "definition": "A function $f: A \\to B$ is called a constant function if all elements in the domain $A$ map to the exact same single element $c \\in B$.",
    "formula": "f(x) = c \\quad \\forall x \\in A, \\qquad \\operatorname{Range}(f) = \\{c\\}",
    "keyPoints": [
      "The range is a singleton set $\\{c\\}$",
      "Its graph on the Cartesian plane is a horizontal line parallel to the x-axis ($y = c$)",
      "The rate of change (derivative) of a constant function is identically zero: $f'(x) = 0$"
    ],
    "example": "$f(x) = 7$ for all $x \\in \\mathbb{R}$. Whether $x = -10, 0,$ or $100$, $f(x) = 7$."
  },
  {
    "id": "def-c10-ch1-15f",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Identity Function",
    "category": "Relations & Functions",
    "definition": "A function $I_A: A \\to A$ on a set $A$ is called the identity function if it maps every element of $A$ onto itself.",
    "formula": "I_A(x) = x \\quad \\forall x \\in A, \\qquad \\operatorname{Dom}(I_A) = \\operatorname{Range}(I_A) = A",
    "keyPoints": [
      "Every element is its own image: $(x, x) \\in I_A$",
      "The graph of the identity function on $\\mathbb{R}$ is the straight line $y = x$ passing through origin at angle $45^\\circ$",
      "Identity function is always bijective and serves as the identity element under function composition: $f \\circ I = I \\circ f = f$"
    ],
    "example": "$I(5) = 5, \\; I(-3) = -3, \\; I(\\pi) = \\pi$."
  },
  {
    "id": "def-c10-ch1-15g",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Linear Function",
    "category": "Relations & Functions",
    "definition": "A polynomial function of degree 1 is called a linear function. Its graph on the Cartesian coordinate plane is a straight non-vertical line.",
    "formula": "f(x) = mx + c \\quad (m, c \\in \\mathbb{R}, \\; m \\neq 0)",
    "keyPoints": [
      "$m$ is the slope of the line: $m = \\frac{\\Delta y}{\\Delta x} = \\tan\\theta$",
      "$c$ is the y-intercept $(0, c)$ where the line cuts the y-axis",
      "Domain and Range are both the entire set of real numbers $\\mathbb{R}$ when $m \\neq 0$"
    ],
    "example": "$f(x) = 2x - 3$ has slope $m = 2$ and y-intercept $(0, -3)$."
  },
  {
    "id": "def-c10-ch1-15h",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Quadratic Function",
    "category": "Relations & Functions",
    "definition": "A second-degree polynomial function of the form $f(x) = ax^2 + bx + c$ with $a \\neq 0$. Its graph is a symmetrical U-shaped curve called a parabola.",
    "formula": "f(x) = ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right) \\quad (a \\neq 0)",
    "keyPoints": [
      "Parabola opens upwards if $a > 0$ (has a minimum vertex) and downwards if $a < 0$ (has a maximum vertex)",
      "Vertex Coordinates: $V\\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right)$ where $D = b^2 - 4ac$",
      "Axis of symmetry is the vertical line $x = -\\frac{b}{2a}$",
      "Domain is $\\mathbb{R}$; Range is $\\left[-\\frac{D}{4a}, \\infty\\right)$ for $a > 0$ and $\\left(-\\infty, -\\frac{D}{4a}\\right]$ for $a < 0$"
    ],
    "example": "$f(x) = x^2 - 4x + 3 = (x-2)^2 - 1$ has vertex at $(2, -1)$, opens upward, and roots at $x = 1, 3$."
  },
  {
    "id": "def-c10-ch1-15i",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Inverse Function",
    "category": "Relations & Functions",
    "definition": "If $f: A \\to B$ is a bijective function, then the inverse function $f^{-1}: B \\to A$ is the function that assigns to each $y \\in B$ the unique $x \\in A$ such that $f(x) = y$.",
    "formula": "f^{-1}(y) = x \\iff f(x) = y, \\qquad (f^{-1} \\circ f)(x) = x, \\quad (f \\circ f^{-1})(y) = y",
    "keyPoints": [
      "Domain of $f^{-1}$ is Range of $f$, and Range of $f^{-1}$ is Domain of $f$",
      "The graph of $y = f^{-1}(x)$ is the reflection of the graph of $y = f(x)$ across the line $y = x$",
      "Only bijective (one-to-one and onto) functions possess well-defined two-sided inverse functions"
    ],
    "example": "If $f(x) = 2x + 3$, then solving $y = 2x + 3$ for $x$ gives $x = \\frac{y-3}{2}$, so $f^{-1}(x) = \\frac{x-3}{2}$."
  },
  {
    "id": "def-c10-ch1-15j",
    "class": 10,
    "chapterId": "c10-ch1",
    "chapterName": "Sets and Functions",
    "term": "Composite Function",
    "category": "Relations & Functions",
    "definition": "Given two functions $f: A \\to B$ and $g: B \\to C$, the composite function $(g \\circ f): A \\to C$ is defined by $(g \\circ f)(x) = g(f(x))$ for all $x \\in A$.",
    "formula": "(g \\circ f)(x) = g(f(x)) \\quad \\forall x \\in A",
    "keyPoints": [
      "Composition requires the range of $f$ to be a subset of the domain of $g$: $\\operatorname{Range}(f) \\subseteq \\operatorname{Dom}(g)$",
      "Function composition is generally not commutative: $(g \\circ f)(x) \\neq (f \\circ g)(x)$",
      "Function composition is associative: $h \\circ (g \\circ f) = (h \\circ g) \\circ f$"
    ],
    "example": "If $f(x) = x + 1$ and $g(x) = x^2$, then $(g \\circ f)(x) = g(x+1) = (x+1)^2$, whereas $(f \\circ g)(x) = f(x^2) = x^2 + 1$."
  },
  {
    "id": "def-c10-ch2-1",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Ratio",
    "category": "Variations & Proportions",
    "definition": "A comparison between two quantities of the same kind measured in the same units expressed as a quotient.",
    "formula": "a : b = \\frac{a}{b} \\quad (b \\neq 0)",
    "keyPoints": [
      "Has no units of measurement",
      "First term is antecedent, second is consequent"
    ],
    "example": "Ratio of 40 cm to 1 m (100 cm) is $40 : 100 = 2 : 5$."
  },
  {
    "id": "def-c10-ch2-2",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Proportion",
    "category": "Variations & Proportions",
    "definition": "An equality of two ratios $a : b$ and $c : d$ is called a proportion.",
    "formula": "a : b = c : d \\iff \\frac{a}{b} = \\frac{c}{d} \\iff ad = bc",
    "keyPoints": [
      "Product of extremes ($ad$) = Product of means ($bc$)"
    ],
    "example": "In $2 : 3 = 4 : x$, $2x = 12 \\implies x = 6$."
  },
  {
    "id": "def-c10-ch2-3",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Direct Variation",
    "category": "Variations & Proportions",
    "definition": "A relationship between two variables $y$ and $x$ such that an increase (or decrease) in $x$ causes a proportional increase (or decrease) in $y$.",
    "formula": "y \\propto x \\iff y = kx \\quad (k \\neq 0)",
    "keyPoints": [
      "$k = \\frac{y}{x}$ is the constant of variation",
      "Graph is a straight line through the origin"
    ],
    "example": "Hooke's Law $F = kx$."
  },
  {
    "id": "def-c10-ch2-4",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Inverse Variation",
    "category": "Variations & Proportions",
    "definition": "A relationship where an increase in $x$ causes a proportional decrease in $y$, and vice versa.",
    "formula": "y \\propto \\frac{1}{x} \\iff y = \\frac{k}{x} \\iff xy = k \\quad (k \\neq 0)",
    "keyPoints": [
      "Product of variables remains constant ($xy = k$)",
      "Graph is a rectangular hyperbola"
    ],
    "example": "Boyle's Law $PV = k$."
  },
  {
    "id": "def-c10-ch2-5",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Joint Variation",
    "category": "Variations & Proportions",
    "definition": "A variation where a variable depends directly and/or inversely on a combination of two or more other variables.",
    "formula": "z \\propto \\frac{xy}{w} \\iff z = \\frac{kxy}{w}",
    "keyPoints": [
      "Combines multiple direct and inverse dependencies into a single equation"
    ],
    "example": "Ideal gas law $PV = nRT$."
  },
  {
    "id": "def-c10-ch2-6",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Theorem on Invertendo",
    "category": "Proportion Theorems",
    "definition": "If $a : b = c : d$, then $b : a = d : c$.",
    "formula": "\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{b}{a} = \\frac{d}{c}",
    "keyPoints": [
      "Inverting both ratios preserves equality"
    ],
    "example": "If $\\frac{2}{3} = \\frac{4}{6}$, then $\\frac{3}{2} = \\frac{6}{4}$."
  },
  {
    "id": "def-c10-ch2-7",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Theorem on Alternando",
    "category": "Proportion Theorems",
    "definition": "If $a : b = c : d$, then $a : c = b : d$.",
    "formula": "\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a}{c} = \\frac{b}{d}",
    "keyPoints": [
      "Interchanging the means preserves equality"
    ],
    "example": "If $\\frac{3}{4} = \\frac{6}{8}$, then $\\frac{3}{6} = \\frac{4}{8}$."
  },
  {
    "id": "def-c10-ch2-8",
    "class": 10,
    "chapterId": "c10-ch2",
    "chapterName": "Variations",
    "term": "Theorem on Componendo & Dividendo",
    "category": "Proportion Theorems",
    "definition": "If $a : b = c : d$, then $(a + b) : (a - b) = (c + d) : (c - d)$.",
    "formula": "\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a+b}{a-b} = \\frac{c+d}{c-d}",
    "keyPoints": [
      "Crucial tool for solving fractional algebraic equations rapidly"
    ],
    "example": "If $\\frac{x+1}{x-1} = \\frac{3}{2}$, then $\\frac{(x+1)+(x-1)}{(x+1)-(x-1)} = \\frac{3+2}{3-2} \\implies \\frac{2x}{2} = 5 \\implies x = 5$."
  },
  {
    "id": "def-c10-ch3-1",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Matrix",
    "category": "Matrices & Linear Algebra",
    "definition": "A rectangular arrangement of real numbers arranged in horizontal rows and vertical columns enclosed within square brackets.",
    "formula": "A = [a_{ij}]_{m \\times n}",
    "keyPoints": [
      "Horizontal lines are rows, vertical lines are columns",
      "Order is $m \\times n$ ($m$ rows by $n$ columns)"
    ],
    "example": "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$ is a $2 \\times 3$ matrix."
  },
  {
    "id": "def-c10-ch3-2",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Square and Rectangular Matrix",
    "category": "Matrices & Linear Algebra",
    "definition": "A matrix having equal number of rows and columns ($m = n$) is a square matrix; otherwise ($m \\neq n$), it is rectangular.",
    "formula": "m = n \\; (\\text{Square Matrix}), \\qquad m \\neq n \\; (\\text{Rectangular Matrix})",
    "keyPoints": [
      "Only square matrices possess determinants and inverses"
    ],
    "example": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ is a square matrix of order $2 \\times 2$."
  },
  {
    "id": "def-c10-ch3-3",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Transpose of a Matrix",
    "category": "Matrices & Linear Algebra",
    "definition": "The matrix obtained by interchanging rows into columns or columns into rows is called the transpose $A^t$.",
    "formula": "(A^t)_{ij} = a_{ji}, \\quad (A^t)^t = A, \\quad (AB)^t = B^t A^t",
    "keyPoints": [
      "If $A$ is $m \\times n$, then $A^t$ is $n \\times m$"
    ],
    "example": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}^t = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$."
  },
  {
    "id": "def-c10-ch3-4",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Symmetric & Skew-Symmetric Matrix",
    "category": "Matrices & Linear Algebra",
    "definition": "A square matrix $A$ is symmetric if $A^t = A$. It is skew-symmetric if $A^t = -A$.",
    "formula": "A^t = A \\; (\\text{Symmetric}), \\qquad A^t = -A \\; (\\text{Skew-Symmetric})",
    "keyPoints": [
      "Main diagonal elements of a skew-symmetric matrix are always zero"
    ],
    "example": "$\\begin{bmatrix} 0 & 3 \\\\ -3 & 0 \\end{bmatrix}$ is skew-symmetric."
  },
  {
    "id": "def-c10-ch3-5",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Determinant of a Matrix",
    "category": "Matrices & Linear Algebra",
    "definition": "A unique scalar value associated with a square matrix denoted $|A|$ or $\\det(A)$.",
    "formula": "\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc",
    "keyPoints": [
      "Singular matrix if $|A| = 0$ (no inverse exists)",
      "Non-singular matrix if $|A| \\neq 0$ (inverse exists)"
    ],
    "example": "$\\det \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix} = (2)(4) - (3)(1) = 8 - 3 = 5$."
  },
  {
    "id": "def-c10-ch3-6",
    "class": 10,
    "chapterId": "c10-ch3",
    "chapterName": "Matrices and Determinants",
    "term": "Adjoint and Multiplicative Inverse",
    "category": "Matrices & Linear Algebra",
    "definition": "The adjoint of a $2\\times 2$ matrix interchanges diagonal elements and negates off-diagonal elements. The inverse is $A^{-1} = \\frac{1}{|A|}\\operatorname{Adj}(A)$.",
    "formula": "A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} \\quad (|A| \\neq 0)",
    "keyPoints": [
      "$A A^{-1} = A^{-1} A = I$",
      "$(AB)^{-1} = B^{-1} A^{-1}$"
    ],
    "example": "For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, $|A| = -2$, $A^{-1} = -\\frac{1}{2}\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$."
  },
  {
    "id": "def-c10-ch4-1",
    "class": 10,
    "chapterId": "c10-ch4",
    "chapterName": "Theory of Quadratic Equations",
    "term": "Standard Quadratic Equation",
    "category": "Quadratic Theory",
    "definition": "A second-degree polynomial equation in a single variable $x$ with $a \\neq 0$.",
    "formula": "ax^2 + bx + c = 0 \\quad (a \\neq 0, a, b, c \\in \\mathbb{R})",
    "keyPoints": [
      "Has exactly 2 roots (real, equal, or complex conjugate)"
    ],
    "example": "$2x^2 - 5x + 2 = 0$."
  },
  {
    "id": "def-c10-ch4-2",
    "class": 10,
    "chapterId": "c10-ch4",
    "chapterName": "Theory of Quadratic Equations",
    "term": "Discriminant",
    "category": "Quadratic Theory",
    "definition": "The algebraic quantity under the square root in the quadratic formula determining the nature of the roots.",
    "formula": "\\Delta = b^2 - 4ac",
    "keyPoints": [
      "$\\Delta > 0$ and perfect square $\\implies$ real, rational, and distinct roots",
      "$\\Delta > 0$ and not perfect square $\\implies$ real, irrational conjugate roots",
      "$\\Delta = 0 \\implies$ real, rational, and equal roots",
      "$\\Delta < 0 \\implies$ complex conjugate roots (imaginary)"
    ],
    "example": "For $x^2 - 4x + 4 = 0$, $\\Delta = 16 - 16 = 0$ (equal roots $x = 2, 2$)."
  },
  {
    "id": "def-c10-ch4-3",
    "class": 10,
    "chapterId": "c10-ch4",
    "chapterName": "Theory of Quadratic Equations",
    "term": "Cube Roots of Unity",
    "category": "Quadratic Theory",
    "definition": "The three solutions of $x^3 = 1$, consisting of one real root $1$ and two complex conjugate roots $\\omega$ and $\\omega^2$.",
    "formula": "1, \\quad \\omega = \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}",
    "keyPoints": [
      "$1 + \\omega + \\omega^2 = 0$ (Sum of cube roots of unity is zero)",
      "$\\omega^3 = 1$ (Product of cube roots of unity is unity)",
      "Each complex cube root is the square of the other"
    ],
    "example": "$\\omega^4 = \\omega^3 \\cdot \\omega = \\omega$, and $1 + \\omega = -\\omega^2$."
  },
  {
    "id": "def-c10-ch4-4",
    "class": 10,
    "chapterId": "c10-ch4",
    "chapterName": "Theory of Quadratic Equations",
    "term": "Relations Between Roots and Coefficients",
    "category": "Quadratic Theory",
    "definition": "Formulas relating the sum $S$ and product $P$ of roots $\\alpha, \\beta$ to equation coefficients.",
    "formula": "S = \\alpha + \\beta = -\\frac{b}{a}, \\qquad P = \\alpha\\beta = \\frac{c}{a}, \\qquad x^2 - Sx + P = 0",
    "keyPoints": [
      "Forming equation from roots: $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$"
    ],
    "example": "If roots are $2$ and $3$, $S = 5, P = 6 \\implies x^2 - 5x + 6 = 0$."
  },
  {
    "id": "def-c10-ch5-1",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Linear Equation in Two Variables",
    "category": "Algebra & Polynomials",
    "definition": "An algebraic equation of first degree of the form $ax + by = c$, where $a, b, c \\in \\mathbb{R}$ and $a, b$ are not both zero, whose graph is a straight line.",
    "formula": "ax + by + c = 0 \\quad (a, b \\neq 0)",
    "keyPoints": [
      "Has infinitely many real solutions $(x, y)$ representing points on the line",
      "Degree of each variable $x$ and $y$ is strictly 1"
    ],
    "example": "$3x + 2y = 12$ has solutions $(0, 6), (4, 0), (2, 3)$."
  },
  {
    "id": "def-c10-ch5-2",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "System of Simultaneous Linear Equations",
    "category": "Algebra & Polynomials",
    "definition": "A set of two or more linear equations containing common variables $x$ and $y$ that are satisfied simultaneously by the same ordered pair $(x, y)$.",
    "formula": "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}",
    "keyPoints": [
      "Solution corresponds to the geometric point of intersection of the two straight lines",
      "Solvable by elimination, substitution, matrices, or graphical plotting"
    ],
    "example": "System $x + y = 5, x - y = 1 \\implies (x, y) = (3, 2)$."
  },
  {
    "id": "def-c10-ch5-3",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Method of Elimination",
    "category": "Algebra & Polynomials",
    "definition": "An algebraic technique for solving a system of equations by multiplying equations to equate coefficients of one variable and adding or subtracting to eliminate that variable.",
    "formula": "a_2(a_1 x + b_1 y) - a_1(a_2 x + b_2 y) \\implies (a_2 b_1 - a_1 b_2)y = a_2 c_1 - a_1 c_2",
    "keyPoints": [
      "Reduces a 2-variable system to a 1-variable linear equation",
      "Most efficient when coefficients are easily made equal or opposite"
    ],
    "example": "Adding $2x + y = 7$ and $x - y = 2$ yields $3x = 9 \\implies x = 3$."
  },
  {
    "id": "def-c10-ch5-4",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Method of Substitution",
    "category": "Algebra & Polynomials",
    "definition": "An algebraic method where one variable is expressed explicitly in terms of the other from one equation and substituted into the other equation.",
    "formula": "y = \\frac{c_1 - a_1 x}{b_1} \\implies a_2 x + b_2 \\left(\\frac{c_1 - a_1 x}{b_1}\\right) = c_2",
    "keyPoints": [
      "Very direct when one equation has a coefficient of $+1$ or $-1$",
      "Transforms the second equation into a single-variable linear equation"
    ],
    "example": "From $y = 2x + 1$, substitute into $x + y = 7 \\implies 3x = 6 \\implies x = 2$."
  },
  {
    "id": "def-c10-ch5-5",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Cramer's Rule",
    "category": "Algebra & Polynomials",
    "definition": "An explicit formula for solving linear systems using determinants.",
    "formula": "x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D} \\quad (D \\neq 0)",
    "keyPoints": [
      "Determinant of coefficients $D = a_1 b_2 - a_2 b_1$",
      "Requires $D \\neq 0$ for a unique solution"
    ],
    "example": "If $D = 5, D_x = 10, D_y = 15 \\implies x = 2, y = 3$."
  },
  {
    "id": "def-c10-ch5-6",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Consistent & Inconsistent Systems",
    "category": "Algebra & Polynomials",
    "definition": "A system is consistent if it has at least one solution (intersecting or coincident lines), and inconsistent if it has no solution (parallel lines).",
    "formula": "\\text{Unique: } \\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}, \\quad \\text{Inconsistent: } \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}, \\quad \\text{Coincident: } \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}",
    "keyPoints": [
      "Unique solution $\\implies$ intersecting straight lines",
      "Inconsistent system $\\implies$ parallel lines",
      "Infinitely many solutions $\\implies$ identical lines"
    ],
    "example": "$x + y = 3$ and $x + y = 7$ are parallel lines (inconsistent)."
  },
  {
    "id": "def-c10-ch5-7",
    "class": 10,
    "chapterId": "c10-ch5",
    "chapterName": "Mixed Chapters MCQS",
    "term": "Slope of a Straight Line",
    "category": "Coordinate Geometry",
    "definition": "The inclination measure $m = \\tan\\theta = \\frac{\\Delta y}{\\Delta x}$ of a straight line in the coordinate plane.",
    "formula": "m = \\frac{y_2 - y_1}{x_2 - x_1} = -\\frac{a}{b}",
    "keyPoints": [
      "Horizontal line has slope $m = 0$",
      "Vertical line has undefined slope",
      "Parallel lines have $m_1 = m_2$",
      "Perpendicular lines have $m_1 \\cdot m_2 = -1$"
    ],
    "example": "Line through $(1, 2)$ and $(3, 8)$ has slope $m = \\frac{8-2}{3-1} = 3$."
  },
  {
    "id": "def-c10-ch6-1",
    "class": 10,
    "chapterId": "c10-ch6",
    "chapterName": "Basic Statistics",
    "term": "Statistics",
    "category": "Probability & Statistics",
    "definition": "The branch of mathematics dealing with the collection, organization, presentation, analysis, and interpretation of numerical data.",
    "formula": "\\text{Data} \\xrightarrow{\\text{Organize}} \\text{Summary} \\xrightarrow{\\text{Analyze}} \\text{Inference}",
    "keyPoints": [
      "Provides scientific methods for decision-making under uncertainty"
    ],
    "example": "Computing class average and variance on exam scores."
  },
  {
    "id": "def-c10-ch6-2",
    "class": 10,
    "chapterId": "c10-ch6",
    "chapterName": "Basic Statistics",
    "term": "Arithmetic Mean",
    "category": "Probability & Statistics",
    "definition": "The sum of all observations divided by the total number of observations.",
    "formula": "\\bar{X} = \\frac{\\sum x_i}{n} \\quad (\\text{Ungrouped}), \\qquad \\bar{X} = \\frac{\\sum f_i x_i}{\\sum f_i} \\quad (\\text{Grouped})",
    "keyPoints": [
      "Sum of deviations from mean is zero: $\\sum (x_i - \\bar{X}) = 0$",
      "Affected by extreme values (outliers)"
    ],
    "example": "Mean of $2, 4, 6, 8, 10$ is $\\frac{30}{5} = 6$."
  },
  {
    "id": "def-c10-ch6-3",
    "class": 10,
    "chapterId": "c10-ch6",
    "chapterName": "Basic Statistics",
    "term": "Median",
    "category": "Probability & Statistics",
    "definition": "The middle value in an ordered set of observations dividing data into two equal halves.",
    "formula": "\\text{Median} = \\left(\\frac{n+1}{2}\\right)^{\\text{th}} \\text{ value} \\; (n \\text{ odd}), \\quad l + \\frac{h}{f}\\left(\\frac{n}{2} - c\\right) \\; (\\text{Grouped})",
    "keyPoints": [
      "Resistant to extreme outliers",
      "Requires data to be arranged in ascending/descending order"
    ],
    "example": "For $3, 5, 7, 9, 11$, Median is $7$."
  },
  {
    "id": "def-c10-ch6-4",
    "class": 10,
    "chapterId": "c10-ch6",
    "chapterName": "Basic Statistics",
    "term": "Mode",
    "category": "Probability & Statistics",
    "definition": "The value that occurs most frequently in a dataset.",
    "formula": "\\text{Mode} = \\text{Most frequent value}, \\quad l + \\frac{f_m - f_1}{(f_m - f_1) + (f_m - f_2)} \\times h \\; (\\text{Grouped})",
    "keyPoints": [
      "A distribution can be unimodal, bimodal, or multimodal",
      "Can be determined for qualitative data"
    ],
    "example": "In $2, 3, 3, 5, 7$, Mode is $3$."
  },
  {
    "id": "def-c10-ch6-5",
    "class": 10,
    "chapterId": "c10-ch6",
    "chapterName": "Basic Statistics",
    "term": "Variance and Standard Deviation",
    "category": "Probability & Statistics",
    "definition": "Measures of statistical dispersion representing the average of squared deviations from the mean (Variance) and its square root (Standard Deviation).",
    "formula": "S^2 = \\frac{\\sum (x_i - \\bar{X})^2}{n}, \\qquad S = \\sqrt{\\frac{\\sum (x_i - \\bar{X})^2}{n}}",
    "keyPoints": [
      "Standard deviation is in the same units as the original data",
      "Variance is always non-negative ($S^2 \\ge 0$)"
    ],
    "example": "For identical numbers, standard deviation is zero."
  },
  {
    "id": "def-c10-ch7-1",
    "class": 10,
    "chapterId": "c10-ch7",
    "chapterName": "Introduction to Trigonometry",
    "term": "Trigonometry & Angle Measurement",
    "category": "Trigonometry",
    "definition": "The study of relationships between angles and lengths in triangles. Angles are measured in degrees ($360^\\circ$) or radians ($2\\pi$).",
    "formula": "180^\\circ = \\pi \\text{ radians} \\iff 1^\\circ = \\frac{\\pi}{180} \\text{ rad} \\iff 1 \\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.296^\\circ",
    "keyPoints": [
      "Sexagesimal system: $1^\\circ = 60'$ (minutes), $1' = 60''$ (seconds)",
      "Circular system: Angle subtended at circle center by arc equal to radius is $1$ radian"
    ],
    "example": "$45^\\circ = 45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}$ rad."
  },
  {
    "id": "def-c10-ch7-2",
    "class": 10,
    "chapterId": "c10-ch7",
    "chapterName": "Introduction to Trigonometry",
    "term": "Arc Length and Sector Area",
    "category": "Trigonometry",
    "definition": "Formulas for the length of an arc $s$ and area of a circular sector $A$ subtending central angle $\\theta$ (in radians).",
    "formula": "s = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}rs \\quad (\\theta \\text{ in radians})",
    "keyPoints": [
      "Angle $\\theta$ must strictly be converted to radians before applying these formulas"
    ],
    "example": "For $r = 6$ cm and $\\theta = \\frac{\\pi}{3}$ rad, $s = 6 \\times \\frac{\\pi}{3} = 2\\pi$ cm."
  },
  {
    "id": "def-c10-ch7-3",
    "class": 10,
    "chapterId": "c10-ch7",
    "chapterName": "Introduction to Trigonometry",
    "term": "Trigonometric Ratios in Right Triangle",
    "category": "Trigonometry",
    "definition": "The six fundamental ratios of the sides of a right-angled triangle with reference angle $\\theta$.",
    "formula": "\\sin\\theta = \\frac{\\text{Opp}}{\\text{Hyp}}, \\quad \\cos\\theta = \\frac{\\text{Adj}}{\\text{Hyp}}, \\quad \\tan\\theta = \\frac{\\text{Opp}}{\\text{Adj}}, \\quad \\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}",
    "keyPoints": [
      "$\\sin 30^\\circ = 1/2, \\; \\cos 30^\\circ = \\sqrt{3}/2, \\; \\tan 45^\\circ = 1$",
      "Reciprocal identities: $\\csc\\theta = 1/\\sin\\theta, \\; \\sec\\theta = 1/\\cos\\theta, \\; \\cot\\theta = 1/\\tan\\theta$"
    ],
    "example": "In 3-4-5 triangle with opposite 3, hypotenuse 5, $\\sin\\theta = 3/5, \\cos\\theta = 4/5, \\tan\\theta = 3/4$."
  },
  {
    "id": "def-c10-ch7-4",
    "class": 10,
    "chapterId": "c10-ch7",
    "chapterName": "Introduction to Trigonometry",
    "term": "Fundamental Pythagorean Identities",
    "category": "Trigonometry",
    "definition": "The primary trigonometric identities holding true for all valid angles $\\theta$.",
    "formula": "\\sin^2\\theta + \\cos^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\csc^2\\theta",
    "keyPoints": [
      "Derived directly from Pythagoras' theorem: $a^2 + b^2 = c^2$",
      "Rearrangements: $\\cos^2\\theta = 1 - \\sin^2\\theta$, $\\tan^2\\theta = \\sec^2\\theta - 1$"
    ],
    "example": "If $\\sin\\theta = 3/5$, $\\cos\\theta = \\sqrt{1 - (3/5)^2} = 4/5$."
  },
  {
    "id": "def-c10-ch7-5",
    "class": 10,
    "chapterId": "c10-ch7",
    "chapterName": "Introduction to Trigonometry",
    "term": "Angle of Elevation and Depression",
    "category": "Trigonometry",
    "definition": "Angle of elevation is the angle between horizontal line of sight and object above. Angle of depression is the angle between horizontal line of sight and object below.",
    "formula": "\\tan\\theta = \\frac{\\text{Height}}{\\text{Distance}}",
    "keyPoints": [
      "Angle of elevation from observer to target = Angle of depression from target to observer (alternate interior angles)"
    ],
    "example": "A building of height $h$ cast a shadow $d$; then $\\tan\\theta = h/d$."
  },
  {
    "id": "def-c10-ch8-1",
    "class": 10,
    "chapterId": "c10-ch8",
    "chapterName": "Ratio and Proportion",
    "term": "Ratio",
    "category": "Euclidean Geometry",
    "definition": "A comparison of two quantities of the same kind by division.",
    "formula": "a : b = \\frac{a}{b} \\quad (b \\neq 0)",
    "keyPoints": [
      "Antecedent ($a$) and Consequent ($b$)",
      "Dimensionless ratio"
    ],
    "example": "$8 : 12 = 2 : 3$."
  },
  {
    "id": "def-c10-ch8-2",
    "class": 10,
    "chapterId": "c10-ch8",
    "chapterName": "Ratio and Proportion",
    "term": "Proportion and Geometric Theorems",
    "category": "Euclidean Geometry",
    "definition": "An equality of two ratios $a : b = c : d$ with Product of Extremes = Product of Means.",
    "formula": "ad = bc, \\qquad \\frac{a+b}{b} = \\frac{c+d}{d} \\; (\\text{Componendo})",
    "keyPoints": [
      "Basic proportionality theorem in triangles"
    ],
    "example": "A line parallel to one side of a triangle divides the other two sides proportionally."
  },
  {
    "id": "def-c10-ch9-1",
    "class": 10,
    "chapterId": "c10-ch9",
    "chapterName": "Chords of a Circle",
    "term": "Chord of a Circle",
    "category": "Circle Geometry",
    "definition": "A straight line segment joining any two distinct points on the circumference of a circle.",
    "formula": "AB \\subset \\text{Circle}, \\quad \\text{Diameter} = \\text{Longest Chord} = 2r",
    "keyPoints": [
      "A chord passing through the center is the diameter",
      "Perpendicular from center bisects the chord"
    ],
    "example": "In a circle of radius $5$, a chord at distance $3$ from center has length $2\\sqrt{5^2 - 3^2} = 8$."
  },
  {
    "id": "def-c10-ch9-2",
    "class": 10,
    "chapterId": "c10-ch9",
    "chapterName": "Chords of a Circle",
    "term": "Perpendicular Bisector of Chord",
    "category": "Circle Geometry",
    "definition": "The straight line drawn from the center of a circle perpendicular to a chord bisects the chord.",
    "formula": "OM \\perp AB \\implies AM = MB",
    "keyPoints": [
      "Converse: The line joining the center to the midpoint of a chord is perpendicular to the chord"
    ],
    "example": "One and only one circle can pass through three non-collinear points."
  },
  {
    "id": "def-c10-ch10-1",
    "class": 10,
    "chapterId": "c10-ch10",
    "chapterName": "Tangents of a Circle",
    "term": "Tangent to a Circle",
    "category": "Circle Geometry",
    "definition": "A straight line that touches the circle at exactly one point, called the point of contact (tangency).",
    "formula": "t \\cap \\text{Circle} = \\{P\\}, \\qquad OP \\perp t",
    "keyPoints": [
      "The radius to the point of contact is perpendicular to the tangent line ($OP \\perp t$)",
      "From an external point, exactly two tangents can be drawn to a circle, and their lengths are equal"
    ],
    "example": "Two tangents drawn from external point $P$ to circle with center $O$ satisfy $PA = PB$."
  },
  {
    "id": "def-c10-ch11-1",
    "class": 10,
    "chapterId": "c10-ch11",
    "chapterName": "Chords and Arcs",
    "term": "Arc and Subtended Angle",
    "category": "Circle Geometry",
    "definition": "A continuous portion of the circumference of a circle. If two chords of a circle are equal, their corresponding arcs are congruent.",
    "formula": "AB = CD \\implies \\widehat{AB} \\cong \\widehat{CD}",
    "keyPoints": [
      "Equal chords subtend equal angles at the center of the circle"
    ],
    "example": "In circle $O$, equal chords $AB=CD \\implies \\angle AOB = \\angle COD$."
  },
  {
    "id": "def-c10-ch12-1",
    "class": 10,
    "chapterId": "c10-ch12",
    "chapterName": "Angles in a Segment of a Circle",
    "term": "Inscribed Angle & Central Angle",
    "category": "Circle Geometry",
    "definition": "The angle subtended by an arc at the center of a circle is double the angle subtended by it at any point on the remaining part of the circumference.",
    "formula": "\\angle AOB = 2 \\angle APB",
    "keyPoints": [
      "Angles in the same segment of a circle are equal: $\\angle APB = \\angle AQB$",
      "The angle in a semicircle is a right angle ($90^\\circ$)",
      "Opposite angles of a cyclic quadrilateral are supplementary (sum $= 180^\\circ$)"
    ],
    "example": "If central angle $\\angle AOB = 80^\\circ$, inscribed angle $\\angle APB = 40^\\circ$."
  },
  {
    "id": "def-c10-ch13-1",
    "class": 10,
    "chapterId": "c10-ch13",
    "chapterName": "Practical Geometry — Circles",
    "term": "Circumcircle, Incircle & Escribed Circle",
    "category": "Circle Constructions",
    "definition": "Circumcircle passes through all 3 vertices of a triangle (center is intersection of perpendicular bisectors). Incircle touches all 3 sides internally (center is intersection of angle bisectors).",
    "formula": "R = \\frac{abc}{4\\Delta}, \\qquad r = \\frac{\\Delta}{s}, \\qquad r_1 = \\frac{\\Delta}{s - a}",
    "keyPoints": [
      "Circumcenter: Point of concurrency of right bisectors of sides",
      "Incenter: Point of concurrency of internal angle bisectors",
      "Escribed circle: Touches one side externally and two produced sides"
    ],
    "example": "For right triangle with sides 3, 4, 5, $R = 5/2 = 2.5$ and $r = 6/6 = 1$."
  },
  {
    "id": "def-c10-ch14-1",
    "class": 10,
    "chapterId": "c10-ch14",
    "chapterName": "Pythagoras' Theorem",
    "term": "Pythagoras' Theorem",
    "category": "Geometry & Triangles",
    "definition": "In any right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.",
    "formula": "c^2 = a^2 + b^2 \\iff (\\text{Hypotenuse})^2 = (\\text{Base})^2 + (\\text{Perpendicular})^2",
    "keyPoints": [
      "Applies strictly to right-angled triangles ($90^\\circ$)",
      "Pythagorean Triples: Integer triples $(a, b, c)$ satisfying $a^2 + b^2 = c^2$, e.g., $(3, 4, 5), (5, 12, 13), (8, 15, 17)$"
    ],
    "example": "For legs $6$ and $8$, hypotenuse $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
  },
  {
    "id": "def-c10-ch14-2",
    "class": 10,
    "chapterId": "c10-ch14",
    "chapterName": "Pythagoras' Theorem",
    "term": "Converse of Pythagoras' Theorem",
    "category": "Geometry & Triangles",
    "definition": "If in a triangle with sides $a, b, c$, the condition $c^2 = a^2 + b^2$ holds, then the triangle is right-angled with hypotenuse $c$.",
    "formula": "c^2 = a^2 + b^2 \\implies \\angle C = 90^\\circ",
    "keyPoints": [
      "If $c^2 < a^2 + b^2$, the triangle is acute-angled",
      "If $c^2 > a^2 + b^2$, the triangle is obtuse-angled"
    ],
    "example": "For sides $5, 12, 13$: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, so the triangle is right-angled."
  },
  {
    "id": "def-c10-ch14-3",
    "class": 10,
    "chapterId": "c10-ch14",
    "chapterName": "Pythagoras' Theorem",
    "term": "Distance Formula in Cartesian Plane",
    "category": "Coordinate Geometry",
    "definition": "The formula for finding the straight-line Euclidean distance between two points $P(x_1, y_1)$ and $Q(x_2, y_2)$, derived directly from Pythagoras' theorem.",
    "formula": "d = |PQ| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    "keyPoints": [
      "Distance is always non-negative: $d \\ge 0$",
      "Distance from origin $(0, 0)$ to $(x, y)$ is $\\sqrt{x^2 + y^2}$"
    ],
    "example": "Distance between $(1, 2)$ and $(4, 6)$ is $\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$."
  },
  {
    "id": "def-c10-ch14-4",
    "class": 10,
    "chapterId": "c10-ch14",
    "chapterName": "Pythagoras' Theorem",
    "term": "Midpoint and Centroid Formulas",
    "category": "Coordinate Geometry",
    "definition": "Formulas for finding the midpoint $M$ of a line segment and centroid $G$ of a triangle in the 2D Cartesian coordinate plane.",
    "formula": "M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right), \\qquad G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)",
    "keyPoints": [
      "Midpoint divides the segment in ratio $1 : 1$",
      "Centroid is the intersection point of the three medians and divides each median in ratio $2 : 1$"
    ],
    "example": "Midpoint of $(2, 4)$ and $(6, 10)$ is $(\\frac{2+6}{2}, \\frac{4+10}{2}) = (4, 7)$."
  },
  {
    "id": "def-c10-ch14-5",
    "class": 10,
    "chapterId": "c10-ch14",
    "chapterName": "Pythagoras' Theorem",
    "term": "Collinearity of Points",
    "category": "Coordinate Geometry",
    "definition": "Three or more points are collinear if they all lie on the exact same straight line.",
    "formula": "|AB| + |BC| = |AC| \\iff \\text{Points } A, B, C \\text{ are collinear}",
    "keyPoints": [
      "Slope condition: $m_{AB} = m_{BC}$",
      "Area of triangle formed by three collinear points is zero"
    ],
    "example": "Points $(1, 2), (2, 4), (3, 6)$ all have slope $m = 2$ and are collinear."
  },
  {
    "id": "def-c10-ch15-1",
    "class": 10,
    "chapterId": "c10-ch15",
    "chapterName": "Partial Fractions",
    "term": "Rational Fraction",
    "category": "Partial Fractions",
    "definition": "A quotient expression $\\frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \\neq 0$.",
    "formula": "R(x) = \\frac{P(x)}{Q(x)} \\quad (Q(x) \\neq 0)",
    "keyPoints": [
      "Undefined for values of $x$ making denominator $Q(x) = 0$ (excluded values)"
    ],
    "example": "$\\frac{2x+3}{x^2-4}$ is a rational fraction with excluded values $x = \\pm 2$."
  },
  {
    "id": "def-c10-ch15-2",
    "class": 10,
    "chapterId": "c10-ch15",
    "chapterName": "Partial Fractions",
    "term": "Proper Rational Fraction",
    "category": "Partial Fractions",
    "definition": "A rational fraction where the degree of the numerator polynomial is strictly less than the degree of the denominator polynomial.",
    "formula": "\\deg(P(x)) < \\deg(Q(x))",
    "keyPoints": [
      "Can be resolved directly into partial fractions without long division"
    ],
    "example": "$\\frac{3x+1}{x^2+5x+6}$ is proper because $\\deg(3x+1)=1 < \\deg(x^2+5x+6)=2$."
  },
  {
    "id": "def-c10-ch15-3",
    "class": 10,
    "chapterId": "c10-ch15",
    "chapterName": "Partial Fractions",
    "term": "Improper Rational Fraction",
    "category": "Partial Fractions",
    "definition": "A rational fraction where the degree of the numerator polynomial is greater than or equal to the degree of the denominator polynomial.",
    "formula": "\\deg(P(x)) \\ge \\deg(Q(x)) \\implies \\frac{P(x)}{Q(x)} = \\text{Quotient} + \\frac{\\text{Remainder}}{Q(x)}",
    "keyPoints": [
      "Must be converted by polynomial division before partial fraction decomposition"
    ],
    "example": "$\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{x^2-1}$ is an improper fraction converted to polynomial + proper fraction."
  },
  {
    "id": "def-c10-ch15-4",
    "class": 10,
    "chapterId": "c10-ch15",
    "chapterName": "Partial Fractions",
    "term": "Partial Fraction Decomposition Cases",
    "category": "Partial Fractions",
    "definition": "The algebraic process of breaking down a proper rational fraction into a sum of simpler constituent fractions based on denominator factor types.",
    "formula": "\\text{Case 1: } \\frac{A}{ax+b}, \\quad \\text{Case 2: } \\frac{A}{ax+b} + \\frac{B}{(ax+b)^2}, \\quad \\text{Case 3: } \\frac{Ax+B}{ax^2+bx+c}",
    "keyPoints": [
      "Distinct linear factors yield single constants: $\\frac{A}{ax+b}$",
      "Repeated linear factor $(ax+b)^k$ yields $k$ ascending terms: $\\frac{A_1}{ax+b} + \\dots + \\frac{A_k}{(ax+b)^k}$",
      "Irreducible quadratic factor $(ax^2+bx+c)$ yields linear numerator: $\\frac{Ax+B}{ax^2+bx+c}$"
    ],
    "example": "$\\frac{1}{(x-1)(x+2)} = \\frac{1/3}{x-1} - \\frac{1/3}{x+2}$."
  },
  {
    "id": "def-c10-ch15-5",
    "class": 10,
    "chapterId": "c10-ch15",
    "chapterName": "Partial Fractions",
    "term": "Identity vs Conditional Equation",
    "category": "Partial Fractions",
    "definition": "An identity is an equation that is true for all possible values of the variable; a conditional equation is true only for specific root values.",
    "formula": "(x+1)^2 = x^2 + 2x + 1 \\; (\\text{Identity}), \\qquad 2x + 3 = 7 \\; (\\text{Conditional})",
    "keyPoints": [
      "Partial fraction equations are identities, allowing equating of coefficients and arbitrary value substitution"
    ],
    "example": "$(x-a)(x+a) \\equiv x^2 - a^2$ is an identity."
  }
];
