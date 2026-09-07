# -*- coding: utf-8 -*-
RAW_QUESTIONS_P1 = r"""
**1. A relation from \(A\) to \(B\) is a subset of:**

A. \(A\cup B\) B. \(A\cap B\) C. \(A\times B\) D. \(B\times B\)

**Answer: C.** A relation from \(A\) to \(B\) consists of ordered pairs from \(A\times B\).

**2. A relation is a function if every element of its domain has:**

A. No image B. Exactly one image C. Two images D. Infinitely many images

**Answer: B.** A function assigns exactly one output to each input.

**3. The set of all permitted input values of a function is its:**

A. Range B. Codomain C. Domain D. Image

**Answer: C.** The domain contains the values for which the function is defined.

**4. The set containing all possible output values assigned to a function is called its:**

A. Domain B. Codomain C. Inverse D. Graph

**Answer: B.** The codomain is the declared target set.

**5. The range of a function is always:**

A. Equal to the domain B. A subset of the codomain C. Larger than the codomain D. Empty

**Answer: B.** The range consists of the outputs actually obtained.

**6. A function in which distinct inputs have distinct images is:**

A. Into B. Constant C. One-to-one D. Many-to-one

**Answer: C.** A one-to-one or injective function never assigns the same output to different inputs.

**7. A function whose range equals its codomain is:**

A. Into B. Onto C. Constant D. Identity

**Answer: B.** An onto function reaches every element of the codomain.

**8. A function that is both one-to-one and onto is:**

A. Bijective B. Constant C. RationalD. Quadratic

**Answer: A.** A bijection has both injectivity and surjectivity.

**9. If the range is a proper subset of the codomain, the function is:**

A. Onto B. Into C. Bijective D. Identity

**Answer: B.** An into function leaves at least one codomain element unused.

**10. A function has an inverse function on its stated domain and codomain when it is:**

A. Constant B. Quadratic C. BijectiveD. Into only

**Answer: C.** Bijectivity ensures that the inverse gives one unique input for every output.

**11. The identity function is represented by:**

A. \(f(x)=0\) B. \(f(x)=1\) C. \(f(x)=x\) D. \(f(x)=x^2\)

**Answer: C.** An identity function maps every element to itself.

**12. The graph of a constant function \(f(x)=c\) is:**

A. A vertical line B. A horizontal line C. A parabola D. A circle

**Answer: B.** Every input has the same \(y\)-coordinate \(c\).

**13. The graph of \(f(x)=mx+c\) is generally a:**

A. Straight line B. Parabola C. HyperbolaD. Cubic curve

**Answer: A.** \(f(x)=mx+c\) is a linear function.

**14. The graph of a quadratic function is a:**

A. Circle B. Parabola C. Straight line D. Hyperbola

**Answer: B.** A quadratic function has the form \(ax^2+bx+c\), \(a\ne0\).

**15. The graph of \(y=|x|\) is:**

A. U-shaped B. V-shaped C. Circular D. A horizontal line

**Answer: B.** The two linear parts meet at the origin.

**16. The natural domain of \(f(x)=\sqrt{x}\) is:**

A. \(x<0\) B. \(x\le0\) C. \(x\ge0\) D. All real numbers

**Answer: C.** A real square root requires a nonnegative radicand.

**17. The domain of a rational function excludes values that make its:**

A. Numerator positive B. Denominator zero C. Numerator zero D. Output positive

**Answer: B.** Division by zero is undefined.

**18. If \(f\) and \(g\) are functions, then \((f+g)(x)=\):**

A. \(f(x+g)\) B. \(f(x)+g(x)\) C. \(f(x)g(x)\) D. \(f(g(x))\)

**Answer: B.** Addition of functions is performed pointwise.

**19. The product of two functions is defined by:**

A. \((fg)(x)=f(x)g(x)\) B. \(f(x)+g(x)\) C. \(f(g(x))\) D. \(f(x)/g(x)\)

**Answer: A.** Their output values are multiplied for the same input.

**20. For \((f/g)(x)\), we must additionally require:**

A. \(f(x)\ne0\) B. \(g(x)\ne0\) C. \(x>0\) D. \(f(x)=g(x)\)

**Answer: B.** The denominator function cannot have value zero.

**21. The composition \(f\circ g\) is defined by:**

A. \(f(x)+g(x)\) B. \(f(x)g(x)\) C. \(f(g(x))\) D. \(g(x)/f(x)\)

**Answer: C.** The output of \(g\) becomes the input of \(f\).

**22. The domain of \(f^{-1}\) is the:**

A. Domain of \(f\) B. Range of \(f\) C. Empty set D. \(x\)-axis

**Answer: B.** An inverse reverses the roles of inputs and outputs.

**23. A graph represents a function of \(x\) if every vertical line meets it at most:**

A. Zero times B. Once C. Twice D. Three times

**Answer: B.** This is the vertical-line test.

**24. A function is one-to-one if every horizontal line meets its graph at most:**

A. Once B. Twice C. Three times D. Infinitely many times

**Answer: A.** This is the horizontal-line test for injectivity.

**25. To find the \(x\)-intercept of \(y=f(x)\), we put:**

A. \(x=0\) B. \(y=0\) C. \(x=1\) D. \(y=1\)

**Answer: B.** An \(x\)-axis point has \(y=0\).

**26. To find the \(y\)-intercept, we put:**

A. \(x=0\) B. \(y=0\) C. \(x=1\) D. \(y=1\)

**Answer: A.** Every point on the \(y\)-axis has \(x=0\).

**27. The discriminant of \(ax^2+bx+c=0\) is:**

A. \(b^2+4ac\) B. \(b^2-4ac\) C. \(4ac-b\) D. \(b-4ac\)

**Answer: B.** The discriminant determines the number of real roots.

**28. The \(x\)-coordinate of the vertex of \(y=ax^2+bx+c\) is:**

A. \(\frac b{2a}\) B. \(-\frac b{2a}\) C. \(-\frac a{2b}\) D. \(\frac c{2a}\)

**Answer: B.** The axis of symmetry is \(x=-b/(2a)\).

**29. The graph of \(y=1/x\) has coordinate axes as:**

A. Tangents B. Asymptotes C. Chords D. Diameters

**Answer: B.** The graph approaches but never meets either axis.

**30. The range of \(y=a^x\), where \(a>0\) and \(a\ne1\), is:**

A. \(\mathbb R\) B. \([0,\infty)\) C. \((0,\infty)\) D. \((-\infty,0)\)

**Answer: C.** An exponential function is always strictly positive.

**31. If \(f(x)=2x+1\), then \(f(3)=\):**

A. \(5\) B. \(6\) C. \(7\) D. \(8\)

**Answer: C.** \(f(3)=2(3)+1=7\).

**32. The domain of \(f(x)=1/(x-2)\) is:**

A. \(\mathbb R\) B. \(\mathbb R-\{0\}\) C. \(\mathbb R-\{2\}\) D. \(x>2\)

**Answer: C.** The denominator becomes zero at \(x=2\).

**33. The domain of \(f(x)=\sqrt{5-x}\) is:**

A. \(x\ge5\) B. \(x\le5\) C. \(x>5\) D. All real numbers

**Answer: B.** The condition \(5-x\ge0\) gives \(x\le5\).

**34. The domain of \(\frac{\sqrt{x+2}}{x-1}\) is:**

A. \([-2,\infty)\) B. \([-2,1)\cup(1,\infty)\) C. \((-\infty,-2]\) D. \((1,\infty)\)

**Answer: B.** We need \(x\ge-2\) and \(x\ne1\).

**35. The range of \(f(x)=x^2\), for \(x\in\mathbb R\), is:**

A. \(\mathbb R\) B. \((0,\infty)\) C. \([0,\infty)\) D. \((-\infty,0]\)

**Answer: C.** A real square is never negative and can equal zero.

**36. The range of \(f(x)=4-x^2\) is:**

A. \([4,\infty)\) B. \((-\infty,4]\) C. \([0,4]\) D. \(\mathbb R\)

**Answer: B.** The downward-opening parabola has maximum value four.

**37. If \(f(x)=x+3\) and \(g(x)=2x\), then \((f+g)(x)=\):**

A. \(2x+3\) B. \(3x+3\) C. \(2x^2+3\) D. \(3x\)

**Answer: B.** \((x+3)+2x=3x+3\).

**38. For the same functions, \((fg)(x)=\):**

A. \(2x^2+6x\) B. \(3x+3\) C. \(2x^2+3\) D. \(2x+6\)

**Answer: A.** \((x+3)(2x)=2x^2+6x\).

**39. If \(f(x)=x+1\) and \(g(x)=x-1\), then \((f/g)(2)=\):**

A. \(1\) B. \(2\) C. \(3\) D. \(4\)

**Answer: C.** \(f(2)/g(2)=3/1=3\).

**40. If \(f(x)=x^2\) and \(g(x)=x+1\), then \(f(g(2))=\):**

A. \(4\) B. \(6\) C. \(8\) D. \(9\)

**Answer: D.** \(g(2)=3\), so \(f(3)=9\).

**41. For the same functions, \(g(f(2))=\):**

A. \(3\) B. \(4\) C. \(5\) D. \(9\)

**Answer: C.** \(f(2)=4\), so \(g(4)=5\).

**42. If \(f(x)=2x-5\), then \(f^{-1}(x)=\):**

A. \(\frac{x-5}{2}\) B. \(\frac{x+5}{2}\) C. \(2x+5\) D. \(5-2x\)

**Answer: B.** Solving \(y=2x-5\) for \(x\) gives \(x=(y+5)/2\).

**43. If \(f(x)=\frac{x+1}{3}\), then \(f^{-1}(x)=\):**

A. \(3x+1\) B. \(3x-1\) C. \(\frac{x-1}{3}\) D. \(x/3-1\)

**Answer: B.** From \(y=(x+1)/3\), we get \(x=3y-1\).

**44. Which function is its own inverse?**

A. \(f(x)=x+1\) B. \(f(x)=2x\) C. \(f(x)=-x\) D. \(f(x)=x^2\)

**Answer: C.** Applying \(f(x)=-x\) twice returns \(x\).

**45. The function \(f(x)=x+4\), from \(\mathbb R\) to \(\mathbb R\), is:**

A. Into only B. One-to-one only C. Bijective D. Constant

**Answer: C.** Every output has exactly one real preimage.

**46. The function \(f(x)=x^2\), from \(\mathbb R\) to \(\mathbb R\), is:**

A. One-to-one and onto B. Neither one-to-one nor onto C. One-to-one only D. Onto only

**Answer: B.** \(f(x)=f(-x)\), and negative real numbers are not outputs.

**47. The function \(f(x)=x^2\), from \([0,\infty)\) to \([0,\infty)\), is:**

A. Bijective B. Into only C. Constant D. Many-to-one

**Answer: A.** On this restricted domain it is one-to-one and reaches every nonnegative value.

**48. The function \(f(x)=|x|\), from \(\mathbb R\) to \([0,\infty)\), is not one-to-one because:**

A. \(f(0)=0\) B. \(f(1)=f(-1)\) C. Its range is positive D. Its graph is continuous

**Answer: B.** Two different inputs have the same output.

**49. The function \(f(x)=x^3\), from \(\mathbb R\) to \(\mathbb R\), is:**

A. Bijective B. Into only C. Many-to-one D. Constant

**Answer: A.** It is strictly increasing and attains every real value.

**50. A constant function on a domain having at least two elements is:**

A. Injective B. Not injective C. Always bijective D. An identity function

**Answer: B.** Different inputs have the same constant output.
"""
