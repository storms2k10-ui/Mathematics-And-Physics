RAW_1_100 = r'''
1. **An alternating current is distinguished by its:**

   A. Constant direction at all times
   B. Periodic reversal of direction
   C. Constant magnitude and direction
   D. Flow only through capacitors

   **Answer: B.** Alternating current reverses direction periodically.

2. **One complete positive and negative variation of a sinusoidal current forms a:**

   A. Phase difference
   B. Peak value
   C. Cycle
   D. Reactance

   **Answer: C.** A complete cycle includes both positive and negative half-cycles.

3. **The time required for one complete AC cycle is called its:**

   A. Frequency
   B. Amplitude
   C. Time period
   D. Power factor

   **Answer: C.** The period \(T\) measures the duration of one cycle.

4. **The frequency of an alternating quantity is the number of:**

   A. Complete cycles per second
   B. Direction reversals per minute
   C. Positive peaks per half-cycle
   D. Electrons passing per second

   **Answer: A.** Frequency counts complete cycles and is measured in hertz.

5. **Angular frequency and ordinary frequency are related by:**

   A. \(\omega=f/(2\pi)\)
   B. \(\omega=2f/\pi\)
   C. \(\omega=2\pi f\)
   D. \(\omega=\pi/f\)

   **Answer: C.** Each cycle corresponds to an angular change of \(2\pi\) radians.

6. **The greatest magnitude reached by a sinusoidal current is its:**

   A. Average value
   B. Peak value
   C. Period
   D. Frequency

   **Answer: B.** The peak value is the amplitude of the current waveform.

7. **The value of an alternating voltage at a particular moment is its:**

   A. RMS value
   B. Average value
   C. Instantaneous value
   D. Peak-to-peak value

   **Answer: C.** An instantaneous value specifies the voltage at a particular time.

8. **The RMS value of an alternating current equals the steady DC current that produces the same:**

   A. Signed average charge flow
   B. Peak magnetic flux
   C. Number of direction reversals
   D. Average heating in the same resistor

   **Answer: D.** RMS values express the heating equivalence between AC and DC.

9. **For a sinusoidal current of peak value \(I_0\), the RMS current is:**

   A. \(I_0/2\)
   B. \(\sqrt2I_0\)
   C. \(I_0/\sqrt2\)
   D. \(2I_0/\pi\)

   **Answer: C.** The mean of \(\sin^2\omega t\) is \(1/2\), giving \(I_{\mathrm{rms}}=I_0/\sqrt2\).

10. **The signed average of a sinusoidal current over a complete cycle is:**

    A. Its peak value
    B. Its RMS value
    C. Zero
    D. Half its peak value

    **Answer: C.** Equal positive and negative contributions cancel.

11. **Phase difference can be expressed in:**

    A. Ohms only
    B. Amperes only
    C. Watts only
    D. Degrees or radians

    **Answer: D.** Phase difference describes angular separation between waveforms.

12. **Two same-frequency sinusoidal quantities are in phase when they:**

    A. Always have equal amplitudes
    B. Always have equal RMS values
    C. Differ by half a cycle
    D. Reach corresponding maxima at the same times

    **Answer: D.** In-phase waveforms have zero phase difference, even if their amplitudes differ.

13. **If \(v=V_0\sin\omega t\) and \(i=I_0\sin(\omega t+\phi)\), where \(0<\phi<90^\circ\), then current:**

    A. Lags voltage by \(\phi\)
    B. Leads voltage by \(\phi\)
    C. Is opposite in phase to voltage
    D. Has a lower frequency than voltage

    **Answer: B.** The positive phase term makes current reach corresponding points earlier.

14. **In a peak-value phasor representation, the phasor length represents the:**

    A. Amplitude of the alternating quantity
    B. Circuit resistance
    C. Time period
    D. Instantaneous power

    **Answer: A.** The rotating phasor has a fixed length proportional to amplitude.

15. **In a purely resistive AC circuit, current and voltage are:**

    A. \(90^\circ\) out of phase
    B. \(180^\circ\) out of phase
    C. In phase
    D. Always unequal in frequency

    **Answer: C.** The relation \(v=iR\) makes their zero crossings and peaks coincide.

16. **The SI unit of resistance is:**

    A. Henry
    B. Farad
    C. Siemens
    D. Ohm

    **Answer: D.** Resistance is measured in ohms.

17. **For a pure resistor connected to an AC source:**

    A. \(I_{\mathrm{rms}}=V_{\mathrm{rms}}/R\)
    B. \(I_{\mathrm{rms}}=V_{\mathrm{rms}}R\)
    C. \(I_{\mathrm{rms}}=R/V_{\mathrm{rms}}\)
    D. \(I_{\mathrm{rms}}=V_{\mathrm{rms}}/R^2\)

    **Answer: A.** Ohm’s law applies to corresponding RMS values.

18. **A pure resistor converts electrical energy mainly into:**

    A. Thermal energy
    B. Permanently stored magnetic energy
    C. Permanently stored electric-field energy
    D. Gravitational potential energy

    **Answer: A.** Resistance dissipates energy through Joule heating.

19. **In a purely capacitive sinusoidal circuit, current:**

    A. Lags voltage by \(90^\circ\)
    B. Is in phase with voltage
    C. Lags voltage by \(180^\circ\)
    D. Leads voltage by \(90^\circ\)

    **Answer: D.** Since \(i=C\,dv/dt\), sinusoidal capacitor current leads voltage by a quarter-cycle.

20. **Capacitive reactance is:**

    A. \(X_C=2\pi fC\)
    B. \(X_C=1/(2\pi fC)\)
    C. \(X_C=C/(2\pi f)\)
    D. \(X_C=2\pi f/C\)

    **Answer: B.** Capacitive opposition decreases as frequency or capacitance increases.

21. **Increasing frequency while keeping capacitance fixed causes capacitive reactance to:**

    A. Increase
    B. Remain unchanged
    C. Become negative in magnitude
    D. Decrease

    **Answer: D.** \(X_C\propto1/f\).

22. **After steady conditions are established, an ideal capacitor connected to a constant DC voltage carries:**

    A. A continuously increasing current
    B. Its maximum charging current
    C. An alternating current
    D. Zero current

    **Answer: D.** With constant capacitor voltage, \(i=C\,dv/dt=0\).

23. **In a purely inductive sinusoidal circuit, current:**

    A. Lags voltage by \(90^\circ\)
    B. Leads voltage by \(90^\circ\)
    C. Is in phase with voltage
    D. Leads voltage by \(180^\circ\)

    **Answer: A.** Inductor voltage satisfies \(v=L\,di/dt\), so it leads current by a quarter-cycle.

24. **Inductive reactance is:**

    A. \(X_L=1/(2\pi fL)\)
    B. \(X_L=L/(2\pi f)\)
    C. \(X_L=2\pi fL\)
    D. \(X_L=2\pi f/L\)

    **Answer: C.** Inductive reactance equals angular frequency multiplied by inductance.

25. **Increasing frequency at fixed inductance causes inductive reactance to:**

    A. Decrease
    B. Increase
    C. Remain unchanged
    D. Become zero

    **Answer: B.** \(X_L\propto f\).

26. **A choke is primarily an:**

    A. Ideal resistor
    B. Inductor
    C. Capacitor
    D. Electrochemical cell

    **Answer: B.** A choke uses inductive reactance to oppose changes in current.

27. **An ideal inductor stores energy in its:**

    A. Electric field only
    B. Magnetic field
    C. Chemical bonds
    D. Mechanical spring

    **Answer: B.** Its stored energy is associated with the magnetic field created by current.

28. **An ideal capacitor stores energy in its:**

    A. Electric field
    B. Magnetic field only
    C. Electrical resistance
    D. Mechanical rotation

    **Answer: A.** Separated charges establish an electric field containing stored energy.

29. **The magnitude of impedance is measured in:**

    A. Farads
    B. Henries
    C. Watts
    D. Ohms

    **Answer: D.** Impedance is a voltage-to-current ratio.

30. **For a series RLC circuit, impedance magnitude is:**

    A. \(R+X_L+X_C\)
    B. \(\sqrt{R^2+(X_L+X_C)^2}\)
    C. \(R+|X_L-X_C|\)
    D. \(\sqrt{R^2+(X_L-X_C)^2}\)

    **Answer: D.** Inductive and capacitive reactances oppose, giving net reactance \(X_L-X_C\).

31. **Which quantity is common to every component of a series RLC circuit?**

    A. Current
    B. Voltage magnitude
    C. Stored energy
    D. Reactance

    **Answer: A.** A series connection provides only one current path.

32. **Which quantity is common to all branches of a parallel RLC circuit?**

    A. Branch current
    B. Voltage
    C. Branch power
    D. Reactance

    **Answer: B.** Each branch is connected across the same two terminals.

33. **The average power in a sinusoidal AC circuit is:**

    A. \(V_{\mathrm{rms}}I_{\mathrm{rms}}\sin\phi\)
    B. \(V_0I_0\cos\phi\)
    C. \(V_{\mathrm{rms}}I_{\mathrm{rms}}/\cos\phi\)
    D. \(V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi\)

    **Answer: D.** Only the current component in phase with voltage contributes to average power.

34. **The power factor is:**

    A. \(\cos\phi\)
    B. \(\sin\phi\)
    C. \(\tan\phi\)
    D. \(1/\cos\phi\)

    **Answer: A.** Here \(\phi\) is the phase difference between supply voltage and current.

35. **The average power absorbed by a pure ideal capacitor or inductor in sinusoidal steady state is:**

    A. \(VI\)
    B. \(VI/2\)
    C. Zero
    D. Infinite

    **Answer: C.** Energy is stored and returned, with no net dissipation over a cycle.

36. **Electrical resonance occurs when:**

    A. \(X_L=X_C\)
    B. \(R=X_L+X_C\)
    C. \(L=C\) numerically
    D. The supply frequency is zero

    **Answer: A.** Equal inductive and capacitive reactances cancel their opposing effects.

37. **The ideal LC resonant frequency is:**

    A. \(2\pi\sqrt{LC}\)
    B. \(\sqrt{LC}/(2\pi)\)
    C. \(1/(2\pi\sqrt{LC})\)
    D. \(1/(2\pi LC)\)

    **Answer: C.** Setting \(\omega L=1/(\omega C)\) gives \(\omega_0=1/\sqrt{LC}\).

38. **At resonance, a series RLC circuit with resistance \(R>0\) has impedance:**

    A. Zero
    B. \(R\)
    C. \(X_L+X_C\)
    D. Infinite

    **Answer: B.** The net reactance vanishes, leaving only resistance.

39. **A radio tuning circuit selects a desired frequency mainly through:**

    A. Electrolysis
    B. Resonance
    C. Thermal expansion
    D. Rectification alone

    **Answer: B.** The tuned circuit responds selectively around its resonant frequency.

40. **An electrocardiograph records the heart’s:**

    A. Electrical activity over time
    B. Magnetic permeability
    C. Mechanical mass
    D. Thermal conductivity

    **Answer: A.** It records small electrical signals associated with cardiac activity.

41. **An alternating current has period \(0.020\ \text{s}\). Its frequency is:**

    A. \(20\ \text{Hz}\)
    B. \(50\ \text{Hz}\)
    C. \(100\ \text{Hz}\)
    D. \(0.020\ \text{Hz}\)

    **Answer: B.** \(f=1/T=1/0.020=50\ \text{Hz}\).

42. **An angular frequency of \(400\pi\ \text{rad s}^{-1}\) corresponds to:**

    A. \(400\ \text{Hz}\)
    B. \(100\ \text{Hz}\)
    C. \(200\ \text{Hz}\)
    D. \(800\ \text{Hz}\)

    **Answer: C.** \(f=\omega/(2\pi)=200\ \text{Hz}\).

43. **For \(v=120\sin(200\pi t)\ \text{V}\), the time period is:**

    A. \(0.020\ \text{s}\)
    B. \(0.010\ \text{s}\)
    C. \(0.0050\ \text{s}\)
    D. \(0.10\ \text{s}\)

    **Answer: B.** The frequency is \(100\ \text{Hz}\), so \(T=0.010\ \text{s}\).

44. **A sinusoidal current has peak value \(10\sqrt2\ \text{A}\). Its RMS value is:**

    A. \(20\ \text{A}\)
    B. \(5\sqrt2\ \text{A}\)
    C. \(10\ \text{A}\)
    D. \(5\ \text{A}\)

    **Answer: C.** Divide the peak current by \(\sqrt2\).

45. **A sinusoidal voltage has RMS value \(12\ \text{V}\). Its peak value is:**

    A. \(6\ \text{V}\)
    B. \(12/\sqrt2\ \text{V}\)
    C. \(24\ \text{V}\)
    D. \(12\sqrt2\ \text{V}\)

    **Answer: D.** \(V_0=\sqrt2V_{\mathrm{rms}}\).

46. **For \(i=6\sin\omega t\ \text{A}\), the current when \(\omega t=\pi/6\) is:**

    A. \(6\ \text{A}\)
    B. \(3\sqrt3\ \text{A}\)
    C. \(3\ \text{A}\)
    D. Zero

    **Answer: C.** \(i=6\sin30^\circ=3\ \text{A}\).

47. **A current \(i=I_0\sin\omega t\) first reaches its negative maximum at:**

    A. \(T/4\)
    B. \(T/2\)
    C. \(3T/4\)
    D. \(T\)

    **Answer: C.** The first negative maximum occurs at phase \(3\pi/2\).

48. **At \(50\ \text{Hz}\), a time delay of \(1/600\ \text{s}\) corresponds to a phase lag of:**

    A. \(15^\circ\)
    B. \(60^\circ\)
    C. \(90^\circ\)
    D. \(30^\circ\)

    **Answer: D.** \(\phi=360^\circ f\Delta t=360^\circ(50)/600=30^\circ\).

49. **A \(12\ \Omega\) resistor is supplied with \(24\ \text{V}\). Its current is:**

    A. \(0.50\ \text{A}\)
    B. \(288\ \text{A}\)
    C. \(2.0\ \text{A}\)
    D. \(12\ \text{A}\)

    **Answer: C.** \(I=V/R=24/12=2.0\ \text{A}\).

50. **A resistor of \(4.0\ \Omega\) carries \(3.0\ \text{A}\). Its average power is:**

    A. \(12\ \text{W}\)
    B. \(24\ \text{W}\)
    C. \(48\ \text{W}\)
    D. \(36\ \text{W}\)

    **Answer: D.** \(P=I^2R=3^2(4)=36\ \text{W}\).

51. **A pure resistor has peak voltage \(20\ \text{V}\) and peak current \(2.0\ \text{A}\). Its resistance is:**

    A. \(20\ \Omega\)
    B. \(5.0\ \Omega\)
    C. \(10\ \Omega\)
    D. \(40\ \Omega\)

    **Answer: C.** Corresponding peak values obey \(R=V_0/I_0=10\ \Omega\).

52. **A \(0.050\ \text{H}\) inductor operates at \(\omega=400\ \text{rad s}^{-1}\). Its reactance is:**

    A. \(20\ \Omega\)
    B. \(8.0\ \Omega\)
    C. \(8000\ \Omega\)
    D. \(0.020\ \Omega\)

    **Answer: A.** \(X_L=\omega L=400(0.050)=20\ \Omega\).

53. **A \(50\ \mu\text{F}\) capacitor operates at \(\omega=1000\ \text{rad s}^{-1}\). Its reactance is:**

    A. \(0.050\ \Omega\)
    B. \(50\ \Omega\)
    C. \(200\ \Omega\)
    D. \(20\ \Omega\)

    **Answer: D.** \(X_C=1/(\omega C)=1/(1000\times50\times10^{-6})=20\ \Omega\).

54. **The reactance of a \(0.10\ \text{H}\) inductor at \(50\ \text{Hz}\) is approximately:**

    A. \(3.14\ \Omega\)
    B. \(31.4\ \Omega\)
    C. \(314\ \Omega\)
    D. \(5.0\ \Omega\)

    **Answer: B.** \(X_L=2\pi(50)(0.10)=31.4\ \Omega\).

55. **A capacitor has reactance \(40\ \Omega\) at \(\omega=500\ \text{rad s}^{-1}\). Its capacitance is:**

    A. \(5.0\ \mu\text{F}\)
    B. \(500\ \mu\text{F}\)
    C. \(50\ \mu\text{F}\)
    D. \(20\ \mu\text{F}\)

    **Answer: C.** \(C=1/(\omega X_C)=1/(500\times40)=50\ \mu\text{F}\).

56. **An inductor has reactance \(30\ \Omega\) at \(\omega=600\ \text{rad s}^{-1}\). Its inductance is:**

    A. \(20\ \text{H}\)
    B. \(0.50\ \text{H}\)
    C. \(0.0050\ \text{H}\)
    D. \(0.050\ \text{H}\)

    **Answer: D.** \(L=X_L/\omega=30/600=0.050\ \text{H}\).

57. **At fixed frequency, doubling capacitance changes capacitive reactance to:**

    A. Half its original value
    B. Twice its original value
    C. Four times its original value
    D. Its original value

    **Answer: A.** \(X_C\propto1/C\).

58. **An ideal inductor is supplied with fixed RMS voltage. If frequency doubles, its RMS current:**

    A. Doubles
    B. Quadruples
    C. Remains unchanged
    D. Halves

    **Answer: D.** \(I=V/(2\pi fL)\), so current is inversely proportional to frequency.

59. **An ideal capacitor is supplied with fixed RMS voltage. Tripling frequency makes its current:**

    A. Three times as large
    B. One-third as large
    C. Nine times as large
    D. Unchanged

    **Answer: A.** \(I=V\omega C\), so current is proportional to frequency.

60. **A series RL circuit has \(R=6\ \Omega\) and \(X_L=8\ \Omega\). Its impedance magnitude is:**

    A. \(14\ \Omega\)
    B. \(2\ \Omega\)
    C. \(48\ \Omega\)
    D. \(10\ \Omega\)

    **Answer: D.** \(Z=\sqrt{6^2+8^2}=10\ \Omega\).

61. **A series RC circuit has \(R=12\ \Omega\) and \(X_C=5\ \Omega\). Its impedance magnitude is:**

    A. \(17\ \Omega\)
    B. \(7\ \Omega\)
    C. \(13\ \Omega\)
    D. \(60\ \Omega\)

    **Answer: C.** \(Z=\sqrt{12^2+5^2}=13\ \Omega\).

62. **A series RLC circuit has \(R=8\ \Omega\), \(X_L=14\ \Omega\), and \(X_C=8\ \Omega\). Its impedance is:**

    A. \(30\ \Omega\)
    B. \(14\ \Omega\)
    C. \(10\ \Omega\)
    D. \(6\ \Omega\)

    **Answer: C.** Net reactance is \(6\ \Omega\), giving \(Z=\sqrt{8^2+6^2}=10\ \Omega\).

63. **A series circuit has resistance \(30\ \Omega\) and net reactance magnitude \(40\ \Omega\). Its power factor is:**

    A. \(0.80\)
    B. \(0.60\)
    C. \(0.75\)
    D. \(1.00\)

    **Answer: B.** \(Z=50\ \Omega\), so power factor is \(R/Z=30/50=0.60\).

64. **A circuit with impedance magnitude \(10\ \Omega\) is supplied with \(50\ \text{V}\). Its current is:**

    A. \(0.20\ \text{A}\)
    B. \(500\ \text{A}\)
    C. \(5.0\ \text{A}\)
    D. \(10\ \text{A}\)

    **Answer: C.** \(I=V/Z=50/10=5.0\ \text{A}\).

65. **In a series RL circuit, \(R=X_L\). The current lags the supply voltage by:**

    A. \(0^\circ\)
    B. \(30^\circ\)
    C. \(90^\circ\)
    D. \(45^\circ\)

    **Answer: D.** \(\tan\phi=X_L/R=1\).

66. **In a series RC circuit, \(R=X_C\). The current:**

    A. Leads the supply voltage by \(45^\circ\)
    B. Lags the supply voltage by \(45^\circ\)
    C. Leads the supply voltage by \(90^\circ\)
    D. Is in phase with the supply voltage

    **Answer: A.** Equal resistance and capacitive reactance give a \(45^\circ\) current lead.

67. **A circuit takes \(3.0\ \text{A}\) from a \(40\ \text{V}\) supply at power factor \(0.50\). Its average power is:**

    A. \(120\ \text{W}\)
    B. \(240\ \text{W}\)
    C. \(30\ \text{W}\)
    D. \(60\ \text{W}\)

    **Answer: D.** \(P=VI\cos\phi=40(3.0)(0.50)=60\ \text{W}\).

68. **A load takes \(4.0\ \text{A}\) at \(30\ \text{V}\) and consumes \(72\ \text{W}\). Its power factor is:**

    A. \(0.40\)
    B. \(0.80\)
    C. \(0.90\)
    D. \(0.60\)

    **Answer: D.** \(\cos\phi=P/(VI)=72/120=0.60\).

69. **A circuit has apparent power \(S=V_{\mathrm{rms}}I_{\mathrm{rms}}\). At \(24\ \text{V}\) and \(2.0\ \text{A}\), its apparent power is:**

    A. \(12\ \text{VA}\)
    B. \(48\ \text{VA}\)
    C. \(24\ \text{VA}\)
    D. \(96\ \text{VA}\)

    **Answer: B.** \(S=24(2.0)=48\ \text{VA}\).

70. **For \(L=0.10\ \text{H}\) and \(C=10\ \mu\text{F}\), the resonant frequency is approximately:**

    A. \(15.9\ \text{Hz}\)
    B. \(159\ \text{Hz}\)
    C. \(1590\ \text{Hz}\)
    D. \(1000\ \text{Hz}\)

    **Answer: B.** \(f_0=1/[2\pi\sqrt{0.10(10\times10^{-6})}]\approx159\ \text{Hz}\).

71. **An LC circuit has \(L=0.25\ \text{H}\) and \(C=4.0\ \mu\text{F}\). Its resonant angular frequency is:**

    A. \(1000\ \text{rad s}^{-1}\)
    B. \(250\ \text{rad s}^{-1}\)
    C. \(4000\ \text{rad s}^{-1}\)
    D. \(100\ \text{rad s}^{-1}\)

    **Answer: A.** \(\omega_0=1/\sqrt{LC}=1/\sqrt{10^{-6}}=1000\ \text{rad s}^{-1}\).

72. **If capacitance quadruples at fixed inductance, the resonant frequency becomes:**

    A. Half the original
    B. Twice the original
    C. One-quarter of the original
    D. Four times the original

    **Answer: A.** \(f_0\propto1/\sqrt C\).

73. **If inductance becomes nine times its original value at fixed capacitance, resonant frequency becomes:**

    A. One-third of the original
    B. One-ninth of the original
    C. Three times the original
    D. Nine times the original

    **Answer: A.** \(f_0\propto1/\sqrt L\), giving a factor \(1/3\).

74. **At resonance, a series RLC circuit has \(R=5.0\ \Omega\) and supply voltage \(20\ \text{V}\). Its current is:**

    A. \(0.25\ \text{A}\)
    B. \(4.0\ \text{A}\)
    C. \(2.0\ \text{A}\)
    D. \(100\ \text{A}\)

    **Answer: B.** At resonance, \(Z=R\), so \(I=20/5=4.0\ \text{A}\).

75. **In a parallel RL circuit, resistor current is \(3.0\ \text{A}\) and inductor current is \(4.0\ \text{A}\). The supply current is:**

    A. \(7.0\ \text{A}\)
    B. \(5.0\ \text{A}\)
    C. \(1.0\ \text{A}\)
    D. \(12\ \text{A}\)

    **Answer: B.** The branch currents differ by \(90^\circ\), so \(I=\sqrt{3^2+4^2}=5.0\ \text{A}\).

76. **A parallel RC circuit has resistor current \(12\ \text{A}\) and capacitor current \(5.0\ \text{A}\). Its supply current is:**

    A. \(13\ \text{A}\)
    B. \(17\ \text{A}\)
    C. \(7.0\ \text{A}\)
    D. \(60\ \text{A}\)

    **Answer: A.** \(I=\sqrt{12^2+5^2}=13\ \text{A}\).

77. **In a parallel RLC circuit, \(I_R=8\ \text{A}\), \(I_C=9\ \text{A}\), and \(I_L=3\ \text{A}\). The supply current is:**

    A. \(10\ \text{A}\)
    B. \(20\ \text{A}\)
    C. \(14\ \text{A}\)
    D. \(2\ \text{A}\)

    **Answer: A.** Net reactive current is \(9-3=6\ \text{A}\), so \(I=\sqrt{8^2+6^2}=10\ \text{A}\).

78. **A parallel RLC circuit has \(I_L=I_C=6.0\ \text{A}\) and \(I_R=2.0\ \text{A}\). Its supply current is:**

    A. \(14\ \text{A}\)
    B. \(2.0\ \text{A}\)
    C. \(6.0\ \text{A}\)
    D. Zero

    **Answer: B.** Equal inductive and capacitive currents cancel at the supply.

79. **A \(20\ \mu\text{F}\) capacitor has peak voltage \(10\ \text{V}\). Its maximum charge magnitude is:**

    A. \(200\ \mu\text{C}\)
    B. \(2.0\ \mu\text{C}\)
    C. \(20\ \mu\text{C}\)
    D. \(500\ \mu\text{C}\)

    **Answer: A.** \(Q_0=CV_0=20\ \mu\text{F}\times10\ \text{V}=200\ \mu\text{C}\).

80. **An inductor of \(0.20\ \text{H}\) carries sinusoidal current with peak value \(3.0\ \text{A}\). Its maximum stored energy is:**

    A. \(1.8\ \text{J}\)
    B. \(0.90\ \text{J}\)
    C. \(0.30\ \text{J}\)
    D. \(0.45\ \text{J}\)

    **Answer: B.** \(U_{\max}=\tfrac12LI_0^2=\tfrac12(0.20)(9)=0.90\ \text{J}\).

81. **Two same-frequency currents combine as \(i=3\sin\omega t+4\cos\omega t\ \text{A}\). The resultant peak current is:**

    A. \(7\ \text{A}\)
    B. \(1\ \text{A}\)
    C. \(5\ \text{A}\)
    D. \(25\ \text{A}\)

    **Answer: C.** The components are in quadrature, so amplitude is \(\sqrt{3^2+4^2}=5\ \text{A}\).

82. **For \(i_1=I_1\sin(\omega t+60^\circ)\) and \(i_2=I_2\sin(\omega t-30^\circ)\), current \(i_1\):**

    A. Lags \(i_2\) by \(30^\circ\)
    B. Leads \(i_2\) by \(30^\circ\)
    C. Lags \(i_2\) by \(90^\circ\)
    D. Leads \(i_2\) by \(90^\circ\)

    **Answer: D.** Their phase difference is \(60^\circ-(-30^\circ)=90^\circ\).

83. **A current has RMS value \(5.0\ \text{A}\). The mean value of \(i^2\) is:**

    A. \(25\ \text{A}^2\)
    B. \(5.0\ \text{A}^2\)
    C. \(50\ \text{A}^2\)
    D. \(12.5\ \text{A}^2\)

    **Answer: A.** By definition, \(I_{\mathrm{rms}}^2=\langle i^2\rangle\).

84. **A \(5.0\ \Omega\) resistor has voltage \(v=20\sin\omega t\ \text{V}\). Its average power is:**

    A. \(80\ \text{W}\)
    B. \(20\ \text{W}\)
    C. \(40\ \text{W}\)
    D. \(100\ \text{W}\)

    **Answer: C.** \(P=V_0^2/(2R)=400/10=40\ \text{W}\).

85. **A resistor is driven by a sinusoidal voltage of frequency \(f\). Its instantaneous power varies at frequency:**

    A. \(f/2\)
    B. \(f\)
    C. \(4f\)
    D. \(2f\)

    **Answer: D.** Since \(p\propto\sin^2\omega t=(1-\cos2\omega t)/2\), power varies at twice the voltage frequency.

86. **A series RL circuit has \(R=8\ \Omega\), \(L=0.0060\ \text{H}\), and \(\omega=1000\ \text{rad s}^{-1}\). At \(20\ \text{V}\), its average power is:**

    A. \(40\ \text{W}\)
    B. \(32\ \text{W}\)
    C. \(50\ \text{W}\)
    D. \(25\ \text{W}\)

    **Answer: B.** \(X_L=6\ \Omega\), \(Z=10\ \Omega\), \(I=2\ \text{A}\), and \(P=I^2R=32\ \text{W}\).

87. **A series RC circuit has \(R=30\ \Omega\), \(C=25\ \mu\text{F}\), and \(\omega=1000\ \text{rad s}^{-1}\). At \(100\ \text{V}\), its average power is:**

    A. \(200\ \text{W}\)
    B. \(333\ \text{W}\)
    C. \(120\ \text{W}\)
    D. \(60\ \text{W}\)

    **Answer: C.** \(X_C=40\ \Omega\), \(Z=50\ \Omega\), \(I=2\ \text{A}\), and \(P=4(30)=120\ \text{W}\).

88. **A series circuit takes \(2.0\ \text{A}\) at \(50\ \text{V}\) and consumes \(60\ \text{W}\). Its resistance and net reactance magnitude are:**

    A. \(25\ \Omega,\ 15\ \Omega\)
    B. \(20\ \Omega,\ 15\ \Omega\)
    C. \(15\ \Omega,\ 25\ \Omega\)
    D. \(15\ \Omega,\ 20\ \Omega\)

    **Answer: D.** \(R=P/I^2=15\ \Omega\), \(Z=V/I=25\ \Omega\), and \(|X|=\sqrt{25^2-15^2}=20\ \Omega\).

89. **A series RL circuit has \(Z=13\ \Omega\), \(R=5.0\ \Omega\), and \(\omega=600\ \text{rad s}^{-1}\). Its inductance is:**

    A. \(0.020\ \text{H}\)
    B. \(0.010\ \text{H}\)
    C. \(0.030\ \text{H}\)
    D. \(0.20\ \text{H}\)

    **Answer: A.** \(X_L=\sqrt{13^2-5^2}=12\ \Omega\), so \(L=12/600=0.020\ \text{H}\).

90. **A series RC circuit has \(Z=10\ \Omega\), \(R=6.0\ \Omega\), and \(\omega=500\ \text{rad s}^{-1}\). Its capacitance is:**

    A. \(25\ \mu\text{F}\)
    B. \(125\ \mu\text{F}\)
    C. \(250\ \mu\text{F}\)
    D. \(500\ \mu\text{F}\)

    **Answer: C.** \(X_C=\sqrt{100-36}=8\ \Omega\), giving \(C=1/(500\times8)=250\ \mu\text{F}\).

91. **A series RLC circuit has \(R=20\ \Omega\), \(X_L=50\ \Omega\), \(X_C=35\ \Omega\), and supply voltage \(100\ \text{V}\). The inductor voltage is:**

    A. \(100\ \text{V}\)
    B. \(200\ \text{V}\)
    C. \(50\ \text{V}\)
    D. \(140\ \text{V}\)

    **Answer: B.** \(Z=25\ \Omega\), so \(I=4\ \text{A}\) and \(V_L=IX_L=200\ \text{V}\).

92. **In a series RLC circuit, \(V_R=30\ \text{V}\), \(V_L=80\ \text{V}\), and \(V_C=40\ \text{V}\). The supply voltage is:**

    A. \(150\ \text{V}\)
    B. \(50\ \text{V}\)
    C. \(70\ \text{V}\)
    D. \(90\ \text{V}\)

    **Answer: B.** \(V=\sqrt{V_R^2+(V_L-V_C)^2}=\sqrt{30^2+40^2}=50\ \text{V}\).

93. **A series RLC circuit has \(V_R=12\ \text{V}\), \(V_L=20\ \text{V}\), and \(V_C=29\ \text{V}\). Its supply voltage and phase character are:**

    A. \(61\ \text{V}\), inductive
    B. \(15\ \text{V}\), inductive
    C. \(21\ \text{V}\), capacitive
    D. \(15\ \text{V}\), capacitive

    **Answer: D.** \(V=\sqrt{12^2+(-9)^2}=15\ \text{V}\); \(V_C>V_L\) makes the circuit capacitive.

94. **At resonance, a series RLC circuit has \(X_L=X_C=20\ \Omega\) and \(R=40\ \Omega\). If frequency doubles, its new impedance is:**

    A. \(40\ \Omega\)
    B. \(50\ \Omega\)
    C. \(60\ \Omega\)
    D. \(70\ \Omega\)

    **Answer: B.** New reactances are \(40\ \Omega\) and \(10\ \Omega\); \(Z=\sqrt{40^2+30^2}=50\ \Omega\).

95. **At frequency \(f\), a circuit has \(X_L=18\ \Omega\) and \(X_C=8\ \Omega\). Its resonant frequency is:**

    A. \(3f/2\)
    B. \(4f/9\)
    C. \(2f/3\)
    D. \(9f/4\)

    **Answer: C.** \(X_L/X_C=(f/f_0)^2=18/8\), so \(f_0=f\sqrt{8/18}=2f/3\).

96. **A series circuit has impedance \(40\ \Omega\), and current lags voltage by \(60^\circ\). Its resistance is:**

    A. \(40\sqrt3\ \Omega\)
    B. \(40\ \Omega\)
    C. \(20\sqrt3\ \Omega\)
    D. \(20\ \Omega\)

    **Answer: D.** \(R=Z\cos\phi=40\cos60^\circ=20\ \Omega\).

97. **Two RL sections are connected in series. Their resistance-reactance pairs are \((3,4)\ \Omega\) and \((5,8)\ \Omega\). Total impedance magnitude is:**

    A. \(20\ \Omega\)
    B. \(10\ \Omega\)
    C. \(13\ \Omega\)
    D. \(4\sqrt{13}\ \Omega\)

    **Answer: D.** Total resistance is \(8\ \Omega\), reactance \(12\ \Omega\), and \(Z=\sqrt{208}=4\sqrt{13}\ \Omega\).

98. **An RL section has \(R=3\ \Omega,\ X_L=4\ \Omega\). It is connected in series with an RC section having \(R=5\ \Omega,\ X_C=4\ \Omega\). The total circuit is equivalent at that frequency to:**

    A. An \(8\ \Omega\) resistance
    B. A \(16\ \Omega\) resistance
    C. An \(8\ \Omega\) pure inductance
    D. A \(4\ \Omega\) pure capacitance

    **Answer: A.** The reactances cancel, while the resistances add.

99. **A \(6\ \Omega\) resistor and an inductor of reactance \(8\ \Omega\) are in parallel across \(24\ \text{V}\). The circuit power factor is:**

    A. \(0.60\), leading
    B. \(0.80\), lagging
    C. \(0.80\), leading
    D. \(0.60\), lagging

    **Answer: B.** Branch currents are \(4\) and \(3\ \text{A}\); supply current is \(5\ \text{A}\), giving power factor \(4/5\), lagging.

100. **A \(20\ \Omega\) resistor and a capacitor of reactance \(15\ \Omega\) are parallel across \(60\ \text{V}\). Their total average power is:**

     A. \(300\ \text{W}\)
     B. \(240\ \text{W}\)
     C. \(180\ \text{W}\)
     D. \(420\ \text{W}\)

     **Answer: C.** Only the resistor dissipates average power: \(P=V^2/R=3600/20=180\ \text{W}\).
'''
