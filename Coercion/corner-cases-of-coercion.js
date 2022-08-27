Number(""); //0
Number("  \t\n"); //0
Number(null); //0
Number(undefined); //NaN
Number([]); //0
Number([1, 2, 3]); //NaN
Number([null]); //0
Number([undefined]); //0
Number({}); //NaN

String(-0); //"0"
String(null); //"null"
String(undefined); //"undefined"
String([null]); //"" oops
String([undefined]); //""  oops

Boolean(new Boolean(false)); // true  oops

// The Root Of All (Coercion)Evil

studentInput.value = "";

// ....

Number(studentInput.value); //0

studentInput.value = "\t\n";

// ..

Number(studentInput.value); //0

Number(true); //1
Number(false); //0

1 < 2; //true
2 < 3; //true
1 < 2 < 3; //true  but...

1 < 2 < 3;
true < 3;
1 < 3; //true  (hmm...)

// ****************************

3 > 2; //true
2 > 1; //true
3 > 2 > 1; //false  oops!

(3 > 2) > 1;
true > 1;
1 > 1; //false
