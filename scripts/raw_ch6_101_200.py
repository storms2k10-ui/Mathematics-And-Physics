RAW_101_200 = r'''
101. **A parallel RLC circuit has \(R=50\ \Omega\), \(X_L=20\ \Omega\), and \(X_C=25\ \Omega\), across \(100\ \text{V}\). Its supply current is:**

     A. \(\sqrt5\ \text{A}\)
     B. \(11\ \text{A}\)
     C. \(3\ \text{A}\)
     D. \(5\ \text{A}\)

     **Answer: A.** \(I_R=2\), \(I_L=5\), and \(I_C=4\ \text{A}\), so \(I=\sqrt{2^2+(4-5)^2}=\sqrt5\ \text{A}\).

102. **An ideal parallel LC combination, with no resistive branch, is at resonance. Its steady-state input impedance is ideally:**

     A. Zero
     B. Infinite
     C. \(X_L\)
     D. \(X_L/2\)

     **Answer: B.** Equal and opposite branch currents give zero net source current at nonzero voltage.

103. **A \(0.20\ \text{H}\) inductor must resonate at \(\omega_0=500\ \text{rad s}^{-1}\). Required capacitance is:**

     A. \(200\ \mu\text{F}\)
     B. \(20\ \mu\text{F}\)
     C. \(2.0\ \mu\text{F}\)
     D. \(50\ \mu\text{F}\)

     **Answer: B.** \(C=1/(\omega_0^2L)=1/(500^2\times0.20)=20\ \mu\text{F}\).

104. **For \(L=0.010\ \text{H}\) and \(C=100\ \mu\text{F}\), the resonant frequency is approximately:**

     A. \(1000\ \text{Hz}\)
     B. \(15.9\ \text{Hz}\)
     C. \(1590\ \text{Hz}\)
     D. \(159\ \text{Hz}\)

     **Answer: D.** \(LC=10^{-6}\ \text{s}^2\), so \(f_0=1/(2\pi\times0.001)\approx159\ \text{Hz}\).

105. **Inductance doubles while capacitance halves. The resonant frequency:**

     A. Remains unchanged
     B. Doubles
     C. Halves
     D. Increases by \(\sqrt2\)

     **Answer: A.** The product \(LC\) remains unchanged.

106. **In an ideal freely oscillating LC circuit, the capacitor charge is \(Q_0/\sqrt2\). What fraction of the total energy is magnetic?**

     A. One-quarter
     B. Three-quarters
     C. Zero
     D. One-half

     **Answer: D.** Capacitor energy is proportional to \(q^2\), so half the total is electric and the remaining half is magnetic.

107. **An ideal LC oscillator has \(L=0.10\ \text{H}\), \(C=10\ \mu\text{F}\), and maximum capacitor voltage \(20\ \text{V}\). Its maximum current is:**

     A. \(2.0\ \text{A}\)
     B. \(0.020\ \text{A}\)
     C. \(0.20\ \text{A}\)
     D. \(20\ \text{A}\)

     **Answer: C.** Equating maximum energies gives \(I_0=V_0\sqrt{C/L}=20\sqrt{10^{-5}/0.10}=0.20\ \text{A}\).

108. **An ideal LC oscillator starts with maximum capacitor charge and zero current. For \(L=0.040\ \text{H}\) and \(C=25\ \mu\text{F}\), current first becomes maximum after approximately:**

     A. \(6.28\ \text{ms}\)
     B. \(1.57\ \text{ms}\)
     C. \(3.14\ \text{ms}\)
     D. \(0.157\ \text{ms}\)

     **Answer: B.** Maximum current occurs after \(T/4=(\pi/2)\sqrt{LC}=1.57\ \text{ms}\).

109. **Sinusoidal voltage and current have peak values \(100\ \text{V}\) and \(4.0\ \text{A}\), with phase difference \(60^\circ\). Their average power is:**

     A. \(100\ \text{W}\)
     B. \(200\ \text{W}\)
     C. \(400\ \text{W}\)
     D. \(50\ \text{W}\)

     **Answer: A.** \(P=\tfrac12V_0I_0\cos\phi=\tfrac12(100)(4)(0.5)=100\ \text{W}\).

110. **At fixed real power and supply voltage, power factor improves from \(0.60\) to \(0.90\). The supply current becomes:**

     A. Two-thirds of its original value
     B. Three-halves of its original value
     C. One-third of its original value
     D. Unchanged

     **Answer: A.** \(I=P/(V\cos\phi)\), giving \(I_2/I_1=0.60/0.90=2/3\).

111. **A source has open-circuit voltage \(12\ \text{V}\) and internal resistance \(6.0\ \Omega\). The maximum average power available to a resistive load is:**

     A. \(12\ \text{W}\)
     B. \(6.0\ \text{W}\)
     C. \(24\ \text{W}\)
     D. \(3.0\ \text{W}\)

     **Answer: B.** At \(R_L=R_s\), \(P_{\max}=V^2/(4R_s)=144/24=6.0\ \text{W}\).

112. **A source has resistance \(4\ \Omega\) and inductive reactance \(3\ \Omega\). If both load resistance and reactance are adjustable, maximum power transfer requires a load with:**

     A. Resistance \(4\ \Omega\), inductive reactance \(3\ \Omega\)
     B. Resistance \(3\ \Omega\), capacitive reactance \(4\ \Omega\)
     C. Resistance \(5\ \Omega\), zero reactance
     D. Resistance \(4\ \Omega\), capacitive reactance \(3\ \Omega\)

     **Answer: D.** The load resistance matches the source resistance, while its opposite reactance cancels the source reactance.

113. **A resistive source transfers maximum power to a matched resistive load. What fraction of total resistive dissipation occurs in the load?**

     A. \(50\%\)
     B. \(100\%\)
     C. \(75\%\)
     D. \(25\%\)

     **Answer: A.** Equal source and load resistances carry the same current and dissipate equal powers.

114. **For a source with internal resistance \(R_s\), a load \(R_L=2R_s\) receives what fraction of the maximum available load power?**

     A. \(1/2\)
     B. \(2/3\)
     C. \(8/9\)
     D. \(3/4\)

     **Answer: C.** \(P_L=V^2(2R_s)/(3R_s)^2\); dividing by \(V^2/(4R_s)\) gives \(8/9\).

115. **An AC load has power factor \(0.80\). Without additional phase information, one cannot determine whether its current:**

     A. Has a nonzero RMS value
     B. Transfers average power
     C. Leads or lags the voltage
     D. Has the same frequency as the sinusoidal supply in steady state

     **Answer: C.** The cosine has the same value for equal positive and negative phase angles.

116. **In a series RLC circuit at fixed supply voltage, the net reactance magnitude equals \(R\). Its power compared with power at resonance is:**

     A. Twice as large
     B. Unchanged
     C. One-quarter as large
     D. Half as large

     **Answer: D.** \(Z^2=2R^2\), so \(P=V^2R/Z^2=V^2/(2R)\).

117. **A series RLC circuit operates at resonance. An additional resistor equal to its original resistance is added in series. At unchanged voltage, power in the original resistor becomes:**

     A. One-quarter of its original value
     B. Half its original value
     C. Twice its original value
     D. Unchanged

     **Answer: A.** Total resistance doubles, current halves, and the original resistor’s \(I^2R\) power falls to one-quarter.

118. **A \(0.25\ \text{H}\) inductor carries sinusoidal current of \(2.0\ \text{A RMS}\). Its maximum magnetic energy is:**

     A. \(1.0\ \text{J}\)
     B. \(0.50\ \text{J}\)
     C. \(2.0\ \text{J}\)
     D. \(0.25\ \text{J}\)

     **Answer: A.** \(I_0=\sqrt2I_{\mathrm{rms}}\), so \(U_{\max}=\tfrac12L(2I_{\mathrm{rms}}^2)=1.0\ \text{J}\).

119. **A \(20\ \mu\text{F}\) capacitor has sinusoidal voltage \(10\ \text{V RMS}\). Its time-averaged stored energy is:**

     A. \(0.0020\ \text{J}\)
     B. \(0.00050\ \text{J}\)
     C. \(0.0010\ \text{J}\)
     D. \(0.010\ \text{J}\)

     **Answer: C.** \(\langle U\rangle=\tfrac12C\langle v^2\rangle=\tfrac12CV_{\mathrm{rms}}^2=0.0010\ \text{J}\).

120. **A \(50\ \mu\text{F}\) capacitor has voltage \(v=6\sin(1000t)\ \text{V}\). Its current is:**

     A. \(0.30\sin(1000t)\ \text{A}\)
     B. \(0.30\cos(1000t)\ \text{A}\)
     C. \(-0.30\cos(1000t)\ \text{A}\)
     D. \(300\cos(1000t)\ \text{A}\)

     **Answer: B.** \(i=C\,dv/dt=(50\times10^{-6})(6000)\cos1000t=0.30\cos1000t\).

121. **An oscilloscope trace rises four vertical divisions above its zero line. At \(2.0\ \text{V}\) per division, the sinusoidal RMS voltage is:**

     A. \(8.0\ \text{V}\)
     B. \(4\sqrt2\ \text{V}\)
     C. \(8\sqrt2\ \text{V}\)
     D. \(4.0\ \text{V}\)

     **Answer: B.** Peak voltage is \(8\ \text{V}\); RMS voltage is \(8/\sqrt2=4\sqrt2\ \text{V}\).

122. **One complete oscilloscope cycle spans five divisions at \(2.0\ \text{ms}\) per division. Its frequency is:**

     A. \(50\ \text{Hz}\)
     B. \(100\ \text{Hz}\)
     C. \(200\ \text{Hz}\)
     D. \(500\ \text{Hz}\)

     **Answer: B.** The period is \(10\ \text{ms}=0.010\ \text{s}\), giving \(100\ \text{Hz}\).

123. **Two \(250\ \text{Hz}\) signals have corresponding positive peaks separated by \(1.0\ \text{ms}\). The phase difference is:**

     A. \(30^\circ\)
     B. \(45^\circ\)
     C. \(180^\circ\)
     D. \(90^\circ\)

     **Answer: D.** \(\phi=360^\circ f\Delta t=360^\circ(250)(0.001)=90^\circ\).

124. **A theoretical \(6.0\ \Omega\) heating element operates from \(12\ \text{V RMS}\). Its average heating power is:**

     A. \(12\ \text{W}\)
     B. \(72\ \text{W}\)
     C. \(48\ \text{W}\)
     D. \(24\ \text{W}\)

     **Answer: D.** \(P=V_{\mathrm{rms}}^2/R=144/6=24\ \text{W}\).

125. **A resistor receives sinusoidal voltage with peak \(6\sqrt2\ \text{V}\). Which DC voltage produces equal heating?**

     A. \(3.0\ \text{V}\)
     B. \(12\ \text{V}\)
     C. \(6\sqrt2\ \text{V}\)
     D. \(6.0\ \text{V}\)

     **Answer: D.** The equivalent DC voltage equals the AC RMS value, \(6\ \text{V}\).

126. **An RMS-reading ammeter indicates \(2.0\ \text{A}\) for a sinusoidal current. Its peak current is:**

     A. \(2\sqrt2\ \text{A}\)
     B. \(\sqrt2\ \text{A}\)
     C. \(4.0\ \text{A}\)
     D. \(1.0\ \text{A}\)

     **Answer: A.** Peak current is \(\sqrt2\) times RMS current.

127. **A sinusoidal signal has peak-to-peak voltage \(20\ \text{V}\), centred on zero. Its RMS voltage is:**

     A. \(5\sqrt2\ \text{V}\)
     B. \(10\sqrt2\ \text{V}\)
     C. \(20/\sqrt2\ \text{V}\)
     D. \(5.0\ \text{V}\)

     **Answer: A.** Peak voltage is \(10\ \text{V}\), so RMS voltage is \(10/\sqrt2=5\sqrt2\ \text{V}\).

128. **Resistors of \(6.0\ \Omega\) and \(8.0\ \Omega\) are in series across \(28\ \text{V}\). Power in the \(8.0\ \Omega\) resistor is:**

     A. \(32\ \text{W}\)
     B. \(56\ \text{W}\)
     C. \(16\ \text{W}\)
     D. \(64\ \text{W}\)

     **Answer: A.** Current is \(28/(6+8)=2\ \text{A}\), so power is \(2^2(8)=32\ \text{W}\).

129. **An ideal resistor is driven at constant RMS voltage while frequency changes. Its average heating power:**

     A. Remains unchanged
     B. Increases in proportion to frequency
     C. Decreases in proportion to frequency
     D. Becomes zero at high frequency

     **Answer: A.** \(P=V^2/R\) contains no frequency term for an ideal resistor.

130. **A capacitor offers less opposition to a high-frequency signal than to a low-frequency signal because:**

     A. Its reactance decreases with frequency
     B. Its resistance necessarily becomes negative
     C. Its capacitance always increases with frequency
     D. Its charge cannot change at low frequency

     **Answer: A.** \(X_C=1/(2\pi fC)\).

131. **Why is a choke useful for opposing high-frequency current variations?**

     A. Its reactance decreases with frequency
     B. Its reactance increases with frequency
     C. Its inductance must become infinite
     D. It converts all AC into DC

     **Answer: B.** \(X_L=2\pi fL\), so higher-frequency variations encounter greater opposition.

132. **In an ideal capacitor with an insulating dielectric, AC in the external wires is possible because:**

     A. Electrons continuously cross the dielectric
     B. The plates repeatedly gain and lose charge
     C. The dielectric becomes a metal every half-cycle
     D. The capacitor permanently stores all incoming electrons

     **Answer: B.** External current charges and discharges the plates without conduction through the ideal dielectric.

133. **A real coil warms while carrying AC. In the basic circuit model, one cause absent from an ideal inductor is its:**

     A. Magnetic field
     B. Phase difference
     C. Winding resistance
     D. Inductance

     **Answer: C.** Real winding resistance dissipates \(I^2R\) power.

134. **A tuning circuit must change resonance from \(500\ \text{kHz}\) to \(1000\ \text{kHz}\) at fixed inductance. Its capacitance must become:**

     A. Twice as large
     B. Half as large
     C. One-quarter as large
     D. Four times as large

     **Answer: C.** Doubling frequency requires reducing \(C\) by a factor of four.

135. **A nearby object increases the effective inductance of a detector’s LC circuit while capacitance stays fixed. Its resonant frequency:**

     A. Increases
     B. Remains unchanged
     C. Decreases
     D. Becomes equal to its inductance

     **Answer: C.** \(f_0\propto1/\sqrt L\).

136. **Why are electrical signals amplified in an electrocardiograph?**

     A. To turn the heart’s signal into a mechanical force
     B. To make small detected signals easier to record
     C. To change the patient’s heartbeat frequency
     D. To convert electrodes into permanent magnets

     **Answer: B.** Amplification makes small electrical signals measurable.

137. **The main role of an oscillator in a radio transmitter is to generate:**

     A. A steady gravitational field
     B. A permanently stored charge
     C. A mechanical sound directly
     D. A periodic carrier signal

     **Answer: D.** An oscillator supplies the periodic signal used as the carrier.

138. **In amplitude modulation, the information signal varies the carrier’s:**

     A. Resistance
     B. Inductance necessarily
     C. Propagation speed in vacuum
     D. Amplitude

     **Answer: D.** AM encodes information through changes in carrier amplitude.

139. **In frequency modulation, the information signal varies the carrier’s:**

     A. Instantaneous frequency
     B. Electric charge
     C. Propagation speed in vacuum
     D. Wavelength without affecting frequency

     **Answer: A.** FM represents information through changes in instantaneous carrier frequency.

140. **Adjusting a radio’s tuning capacitor primarily changes its circuit’s:**

     A. Wire resistivity
     B. Resonant frequency
     C. Supply polarity permanently
     D. Number of electrons

     **Answer: B.** Changing capacitance changes the frequency selected by resonance.

141. **With \(L\) and \(C\) fixed, reducing resistance in a series resonant circuit generally makes its current-response peak:**

     A. Taller and sharper
     B. Lower and broader
     C. Unchanged
     D. Move to zero frequency

     **Answer: A.** Lower resistance increases resonant current and reduces damping.

142. **A series resonant circuit can act as an “acceptor” circuit because it draws:**

     A. Minimum current at resonance
     B. Maximum current at resonance
     C. Zero current at every frequency
     D. The same current at every frequency

     **Answer: B.** Its impedance reaches a minimum at resonance.

143. **A parallel resonant circuit can act as a “rejector” circuit because its input impedance at resonance is:**

     A. Minimum
     B. Zero
     C. Maximum
     D. Equal to the capacitor’s reactance alone

     **Answer: C.** Cancellation of reactive branch currents minimizes source current.

144. **A parallel RLC circuit has a finite resistor branch and is at resonance. Its supply current is:**

     A. Necessarily zero
     B. \(I_L+I_C\)
     C. Infinite
     D. \(V/R\)

     **Answer: D.** Reactive currents cancel, but the resistor still draws current.

145. **An inductive load is represented by parallel R and L branches. Adding an appropriately chosen capacitor branch can reduce source current because:**

     A. Capacitor current partly cancels inductor current
     B. The resistor current becomes zero automatically
     C. All branch currents must decrease
     D. The supply voltage must disappear

     **Answer: A.** Opposing reactive currents reduce the net current required from the source.

146. **For fixed real power and voltage, improving power factor reduces line heating because it:**

     A. Reduces the required line current
     B. Increases line resistance
     C. Increases the number of AC cycles
     D. Makes the load’s real power zero

     **Answer: A.** Lower current reduces \(I^2R_{\text{line}}\) losses.

147. **A voltmeter and ammeter give \(V\) and \(I\) for an unknown AC load. Why may \(VI\) exceed its average power?**

     A. RMS values cannot be multiplied
     B. Current has no physical meaning in AC
     C. Voltage and current may be out of phase
     D. Average power is always zero

     **Answer: C.** Average power is \(VI\cos\phi\), while \(VI\) is apparent power.

148. **Two loads consume equal real power at the same voltage. One has power factor 1 and the other 0.50. The second draws:**

     A. Half the current
     B. The same current
     C. Twice the current
     D. Four times the current

     **Answer: C.** \(I=P/(V\cos\phi)\); halving power factor doubles current.

149. **In a theoretical AC current-limiting application, an ideal choke can dissipate less average power than a resistor because it:**

     A. Stores and returns energy instead of converting it all to heat
     B. Has no opposition to AC
     C. Makes current disappear
     D. Produces electrical energy continuously

     **Answer: A.** Ideal inductive opposition is reactive, with zero average energy loss.

150. **For a capacitor under sinusoidal voltage, current magnitude is greatest when its voltage:**

     A. Has maximum magnitude
     B. Crosses zero
     C. Is constant over time
     D. Equals its RMS value necessarily

     **Answer: B.** Voltage changes most rapidly at a zero crossing, maximizing \(i=C\,dv/dt\).

151. **For an ideal inductor carrying sinusoidal current, its terminal voltage is zero when current is:**

     A. Crossing zero
     B. Increasing most rapidly
     C. Decreasing most rapidly
     D. At a positive or negative peak

     **Answer: D.** At a current peak, \(di/dt=0\), so \(v=L\,di/dt=0\).

152. **A series RL circuit operates at fixed RMS voltage. Increasing frequency causes its average power to:**

     A. Increase
     B. Remain unchanged
     C. Decrease
     D. Become negative

     **Answer: C.** Higher \(X_L\) increases impedance, reduces current, and lowers \(I^2R\).

153. **A series RC circuit operates at fixed RMS voltage. Increasing frequency causes its resistor power to:**

     A. Decrease
     B. Remain unchanged
     C. Become negative
     D. Increase

     **Answer: D.** Higher frequency lowers \(X_C\), increasing current and resistor heating.

154. **A series RLC circuit initially has \(X_C>X_L\). Increasing capacitance until resonance is reached, at fixed frequency and voltage, causes current to:**

     A. Decrease continuously
     B. Remain unchanged
     C. Increase to its maximum
     D. Reverse its frequency

     **Answer: C.** Increasing \(C\) reduces \(X_C\), bringing net reactance towards zero.

155. **The capacitor in a series RLC circuit becomes an open circuit. After any transient effects, the source current is:**

     A. Maximum
     B. \(V/R\)
     C. Zero
     D. \(V/X_L\)

     **Answer: C.** The open component breaks the only current path.

156. **The inductor in a series RLC circuit is replaced by an ideal wire. The remaining circuit is:**

     A. Purely inductive
     B. A parallel RC circuit
     C. Purely resistive at every frequency
     D. A series RC circuit with leading current

     **Answer: D.** With the inductor removed, capacitive reactance makes current lead supply voltage.

157. **Two identical uncoupled inductors are connected in series in place of one in an LC tuning circuit. With capacitance unchanged, the resonant frequency becomes:**

     A. \(2f_0\)
     B. \(f_0/2\)
     C. \(f_0/\sqrt2\)
     D. \(\sqrt2f_0\)

     **Answer: C.** Series inductance doubles, so frequency falls by \(\sqrt2\).

158. **Two identical capacitors are connected in parallel in place of one in a tuning circuit. With inductance unchanged, the new resonant frequency is:**

     A. \(2f_0\)
     B. \(\sqrt2f_0\)
     C. \(f_0/2\)
     D. \(f_0/\sqrt2\)

     **Answer: D.** Parallel capacitance doubles, reducing resonance frequency by \(\sqrt2\).

159. **A source has purely resistive internal impedance \(8.0\ \Omega\). Which resistive load receives maximum power?**

     A. \(4.0\ \Omega\)
     B. \(8.0\ \Omega\)
     C. \(16\ \Omega\)
     D. \(32\ \Omega\)

     **Answer: B.** Maximum power transfer occurs when load resistance equals source resistance.

160. **In a parallel RLC circuit at fixed RMS voltage, changing frequency leaves the total average power unchanged if \(R\) is constant and L and C are ideal because:**

     A. All branch currents remain unchanged
     B. Only the resistor absorbs average power, \(V^2/R\)
     C. The circuit remains resonant at every frequency
     D. The source current is always zero

     **Answer: B.** Reactive branch currents vary, but the resistor’s voltage and power remain fixed.

161. **In a series RLC circuit, the inductor voltage can exceed the supply voltage without violating Kirchhoff’s voltage law because:**

     A. Kirchhoff’s law does not apply to AC
     B. The resistor generates extra voltage
     C. Component voltages must be added as phasors
     D. The capacitor voltage is always zero

     **Answer: C.** Large opposing inductor and capacitor voltages can largely cancel.

162. **At parallel resonance, an inductor branch current can exceed the source current because:**

     A. Charge conservation fails temporarily
     B. Current is created inside the inductor
     C. The resistor supplies additional charge
     D. The capacitor current cancels much of the inductor current at the source

     **Answer: D.** Source current is the phasor sum, not the sum of branch-current magnitudes.

163. **An ideal capacitor absorbs zero average power. Which conclusion is still possible?**

     A. Its instantaneous power is always zero
     B. Its voltage must be zero
     C. It repeatedly receives energy and returns it
     D. It cannot carry external AC current

     **Answer: C.** Zero average power means no net energy consumption over a complete cycle.

164. **Two sinusoidal currents have equal RMS values but different frequencies. Through the same ideal resistor, they produce:**

     A. Greater average heating at the higher frequency
     B. Greater average heating at the lower frequency
     C. Heating inversely proportional to frequency
     D. Equal average heating

     **Answer: D.** Average heating is \(I_{\mathrm{rms}}^2R\), independent of frequency.

165. **A square-wave current alternates between \(+I_0\) and \(-I_0\), spending equal time at each. Its RMS value is:**

     A. \(I_0\)
     B. \(I_0/\sqrt2\)
     C. \(I_0/2\)
     D. Zero

     **Answer: A.** Its square is always \(I_0^2\), so its RMS value is \(I_0\).

166. **A current is \(i=3+4\sin\omega t\ \text{A}\). Its RMS value over a complete cycle is:**

     A. \(\sqrt{17}\ \text{A}\)
     B. \(5\ \text{A}\)
     C. \(7/\sqrt2\ \text{A}\)
     D. \(3\ \text{A}\)

     **Answer: A.** \(\langle i^2\rangle=9+16/2=17\); the sine cross-term averages to zero.

167. **A resistor operates at fixed sinusoidal RMS voltage. If frequency doubles, the energy dissipated per cycle:**

     A. Doubles
     B. Remains unchanged
     C. Halves
     D. Quadruples

     **Answer: C.** Average power is unchanged, but each cycle lasts half as long.

168. **At series resonance, \(V_L\) and \(V_C\) cancel in the supply-voltage sum. This means they are:**

     A. Both zero
     B. Equal in magnitude and opposite in phase
     C. Equal in magnitude and in phase
     D. Unrelated in magnitude

     **Answer: B.** Their phasors point in opposite directions.

169. **At resonance, cancellation of reactive effects does not imply zero stored energy because:**

     A. Resistance stores all the energy
     B. Energy is a signed phasor
     C. Inductor energy is necessarily negative
     D. Electric and magnetic stored energies are nonnegative quantities

     **Answer: D.** Voltage or current phasors can cancel while both fields contain energy.

170. **A perfectly lossless series LC circuit is driven exactly at resonance by a nonzero ideal sinusoidal voltage source. Which statement is most accurate?**

     A. The ideal model has no bounded sinusoidal steady-state current
     B. Its current must be zero
     C. Its current must equal \(V/X_L\)
     D. Its current is fixed by a hidden resistance of \(1\ \Omega\)

     **Answer: A.** With no damping at resonance, the ideal forced response grows rather than settling to a finite amplitude.

171. **Changing only the resistance of an ideal series RLC circuit affects the resonance peak but leaves which quantity unchanged?**

     A. The frequency where \(X_L=X_C\)
     B. The maximum current
     C. The maximum average power at fixed voltage
     D. The width of the current-response peak

     **Answer: A.** The reactance-cancellation frequency depends on L and C.

172. **A passive LC circuit with some resistance shows decaying oscillations because:**

     A. Part of its stored energy becomes heat each cycle
     B. Charge disappears each cycle
     C. Its capacitance must steadily increase
     D. Magnetic energy becomes negative

     **Answer: A.** Resistance removes energy from the oscillation.

173. **A practical oscillator maintains a nearly constant signal amplitude by:**

     A. Eliminating energy conservation
     B. Drawing energy from a supply to replace losses
     C. Producing energy without an input
     D. Preventing all charge motion

     **Answer: B.** Sustained oscillation requires replenishing energy lost in the circuit.

174. **Above their common resonance frequency, a series RLC circuit and a parallel RLC circuit are respectively:**

     A. Capacitive and inductive
     B. Inductive and capacitive
     C. Both inductive
     D. Both purely resistive

     **Answer: B.** In series, \(X_L>X_C\). In parallel, capacitor current exceeds inductor current at higher frequency.

175. **A series RLC circuit draws equal current magnitudes at \(100\ \text{Hz}\) and \(400\ \text{Hz}\), one below and one above resonance. At fixed supply voltage, its resonant frequency is:**

     A. \(250\ \text{Hz}\)
     B. \(300\ \text{Hz}\)
     C. \(200\ \text{Hz}\)
     D. \(150\ \text{Hz}\)

     **Answer: C.** Equal currents imply equal and opposite net reactances, giving \(f_0=\sqrt{f_1f_2}=200\ \text{Hz}\).

176. **A series LC combination has zero net reactance at \(\omega=1000\ \text{rad s}^{-1}\) and net inductive reactance \(30\ \Omega\) at \(\omega=2000\ \text{rad s}^{-1}\). Its inductance is:**

     A. \(0.010\ \text{H}\)
     B. \(0.030\ \text{H}\)
     C. \(0.040\ \text{H}\)
     D. \(0.020\ \text{H}\)

     **Answer: D.** Let either reactance at resonance be \(X\). At twice that frequency, net reactance is \(2X-X/2=30\), so \(X=20\ \Omega\) and \(L=20/1000\).

177. **Two series loads have the same resistance and equal net-reactance magnitudes, one inductive and one capacitive. At the same supply voltage, they have:**

     A. Different current magnitudes but equal power
     B. Equal current magnitudes and equal power, with opposite phase signs
     C. Equal phase signs but different power
     D. Different current magnitudes and different power

     **Answer: B.** Their impedance magnitudes and power factors are equal, but one current lags and the other leads.

178. **A series load is adjusted so its impedance magnitude remains fixed while its resistance increases. At fixed supply voltage, its average power:**

     A. Decreases
     B. Increases
     C. Remains unchanged
     D. Becomes negative

     **Answer: B.** Current stays fixed because \(Z\) stays fixed, while \(P=I^2R\) increases.

179. **At resonance, an additional resistor is connected in parallel with the existing resistor branch of a parallel RLC circuit. The source current:**

     A. Increases while the ideal resonance frequency remains unchanged
     B. Decreases while resonance frequency doubles
     C. Remains unchanged
     D. Becomes zero

     **Answer: A.** The effective resistance falls, increasing resistive current; L and C still set resonance.

180. **A passive sinusoidal load is reported to operate at \(10\ \text{V}\), \(2.0\ \text{A}\), and average power \(25\ \text{W}\). These readings are inconsistent because:**

     A. They imply a power factor greater than 1
     B. They imply zero resistance
     C. AC power must always be zero
     D. Voltage and current must have equal numerical values

     **Answer: A.** \(P/(VI)=25/20=1.25\), exceeding the maximum possible power factor.

181. **An ideal inductor is supplied with fixed sinusoidal RMS voltage. Doubling frequency changes its maximum stored energy to:**

     A. Twice the original
     B. Half the original
     C. The original value
     D. One-quarter of the original

     **Answer: D.** Current halves, and magnetic energy depends on current squared.

182. **An ideal capacitor is supplied with fixed sinusoidal RMS voltage. Doubling frequency causes its current and maximum stored energy respectively to become:**

     A. Twice and twice
     B. Twice and unchanged
     C. Half and unchanged
     D. Unchanged and twice

     **Answer: B.** Current is proportional to frequency, but \(U_{\max}=\tfrac12CV_0^2\) is fixed by voltage amplitude.

183. **A series RLC circuit is resonant. Its inductance is multiplied by \(k>1\), and its capacitance is divided by \(k\). With resistance and source voltage unchanged, at resonance:**

     A. Current is unchanged, but individual reactive voltages increase by \(k\)
     B. Current increases by \(k\), but reactive voltages are unchanged
     C. Current decreases by \(k\), and frequency increases by \(k\)
     D. Every voltage and current remains unchanged

     **Answer: A.** The product \(LC\) and resonance frequency stay fixed, while both reactance magnitudes increase by \(k\).

184. **In a series RLC circuit, \(R\) and \(L\) are multiplied by \(k\), while \(C\) is divided by \(k\). At fixed frequency and supply voltage, average power becomes:**

     A. \(kP\)
     B. \(P/k\)
     C. \(P/k^2\)
     D. \(P\)

     **Answer: B.** Every impedance component scales by \(k\), so current scales by \(1/k\). Thus \(I'^2R'=P/k\).

185. **In an ideal LC oscillator, charge oscillates at frequency \(f_0\). The capacitor’s stored energy varies at frequency:**

     A. \(f_0/2\)
     B. \(f_0\)
     C. \(4f_0\)
     D. \(2f_0\)

     **Answer: D.** Energy is proportional to \(q^2\), which repeats twice during each charge cycle.

186. **For an ideal inductor, \(v=V_0\sin\omega t\) and \(i=-I_0\cos\omega t\). Their instantaneous power is:**

     A. Always positive
     B. Always zero
     C. Alternately positive and negative
     D. Always negative

     **Answer: C.** \(p=-V_0I_0\sin\omega t\cos\omega t\), representing alternating energy storage and return.

187. **Two parallel branches each carry \(4.0\ \text{A}\). Their currents lead and lag the common voltage by \(60^\circ\), respectively. The total current and power factor are:**

     A. \(8.0\ \text{A},\ 0.50\)
     B. \(4\sqrt3\ \text{A},\ 1\)
     C. \(8.0\ \text{A},\ 1\)
     D. \(4.0\ \text{A},\ 1\)

     **Answer: D.** Reactive components cancel, while in-phase components add to \(2(4\cos60^\circ)=4\ \text{A}\).

188. **A source has inductive reactance. Why is choosing a load with identical resistance and identical inductive reactance generally not the maximum-power match?**

     A. Equal resistances prevent power transfer
     B. The load must have zero resistance
     C. The reactances add instead of cancelling
     D. Inductive sources cannot deliver real power

     **Answer: C.** Maximum transfer with adjustable complex load requires opposite reactance and matching resistance.

189. **For a source with fixed internal resistance, making load resistance much larger than source resistance gives:**

     A. Both maximum power and maximum efficiency
     B. Maximum load power but poor efficiency
     C. High transfer efficiency but small load power
     D. Zero efficiency and infinite load power

     **Answer: C.** Little power is lost internally, but the large total resistance makes current and output power small.

190. **A resonant series RLC circuit is redesigned with both L and C halved, while R stays fixed. At its new resonance, the frequency and current for unchanged source voltage are:**

     A. Halved and unchanged
     B. Doubled and doubled
     C. Unchanged and doubled
     D. Doubled and unchanged

     **Answer: D.** \(LC\) becomes one-quarter, doubling resonance frequency. Resonant impedance remains \(R\).

191. **A series RLC load has average power equal to \(V_{\mathrm{rms}}I_{\mathrm{rms}}\). What can be concluded?**

     A. It contains no inductor or capacitor
     B. Its net reactance is zero
     C. Its resistance is zero
     D. Its current leads voltage by \(90^\circ\)

     **Answer: B.** Equality requires unity power factor, which can occur through cancellation of L and C.

192. **Two same-frequency sinusoidal waveforms have coincident zero crossings. Is that alone enough to prove they are in phase?**

     A. Yes, regardless of crossing direction
     B. No; they may be \(180^\circ\) out of phase
     C. No; their frequencies must differ
     D. Yes, provided their amplitudes differ

     **Answer: B.** Antiphase waves also cross zero together, but with opposite slopes.

193. **Voltage is \(v=V_0\cos\omega t\), while current is \(i=I_0\sin(\omega t+30^\circ)\). The current:**

     A. Leads voltage by \(60^\circ\)
     B. Lags voltage by \(60^\circ\)
     C. Leads voltage by \(30^\circ\)
     D. Is in phase with voltage

     **Answer: B.** Write voltage as \(V_0\sin(\omega t+90^\circ)\); current is \(60^\circ\) behind it.

194. **In a series RLC circuit, \(V_R=8\ \text{V}\), \(V_C=6\ \text{V}\), and supply voltage is \(10\ \text{V}\). Which pair lists the possible nonnegative values of \(V_L\)?**

     A. \(6\ \text{V}\) or \(10\ \text{V}\)
     B. \(2\ \text{V}\) or \(18\ \text{V}\)
     C. \(0\ \text{V}\) or \(12\ \text{V}\)
     D. \(4\ \text{V}\) or \(16\ \text{V}\)

     **Answer: C.** \(10^2=8^2+(V_L-6)^2\), giving \(V_L-6=\pm6\).

195. **A series RLC circuit at resonance has \(V_R=10\ \text{V}\) and \(V_L=V_C=40\ \text{V}\). If the capacitor is replaced by an ideal wire, at unchanged frequency and supply voltage, resistor power becomes:**

     A. \(1/17\) of its original value
     B. \(1/4\) of its original value
     C. \(1/16\) of its original value
     D. Unchanged

     **Answer: A.** Initially \(X_L/R=4\). Afterwards \(Z^2=R^2+(4R)^2=17R^2\), reducing current squared and resistor power by 17.

196. **At extremely high frequency in the ideal models, a series RLC circuit and a parallel RLC circuit driven at fixed voltage have supply currents that respectively:**

     A. Both approach zero
     B. Both grow without bound
     C. Grow and approach zero
     D. Approach zero and grow without bound

     **Answer: D.** Series inductive reactance grows large; in parallel, capacitor current \(I_C=\omega CV\) grows.

197. **A parallel RLC circuit is at resonance. An identical capacitor is added in parallel, and inductance is halved to preserve resonance. At unchanged voltage, the L and C branch-current magnitudes:**

     A. Halve while source current doubles
     B. Remain unchanged
     C. Double while their cancellation leaves resistor current unchanged
     D. Become zero

     **Answer: C.** Total capacitance doubles and inductance halves, doubling both opposing reactive currents at the unchanged frequency.

198. **Why should \(V_{\mathrm{rms}}=V_0/\sqrt2\) not automatically be applied to a recorded ECG waveform?**

     A. The relation assumes a sinusoidal waveform
     B. Electrical signals cannot have RMS values
     C. ECG signals contain no voltage
     D. RMS values apply only to magnetic fields

     **Answer: A.** General waveforms require RMS to be calculated from their mean squared values.

199. **A metal detector responds to a conducting object that is not ferromagnetic. Which mechanism can explain the response?**

     A. Creation of isolated magnetic poles
     B. Permanent magnetization is the only possible cause
     C. Eddy currents produce a secondary magnetic field
     D. The object must emit visible light

     **Answer: C.** A changing field can induce currents in a conductor even without ferromagnetism.

200. **A series RLC load draws \(2.0\ \text{A}\) at \(20\ \text{V}\), consumes \(32\ \text{W}\), and its current leads the voltage. Its resistance and net reactance are:**

     A. \(10\ \Omega\), inductive \(8\ \Omega\)
     B. \(8\ \Omega\), inductive \(6\ \Omega\)
     C. \(6\ \Omega\), capacitive \(8\ \Omega\)
     D. \(8\ \Omega\), capacitive \(6\ \Omega\)

     **Answer: D.** \(R=P/I^2=8\ \Omega\), \(Z=V/I=10\ \Omega\), and \(|X|=\sqrt{100-64}=6\ \Omega\). Leading current identifies net capacitive reactance.
'''
