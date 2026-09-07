# -*- coding: utf-8 -*-
RAW_QUESTIONS_P3 = r"""
**101. The line \(y=2x-1\) is tangent to \(y=x^2\) at:**

A. \((0,0)\) B. \((1,1)\) C. \((2,4)\) D. \((-1,1)\)

**Answer: B.** \(x^2=2x-1\Rightarrow(x-1)^2=0\).

**102. The graphs \(y=x^2+k\) and \(y=4\) have exactly one intersection when:**

A. \(k=0\) B. \(k=2\) C. \(k=4\) D. \(k=8\)

**Answer: C.** Then \(x^2=0\), producing one repeated solution.

**103. The zeros of \(f(x)=x^3-x\) are:**

A. \(0,1\) B. \(-1,0,1\) C. \(-1,1\) D. \(0,1,2\)

**Answer: B.** \(x^3-x=x(x-1)(x+1)\).

**104. The function \(f(x)=x^3\), from \(\mathbb R\) to \(\mathbb R\), is invertible because it is:**

A. Constant B. Strictly increasing C. Even D. Periodic

**Answer: B.** A strictly increasing function is one-to-one, and \(x^3\) covers all real outputs.

**105. The asymptotes of \(y=\frac{x+1}{x-2}\) are:**

A. \(x=-1,y=2\) B. \(x=2,y=1\) C. \(x=1,y=2\) D. \(x=0,y=1\)

**Answer: B.** The denominator gives \(x=2\), while the ratio of leading coefficients gives \(y=1\).

**106. The \(x\)-intercept of \(y=\frac{x+1}{x-2}\) is:**

A. \(-2\) B. \(-1\) C. \(1\) D. \(2\)

**Answer: B.** The numerator equals zero at \(x=-1\).

**107. The \(y\)-intercept of \(y=\frac{x+1}{x-2}\) is:**

A. \(-1/2\) B. \(1/2\) C. \(-1\) D. \(2\)

**Answer: A.** At \(x=0\), \(y=1/(-2)=-1/2\).

**108. If \(a>0\), the graph of \(y=a/x\) lies in quadrants:**

A. I and II B. I and III C. II and IV D. III and IV

**Answer: B.** \(x\) and \(y\) have the same sign.

**109. If \(a<0\), the graph of \(y=a/x\) lies in quadrants:**

A. I and III B. I and IV C. II and IV D. II and III

**Answer: C.** The signs of \(x\) and \(y\) are opposite.

**110. The range of \(y=1/x^2\) is:**

A. \(y\ge0\) B. \(y>0\) C. \(y<0\) D. All real numbers

**Answer: B.** The output is positive but can never equal zero.

**111. The range of \(y=-1/x^2\) is:**

A. \(y>0\) B. \(y\ge0\) C. \(y<0\) D. \(y\le0\)

**Answer: C.** The function is always negative and never zero.

**112. The range of \(y=3^x\) is:**

A. \(\mathbb R\) B. \([0,\infty)\) C. \((0,\infty)\) D. \((-\infty,0)\)

**Answer: C.** Every value of \(3^x\) is positive.

**113. The function \(f(x)=(1/3)^x\) is:**

A. Increasing B. Decreasing C. Constant D. Even

**Answer: B.** An exponential base between zero and one produces a decreasing graph.

**114. The solution of \(2^x=8\) is:**

A. \(1\) B. \(2\) C. \(3\) D. \(4\)

**Answer: C.** \(8=2^3\).

**115. The graphs \(y=2^x\) and \(y=1\) intersect when:**

A. \(x=-1\) B. \(x=0\) C. \(x=1\) D. \(x=2\)

**Answer: B.** \(2^0=1\).

**116. The horizontal asymptote of \(y=2^x+3\) is:**

A. \(y=0\) B. \(y=2\) C. \(y=3\) D. \(x=3\)

**Answer: C.** Adding three shifts the asymptote \(y=0\) upward.

**117. Compared with \(y=2^x\), the graph of \(y=2^{x-1}\) is shifted:**

A. One unit left B. One unit right C. One unit up D. One unit down

**Answer: B.** Replacing \(x\) with \(x-1\) gives a rightward shift.

**118. The equation of the line through \((1,3)\) and \((3,7)\) is:**

A. \(y=x+2\) B. \(y=2x+1\) C. \(y=3x\) D. \(y=2x-1\)

**Answer: B.** Its slope is \((7-3)/(3-1)=2\), and its intercept is one.

**119. Two distinct lines with equal slopes have:**

A. One intersection B. Two intersections C. No intersection D. Infinite intersections

**Answer: C.** Distinct lines with equal slopes are parallel.

**120. Two linear equations representing the same line have:**

A. No common point B. One common point C. Two common points D. Infinitely many common points

**Answer: D.** Every point on one line lies on the other.

**121. Let \(A=\{1,2,3\}\). Which relation defines a function from \(A\) to \(A\)?**

A. \(\{(1,2),(1,3),(2,1),(3,1)\}\)
B. \(\{(1,2),(2,2),(3,1)\}\)
C. \(\{(1,1),(2,2)\}\)
D. \(\{(1,2),(2,3),(2,1),(3,2)\}\)

**Answer: B.** Each domain element appears exactly once as a first component.

**122. Which relation is not a function?**

A. \(\{(1,2),(2,3),(3,4)\}\)
B. \(\{(1,2),(2,2),(3,2)\}\)
C. \(\{(1,2),(1,3),(2,4)\}\)
D. \(\{(-1,1),(0,0),(1,1)\}\)

**Answer: C.** Input \(1\) is assigned two different outputs.

**123. If \(f=\{(1,3),(2,5),(4,7)\}\), then \(f^{-1}\) is:**

A. \(\{(1,3),(2,5),(4,7)\}\)
B. \(\{(3,1),(5,2),(7,4)\}\)
C. \(\{(3,2),(5,4),(7,1)\}\)
D. \(\{(1,7),(2,5),(4,3)\}\)

**Answer: B.** The coordinates of every ordered pair are interchanged.

**124. The function \(f(x)=ax+b\), from \(\mathbb R\) to \(\mathbb R\), is one-to-one when:**

A. \(a=0\) B. \(a\ne0\) C. \(b=0\) only D. \(a=b\)

**Answer: B.** A nonzero slope makes different inputs produce different outputs.

**125. The function \(f(x)=ax+b\), from \(\mathbb R\) to \(\mathbb R\), is onto when:**

A. \(a=0\) B. \(a\ne0\) C. \(b=1\) only D. \(a>1\) only

**Answer: B.** For any real \(y\), \(x=(y-b)/a\) exists when \(a\ne0\).

**126. The range of \(f(x)=x^2-4x+7\) is:**

A. \([3,\infty)\) B. \([7,\infty)\) C. \((-\infty,3]\) D. \(\mathbb R\)

**Answer: A.** \(f(x)=(x-2)^2+3\), whose minimum is three.

**127. The domain of \(f(x)=\sqrt{4-x^2}\) is:**

A. \((-\infty,2]\) B. \([-2,2]\) C. \([0,4]\) D. \([2,\infty)\)

**Answer: B.** \(4-x^2\ge0\Rightarrow x^2\le4\).

**128. The domain of \(\sqrt{x-1}+\sqrt{5-x}\) is:**

A. \((-\infty,1]\) B. \([1,5]\) C. \([5,\infty)\) D. \(\mathbb R\)

**Answer: B.** Both \(x-1\ge0\) and \(5-x\ge0\) must hold.

**129. The domain of \(\sqrt{(x-1)(x-4)}\) is:**

A. \([1,4]\) B. \((-\infty,1]\cup[4,\infty)\) C. \((1,4)\) D. \(\mathbb R-\{1,4\}\)

**Answer: B.** The product is nonnegative outside the interval between its zeros.

**130. The domain of \(1/[(x-1)(x+2)]\) is:**

A. \(\mathbb R-\{1,-2\}\) B. \(\mathbb R-\{1,2\}\) C. \((-2,1)\) D. \(\mathbb R\)

**Answer: A.** Both denominator zeros must be excluded.

**131. The domain of \(f(x)=\frac{x^2-1}{x-1}\) is:**

A. \(\mathbb R\) B. \(\mathbb R-\{-1\}\) C. \(\mathbb R-\{1\}\) D. \(x>1\)

**Answer: C.** Although the expression simplifies, its original denominator is zero at one.

**132. The graph of \(\frac{x^2-1}{x-1}\) has a removable hole at:**

A. \((-1,0)\) B. \((0,1)\) C. \((1,2)\) D. \((2,3)\)

**Answer: C.** The graph agrees with \(y=x+1\), except at \(x=1\).

**133. The graphs \(y=\frac{x^2-1}{x-1}\) and \(y=x+1\) have:**

A. No common points B. One common point C. Two common points D. Infinitely many common points

**Answer: D.** They coincide for every \(x\ne1\).

**134. The range of \(f(x)=\frac{x^2-1}{x-1}\) is:**

A. \(\mathbb R\) B. \(\mathbb R-\{1\}\) C. \(\mathbb R-\{2\}\) D. \((0,\infty)\)

**Answer: C.** Since \(f(x)=x+1\) with \(x\ne1\), the value two is missing.

**135. If \(f(x)=\frac{x-1}{x+1}\), then \(f^{-1}(x)=\):**

A. \(\frac{x-1}{x+1}\) B. \(\frac{x+1}{1-x}\) C. \(\frac{1-x}{1+x}\) D. \(\frac{x+1}{x-1}\)

**Answer: B.** Solving \(y=(x-1)/(x+1)\) gives \(x=(y+1)/(1-y)\).

**136. For \(f(x)=\frac{x-1}{x+1}\), the domain of \(f^{-1}\) excludes:**

A. \(-1\) B. \(0\) C. \(1\) D. \(2\)

**Answer: C.** The original function cannot have output one.

**137. If \(f(x)=kx+3\) and \(f^{-1}(5)=1\), then \(k=\):**

A. \(1\) B. \(2\) C. \(3\) D. \(5\)

**Answer: B.** \(f^{-1}(5)=1\) means \(f(1)=5\), so \(k+3=5\).

**138. If \(f(x)=x+1\) and \(g(x)=1/x\), the domain of \(f\circ g\) is:**

A. \(\mathbb R\) B. \(\mathbb R-\{0\}\) C. \(\mathbb R-\{-1\}\) D. \(x>0\)

**Answer: B.** \(g(x)\) must first be defined, requiring \(x\ne0\).

**139. For the same functions, the domain of \(g\circ f\) is:**

A. \(\mathbb R-\{0\}\) B. \(\mathbb R-\{1\}\) C. \(\mathbb R-\{-1\}\) D. \(\mathbb R\)

**Answer: C.** \(g(f(x))=1/(x+1)\), so \(x\ne-1\).

**140. If \(f(x)=x+1\) and \(g(x)=1/x\), then \((f\circ g)(2)=\):**

A. \(1/2\) B. \(1\) C. \(3/2\) D. \(2\)

**Answer: C.** \(g(2)=1/2\), and \(f(1/2)=3/2\).

**141. If \(f\) is even and \(g\) is odd, then \(fg\) is:**

A. Even B. Odd C. Constant D. Neither necessarily

**Answer: B.** \((fg)(-x)=f(x)[-g(x)]=-(fg)(x)\).

**142. If \(f\) is an odd function defined at zero, then:**

A. \(f(0)=1\) B. \(f(0)=-1\) C. \(f(0)=0\) D. \(f(0)\) is unrestricted

**Answer: C.** Oddness gives \(f(0)=-f(0)\).

**143. The solutions of \(|x-2|=3\) are:**

A. \(-1,5\) B. \(1,5\) C. \(-5,1\) D. \(2,3\)

**Answer: A.** \(x-2=\pm3\) gives \(x=5,-1\).

**144. The solutions of \(|2x+1|=5\) are:**

A. \(-2,3\) B. \(-3,2\) C. \(-2,2\) D. \(-3,3\)

**Answer: B.** \(2x+1=5\) or \(-5\), giving \(x=2,-3\).

**145. The zeros of \(y=|x^2-4|\) are:**

A. \(x=\pm1\) B. \(x=\pm2\) C. \(x=0,4\) D. None

**Answer: B.** An absolute value is zero only when its inner expression is zero.

**146. The range of \(y=|x^2-4|\) is:**

A. \(\mathbb R\) B. \([0,\infty)\) C. \([-4,\infty)\) D. \((0,\infty)\)

**Answer: B.** Absolute-value outputs are nonnegative, and every nonnegative value occurs.

**147. The graphs \(y=x^2\) and \(y=|x|\) intersect at \(x=\):**

A. \(-1,1\) B. \(0,1\) C. \(-1,0,1\) D. \(0\) only

**Answer: C.** Solving \(x^2=|x|\) gives \(x=-1,0,1\).

**148. The number of intersection points of \(y=x^2\) and \(y=|x|\) is:**

A. One B. Two C. Three D. Four

**Answer: C.** Their common points occur at \(x=-1,0,1\).

**149. The graphs \(y=|x-1|\) and \(y=2\) intersect at:**

A. \((-1,2),(3,2)\) B. \((1,2),(3,2)\) C. \((-2,2),(2,2)\) D. \((0,2),(2,2)\)

**Answer: A.** \(|x-1|=2\Rightarrow x=-1,3\).

**150. The vertex of \(y=-|x+2|+5\) is:**

A. \((2,5)\) B. \((-2,5)\) C. \((-2,-5)\) D. \((5,-2)\)

**Answer: B.** The absolute-value expression vanishes at \(x=-2\).
"""
