RAW_101_200 = r'''
101. **At constant emitter current, \(\alpha\) increases from 0.98 to 0.99. The collector current increases by approximately:**

     A. 50%
     B. 100%
     C. 1.02%
     D. 0.01%

     **Answer: C.** The fractional increase is \((0.99-0.98)/0.98\approx0.0102\), or 1.02%.

102. **An NPN transistor has \(V_E=0\text{ V}\), \(V_B=0.70\text{ V}\), and \(V_C=0.20\text{ V}\). Its junction biases indicate:**

     A. Cutoff
     B. Normal active operation
     C. Saturation
     D. An intrinsic semiconductor

     **Answer: C.** The base is above both emitter and collector, so both p–n junctions are forward biased.

103. **A PNP transistor has \(V_E=5.0\text{ V}\), \(V_B=4.3\text{ V}\), and \(V_C=4.6\text{ V}\). Both its junctions are:**

     A. Reverse biased
     B. Unbiased
     C. Alternately biased by definition
     D. Forward biased

     **Answer: D.** Both p-type regions are above the n-type base potential, indicating saturation-type biasing.

104. **A collector voltage can vary between 0.2 V and 10.0 V. Which quiescent voltage gives the greatest symmetrical voltage swing?**

     A. 0.2 V
     B. 2.5 V
     C. 10.0 V
     D. 5.1 V

     **Answer: D.** The midpoint is \((10.0+0.2)/2=5.1\text{ V}\).

105. **In a common-emitter amplifier, a 20 mV input increase produces a 1 mA collector-current increase through \(R_C=2\,\text{k}\Omega\). Its incremental voltage gain is:**

     A. \(+100\)
     B. \(-10\)
     C. \(-100\)
     D. \(+10\)

     **Answer: C.** \(\Delta V_o=-R_C\Delta I_C=-2\text{ V}\); therefore \(A_v=-2/0.020=-100\).

106. **A collector rests at 5.0 V and must remain between 0.2 V and 10.0 V. The largest symmetrical sinusoidal output amplitude is:**

     A. 4.8 V peak
     B. 5.0 V peak
     C. 9.8 V peak
     D. 0.2 V peak

     **Answer: A.** Available downward swing is 4.8 V and upward swing is 5.0 V; the smaller value sets the limit.

107. **Which property makes an emitter follower useful between a high-resistance signal source and a low-resistance load?**

     A. Infinite voltage gain
     B. Relatively high input resistance and low output resistance
     C. Zero current gain
     D. Mandatory \(180^\circ\) voltage inversion

     **Answer: B.** These impedance properties reduce source loading while allowing the follower to supply more load current.

108. **A common-base amplifier has current-gain magnitude 0.98 and voltage-gain magnitude 50. Its approximate power gain is:**

     A. 0.0196
     B. 50.98
     C. 49
     D. 51.02

     **Answer: C.** Power gain is the product of voltage and current gain magnitudes: \(50(0.98)=49\).

109. **An unsaturated op-amp has open-loop gain \(10^5\) and output \(+3.0\text{ V}\). Its differential input \(V_+-V_-\) is:**

     A. \(+30\,\mu\text{V}\)
     B. \(+3\text{ mV}\)
     C. \(-30\,\mu\text{V}\)
     D. \(+300\text{ mV}\)

     **Answer: A.** The differential input is \(V_o/A_{\mathrm{OL}}=3/10^5=30\,\mu\text{V}\).

110. **An inverting amplifier has \(R_f=100\,\text{k}\Omega\), \(R_{\text{in}}=5\,\text{k}\Omega\), and output limits \(\pm6\text{ V}\). For \(V_{\text{in}}=0.40\text{ V}\), the output is:**

     A. \(-8\text{ V}\)
     B. \(+6\text{ V}\)
     C. \(-6\text{ V}\)
     D. \(+8\text{ V}\)

     **Answer: C.** The linear prediction is \(-20(0.40)=-8\text{ V}\), so the output clips at \(-6\text{ V}\).

111. **A voltage follower has finite open-loop gain \(A=99\), giving closed-loop gain \(A/(1+A)\). For a 2 V input, its output is:**

     A. 2.02 V
     B. 1.98 V
     C. 1.00 V
     D. 198 V

     **Answer: B.** \(V_o=[99/100](2)=1.98\text{ V}\).

112. **A non-inverting amplifier requires gain 16. If \(R_g=2\,\text{k}\Omega\), the required feedback resistance is:**

     A. \(30\,\text{k}\Omega\)
     B. \(32\,\text{k}\Omega\)
     C. \(16\,\text{k}\Omega\)
     D. \(0.125\,\text{k}\Omega\)

     **Answer: A.** \(R_f=(A_v-1)R_g=15(2)=30\,\text{k}\Omega\).

113. **An inverting amplifier has \(V_{\text{in}}=-0.20\text{ V}\), \(R_{\text{in}}=10\,\text{k}\Omega\), and \(R_f=50\,\text{k}\Omega\). Conventional current through \(R_f\) is:**

     A. 20 μA from the summing node toward the output
     B. 100 μA into the op-amp input
     C. Zero because the summing node is at virtual earth
     D. 20 μA from the output toward the summing node

     **Answer: D.** The output is \(+1.0\text{ V}\), so \(1.0/50\,000=20\,\mu\text{A}\) flows toward the approximately zero-volt node.

114. **An ideal inverting amplifier uses \(R_{\text{in}}=10\,\text{k}\Omega\). The resistance seen by its signal source is approximately:**

     A. Zero
     B. Infinite
     C. \(10\,\text{k}\Omega\)
     D. Equal to the op-amp’s output resistance

     **Answer: C.** The source drives the input resistor connected to virtual earth, so the circuit’s input resistance is \(R_{\text{in}}\).

115. **Both inputs of an ideal differential amplifier increase by the same 0.40 V. Its differential output contribution:**

     A. Increases by \(0.80A_{\mathrm{OL}}\)
     B. Reverses sign
     C. Must reach positive saturation
     D. Remains unchanged

     **Answer: D.** Equal changes cancel in \(V_+-V_-\), leaving the differential input unchanged.

116. **In an inverting amplifier, \(R_f\) is doubled while the input voltage is halved. With \(R_{\text{in}}\) unchanged, the output voltage:**

     A. Doubles
     B. Halves
     C. Becomes four times larger
     D. Remains unchanged

     **Answer: D.** The gain magnitude doubles while the input halves, leaving their product unchanged.

117. **A non-inverting amplifier initially has gain 4. Its feedback resistor is doubled while \(R_g\) is unchanged. Its new gain is:**

     A. 8
     B. 6
     C. 7
     D. 5

     **Answer: C.** Initially \(R_f/R_g=3\); doubling \(R_f\) gives gain \(1+6=7\).

118. **A non-inverting amplifier initially has gain 9. If \(R_g\) is doubled while \(R_f\) remains fixed, the new gain is:**

     A. 18
     B. 4.5
     C. 8
     D. 5

     **Answer: D.** Initially \(R_f/R_g=8\). After doubling \(R_g\), the ratio is 4 and the gain is 5.

119. **An inverting amplifier has gain \(-30\) and output limits \(\pm9\text{ V}\). Its largest undistorted sinusoidal input amplitude is:**

     A. 3 V peak
     B. 30 V peak
     C. 270 V peak
     D. 0.30 V peak

     **Answer: D.** The input amplitude must satisfy \(30V_{\text{in,peak}}\le9\), giving 0.30 V.

120. **Three linear amplifier stages have gains \(-2\), \(+3\), and \(-4\). Their combined gain is:**

     A. \(+24\)
     B. \(-24\)
     C. \(+9\)
     D. \(-9\)

     **Answer: A.** Cascaded gains multiply: \((-2)(3)(-4)=+24\).

121. **A circuit needs nearly unchanged signal voltage but increased current-driving ability. Which transistor configuration is most suitable?**

     A. Common collector
     B. Common emitter operated in cutoff
     C. Common base with its input disconnected
     D. A reverse-biased base–emitter junction

     **Answer: A.** A common-collector stage has voltage gain near unity and substantial current gain.

122. **An optical communication receiver must convert changing light intensity into an electrical signal. Which device is most appropriate?**

     A. An ordinary resistor alone
     B. A forward-biased indicator LED
     C. A collector resistor
     D. A photodiode

     **Answer: D.** A photodiode produces an electrical response that follows the received light.

123. **In a theoretical 5 V indicator circuit, an LED drops 2 V and should carry 10 mA. The required series resistor is:**

     A. \(500\,\Omega\)
     B. \(300\,\Omega\)
     C. \(200\,\Omega\)
     D. \(700\,\Omega\)

     **Answer: B.** \(R=(5-2)/0.010=300\,\Omega\).

124. **An LED operates at 1.8 V and 20 mA. Its electrical input power is:**

     A. 36 mW
     B. 90 mW
     C. 11.1 mW
     D. 360 mW

     **Answer: A.** \(P=VI=1.8(0.020)=0.036\text{ W}\).

125. **A light sensor produces a voltage that increases with illumination. It is connected to a comparator’s non-inverting input, with a fixed reference at the inverting input. Above the reference level, the output becomes:**

     A. Necessarily zero
     B. Negative
     C. Positive
     D. Equal to the sensor resistance

     **Answer: C.** Above the threshold, \(V_+>V_-\), so the output switches positive.

126. **A photovoltaic device operates at 20% efficiency while receiving 250 mW of light power. Its electrical output power is:**

     A. 1.25 W
     B. 12.5 mW
     C. 200 mW
     D. 50 mW

     **Answer: D.** \(P_{\text{out}}=0.20(250)=50\text{ mW}\).

127. **Six matching cells each provide 0.50 V at 20 mA. Two parallel strings, each containing three series cells, provide:**

     A. 1.5 V at 40 mA
     B. 3.0 V at 20 mA
     C. 0.50 V at 120 mA
     D. 1.0 V at 60 mA

     **Answer: A.** Each series string provides 1.5 V at 20 mA; two such strings in parallel provide 40 mA.

128. **Each half of a centre-tapped secondary provides 4.0 V rms. With ideal rectifier diodes, the output peak is approximately:**

     A. 5.66 V
     B. 4.00 V
     C. 8.00 V
     D. 11.31 V

     **Answer: A.** Each conducting half provides a peak of \(4\sqrt2\approx5.66\text{ V}\).

129. **A half-wave rectifier previously produced pulses, but its diode now has an open-circuit fault. With the source and load intact, the load voltage becomes:**

     A. A full-wave waveform
     B. Zero
     C. Twice its previous peak
     D. A constant voltage equal to the source peak

     **Answer: B.** An open diode breaks the only current path, so no current flows through the load.

130. **A signal has a positive peak of 0.40 V. Which constant-drop diode model would permit some forward conduction in a simple half-wave detector?**

     A. A diode with a 0.30 V drop
     B. A diode with a 0.70 V drop
     C. A diode with a 1.0 V drop
     D. A diode with a 2.0 V drop

     **Answer: A.** Only the 0.30 V threshold is below the available positive peak.

131. **Measurements show that mobile electrons greatly outnumber holes in a semiconductor sample. The sample is classified as:**

     A. N-type
     B. P-type
     C. Intrinsic under all conditions
     D. A perfect insulator

     **Answer: A.** N-type classification means electrons are the majority carriers.

132. **A 3.3 V control signal drives a transistor base through \(26\,\text{k}\Omega\). Taking \(V_{BE}=0.70\text{ V}\), the base current is:**

     A. 10 μA
     B. 26 μA
     C. 127 μA
     D. 100 μA

     **Answer: D.** \(I_B=(3.3-0.7)/26\,000=100\,\mu\text{A}\).

133. **A grounded-emitter amplifier uses a 9 V supply. To obtain \(V_{CE}=5\text{ V}\) at \(I_C=2\text{ mA}\), its collector resistor should be:**

     A. \(4.5\,\text{k}\Omega\)
     B. \(2.0\,\text{k}\Omega\)
     C. \(2.5\,\text{k}\Omega\)
     D. \(7.0\,\text{k}\Omega\)

     **Answer: B.** \(R_C=(9-5)/0.002=2.0\,\text{k}\Omega\).

134. **An active transistor has small-signal current gain 150. A sinusoidal base-current variation has amplitude \(20\,\mu\text{A}\). The collector-current variation has amplitude:**

     A. 0.30 mA
     B. 3.0 mA
     C. 7.5 mA
     D. 30 mA

     **Answer: B.** \(\Delta I_C=\beta\Delta I_B=150(20\,\mu\text{A})=3.0\text{ mA}\).

135. **A common-emitter stage converts a 20 mV peak input into an inverted 1.2 V peak output. Its voltage gain is:**

     A. \(+60\)
     B. \(-0.0167\)
     C. \(-60\)
     D. \(+0.0167\)

     **Answer: C.** The magnitude is \(1.2/0.020=60\), and inversion gives a negative sign.

136. **An amplifier uses \(V_{CC}=8\text{ V}\), \(R_C=2\,\text{k}\Omega\), and a grounded emitter. To set \(V_C=4\text{ V}\) with \(\beta=100\), the base current should be:**

     A. 20 μA
     B. 40 μA
     C. 200 μA
     D. 2 μA

     **Answer: A.** The required collector current is \((8-4)/2000=2\text{ mA}\), so \(I_B=20\,\mu\text{A}\).

137. **A theoretical transistor-controlled LED branch has a 5 V supply, a 2 V LED drop, \(V_{CE(\text{sat})}=0.20\text{ V}\), and \(280\,\Omega\) resistance. Its current is:**

     A. 17.9 mA
     B. 7.14 mA
     C. 20 mA
     D. 10 mA

     **Answer: D.** The resistor voltage is \(5-2-0.2=2.8\text{ V}\), giving \(2.8/280=10\text{ mA}\).

138. **A transistor test gives \(I_E=6.06\text{ mA}\) and \(I_C=6.00\text{ mA}\). The measured \(\beta\) is:**

     A. 101
     B. 100
     C. 0.990
     D. 60

     **Answer: B.** \(I_B=0.06\text{ mA}\), so \(\beta=6.00/0.06=100\).

139. **An emitter follower with \(\beta=99\) supplies an emitter current of 5.0 mA. Its base current is:**

     A. 5 μA
     B. 50 μA
     C. 495 μA
     D. 500 μA

     **Answer: B.** \(I_B=I_E/(\beta+1)=5.0\text{ mA}/100=50\,\mu\text{A}\).

140. **A common-base circuit must deliver 4.8 mA of collector current with \(\alpha=0.96\). Its emitter current must be:**

     A. 4.608 mA
     B. 0.20 mA
     C. 5.0 mA
     D. 9.6 mA

     **Answer: C.** \(I_E=I_C/\alpha=4.8/0.96=5.0\text{ mA}\).

141. **A sensor’s 0.20 V output must become \(+2.0\text{ V}\). A non-inverting amplifier uses \(R_g=10\,\text{k}\Omega\). The required \(R_f\) is:**

     A. \(100\,\text{k}\Omega\)
     B. \(20\,\text{k}\Omega\)
     C. \(90\,\text{k}\Omega\)
     D. \(9\,\text{k}\Omega\)

     **Answer: C.** The required gain is 10, so \(R_f=(10-1)(10\,\text{k}\Omega)=90\,\text{k}\Omega\).

142. **An inverting circuit must convert \(+2.0\text{ V}\) into \(-0.50\text{ V}\). Which resistor pair gives the required gain?**

     A. \(R_{\text{in}}=40\,\text{k}\Omega,\ R_f=10\,\text{k}\Omega\)
     B. \(R_{\text{in}}=10\,\text{k}\Omega,\ R_f=40\,\text{k}\Omega\)
     C. \(R_{\text{in}}=R_f=10\,\text{k}\Omega\)
     D. \(R_{\text{in}}=20\,\text{k}\Omega,\ R_f=40\,\text{k}\Omega\)

     **Answer: A.** The required gain is \(-0.25\), obtained from \(-10/40\).

143. **An inverting amplifier needs gain \(-8\). If its input resistor is \(5\,\text{k}\Omega\), its feedback resistor must be:**

     A. \(0.625\,\text{k}\Omega\)
     B. \(40\,\text{k}\Omega\)
     C. \(13\,\text{k}\Omega\)
     D. \(3\,\text{k}\Omega\)

     **Answer: B.** \(R_f=8R_{\text{in}}=40\,\text{k}\Omega\).

144. **A comparator has a 1.2 V reference at its inverting input and a 1.1 V sensor signal at its non-inverting input. Its output selects the:**

     A. Positive level
     B. Negative level
     C. Exact average, 1.15 V
     D. Exact difference, 0.10 V

     **Answer: B.** The sensor voltage is below the reference, making \(V_+-V_-\) negative.

145. **A signal-processing stage must produce a positive output for a negative input, with proportional magnitude and zero offset. Which circuit is suitable?**

     A. A positive-gain non-inverting amplifier
     B. A voltage follower
     C. An unbiased photovoltaic cell
     D. An inverting amplifier

     **Answer: D.** An inverting amplifier reverses the input’s sign while scaling its magnitude.

146. **A 2 V source has internal resistance \(90\,\text{k}\Omega\). Direct connection to a \(10\,\text{k}\Omega\) load gives 0.20 V. An ideal voltage follower placed between them makes the load voltage:**

     A. 0.02 V
     B. 0.20 V
     C. 2.0 V
     D. 20 V

     **Answer: C.** The follower draws no input current and reproduces the unloaded 2 V source voltage across the load.

147. **An op-amp’s non-inverting input is held at 1 V. Its inverting input connects to \(V_{\text{in}}\) through \(R\) and to the output through \(2R\). For \(V_{\text{in}}=0.50\text{ V}\), the output is:**

     A. \(-1.0\text{ V}\)
     B. \(+1.0\text{ V}\)
     C. \(+2.0\text{ V}\)
     D. \(+3.0\text{ V}\)

     **Answer: C.** With the inverting node at 1 V, current balance gives \(V_o=3(1)-2(0.50)=2.0\text{ V}\).

148. **Two signals, 0.10 V and 0.20 V, each enter an ideal inverting summing node through \(10\,\text{k}\Omega\). With \(R_f=20\,\text{k}\Omega\) and the positive input grounded, the output is:**

     A. \(+0.60\text{ V}\)
     B. \(-0.15\text{ V}\)
     C. \(+0.30\text{ V}\)
     D. \(-0.60\text{ V}\)

     **Answer: D.** Input currents add, giving \(V_o=-2(0.10+0.20)=-0.60\text{ V}\).

149. **A common-emitter stage of gain \(-10\) is followed by an inverting op-amp stage of gain \(-2\). The final output is:**

     A. Inverted with gain magnitude 12
     B. Inverted with gain magnitude 20
     C. Non-inverted with gain 5
     D. Non-inverted with gain 20

     **Answer: D.** Two inversions cancel, and the gains multiply to \(+20\).

150. **A non-inverting amplifier has gain 5 and an allowed output range from 0 to 5 V. Which input range can it reproduce linearly?**

     A. \(-1\) to \(+1\text{ V}\)
     B. 0 to 1 V
     C. 0 to 5 V
     D. 1 to 5 V

     **Answer: B.** Since \(V_o=5V_{\text{in}}\), the output range corresponds to inputs from 0 to 1 V.

151. **A voltage divider has \(30\,\text{k}\Omega\) above and \(20\,\text{k}\Omega\) below its midpoint across 5 V. Neglecting base loading, it biases an NPN base at 2 V. For \(V_{BE}=0.70\text{ V}\), the emitter voltage is:**

     A. 2.7 V
     B. 0.7 V
     C. 2.0 V
     D. 1.3 V

     **Answer: D.** In forward operation, \(V_E=V_B-V_{BE}=2.0-0.7=1.3\text{ V}\).

152. **A transistor dissipates collector–emitter power at \(V_{CE}=2.0\text{ V}\) and \(I_C=5.0\text{ mA}\). Neglecting base power, its dissipation is:**

     A. 2.5 mW
     B. 7.0 mW
     C. 0.4 mW
     D. 10 mW

     **Answer: D.** \(P=V_{CE}I_C=2.0(0.005)=0.010\text{ W}\).

153. **A light meter has 3 μA dark current and sensitivity 5 μA per illumination unit. A measured current of 23 μA corresponds to:**

     A. 4.6 units
     B. 4 units
     C. 5.2 units
     D. 20 units

     **Answer: B.** Subtract the dark current: \((23-3)/5=4\) illumination units.

154. **A photodiode supplies a constant light-generated current of 12 μA for 0.50 s. The associated transferred charge is:**

     A. 24 μC
     B. 0.024 μC
     C. 6 μC
     D. 12.5 μC

     **Answer: C.** \(Q=It=12\,\mu\text{A}(0.50\text{ s})=6\,\mu\text{C}\).

155. **In a constant-drop LED model with a fixed supply, the series resistance is accidentally halved. The predicted current:**

     A. Halves
     B. Remains unchanged
     C. Doubles
     D. Becomes zero

     **Answer: C.** The resistor voltage remains fixed, so \(I=V_R/R\) doubles when \(R\) halves.

156. **Which measured photovoltaic operating point gives the greatest electrical output power?**

     A. 0.45 V at 40 mA
     B. 0.30 V at 50 mA
     C. 0 V at 60 mA
     D. 0.60 V at 0 mA

     **Answer: A.** The powers are 18 mW, 15 mW, 0, and 0 respectively.

157. **Both diodes in a centre-tapped full-wave rectifier are reversed. For a symmetrical source and resistive load, the output becomes:**

     A. Positive half-wave pulses
     B. Zero under all conditions
     C. AC with unchanged positive and negative halves
     D. Negative full-wave pulses

     **Answer: D.** Reversing both diodes reverses load-current direction while preserving conduction on both half-cycles.

158. **A non-inverting amplifier has gain 4 and output limits \(\pm8\text{ V}\). For an input of \(-1.5\text{ V}\), its output is:**

     A. \(+6\text{ V}\)
     B. \(-8\text{ V}\)
     C. \(-6\text{ V}\)
     D. \(+8\text{ V}\)

     **Answer: C.** The linear output is \(4(-1.5)=-6\text{ V}\), which lies within the limits.

159. **A theoretical temperature sensor produces \(V_s=0.020T\), with \(T\) in °C and voltage in volts. A comparator compares it with 0.60 V. The switching threshold is:**

     A. \(30^\circ\text{C}\)
     B. \(12^\circ\text{C}\)
     C. \(60^\circ\text{C}\)
     D. \(300^\circ\text{C}\)

     **Answer: A.** At the threshold, \(0.020T=0.60\), so \(T=30^\circ\text{C}\).

160. **An inverting amplifier with gain \(-12\) receives \(-0.25\text{ V}\). If the output remains linear, it produces:**

     A. \(-3.0\text{ V}\)
     B. \(-0.0208\text{ V}\)
     C. \(+3.0\text{ V}\)
     D. \(+0.0208\text{ V}\)

     **Answer: C.** \(V_o=(-12)(-0.25)=+3.0\text{ V}\).

161. **A sample is found to have equal electron and hole concentrations. Why does this measurement alone not prove that no impurities were added?**

     A. All doped samples always have equal carrier concentrations
     B. Holes cannot be measured
     C. Impurities never affect carrier concentration
     D. Equal donor and acceptor doping can compensate

     **Answer: D.** Compensating donor and acceptor effects can produce equal carrier concentrations without chemical purity.

162. **Why is an ordinary n-type semiconductor approximately electrically neutral despite containing many mobile electrons?**

     A. Electrons have no charge inside solids
     B. Positive ionized donors balance the extra negative mobile charge
     C. Every electron is paired with a free proton
     D. Its surface must always carry a large positive charge

     **Answer: B.** Doping redistributes charge within the material; it does not inherently give the whole specimen a net charge.

163. **A student says, “The depletion region has no charge because it has few mobile carriers.” What is the best correction?**

     A. It contains only moving neutrons
     B. Every part of it is an ideal metal
     C. It contains fixed space charge from exposed ions
     D. It has no electric field or potential difference

     **Answer: C.** Depletion removes mobile carriers but leaves charged, immobile dopant ions.

164. **A short light pulse creates electron–hole pairs in an n-type sample. Before significant recombination, how do the added carrier numbers compare?**

     A. More electrons than holes are created per pair
     B. Only holes are created
     C. Equal numbers of electrons and holes are added
     D. Only electrons are created

     **Answer: C.** Pair generation adds one electron and one hole, even though their initial concentrations were unequal.

165. **Can the built-in potential of an unilluminated p–n junction at thermal equilibrium continuously power an external resistor by itself?**

     A. No; equilibrium provides no sustained net energy source
     B. Yes; its fixed ions supply unlimited energy
     C. Yes; diffusion current has no opposing contribution
     D. Only if the resistor is exactly one ohm

     **Answer: A.** A junction at equilibrium cannot continuously deliver electrical power without an external energy input.

166. **A diode’s reverse current changes very little when reverse voltage increases below breakdown. This behaviour shows that the diode:**

     A. Obeys a constant-resistance model throughout that region
     B. Has no minority carriers
     C. Must be forward biased
     D. Cannot be described there by a single constant ohmic resistance

     **Answer: D.** For a constant resistor, current would increase proportionally with voltage; the nearly flat reverse characteristic does not.

167. **Two ideal diodes are connected in series but point in opposite directions. The pair is connected to an AC source through a resistor. Ignoring breakdown, the current is:**

     A. Full-wave rectified
     B. Positive half-wave only
     C. Negative half-wave only
     D. Zero during both half-cycles

     **Answer: D.** For either source polarity, one of the series diodes is reverse biased and blocks the path.

168. **One diode in an ideal centre-tapped full-wave rectifier becomes open circuit. With the same source and load, the average output voltage becomes:**

     A. Twice its previous value
     B. Unchanged
     C. Half its previous value
     D. Four times its previous value

     **Answer: C.** One of the two equal sets of pulses disappears, leaving half-wave operation.

169. **A rectifier supplied at 50 Hz produces unidirectional load pulses separated by 10 ms. What can be inferred?**

     A. Both input half-cycles contribute to the output
     B. Only one input half-cycle contributes
     C. Its output is perfectly constant DC
     D. Its source frequency has become 10 Hz

     **Answer: A.** A 10 ms pulse interval means 100 pulses per second, twice the input frequency.

170. **In an ideal centre-tapped full-wave rectifier, each half-secondary has a 4 V peak. When one diode conducts at its peak, the other has anode voltage \(-4\text{ V}\) and cathode voltage \(+4\text{ V}\). Its reverse voltage is:**

     A. 4 V
     B. 8 V
     C. 2 V
     D. 0 V

     **Answer: B.** Reverse voltage is cathode minus anode voltage: \(4-(-4)=8\text{ V}\).

171. **If an LED’s emitted photon energy approximately follows its band gap, increasing the band gap tends to produce:**

     A. Shorter-wavelength light
     B. Longer-wavelength light
     C. Light with lower frequency
     D. Photons with unchanged energy in every material

     **Answer: A.** Higher photon energy means higher frequency and shorter wavelength because \(E=hf=hc/\lambda\).

172. **A photovoltaic cell is illuminated more strongly while its terminals remain open. Its delivered electrical power is:**

     A. Necessarily doubled
     B. Equal to its open-circuit voltage
     C. Equal to its short-circuit current
     D. Zero

     **Answer: D.** Open-circuit current is zero, so delivered power \(VI\) is zero despite a terminal voltage.

173. **Two photodiodes produce equal total currents, but their dark currents are different. What follows about their incident light intensities?**

     A. They must be equal
     B. Both must be zero
     C. Equality cannot be concluded from total current alone
     D. The larger dark current guarantees stronger illumination

     **Answer: C.** Total current includes dark and light-generated components; the dark contributions must first be accounted for.

174. **An optical receiver measures 5 μA with a signal light off and 17 μA with it on. If background conditions remain unchanged, the signal-light contribution is:**

     A. 12 μA
     B. 22 μA
     C. 17 μA
     D. 5 μA

     **Answer: A.** Subtracting the background reading isolates the signal: \(17-5=12\,\mu\text{A}\).

175. **A forward-biased base–emitter junction alone does not prove that an NPN transistor is in its active region because:**

     A. Active operation requires zero emitter current
     B. The collector–base junction may also be forward biased
     C. Active operation requires an absent collector
     D. NPN transistors never operate linearly

     **Answer: B.** If both junctions are forward biased, the transistor is saturated rather than normally active.

176. **Why do two separate diodes connected together not generally reproduce BJT amplification?**

     A. Separate diodes contain no p–n junctions
     B. They lack the transistor’s thin shared base and coupled carrier transport
     C. A transistor has only one junction
     D. Diodes cannot carry conventional current

     **Answer: B.** Transistor action depends on carriers injected through one junction reaching the other through a thin common base.

177. **A transistor switch has \(V_{CC}=5\text{ V}\), \(R_C=1\,\text{k}\Omega\), \(V_{CE(\text{sat})}=0.20\text{ V}\), and \(I_B=100\,\mu\text{A}\). Its active-region \(\beta\) may vary from 50 to 150. The collector current is approximately:**

     A. 4.8 mA throughout this range
     B. 5 to 15 mA
     C. 0.10 mA throughout this range
     D. 50 to 150 mA

     **Answer: A.** Even the minimum gain supports the load-limited 4.8 mA, so the transistor remains saturated under the stated model.

178. **A saturated switch carries 4 mA with \(I_B=100\,\mu\text{A}\). Its active-region \(\beta\) falls from 80 to 60. If the load still demands only 4 mA, the collector current approximately:**

     A. Falls to 3 mA
     B. Remains 4 mA
     C. Rises to 6 mA
     D. Becomes 8 mA

     **Answer: B.** The forced current ratio is \(4\text{ mA}/0.1\text{ mA}=40\), still below 60, so sufficient base drive remains.

179. **An amplifier collector can swing from 0.4 V to 12.0 V. Which pair gives the optimum quiescent voltage and maximum symmetrical peak swing?**

     A. 6.0 V and 6.0 V
     B. 0.4 V and 11.6 V
     C. 12.0 V and 0.4 V
     D. 6.2 V and 5.8 V

     **Answer: D.** The midpoint is 6.2 V, and each limit is 5.8 V away.

180. **In a grounded-emitter circuit, base current is fixed while the collector resistance is gradually increased. Before saturation, what trend occurs?**

     A. Collector voltage falls, bringing the transistor closer to saturation
     B. Collector voltage rises indefinitely
     C. Base current must become zero
     D. The supply voltage automatically increases

     **Answer: A.** Approximately fixed collector current produces a larger \(I_CR_C\) drop as resistance increases.

181. **Two transistors have \(\alpha=0.990\) and \(\alpha=0.999\). Their corresponding \(\beta\) values are:**

     A. 0.010 and 0.001
     B. 99 and 100
     C. 99 and 999
     D. 990 and 999

     **Answer: C.** Applying \(\beta=\alpha/(1-\alpha)\) gives 99 and 999, showing strong sensitivity when \(\alpha\) is near unity.

182. **Two active transistors are connected so the first transistor’s entire emitter current becomes the second transistor’s base current. If \(\beta_1=50\) and \(\beta_2=99\), then \(I_{C2}/I_{B1}\) is:**

     A. 4950
     B. 5049
     C. 149
     D. 5000

     **Answer: B.** \(I_{E1}=51I_{B1}\), so \(I_{C2}=99(51)I_{B1}=5049I_{B1}\).

183. **A first amplifier stage clips a sinusoidal signal. A second stage then operates linearly. Can the second stage recover the original unclipped waveform merely by changing its gain?**

     A. Yes, if its gain is positive
     B. Yes, if its gain is negative
     C. Yes, if its gain exceeds 100
     D. No, because the clipped stage has lost waveform information

     **Answer: D.** Linear amplification rescales the distorted signal; it does not reconstruct the removed peaks.

184. **A transistor’s emitter current is held at 1.0 mA while \(\beta\) rises from 49 to 99. The collector current increases by:**

     A. 10 μA
     B. 1.0 mA
     C. 50 μA
     D. 500 μA

     **Answer: A.** Collector current changes from \((49/50)(1)=0.98\text{ mA}\) to \((99/100)(1)=0.99\text{ mA}\).

185. **An emitter follower has voltage gain slightly below one but can still provide power gain because:**

     A. Power gain depends only on voltage gain
     B. Its current gain can be much greater than one
     C. It creates energy within the base
     D. Its load current must equal its input current

     **Answer: B.** Increased output current can outweigh the slight voltage reduction; the extra power comes from the supply.

186. **A comparator has \(V_+=-0.8\text{ V}\) and \(V_-=-1.2\text{ V}\). Which statement is correct?**

     A. Its output goes positive because \(-0.8>-1.2\)
     B. Its output goes negative because both inputs are negative
     C. Its output must be zero
     D. Its output depends only on the larger absolute voltage

     **Answer: A.** Comparators respond to algebraic voltage difference: \(-0.8-(-1.2)=+0.4\text{ V}\).

187. **An op-amp output is saturated at \(+5\text{ V}\), while its inputs are \(V_+=2\text{ V}\) and \(V_-=1\text{ V}\). Which conclusion is valid?**

     A. The inputs must actually be equal
     B. The output must immediately become 1 V
     C. Ideal input resistance must be zero
     D. The virtual-short approximation is not applicable in this saturated state

     **Answer: D.** Output limiting prevents the amplifier from adjusting its output sufficiently to force a small differential input.

188. **Why can current flow through the input resistor of an inverting amplifier even though the inverting input draws no current?**

     A. The ideal input secretly absorbs the current
     B. Virtual earth destroys charge
     C. The current continues through the feedback resistor
     D. The input resistor has zero voltage across it in every case

     **Answer: C.** Kirchhoff’s current law directs the input-resistor current through the feedback path rather than into the op-amp terminal.

189. **A finite-gain voltage follower has fractional gain error \(1/(1+A)\), where \(A\) is its open-loop gain. Which listed value makes the error less than 1%?**

     A. 9
     B. 49
     C. 100
     D. 99

     **Answer: C.** For \(A=100\), the error is \(1/101\approx0.990\%\); \(A=99\) gives exactly 1%.

190. **An inverting amplifier’s feedback resistor breaks open. Its positive input remains grounded, and a positive DC input reaches the negative input through a resistor. The output tends toward:**

     A. Its original proportional output
     B. Positive saturation
     C. Negative saturation
     D. Exactly zero because input current is zero

     **Answer: C.** With no input current, the negative input approaches the positive source voltage; the negative differential input drives negative saturation.

191. **A student designs a non-inverting amplifier for gain 10 by choosing \(R_f=10R_g\). The actual ideal gain is:**

     A. 9
     B. 11
     C. 10
     D. \(-10\)

     **Answer: B.** Non-inverting gain includes the additional one: \(A_v=1+R_f/R_g=11\).

192. **Both resistors of an ideal inverting amplifier are increased tenfold, with the same input voltage. What changes?**

     A. Voltage gain increases tenfold
     B. Output voltage decreases tenfold
     C. Voltage gain stays the same, while input current becomes one-tenth
     D. Input current increases tenfold

     **Answer: C.** The resistor ratio is unchanged, but \(I_{\text{in}}=V_{\text{in}}/R_{\text{in}}\) decreases by a factor of ten.

193. **A referenced inverting circuit obeys \(V_o=(1+r)V_{\text{ref}}-rV_{\text{in}}\), where \(r=R_f/R_{\text{in}}=3\). With the input fixed, increasing \(V_{\text{ref}}\) by 0.10 V changes the output by:**

     A. \(-0.30\text{ V}\)
     B. \(+0.40\text{ V}\)
     C. \(+0.10\text{ V}\)
     D. \(-0.40\text{ V}\)

     **Answer: B.** The reference has gain \(1+r=4\), so the output rises by \(4(0.10)=0.40\text{ V}\).

194. **Why can a standard non-inverting amplifier with positive resistors not provide a gain of \(+0.50\)?**

     A. Its gain \(1+R_f/R_g\) cannot be below one
     B. Every op-amp must invert its input
     C. Its input current must exceed its output current
     D. Its output voltage is always zero

     **Answer: A.** Positive resistor values make \(R_f/R_g\ge0\), so the standard gain is at least unity.

195. **A gain-\(-10\) stage limited to \(\pm5\text{ V}\) receives \(+0.80\text{ V}\). Its output feeds a linear gain-\(-0.20\) stage. The final output is:**

     A. \(+1.60\text{ V}\)
     B. \(-1.60\text{ V}\)
     C. \(-1.00\text{ V}\)
     D. \(+1.00\text{ V}\)

     **Answer: D.** The first stage clips at \(-5\text{ V}\), so the second produces \((-0.20)(-5)=+1.0\text{ V}\).

196. **Two stages have gains \(-10\) and \(-0.10\), each with output limits \(\pm5\text{ V}\). A 2 V peak signal must pass without clipping. Which order works?**

     A. Gain \(-10\) first
     B. Gain \(-0.10\) first
     C. Either order gives identical internal amplitudes
     D. Neither order can work

     **Answer: B.** Attenuation first gives intermediate amplitude 0.2 V and final amplitude 2 V; amplification first would demand 20 V.

197. **In an intended voltage follower, the output is mistakenly returned to the non-inverting input instead of the inverting input. Why is unity-gain operation no longer assured?**

     A. The feedback reinforces deviations instead of opposing them
     B. The op-amp input resistance automatically becomes zero
     C. Positive feedback always gives exact gain one
     D. The output supply disappears

     **Answer: A.** Positive feedback tends to drive the output away from a balanced condition and toward a limit.

198. **An amplifier delivers 20 mW to a load while receiving 1 mW of signal power. Neglecting all losses, the minimum additional power required from its supply is:**

     A. 21 mW
     B. 20 mW
     C. 1 mW
     D. 19 mW

     **Answer: D.** Energy conservation requires the supply to provide the difference: \(20-1=19\text{ mW}\).

199. **An active grounded-emitter transistor has \(V_{CC}=5\text{ V}\), \(R_C=1\,\text{k}\Omega\), \(\beta=100\), and \(I_B=10\,\mu\text{A}\). Its collector voltage feeds a non-inverting amplifier of gain 2, limited to \(\pm6\text{ V}\). The final output is:**

     A. \(+2\text{ V}\)
     B. \(+4\text{ V}\)
     C. \(+8\text{ V}\)
     D. \(+6\text{ V}\)

     **Answer: D.** The transistor gives \(I_C=1\text{ mA}\) and \(V_C=4\text{ V}\). The op-amp’s predicted 8 V output clips at 6 V.

200. **A circuit must produce \(V_o=5-2V_{\text{in}}\) for inputs from 1 to 2 V. A referenced inverting amplifier follows \(V_o=(1+r)V_{\text{ref}}-rV_{\text{in}}\). Which settings achieve the required response?**

     A. \(r=5,\ V_{\text{ref}}=2\text{ V}\)
     B. \(r=2,\ V_{\text{ref}}=5\text{ V}\)
     C. \(r=2,\ V_{\text{ref}}=5/3\text{ V}\)
     D. \(r=1/2,\ V_{\text{ref}}=5/3\text{ V}\)

     **Answer: C.** Matching the input coefficient gives \(r=2\); matching the constant term requires \(3V_{\text{ref}}=5\), so \(V_{\text{ref}}=5/3\text{ V}\).
'''
