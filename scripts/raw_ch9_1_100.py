RAW_1_100 = r'''
1. **Digital electronics represents information using:**

   A. Only continuously varying quantities
   B. Only mechanical movement
   C. An unlimited number of states for each binary digit
   D. Discrete signal states

   **Answer: D.** Digital systems represent information through distinguishable states, commonly binary 0 and 1.

2. **Which pair contains the two binary digits?**

   A. 1 and 2
   B. −1 and +1
   C. 0 and 1
   D. 0 and 10

   **Answer: C.** Binary notation uses only the digits 0 and 1.

3. **In positive logic, a HIGH signal represents:**

   A. Logic 0
   B. Logic 1
   C. An open circuit in every arrangement
   D. An invalid input

   **Answer: B.** Positive logic assigns binary 1 to the higher signal level.

4. **In positive logic, a LOW signal represents:**

   A. Logic 0
   B. Logic 1
   C. Both binary digits simultaneously
   D. A compulsory negative voltage

   **Answer: A.** The lower valid signal level represents binary 0.

5. **A system assigns 0 V to LOW and +5 V to HIGH. Which voltage represents logic 1?**

   A. 0 V
   B. −5 V
   C. −1 V
   D. +5 V

   **Answer: D.** In the specified system, +5 V is the HIGH level and therefore represents 1.

6. **A digital input threshold helps a circuit decide:**

   A. The physical length of a wire
   B. Whether an input represents LOW or HIGH
   C. The number of electrons in an atom
   D. Whether a resistor is connected in series

   **Answer: B.** Threshold specifications determine how input voltages are interpreted as logic states.

7. **The voltage swing of a digital signal is the:**

   A. Product of its HIGH and LOW voltages
   B. Difference between its HIGH and LOW voltages
   C. Sum of all voltages in its circuit
   D. Number of pulses per second

   **Answer: B.** Voltage swing measures the separation between the two signal levels.

8. **A truth table shows:**

   A. Only the maximum output voltage
   B. The output corresponding to each input combination
   C. Only the physical arrangement of wires
   D. The resistance of each gate

   **Answer: B.** A truth table completely describes a logic function by listing its inputs and corresponding outputs.

9. **How many input combinations are possible for two independent binary inputs?**

   A. 4
   B. 2
   C. 6
   D. 8

   **Answer: A.** Each input has two possibilities, giving \(2^2=4\) combinations.

10. **A complete truth table for three independent binary inputs contains:**

    A. 3 rows
    B. 6 rows
    C. 8 rows
    D. 9 rows

    **Answer: C.** Three binary inputs have \(2^3=8\) possible combinations.

11. **Four independent binary inputs can form how many combinations?**

    A. 4
    B. 8
    C. 16
    D. 32

    **Answer: C.** The number of combinations is \(2^4=16\).

12. **A standard NOT gate has how many signal inputs?**

    A. Four
    B. Three
    C. Two
    D. One

    **Answer: D.** A NOT gate complements one input signal.

13. **An AND gate produces HIGH output when:**

    A. Every input is HIGH
    B. Any one input is HIGH
    C. Every input is LOW
    D. Its inputs are different

    **Answer: A.** AND requires all its input conditions to be true simultaneously.

14. **An OR gate produces LOW output when:**

    A. Exactly one input is HIGH
    B. Every input is HIGH
    C. Every input is LOW
    D. Its inputs are different

    **Answer: C.** OR becomes HIGH if any input is HIGH, so it is LOW only when all inputs are LOW.

15. **A NAND gate is equivalent to:**

    A. An AND gate followed by a NOT gate
    B. An OR gate followed by a NOT gate
    C. Two NOT gates in succession
    D. An XOR gate followed by an AND gate

    **Answer: A.** NAND means NOT-AND: its output is the complement of the AND result.

16. **A NOR gate is equivalent to:**

    A. An AND gate followed by an OR gate
    B. An OR gate followed by a NOT gate
    C. A NOT gate followed by another NOT gate
    D. An XOR gate followed by a NOT gate

    **Answer: B.** NOR means NOT-OR: it complements the OR output.

17. **A two-input XOR gate produces HIGH output when its inputs are:**

    A. Both LOW
    B. Both HIGH
    C. Equal
    D. Different

    **Answer: D.** XOR is HIGH for 01 and 10, but LOW for 00 and 11.

18. **A two-input XNOR gate produces HIGH output when its inputs are:**

    A. Equal
    B. Different
    C. Both disconnected
    D. Opposite voltage polarities in every logic system

    **Answer: A.** XNOR is the complement of XOR and therefore detects equality.

19. **Which pair consists of universal logic gates?**

    A. AND and OR
    B. XOR and XNOR
    C. AND and NOT
    D. NAND and NOR

    **Answer: D.** Either NAND gates alone or NOR gates alone can implement any Boolean function.

20. **Which set contains the three basic logic operations?**

    A. NAND, NOR, and XNOR
    B. AND, OR, and NOT
    C. XOR, NAND, and OR
    D. NOT, XNOR, and NOR

    **Answer: B.** AND, OR, and NOT are the basic operations from which other logic functions can be constructed.

21. **A small circle at a gate’s output in a logic symbol normally indicates:**

    A. Amplification
    B. Energy storage
    C. A second output wire
    D. Logical inversion

    **Answer: D.** The small circle, or inversion bubble, indicates that the signal is complemented.

22. **A triangular logic symbol with a small circle at its output represents a:**

    A. Two-input AND gate
    B. NOT gate
    C. Three-input OR gate
    D. Two-input XOR gate

    **Answer: B.** The triangle with an output inversion bubble is the conventional NOT-gate symbol.

23. **A conventional gate symbol with a flat input side and a rounded output side, without an inversion bubble, represents:**

    A. OR
    B. XOR
    C. AND
    D. NOR

    **Answer: C.** The conventional AND symbol has a flat input edge and a curved output edge.

24. **Which symbol resembles an OR gate with an additional curved line at its input side?**

    A. AND
    B. NAND
    C. XOR
    D. NOT

    **Answer: C.** The additional input-side curve distinguishes XOR from OR.

25. **In Boolean expressions, \(A+B\) means:**

    A. A OR B
    B. Ordinary addition with possible result 2
    C. A AND B
    D. A XOR B in every case

    **Answer: A.** Boolean \(+\) denotes OR; for example, \(1+1=1\).

26. **In Boolean notation, \(AB\) represents:**

    A. A OR B
    B. A NOT B
    C. A AND B
    D. A XNOR B

    **Answer: C.** Multiplication or a dot between variables denotes the AND operation.

27. **The expression \(\overline A\) represents:**

    A. A delayed by one second
    B. Twice the value of A
    C. The complement of A
    D. A multiplied by zero

    **Answer: C.** Complementation changes 0 into 1 and 1 into 0.

28. **If the input of a NOT gate is 1, its output is:**

    A. 0
    B. 1
    C. Equal to the supply voltage in every system
    D. Undetermined despite a valid input

    **Answer: A.** A NOT gate reverses the input logic state.

29. **For a two-input AND gate, \(A=1\) and \(B=0\) give:**

    A. Output 1
    B. Output equal to A
    C. Output 0
    D. An invalid logic state

    **Answer: C.** One LOW input is sufficient to make an AND output LOW.

30. **For a two-input OR gate, \(A=0\) and \(B=0\) give:**

    A. Output 1
    B. Alternating output
    C. An undefined output
    D. Output 0

    **Answer: D.** With no HIGH input, the OR output remains LOW.

31. **The output of a two-input NAND gate for inputs 11 is:**

    A. 0
    B. 1
    C. Equal to the first input
    D. Equal to the second input

    **Answer: A.** AND gives 1 for 11, and NAND complements that result to 0.

32. **The output of a two-input NOR gate for inputs 01 is:**

    A. 1
    B. 0
    C. Equal to the OR output
    D. Undefined

    **Answer: B.** OR gives 1 when either input is HIGH; NOR gives its complement, 0.

33. **A two-input XOR gate receives 00. Its output is:**

    A. 1
    B. 0
    C. HIGH because the inputs match
    D. Undefined because both inputs are LOW

    **Answer: B.** XOR is LOW when its two inputs are equal.

34. **A two-input XNOR gate receives 11. Its output is:**

    A. 0
    B. 1
    C. The complement of both inputs simultaneously
    D. Undefined

    **Answer: B.** XNOR gives 1 when both inputs have the same value.

35. **Two switches connected in series with a lamp demonstrate:**

    A. OR logic
    B. XOR logic
    C. AND logic
    D. NOT logic

    **Answer: C.** The current path is complete only when both switches are closed.

36. **Two switches connected in parallel, with their combination in series with a lamp, demonstrate:**

    A. AND logic
    B. NAND logic
    C. XNOR logic
    D. OR logic

    **Answer: D.** Either closed switch provides a path that lights the lamp.

37. **Under the stated switch convention, a closed switch represents:**

    A. An invalid input
    B. Logic 0
    C. A complemented output
    D. Logic 1

    **Answer: D.** The convention assigns 1 to a closed switch and 0 to an open switch.

38. **Under the stated lamp convention, output 0 means:**

    A. The lamp is off
    B. The lamp is on
    C. The lamp must blink
    D. Both switches must be closed

    **Answer: A.** The lamp’s unlit state represents logic 0.

39. **Which statement about physical logic levels is correct?**

    A. A valid logic state may correspond to a specified voltage range
    B. Logic 1 must always be exactly 5 V
    C. Logic 0 must always be a negative voltage
    D. Every voltage represents both states simultaneously

    **Answer: A.** Real digital circuits specify acceptable voltage ranges for LOW and HIGH.

40. **In digital gate circuits, transistors commonly function as:**

    A. Mechanical springs
    B. Permanent magnets
    C. Optical lenses
    D. Electronic switches

    **Answer: D.** Switching between conducting and non-conducting conditions allows transistors to implement logic operations.

41. **A digital signal changes between −2 V and +3 V. Its voltage swing is:**

    A. 1 V
    B. −5 V
    C. 6 V
    D. 5 V

    **Answer: D.** The swing is \(3-(-2)=5\text{ V}\).

42. **In a simplified system, voltages below 2.5 V are LOW and voltages above 2.5 V are HIGH. A 2.2 V input represents:**

    A. HIGH
    B. Both states
    C. A pulse frequency
    D. LOW

    **Answer: D.** The input is below the specified threshold.

43. **A receiver guarantees LOW for 0–0.8 V and HIGH for 2–5 V. How should a 1.4 V input be classified?**

    A. Guaranteed LOW
    B. Guaranteed HIGH
    C. Outside the guaranteed LOW and HIGH ranges
    D. Necessarily alternating between 0 and 1

    **Answer: C.** A voltage between the specified valid ranges has no guaranteed logic interpretation.

44. **A receiver accepts voltages of at least 3 V as HIGH. A 4.5 V signal experiences a −1 V disturbance. The received state is:**

    A. LOW
    B. Necessarily invalid
    C. HIGH
    D. The complement of the original state

    **Answer: C.** The disturbed voltage is 3.5 V, which remains above the HIGH threshold.

45. **Adding one independent binary input to a truth table changes its number of rows by a factor of:**

    A. \(1/2\)
    B. 1
    C. 2
    D. 4

    **Answer: C.** Each previous combination can occur with the new input equal to either 0 or 1.

46. **A three-input AND gate receives 101. Its output is:**

    A. 1
    B. 0
    C. Equal to its first input
    D. Equal to its third input

    **Answer: B.** The middle input is LOW, so the AND condition is not satisfied.

47. **A four-input OR gate receives 0010. Its output is:**

    A. 1
    B. 0
    C. Undefined
    D. Equal to the first input

    **Answer: A.** One HIGH input is sufficient for an OR output of 1.

48. **A three-input NAND gate receives 111. Its output is:**

    A. 0
    B. 1
    C. Equal to its first input
    D. Equal to its last input

    **Answer: A.** All inputs being HIGH makes AND equal to 1, so NAND equals 0.

49. **A four-input NOR gate receives 0000. Its output is:**

    A. 1
    B. 0
    C. Equal to any input
    D. Undefined

    **Answer: A.** OR gives 0 for all-LOW inputs, and NOR inverts this to 1.

50. **For \(Y=A\oplus B\oplus C\), inputs 111 produce:**

    A. 0
    B. 1
    C. An invalid state
    D. The same result as a three-input NOR gate

    **Answer: B.** A chain of XOR operations is HIGH when an odd number of inputs are HIGH.

51. **For \(Y=A\oplus B\oplus C\oplus D\), inputs 1010 produce:**

    A. 1
    B. 0
    C. The same result as OR
    D. An undefined output

    **Answer: B.** Two inputs are HIGH; an even number of HIGH inputs gives XOR output 0.

52. **A two-input XNOR gate receives 10. Its output is:**

    A. 1
    B. Equal to A
    C. Equal to the OR result
    D. 0

    **Answer: D.** The inputs differ, so XNOR is LOW.

53. **Two NOT gates are connected in succession. Their combined output is:**

    A. Always 0
    B. Always 1
    C. The complement of the original input
    D. The original input

    **Answer: D.** Two inversions cancel: \(\overline{\overline A}=A\).

54. **For an AND gate with one input fixed at 1, \(Y=A\cdot1\) equals:**

    A. 0
    B. 1
    C. \(\overline A\)
    D. \(A\)

    **Answer: D.** The fixed HIGH input allows the other input to determine the output.

55. **For an OR gate with one input fixed at 0, \(Y=A+0\) equals:**

    A. 0
    B. 1
    C. \(\overline A\)
    D. \(A\)

    **Answer: D.** Adding a LOW input through OR does not change the other input’s value.

56. **The expression \(A\cdot0\) is:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: C.** An AND gate is forced LOW by any LOW input.

57. **The expression \(A+1\) is:**

    A. \(A\)
    B. \(\overline A\)
    C. 1
    D. 0

    **Answer: C.** A HIGH input forces an OR gate’s output HIGH.

58. **A NAND gate has inputs A and 1. Its output is:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: B.** \(Y=\overline{A\cdot1}=\overline A\).

59. **A NOR gate has inputs A and 0. Its output is:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: B.** \(Y=\overline{A+0}=\overline A\).

60. **A NAND gate with one input permanently LOW has output:**

    A. Equal to its other input
    B. Equal to the complement of its other input
    C. Always HIGH
    D. Always LOW

    **Answer: C.** The internal AND result is always 0, so its complement is always 1.

61. **A NOR gate with one input permanently HIGH has output:**

    A. Equal to its other input
    B. Equal to the complement of its other input
    C. Always HIGH
    D. Always LOW

    **Answer: D.** The internal OR result is always 1, so the NOR output is always 0.

62. **The expression \(A\oplus0\) equals:**

    A. 0
    B. 1
    C. \(A\)
    D. \(\overline A\)

    **Answer: C.** XOR with 0 preserves the other input.

63. **The expression \(A\oplus1\) equals:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: B.** XOR with 1 reverses the other input.

64. **A two-input XNOR gate has inputs A and 0. Its output is:**

    A. \(\overline A\)
    B. \(A\)
    C. 0
    D. 1

    **Answer: A.** Equality with 0 occurs exactly when A is 0.

65. **A two-input XNOR gate has inputs A and 1. Its output is:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: A.** Equality with 1 occurs exactly when A is 1.

66. **Both inputs of an AND gate are connected to the same signal A. The output is:**

    A. \(A\)
    B. \(\overline A\)
    C. 0
    D. 1

    **Answer: A.** \(A\cdot A=A\), since both 0 AND 0 and 1 AND 1 reproduce A.

67. **All three inputs of an OR gate are connected to A. Its output is:**

    A. 0
    B. \(A\)
    C. \(\overline A\)
    D. 1

    **Answer: B.** Repeating an input does not change an OR result: \(A+A+A=A\).

68. **Both inputs of a NAND gate are joined to A. The gate acts as a:**

    A. NOT gate
    B. Buffer
    C. Constant-HIGH source
    D. Constant-LOW source

    **Answer: A.** Its output is \(\overline{AA}=\overline A\).

69. **Both inputs of a NOR gate are joined to A. Its output is:**

    A. \(\overline A\)
    B. \(A\)
    C. 0
    D. 1

    **Answer: A.** Its output is \(\overline{A+A}=\overline A\).

70. **The expression \(A\oplus A\) is always:**

    A. \(A\)
    B. \(\overline A\)
    C. 1
    D. 0

    **Answer: D.** The two XOR inputs are always equal, so its output is always LOW.

71. **A two-input XNOR gate receives the same signal at both inputs. Its output is always:**

    A. \(A\)
    B. \(\overline A\)
    C. 1
    D. 0

    **Answer: C.** The inputs always match, so XNOR always gives HIGH.

72. **How many rows of a three-input AND truth table have output 1?**

    A. 3
    B. 4
    C. 7
    D. 1

    **Answer: D.** Only the input combination 111 satisfies the AND condition.

73. **How many rows of a four-input OR truth table have output 0?**

    A. 4
    B. 8
    C. 15
    D. 1

    **Answer: D.** Only 0000 produces LOW output.

74. **A three-input NAND truth table contains how many HIGH outputs?**

    A. 7
    B. 1
    C. 3
    D. 8

    **Answer: A.** Of eight combinations, only 111 makes NAND LOW.

75. **A four-input NOR truth table contains how many LOW outputs?**

    A. 1
    B. 15
    C. 8
    D. 16

    **Answer: B.** NOR is HIGH only for 0000 and LOW for the other 15 combinations.

76. **How many input combinations make \(A\oplus B\oplus C=1\)?**

    A. 1
    B. 3
    C. 4
    D. 7

    **Answer: C.** The three single-HIGH combinations and 111 give four HIGH outputs.

77. **How many combinations make \(\overline{A\oplus B\oplus C\oplus D}=1\)?**

    A. 4
    B. 8
    C. 12
    D. 15

    **Answer: B.** Exactly half of the 16 combinations contain an even number of HIGH inputs.

78. **For which input pair do two-input OR and XOR gates give different outputs?**

    A. 11
    B. 00
    C. 01
    D. 10

    **Answer: A.** OR gives 1 for 11, while XOR gives 0; they agree on the other three combinations.

79. **For which input pairs do two-input NAND and NOR gates agree?**

    A. 01 and 10
    B. 00 and 01
    C. 00 and 11
    D. 10 and 11

    **Answer: C.** Both give 1 for 00 and 0 for 11.

80. **For inputs ordered 00, 01, 10, 11, a gate gives outputs 1, 1, 1, 0. The gate is:**

    A. AND
    B. NAND
    C. NOR
    D. XOR

    **Answer: B.** A NAND gate is LOW only when both inputs are HIGH.

81. **An AND result is first inverted, then inverted again. The complete circuit is equivalent to:**

    A. NOR
    B. AND
    C. XOR
    D. NAND

    **Answer: B.** Double complementation restores the original AND output.

82. **A NOR gate produces P, and P is connected to both inputs of another NOR gate. The final function is:**

    A. AND
    B. NAND
    C. XOR
    D. OR

    **Answer: D.** The second NOR inverts P, giving \(\overline{\overline{A+B}}=A+B\).

83. **Both inputs of a NAND gate are individually inverted before entering it. The overall function is:**

    A. AND
    B. NOR
    C. OR
    D. XOR

    **Answer: C.** \(\overline{\overline A\,\overline B}=A+B\).

84. **Both inputs of a NOR gate are individually inverted before entering it. The overall function is:**

    A. AND
    B. OR
    C. NAND
    D. XNOR

    **Answer: A.** \(\overline{\overline A+\overline B}=AB\).

85. **Which expression is equivalent to \(\overline{A+B}\)?**

    A. \(\overline A+\overline B\)
    B. \(\overline A\,\overline B\)
    C. \(AB\)
    D. \(A+\overline B\)

    **Answer: B.** The complement of OR is HIGH only when both original inputs are LOW.

86. **Which expression is equivalent to \(\overline{AB}\)?**

    A. \(\overline A+\overline B\)
    B. \(\overline A\,\overline B\)
    C. \(A+B\)
    D. \(\overline A B\)

    **Answer: A.** NAND is HIGH whenever at least one input is LOW.

87. **The circuit \(Y=A+AB\) can be simplified to:**

    A. \(B\)
    B. \(AB\)
    C. \(A\)
    D. \(A+B\)

    **Answer: C.** If A is 1, the output is already 1; if A is 0, both terms are 0.

88. **The expression \(A(A+B)\) equals:**

    A. \(B\)
    B. \(A+B\)
    C. \(A\)
    D. \(AB\)

    **Answer: C.** For A = 0 the result is 0, and for A = 1 the bracket is necessarily 1.

89. **The output \(Y=AB+\overline A B\) depends only on:**

    A. \(A\)
    B. \(\overline A\)
    C. \(\overline B\)
    D. \(B\)

    **Answer: D.** Factoring gives \(B(A+\overline A)=B\).

90. **Which expression equals \((A+B)(A+\overline B)\)?**

    A. \(A\)
    B. \(B\)
    C. \(A+B\)
    D. \(AB\)

    **Answer: A.** If A is LOW, the product becomes \(B\overline B=0\); if A is HIGH, both brackets are HIGH.

91. **The expression \(A+\overline A B\) is equivalent to:**

    A. \(A+B\)
    B. \(AB\)
    C. \(\overline A+B\)
    D. \(A\oplus B\)

    **Answer: A.** When A is HIGH the result is HIGH; when A is LOW the result follows B.

92. **Simplify \(A(\overline A+B)\).**

    A. \(A+B\)
    B. \(A\)
    C. \(B\)
    D. \(AB\)

    **Answer: D.** Expanding gives \(A\overline A+AB=0+AB=AB\).

93. **The expression \((A+B)(\overline A+B)\) equals:**

    A. \(B\)
    B. \(A\)
    C. \(A+B\)
    D. \(A\oplus B\)

    **Answer: A.** With B = 1 both brackets are HIGH; with B = 0 the result is \(A\overline A=0\).

94. **The expression \(A\overline B+\overline A B\) implements:**

    A. AND
    B. OR
    C. XOR
    D. XNOR

    **Answer: C.** Its two terms identify 10 and 01, exactly the unequal-input cases.

95. **The expression \(AB+\overline A\,\overline B\) implements:**

    A. XOR
    B. XNOR
    C. NAND
    D. NOR

    **Answer: B.** It is HIGH for 11 or 00, exactly the equal-input cases.

96. **A circuit ANDs the outputs of OR(A,B) and NAND(A,B). Its final function is:**

    A. XNOR
    B. XOR
    C. NOR
    D. AND

    **Answer: B.** \((A+B)\overline{AB}\) requires at least one HIGH input while excluding the both-HIGH case.

97. **The expression \((A\oplus B)\oplus B\) simplifies to:**

    A. \(B\)
    B. \(\overline A\)
    C. \(A\)
    D. 0

    **Answer: C.** XORing with B twice cancels its effect because \(B\oplus B=0\).

98. **Simplify \((A\oplus B)\oplus(A\oplus C)\).**

    A. \(A\oplus B\oplus C\)
    B. \(A\)
    C. \(B\oplus\overline C\)
    D. \(B\oplus C\)

    **Answer: D.** The repeated A terms cancel, leaving \(B\oplus C\).

99. **An XOR output and the corresponding XNOR output feed an AND gate. The final output is:**

    A. Always 0
    B. Always 1
    C. \(A+B\)
    D. \(AB\)

    **Answer: A.** XOR and XNOR are complements, so they cannot both be HIGH.

100. **An XOR output and the corresponding XNOR output feed an OR gate. The final output is:**

     A. Always 0
     B. \(AB\)
     C. Always 1
     D. \(A+B\)

     **Answer: C.** One of the complementary outputs is always HIGH.
'''
