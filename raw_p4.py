# -*- coding: utf-8 -*-
RAW_QUESTIONS_P4 = r"""
**151. A projectile’s height is \(h(t)=-5t^2+20t+1\). Its maximum occurs at:**

A. \(t=1\) B. \(t=2\) C. \(t=3\) D. \(t=4\)

**Answer: B.** The vertex time is \(-b/(2a)=-20/(-10)=2\).

**152. The maximum height in Question 151 is:**

A. \(16\) B. \(20\) C. \(21\) D. \(25\)

**Answer: C.** \(h(2)=-5(4)+40+1=21\).

**153. A taxi charges \(C(x)=100+25x\) rupees for \(x\) kilometres. The cost of \(8\) km is:**

A. Rs 200 B. Rs 250 C. Rs 300 D. Rs 325

**Answer: C.** \(C(8)=100+25(8)=300\).

**154. A temperature conversion is \(F(C)=\frac95C+32\). Then \(F(20)=\):**

A. \(52^\circ\) B. \(60^\circ\) C. \(68^\circ\) D. \(72^\circ\)

**Answer: C.** \(F(20)=36+32=68\).

**155. A population is modeled by \(P(t)=500(2^t)\). Its value at \(t=3\) is:**

A. \(1500\) B. \(2000\) C. \(3000\) D. \(4000\)

**Answer: D.** \(P(3)=500(8)=4000\).

**156. A quantity is modeled by \(Q(t)=800(1/2)^t\). Then \(Q(3)=\):**

A. \(50\) B. \(100\) C. \(200\) D. \(400\)

**Answer: B.** \(800(1/8)=100\).

**157. A rectangle has length \(x\) and width \(10-x\). Its area is:**

A. \(10x\) B. \(x^2-10x\) C. \(10x-x^2\) D. \(x^2+10x\)

**Answer: C.** \(A=x(10-x)=10x-x^2\).

**158. The maximum area of the rectangle in Question 157 is:**

A. \(20\) B. \(25\) C. \(50\) D. \(100\)

**Answer: B.** The vertex occurs at \(x=5\), giving \(A=25\).

**159. An arch is modeled by \(y=-(x-4)^2+16\). Its width at ground level is:**

A. \(4\) B. \(8\) C. \(12\) D. \(16\)

**Answer: B.** Its ground-level roots are \(x=0\) and \(x=8\).

**160. Two plans cost \(C_1(x)=50+4x\) and \(C_2(x)=20+7x\). They cost the same when \(x=\):**

A. \(5\) B. \(10\) C. \(15\) D. \(30\)

**Answer: B.** \(50+4x=20+7x\Rightarrow x=10\).

**161. Demand and supply are \(p=90-2q\) and \(p=30+q\). Their equilibrium quantity is:**

A. \(10\) B. \(15\) C. \(20\) D. \(30\)

**Answer: C.** \(90-2q=30+q\Rightarrow3q=60\).

**162. If \(C(x)=200+10x\) and \(R(x)=30x\), the break-even quantity is:**

A. \(5\) B. \(10\) C. \(15\) D. \(20\)

**Answer: B.** \(30x=200+10x\Rightarrow20x=200\).

**163. A profit function is \(P(x)=-x^2+20x-75\). The break-even quantities are:**

A. \(3,25\) B. \(5,15\) C. \(10,15\) D. \(5,20\)

**Answer: B.** \(P(x)=-(x-5)(x-15)\).

**164. The maximum value of \(P(x)=-x^2+20x-75\) is:**

A. \(15\) B. \(20\) C. \(25\) D. \(75\)

**Answer: C.** At \(x=10\), \(P(10)=-100+200-75=25\).

**165. A quadratic model has two distinct real zero-output values precisely when:**

A. \(D<0\) B. \(D=0\) C. \(D>0\) D. \(D=1\) only

**Answer: C.** A positive discriminant produces two distinct real roots.

**166. If two graphs do not intersect, the corresponding simultaneous equations have:**

A. No common solution B. One solution C. Two solutions D. Infinite solutions

**Answer: A.** A common solution would appear as an intersection point.

**167. A line tangent to a parabola gives the associated equations:**

A. No solution B. Exactly one real solution C. Two real solutions D. Infinite solutions

**Answer: B.** Tangency produces one repeated intersection value.

**168. A sensor converts input \(x\) to output \(y\) using a bijective function. To recover \(x\) from \(y\), use:**

A. The derivative B. The inverse function C. A constant function D. The range only

**Answer: B.** The inverse reverses the input-output conversion.

**169. A data graph contains the points \((2,3)\) and \((2,5)\). It cannot represent \(y=f(x)\) because:**

A. Two inputs have one output B. One input has two outputs C. Both outputs are positive D. The points are vertical

**Answer: B.** Input \(x=2\) would be assigned two different values.

**170. If a horizontal line crosses a function’s graph twice, then the function:**

A. Is one-to-one B. Is not one-to-one C. Is necessarily onto D. Is constant

**Answer: B.** Two inputs correspond to the same output.

**171. To make \(f(x)=x^2-4x\) one-to-one, a suitable domain restriction is:**

A. \(x\ge2\) B. \(x\ge0\) C. \(x\le4\) D. All real numbers

**Answer: A.** The vertex is at \(x=2\), and the function is increasing for \(x\ge2\).

**172. The range of \(f(x)=|x+2|-3\) is:**

A. \([-3,\infty)\) B. \([2,\infty)\) C. \((-\infty,-3]\) D. \(\mathbb R\)

**Answer: A.** The minimum value occurs when \(x=-2\).

**173. Why does \(f(x)=|x|\) not have an inverse on \(\mathbb R\)?**

A. It is not defined at zero B. It is not one-to-one C. Its range is empty D. It is not a function

**Answer: B.** Positive and negative inputs of equal magnitude have the same image.

**174. The piecewise form of \(f(x)=|x|\) for \(x<0\) is:**

A. \(f(x)=x\) B. \(f(x)=-x\) C. \(f(x)=x^2\) D. \(f(x)=1/x\)

**Answer: B.** Negating a negative input gives its nonnegative magnitude.

**175. The complete piecewise form of \(|x|\) is:**

A. \(x\) for all \(x\)
B. \(-x\) for all \(x\)
C. \(x\) if \(x\ge0\), and \(-x\) if \(x<0\)
D. \(-x\) if \(x\ge0\), and \(x\) if \(x<0\)

**Answer: C.** This definition always produces a nonnegative magnitude.

**176. The inverse of \(f(x)=\sqrt{x}\), from \([0,\infty)\) to \([0,\infty)\), is:**

A. \(x^2\) B. \(-x^2\) C. \(1/x\) D. \(\sqrt{x}\)

**Answer: A.** Interchanging \(x,y\) in \(y=\sqrt{x}\) gives \(y=x^2\).

**177. The graphs \(y=x^2\), \(x\ge0\), and \(y=\sqrt{x}\) are reflections in:**

A. The \(x\)-axis B. The \(y\)-axis C. \(y=x\) D. \(y=-x\)

**Answer: C.** They are inverse functions.

**178. The graphs \(y=\sqrt{x}\) and \(y=x\) intersect at:**

A. \((0,0)\) only B. \((1,1)\) only C. \((0,0),(1,1)\) D. \((-1,-1),(1,1)\)

**Answer: C.** \(\sqrt{x}=x\) gives \(x=0\) or \(x=1\).

**179. The graphs \(y=1/x\) and \(y=x\) intersect at:**

A. \((1,1)\) only B. \((-1,-1)\) only C. \((1,1),(-1,-1)\) D. No points

**Answer: C.** \(1/x=x\Rightarrow x^2=1\).

**180. The graphs \(y=1/x^2\) and \(y=1\) intersect at:**

A. \(x=0\) B. \(x=1\) only C. \(x=-1\) only D. \(x=\pm1\)

**Answer: D.** \(1/x^2=1\Rightarrow x^2=1\).

**181. The graphs \(y=2^x\) and \(y=4\) intersect when:**

A. \(x=1\) B. \(x=2\) C. \(x=3\) D. \(x=4\)

**Answer: B.** \(4=2^2\).

**182. If \(f(x)=a^x\), \(a>0\), and \(f(2)=9\), then \(a=\):**

A. \(2\) B. \(3\) C. \(4\) D. \(9\)

**Answer: B.** \(a^2=9\) and the exponential base is positive.

**183. If \(f(x)=a^x\) and \(f(1/2)=2\), then \(a=\):**

A. \(2\) B. \(4\) C. \(8\) D. \(16\)

**Answer: B.** \(\sqrt a=2\Rightarrow a=4\).

**184. If \(f(x)=2^x\) and \(g(x)=x+1\), then \((f\circ g)(2)=\):**

A. \(4\) B. \(6\) C. \(8\) D. \(16\)

**Answer: C.** \(g(2)=3\), so \(f(3)=2^3=8\).

**185. If \(f(x)=x^3+1\), then \(f^{-1}(x)=\):**

A. \(\sqrt[3]{x}+1\) B. \(\sqrt[3]{x-1}\)C. \((x-1)^3\) D. \(\sqrt{x-1}\)

**Answer: B.** Solving \(y=x^3+1\) gives \(x=\sqrt[3]{y-1}\).

**186. If \(f(x)=2x+1\) and \(g=f^{-1}\), then \(f(g(7))=\):**

A. \(3\) B. \(4\) C. \(7\) D. \(15\)

**Answer: C.** A function composed with its inverse returns the original input.

**187. If \(f\circ g=I\) and both functions are bijective, then:**

A. \(g=f\) always B. \(g=f^{-1}\) C. \(g\) is constant D. \(f\) is quadratic

**Answer: B.** A function producing the identity when composed with \(f\) is its inverse.

**188. Which family of functions is self-inverse?**

A. \(f(x)=a-x\) B. \(f(x)=a+x\) C. \(f(x)=ax\) for every \(a\) D. \(f(x)=x^2+a\)

**Answer: A.** \(f(f(x))=a-(a-x)=x\).

**189. If \(f(x)=a-x\) is self-inverse and has fixed point \(3\), then \(a=\):**

A. \(3\) B. \(5\) C. \(6\) D. \(9\)

**Answer: C.** A fixed point satisfies \(3=a-3\), so \(a=6\).

**190. The fixed point of \(f(x)=\frac{x+2}{3}\) is:**

A. \(0\) B. \(1\) C. \(2\) D. \(3\)

**Answer: B.** Solve \(x=(x+2)/3\), giving \(2x=2\).

**191. The fixed points of \(f(x)=1/x\) are:**

A. \(0,1\) B. \(1\) only C. \(-1\) only D. \(-1,1\)

**Answer: D.** \(1/x=x\Rightarrow x^2=1\).

**192. The function \(f(x)=x^2+1\) has how many real fixed points?**

A. None B. One C. Two D. Three

**Answer: A.** \(x=x^2+1\Rightarrow x^2-x+1=0\), whose discriminant is \(-3\).

**193. The range of \(y=-|x-3|+5\) is:**

A. \([5,\infty)\) B. \((-\infty,5]\) C. \([-5,5]\) D. \(\mathbb R\)

**Answer: B.** The maximum value is five, and the graph extends downward indefinitely.

**194. The graph \(y=-|x|+2\) has how many \(x\)-intercepts?**

A. None B. One C. Two D. Three

**Answer: C.** \(-|x|+2=0\Rightarrow x=\pm2\).

**195. The equation \(|x+1|=x+3\) has solution:**

A. \(x=-3\) B. \(x=-2\) C. \(x=1\) D. No real solution

**Answer: B.** The negative branch gives \(-x-1=x+3\Rightarrow x=-2\), which satisfies the branch condition.

**196. The solution set of \(|x|=x\) is:**

A. \(x\le0\) B. \(x<0\) C. \(x\ge0\) D. \(x>0\)

**Answer: C.** Absolute value equals the original number precisely for nonnegative inputs.

**197. The graphs \(y=x^2-4x+3\) and \(y=0\) intersect at:**

A. \((1,0),(3,0)\) B. \((-1,0),(-3,0)\) C. \((0,1),(0,3)\) D. \((1,3),(3,1)\)

**Answer: A.** \(x^2-4x+3=(x-1)(x-3)\).

**198. The line \(y=2x+k\) is tangent to \(y=x^2\) when \(k=\):**

A. \(-2\) B. \(-1\) C. \(0\) D. \(1\)

**Answer: B.** \(x^2-2x-k=0\) is tangent when \(4+4k=0\).

**199. The graph \(y=x^2+k\) has no \(x\)-intercept when:**

A. \(k<0\) B. \(k=0\) C. \(k>0\) D. \(k=-1\)

**Answer: C.** If \(k>0\), then \(x^2+k\) remains positive.

**200. Which function is its own inverse on its natural real domain?**

A. \(f(x)=x+1\) B. \(f(x)=2x\) C. \(f(x)=1/x,\ x\ne0\) D. \(f(x)=x^2\)

**Answer: C.** \(f(f(x))=1/(1/x)=x\) for every \(x\ne0\).
"""
