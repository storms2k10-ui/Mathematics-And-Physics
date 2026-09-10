RAW_101_200 = r'''
101. **Both inputs of an XOR gate are complemented. Compared with the original XOR output, the new output is:**

     A. Always LOW
     B. Always HIGH
     C. Unchanged
     D. Always complemented

     **Answer: C.** Complementing both inputs preserves whether they are equal or different.

102. **Exactly one input of a two-input XNOR gate is complemented. The resulting function of the original inputs is:**

     A. XOR
     B. AND
     C. NOR
     D. XNOR

     **Answer: A.** Complementing one input exchanges equality and inequality.

103. **If A and B are always equal, then \(A\oplus B\oplus C\) equals:**

     A. \(\overline C\)
     B. \(C\)
     C. 0
     D. 1

     **Answer: B.** Equal A and B give \(A\oplus B=0\), leaving \(0\oplus C=C\).

104. **Let \(P=\overline{AB}\) and \(Y=\overline{PC}\). Which expression gives Y directly?**

     A. \(AB+C\)
     B. \((A+B)\overline C\)
     C. \(\overline A+\overline B+C\)
     D. \(AB+\overline C\)

     **Answer: D.** Complementing \(PC\) gives \(\overline P+\overline C=AB+\overline C\).

105. **Let \(P=\overline{A+B}\) and \(Y=\overline{P+C}\). Then Y equals:**

     A. \(AB+\overline C\)
     B. \((A+B)\overline C\)
     C. \(A+B+C\)
     D. \(\overline A\,\overline B C\)

     **Answer: B.** \(Y=\overline P\,\overline C=(A+B)\overline C\).

106. **How many of the 16 input combinations make \(Y=AB+CD\) HIGH?**

     A. 4
     B. 8
     C. 7
     D. 9

     **Answer: C.** AB is HIGH in four rows and CD in four; their common all-HIGH row is counted twice, giving \(4+4-1=7\).

107. **How many combinations make \(Y=(A+B)(C+D)\) HIGH?**

     A. 6
     B. 9
     C. 12
     D. 15

     **Answer: B.** Each pair has three combinations with OR output 1, giving \(3\times3=9\).

108. **How many combinations make \(Y=(A\oplus B)(C\oplus D)\) HIGH?**

     A. 2
     B. 4
     C. 8
     D. 12

     **Answer: B.** Each XOR pair has two unequal-input combinations, giving \(2\times2=4\).

109. **How many of the eight combinations make \(Y=(A+B)\oplus C\) HIGH?**

     A. 4
     B. 3
     C. 6
     D. 7

     **Answer: A.** For each A,B pair, exactly one choice of C differs from \(A+B\).

110. **How many combinations make \(Y=(AB)\oplus(CD)\) HIGH?**

     A. 4
     B. 7
     C. 8
     D. 6

     **Answer: D.** Exactly one pair must be 11: \(1\times3+3\times1=6\) combinations.

111. **The function \(AB+AC+BC\) is HIGH in how many rows of its truth table?**

     A. 1
     B. 3
     C. 7
     D. 4

     **Answer: D.** It is HIGH for the three combinations containing exactly two 1s and for 111.

112. **A three-input function is HIGH only when exactly one input is HIGH. How many HIGH rows does it have?**

     A. 1
     B. 2
     C. 3
     D. 4

     **Answer: C.** The qualifying combinations are 100, 010, and 001.

113. **Which expression is HIGH only when all four inputs have the same value?**

     A. \(A\oplus B\oplus C\oplus D\)
     B. \(A+B+C+D\)
     C. \(ABCD+\overline A\,\overline B\,\overline C\,\overline D\)
     D. \(AB+CD\)

     **Answer: C.** Its terms select only 1111 and 0000.

114. **Using only two-input AND gates, the minimum number needed to AND four independent inputs is:**

     A. 3
     B. 2
     C. 4
     D. 5

     **Answer: A.** Two gates combine the input pairs, and a third combines their outputs.

115. **Using only two-input NOR gates, what is the minimum number needed to implement OR(A,B)?**

     A. 1
     B. 2
     C. 3
     D. 4

     **Answer: B.** One NOR gives \(\overline{A+B}\); a second, with its inputs joined, inverts this result.

116. **Using only two-input NAND gates and uncomplemented inputs A and B, OR can be implemented with a minimum of:**

     A. 1 gate
     B. 2 gates
     C. 4 gates
     D. 3 gates

     **Answer: D.** Two NAND gates generate \(\overline A\) and \(\overline B\); a third gives \(\overline{\overline A\,\overline B}=A+B\).

117. **Define \(P=\text{NAND}(A,B)\), \(Q=\text{NAND}(A,P)\), \(R=\text{NAND}(B,P)\), and \(Y=\text{NAND}(Q,R)\). The final function is:**

     A. AND
     B. OR
     C. XNOR
     D. XOR

     **Answer: D.** Evaluating the four input pairs gives outputs 0, 1, 1, 0.

118. **The output of XNOR(A,B) becomes one input of another two-input XNOR gate whose other input is C. The complete function equals:**

     A. \(\overline{A\oplus B\oplus C}\)
     B. \(ABC\)
     C. \(A+B+C\)
     D. \(A\oplus B\oplus C\)

     **Answer: D.** Each XNOR contributes a complementation; the two complementations cancel.

119. **Which input triple proves that \(\text{NAND}(\text{NAND}(A,B),C)\) need not equal \(\text{NAND}(A,\text{NAND}(B,C))\)?**

     A. 000
     B. 001
     C. 010
     D. 111

     **Answer: B.** At 001, the first arrangement gives 0 and the second gives 1.

120. **Exactly one input of an XOR chain changes while all others remain fixed. Its output:**

     A. Always changes to its complement
     B. Always becomes 0
     C. Always becomes 1
     D. Never changes

     **Answer: A.** Changing one input reverses whether the number of HIGH inputs is odd or even.

121. **A classroom indicator should light only when both approval buttons are pressed. Which gate implements this requirement?**

     A. OR
     B. XOR
     C. AND
     D. NOR

     **Answer: C.** Both button conditions must be true simultaneously.

122. **Either of two help buttons should activate an indicator, including when both are pressed. Which gate is suitable?**

     A. OR
     B. AND
     C. XOR
     D. NOR

     **Answer: A.** OR responds to either input individually and also to both together.

123. **Two sensors report binary states. A warning indicator should turn on only when their reports disagree. Use:**

     A. XOR
     B. AND
     C. NOR
     D. XNOR

     **Answer: A.** XOR directly detects unequal binary values.

124. **A comparison indicator should be HIGH for sensor states 00 and 11, but LOW for 01 and 10. Which gate is suitable?**

     A. NAND
     B. OR
     C. XNOR
     D. XOR

     **Answer: C.** XNOR produces HIGH output for matching inputs.

125. **A “no request” indicator must be HIGH only when three request inputs are all LOW. Which gate provides this output?**

     A. Three-input AND
     B. Three-input NOR
     C. Three-input OR
     D. Three-input NAND

     **Answer: B.** NOR is HIGH only when none of its inputs is HIGH.

126. **Three devices each send 1 when ready. An indicator must be HIGH whenever at least one device is not ready. Which gate should receive the three ready signals?**

     A. AND
     B. OR
     C. NAND
     D. XOR

     **Answer: C.** NAND is LOW only when every ready signal is HIGH.

127. **A display operates only when enable E is HIGH and at least one request A or B is HIGH. Its expression is:**

     A. \(E(A+B)\)
     B. \(E+A+B\)
     C. \(EAB\)
     D. \(\overline E(A+B)\)

     **Answer: A.** The enable condition is ANDed with the OR of the two requests.

128. **A permission signal P should reach an output only while fault signal F is LOW. The required function is:**

     A. \(P+F\)
     B. \(P\overline F\)
     C. \(PF\)
     D. \(\overline P F\)

     **Answer: B.** The output requires permission and the absence of a fault.

129. **A lamp should turn on when A and B are both HIGH, or when override S is HIGH. Its expression is:**

     A. \(AB+S\)
     B. \(A(B+S)\)
     C. \(ABS\)
     D. \((A+B)S\)

     **Answer: A.** The override provides an independent OR path around the joint A,B requirement.

130. **Two series switches A,B form one branch, while two series switches C,D form a parallel branch. Their lamp-control function is:**

     A. \(ABCD\)
     B. \(A+B+C+D\)
     C. \((A+B)(C+D)\)
     D. \(AB+CD\)

     **Answer: D.** Each series branch implements AND, and the parallel branches implement OR.

131. **A parallel pair A,B is connected in series with another parallel pair C,D. The lamp function is:**

     A. \(AB+CD\)
     B. \(ABCD\)
     C. \((A+B)(C+D)\)
     D. \(A+B+C+D\)

     **Answer: C.** At least one switch in each parallel pair must be closed.

132. **An indicator must be HIGH for A = 1 and B = 0, and LOW for every other pair. Its expression is:**

     A. \(\overline A B\)
     B. \(A\overline B\)
     C. \(A+B\)
     D. \(AB\)

     **Answer: B.** The required input pair is selected by ANDing A with NOT B.

133. **Which expression activates a lamp when exactly one of A, B, and C is HIGH?**

     A. \(A+B+C\)
     B. \(A\overline B\,\overline C+\overline A B\overline C+\overline A\,\overline B C\)
     C. \(AB+AC+BC\)
     D. \(ABC\)

     **Answer: B.** The three terms select 100, 010, and 001 respectively.

134. **A voting indicator should be HIGH when at least two of three inputs are HIGH. The required expression is:**

     A. \(A+B+C\)
     B. \(AB+AC+BC\)
     C. \(ABC\)
     D. \(A\oplus B\oplus C\)

     **Answer: B.** At least one pairwise AND term is HIGH whenever two or more inputs are HIGH.

135. **A lamp should indicate exactly two HIGH inputs among A, B, and C. Which expression is correct?**

     A. \(AB\overline C+A\overline B C+\overline A BC\)
     B. \(AB+AC+BC\)
     C. \(ABC\)
     D. \(A+B+C\)

     **Answer: A.** Each term specifies two HIGH inputs and one LOW input, excluding 111.

136. **Four inputs indicate completed tasks. A “still incomplete” output must remain HIGH until all four inputs become HIGH. Which gate is suitable?**

     A. Four-input AND
     B. Four-input OR
     C. Four-input NAND
     D. Four-input NOR

     **Answer: C.** NAND remains HIGH for every combination except 1111.

137. **Two two-bit patterns are AB and CD, with A compared to C and B compared to D. Equality of the complete patterns is detected by:**

     A. \((A\oplus C)+(B\oplus D)\)
     B. \((A+C)(B+D)\)
     C. \(AB+CD\)
     D. \(\overline{A\oplus C}\;\overline{B\oplus D}\)

     **Answer: D.** Each corresponding pair must match, so the two equality results are ANDed.

138. **An indicator must be HIGH only when A differs from B and C differs from D. Its expression is:**

     A. \((A+B)(C+D)\)
     B. \((A\oplus B)+(C\oplus D)\)
     C. \(AB+CD\)
     D. \((A\oplus B)(C\oplus D)\)

     **Answer: D.** Both disagreement conditions must be satisfied.

139. **An indicator must be HIGH when at least one of the pairs A,B and C,D disagrees. Its expression is:**

     A. \((A\oplus B)(C\oplus D)\)
     B. \(ABCD\)
     C. \(\overline{A\oplus B}\;\overline{C\oplus D}\)
     D. \((A\oplus B)+(C\oplus D)\)

     **Answer: D.** OR combines the two disagreement signals.

140. **Which expression identifies exactly three HIGH inputs among A, B, C, and D?**

     A. \(ABC\overline D+AB\overline C D+A\overline B CD+\overline A BCD\)
     B. \(ABCD\)
     C. \(A+B+C+D\)
     D. \(AB+CD\)

     **Answer: A.** Each term selects one possible position of the single LOW input.

141. **A NOT gate receives the sequence 1, 0, 0, 1, 0. Its output sequence is:**

     A. 0, 1, 1, 0, 1
     B. 1, 0, 0, 1, 0
     C. 0, 0, 1, 1, 0
     D. 1, 1, 0, 0, 1

     **Answer: A.** Each input state is individually complemented.

142. **Over four time intervals, A is 1,1,0,0 and B is 1,0,1,0. An AND gate produces:**

     A. 1,1,1,0
     B. 0,1,1,0
     C. 0,0,0,1
     D. 1,0,0,0

     **Answer: D.** Both inputs are HIGH only during the first interval.

143. **Over four intervals, A is 1,0,0,1 and B is 0,1,1,0. An OR gate produces:**

     A. 0,0,0,0
     B. 1,0,0,1
     C. 1,1,1,1
     D. 0,1,1,0

     **Answer: C.** At least one input is HIGH in every interval.

144. **For input sequences A = 1,0,1,1 and B = 1,1,0,0, an XOR gate produces:**

     A. 1,1,1,1
     B. 0,1,1,1
     C. 1,0,0,0
     D. 0,0,1,0

     **Answer: B.** The inputs match only in the first interval and differ in the other three.

145. **Two button signals are 1 when released and 0 when pressed. An indicator must be HIGH when either or both buttons are pressed. Which gate should receive these signals?**

     A. AND
     B. OR
     C. XOR
     D. NAND

     **Answer: D.** At least one pressed button creates a LOW input, making NAND HIGH.

146. **Two button signals are 0 when pressed. An indicator must be HIGH only when both buttons are pressed. Which gate is suitable?**

     A. OR
     B. NOR
     C. NAND
     D. XOR

     **Answer: B.** Both buttons pressed gives 00, the only pair for which NOR is HIGH.

147. **To detect a four-input AND gate whose output is permanently stuck at 0, which test input is essential?**

     A. 0000
     B. 1000
     C. 0111
     D. 1111

     **Answer: D.** A correct AND gate should produce 1 at 1111; the faulty output remains 0.

148. **To detect a four-input OR gate whose output is permanently stuck at 1, use:**

     A. 1111
     B. 1000
     C. 0001
     D. 0000

     **Answer: D.** A correct OR gate should be LOW only for 0000.

149. **A two-input AND gate’s A input is internally stuck at 1. Which applied pair reveals the fault?**

     A. 00
     B. 10
     C. 01
     D. 11

     **Answer: C.** The correct output for 01 is 0, but the faulty gate internally receives 11 and gives 1.

150. **A two-input OR gate’s B input is internally stuck at 0. Which applied pair reveals the fault?**

     A. 01
     B. 00
     C. 10
     D. 11

     **Answer: A.** The correct output is 1, but the faulty internal pair becomes 00 and produces 0.

151. **A circuit intended to invert its input is measured to produce 0 for input 0 and 1 for input 1. Its observed behaviour is that of a:**

     A. NAND gate with both inputs LOW
     B. Constant-HIGH output
     C. Buffer
     D. Constant-LOW output

     **Answer: C.** A buffer reproduces its input instead of complementing it.

152. **An OR gate in a circuit is replaced by a NOR gate with the same inputs. For every valid input pair, its output:**

     A. Remains unchanged
     B. Becomes HIGH
     C. Becomes the complement of the original output
     D. Becomes LOW

     **Answer: C.** NOR is precisely the complement of OR.

153. **A circuit already produces AND(A,B). Which single operation converts its output into NAND(A,B)?**

     A. OR with 0
     B. NOT
     C. AND with 1
     D. XOR with 0

     **Answer: B.** Complementing the AND result produces NAND.

154. **An AND function is needed using a final NOR gate. What signals must reach that final NOR gate?**

     A. A and B
     B. A and \(\overline B\)
     C. \(\overline A\) and B
     D. \(\overline A\) and \(\overline B\)

     **Answer: D.** \(\text{NOR}(\overline A,\overline B)=AB\).

155. **A NAND gate receives enable E and data D. Its output goes LOW precisely when:**

     A. E = 0, D = 0
     B. E = 0, D = 1
     C. E = 1, D = 0
     D. E = 1, D = 1

     **Answer: D.** NAND is LOW only when both enable and data are HIGH.

156. **A control signal C must select either unchanged data A when C = 0 or inverted data when C = 1. Which expression works?**

     A. \(AC\)
     B. \(A+C\)
     C. \(A\oplus C\)
     D. \(\overline{A+C}\)

     **Answer: C.** XOR with 0 preserves A, while XOR with 1 complements A.

157. **Three switches A, B, and C are in series. If C becomes permanently closed, the lamp’s function of the remaining switches is:**

     A. \(A+B\)
     B. \(AB\)
     C. \(\overline{AB}\)
     D. \(A\oplus B\)

     **Answer: B.** With C fixed at 1, \(ABC=AB\).

158. **Two parallel switches control a lamp. If one switch becomes permanently closed, the lamp:**

     A. Remains on regardless of the other switch
     B. Remains off regardless of the other switch
     C. Follows the other switch normally
     D. Implements XOR

     **Answer: A.** The permanently closed branch always provides a complete current path.

159. **Two series switches control a lamp. If one becomes permanently open, the lamp:**

     A. Remains off regardless of the other switch
     B. Remains on regardless of the other switch
     C. Follows the other switch
     D. Turns on only when the other switch opens

     **Answer: A.** The open switch breaks the only series current path.

160. **Two parallel switches A and B control a lamp. If A becomes permanently open, the lamp output is:**

     A. \(\overline B\)
     B. \(B\)
     C. Always 1
     D. Always 0

     **Answer: B.** The remaining B branch alone determines whether a complete path exists.

161. **An unknown two-input gate gives 0 for 00 and 1 for 11. Which pair of gates remains consistent with these observations?**

     A. NAND and NOR
     B. AND and OR
     C. XOR and XNOR
     D. NOR and XOR

     **Answer: B.** AND and OR agree on equal-input pairs but differ on mixed-input pairs.

162. **A circuit is HIGH only for input pair 01, where A is listed first. Its expression must be:**

     A. \(A\overline B\)
     B. \(AB\)
     C. \(\overline A B\)
     D. \(\overline A\,\overline B\)

     **Answer: C.** The required pair has A LOW and B HIGH.

163. **An unknown gate is known to be either XOR or XNOR. What is the minimum number of input tests needed to distinguish them?**

     A. Zero
     B. One
     C. Two
     D. Four

     **Answer: B.** Their outputs are complementary for every input pair, so any one test distinguishes them.

164. **A gate is known to be either AND or OR. Which single test distinguishes the two?**

     A. 00
     B. 01
     C. 11
     D. Applying the same unknown signal to both inputs

     **Answer: B.** At 01, AND gives 0 while OR gives 1.

165. **Testing an unknown gate only at 00 and 11 cannot distinguish which listed pair?**

     A. AND and OR
     B. XOR and XNOR
     C. AND and NAND
     D. OR and NOR

     **Answer: A.** Both AND and OR give outputs 0 and 1 at those two test pairs.

166. **Which test set can distinguish all six gates AND, OR, NAND, NOR, XOR, and XNOR?**

     A. 00 and 11 only
     B. 01, 10, and 11
     C. 00, 01, and 11
     D. 01 and 10 only

     **Answer: C.** These three tests give six distinct output patterns; testing both 01 and 10 adds no distinction for these symmetric gates.

167. **Why can two fixed binary-output tests not uniquely identify one gate among six possible gate types?**

     A. Every gate gives the same output twice
     B. Two inputs permit only two truth-table rows
     C. Two observed bits provide only four possible result patterns
     D. Logic gates cannot be tested without four inputs

     **Answer: C.** Two test results encode at most \(2^2=4\) distinct signatures, fewer than six possibilities.

168. **Swapping A and B never changes a circuit’s output. What can be concluded from this alone?**

     A. The circuit must be OR
     B. The circuit must be AND
     C. The circuit must be XOR
     D. The function is symmetric in A and B

     **Answer: D.** Input-swap invariance establishes symmetry, but several different gate functions have this property.

169. **A faulty three-input AND gate ignores C and produces \(AB\). Which test reveals the fault?**

     A. 000
     B. 011
     C. 111
     D. 110

     **Answer: D.** Correct AND gives 0 for 110, while the faulty \(AB\) function gives 1.

170. **A faulty four-input OR gate ignores D. Which test most directly detects this fault?**

     A. 1110
     B. 0001
     C. 1000
     D. 0000

     **Answer: B.** With only D HIGH, the correct output is 1 but the faulty output remains 0.

171. **Exactly two inputs of a four-input XOR chain are complemented. Its output:**

     A. Always becomes 0
     B. Always becomes 1
     C. Always reverses
     D. Remains unchanged

     **Answer: D.** Two individual output reversals cancel, preserving parity.

172. **Exactly three inputs of a four-input XOR chain are complemented. Its output:**

     A. Reverses
     B. Remains unchanged
     C. Becomes equal to the unchanged input in every case
     D. Becomes permanently HIGH

     **Answer: A.** An odd number of input inversions reverses the XOR result.

173. **A student claims that \(\overline{A\oplus B\oplus C\oplus D}\) is HIGH only when all four inputs are equal. Which input disproves the claim?**

     A. 0000
     B. 1111
     C. 1000
     D. 1100

     **Answer: D.** The input 1100 has even parity, so the complemented XOR is HIGH although the inputs are not all equal.

174. **Why is \(A\oplus B\oplus C\) unsuitable for detecting exactly one HIGH input?**

     A. It is LOW for 100
     B. It is LOW for 010
     C. It is HIGH for 000
     D. It is also HIGH for 111

     **Answer: D.** Three HIGH inputs also give odd parity, so the XOR chain includes an unwanted case.

175. **A changing input A passes through an AND gate with control B. Under which condition are all changes in A blocked from the output?**

     A. B is fixed at 0
     B. B is fixed at 1
     C. B follows A
     D. A changes only between valid logic levels

     **Answer: A.** With B = 0, \(Y=A\cdot0=0\), independent of A.

176. **A changing input A passes through an OR gate with control B. Under which condition are changes in A hidden at the output?**

     A. B is fixed at 0
     B. B is fixed at 1
     C. B is disconnected and undefined
     D. Both inputs are allowed to vary independently

     **Answer: B.** With B = 1, the OR output stays HIGH regardless of A.

177. **Which two-input gate guarantees that toggling A toggles the output, regardless of the fixed value of B?**

     A. AND
     B. OR
     C. XOR
     D. NOR

     **Answer: C.** XOR either follows A or complements A, so a change in A always changes its output.

178. **A circuit implements \(EA+EB\) using two AND gates and one OR gate. Which equivalent implementation uses fewer two-input gates?**

     A. OR A and B, then AND the result with E
     B. AND A and B, then OR the result with E
     C. XOR A and B, then OR the result with E
     D. NOR A and B, then AND the result with E

     **Answer: A.** Factoring gives \(EA+EB=E(A+B)\), requiring only one OR and one AND gate.

179. **A majority circuit should produce \(AB+AC+BC\), but the BC term is omitted. Which input detects the omission?**

     A. 111
     B. 110
     C. 011
     D. 100

     **Answer: C.** At 011, only BC is HIGH; the faulty circuit incorrectly gives 0.

180. **In \(Y=AB+\overline A C+BC\), which term can be removed without changing the steady-state truth table?**

     A. \(AB\)
     B. \(\overline A C\)
     C. \(BC\)
     D. All three terms

     **Answer: C.** Whenever BC is HIGH, A is either 1, activating AB, or 0, activating \(\overline A C\).

181. **For \(Y=AB+\overline A C\), suppose B and C always have the same value. Then Y equals:**

     A. \(B\)
     B. \(A\)
     C. \(\overline B\)
     D. \(A\oplus B\)

     **Answer: A.** Setting C = B gives \(Y=B(A+\overline A)=B\).

182. **A circuit follows \(Y=AB+\overline A C\). When A = 0, the output follows:**

     A. C
     B. B
     C. \(\overline C\)
     D. \(\overline B\)

     **Answer: A.** The AB path is disabled, while \(\overline A C=C\).

183. **Which expression is equivalent to \((A+B)(\overline A+C)\)?**

     A. \(AB+\overline A C\)
     B. \(AC+AB\)
     C. \(A+B+C\)
     D. \(AC+\overline A B\)

     **Answer: D.** Expansion gives \(AC+\overline A B+BC\); BC is redundant because either A or \(\overline A\) covers that case.

184. **A circuit produces \(Y=A\oplus B\). If A and Y are known, B can be recovered using:**

     A. \(AY\)
     B. \(A+Y\)
     C. \(\overline{A+Y}\)
     D. \(A\oplus Y\)

     **Answer: D.** \(A\oplus Y=A\oplus A\oplus B=B\).

185. **A two-input AND output is known to be 1. Which input pair is uniquely determined?**

     A. 00
     B. 01
     C. 10
     D. 11

     **Answer: D.** AND can be HIGH only when both inputs are HIGH.

186. **Both \(S=A+B\) and \(P=AB\) are observed. Which two input pairs remain indistinguishable from these outputs alone?**

     A. 00 and 11
     B. 00 and 01
     C. 10 and 11
     D. 01 and 10

     **Answer: D.** Both mixed-input pairs give S = 1 and P = 0.

187. **Let \(X=A\oplus B\) and \(P=AB\). Which output pair \((X,P)\) is impossible?**

     A. (0,0)
     B. (1,0)
     C. (0,1)
     D. (1,1)

     **Answer: D.** AND being HIGH requires equal HIGH inputs, which makes XOR LOW.

188. **For the same inputs A and B, OR gives 1 while XOR gives 0. The inputs must be:**

     A. 00
     B. 11
     C. 01
     D. 10

     **Answer: B.** XOR = 0 means equal inputs; OR = 1 excludes 00, leaving 11.

189. **Two proposed circuits are \(Y_1=E(A+B)\) and \(Y_2=E(A\oplus B)\). They differ only when:**

     A. E = 0, A = 1, B = 1
     B. E = 1, A = 1, B = 1
     C. E = 1, A = 0, B = 0
     D. E = 1, A = 1, B = 0

     **Answer: B.** OR and XOR differ only at AB = 11, and E must be HIGH for that difference to reach the output.

190. **How many combinations make \((A+B+C)(\overline A+\overline B+\overline C)\) HIGH?**

     A. 6
     B. 2
     C. 4
     D. 7

     **Answer: A.** The first bracket excludes 000 and the second excludes 111, leaving six combinations.

191. **A four-input NAND output and a four-input OR output, both using the same inputs, feed an AND gate. How many combinations make the final output HIGH?**

     A. 14
     B. 2
     C. 8
     D. 15

     **Answer: A.** OR excludes 0000, NAND excludes 1111, and all other 14 combinations make both HIGH.

192. **Let \(P=A\oplus B\), \(Q=B\oplus C\), and \(R=C\oplus A\). The expression \(P\oplus Q\oplus R\) is:**

     A. \(A\oplus B\oplus C\)
     B. Always 1
     C. Always 0
     D. \(ABC\)

     **Answer: C.** Each original input appears twice in the expanded XOR expression and cancels.

193. **If \(A\oplus B=1\) and \(B\oplus C=1\), then \(A\oplus C\) equals:**

     A. 1
     B. 0
     C. B
     D. \(\overline B\)

     **Answer: B.** A and C are both opposite to B, so A and C are equal.

194. **A gate is either NAND or NOR. Input A is fixed at 1. Which value of B distinguishes the two?**

     A. B = 1 only
     B. Either value gives identical outputs
     C. B = 0
     D. No valid B can distinguish them

     **Answer: C.** With inputs 10, NAND gives 1 while NOR gives 0.

195. **A circuit intended to implement AND passes a test at inputs 11. Why does this not prove that an OR gate was not mistakenly used?**

     A. AND and OR agree for every input pair
     B. Both gates give 1 for inputs 11
     C. OR cannot accept two inputs
     D. A HIGH output contains no logical information

     **Answer: B.** A mixed-input test, such as 01, is needed to distinguish AND from OR.

196. **A source supplies 1.8 V as its HIGH output, but the receiving circuit guarantees HIGH only at 2.0 V or above. What is the correct conclusion?**

     A. The connection is guaranteed to transmit logic 1 correctly
     B. The receiver must interpret the signal as LOW
     C. Correct HIGH recognition is not guaranteed
     D. Both circuits must use identical supply voltages in every valid design

     **Answer: C.** The source’s HIGH level does not satisfy the receiver’s guaranteed HIGH requirement.

197. **A receiver accepts LOW up to 1.0 V and HIGH from 3.0 V upward. Actual transmitted levels are 0.4 V and 4.2 V. The smaller voltage margin against an adverse disturbance is:**

     A. 0.6 V
     B. 1.2 V
     C. 1.8 V
     D. 3.8 V

     **Answer: A.** The LOW margin is \(1.0-0.4=0.6\text{ V}\); the HIGH margin is \(4.2-3.0=1.2\text{ V}\).

198. **Input A is HIGH from 1 ms to 6 ms, and B is HIGH from 4 ms to 8 ms. Both are LOW otherwise. An ideal AND output is HIGH for:**

     A. 2 ms
     B. 5 ms
     C. 7 ms
     D. 9 ms

     **Answer: A.** Both inputs are HIGH only during their overlap, from 4 ms to 6 ms.

199. **Input A is HIGH from 1 ms to 6 ms, and B from 4 ms to 8 ms. Both are LOW otherwise. An ideal XOR output is HIGH for a total of:**

     A. 2 ms
     B. 5 ms
     C. 7 ms
     D. 9 ms

     **Answer: B.** XOR is HIGH from 1–4 ms and 6–8 ms, giving \(3+2=5\text{ ms}\).

200. **An indicator must turn on only when enable E is HIGH, exactly one of A and B is HIGH, and fault F is LOW. Which expression satisfies every condition?**

     A. \(E(A+B)\overline F\)
     B. \((E+A\oplus B)\overline F\)
     C. \(E(A\oplus B)\overline F\)
     D. \(E(A\oplus B)F\)

     **Answer: C.** XOR enforces exactly one request, while AND requires both enable and the absence of a fault.
'''
