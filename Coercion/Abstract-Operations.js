// Abstract Operations:----

// Types Conversion = aka 'coercion'

// ToPrimitive(hint)(7.1.1):----

// hint : 'number'    // hint : 'string'

// valueOf()              //toString()
// toString()                // valueOf()      


// ToString(7.1.12):----

// null -> "null"
// undefined -> "undefined"
// true -> "true"
// false ->"false"
// 3.14159 -> "3.14159"
// 0 -> "0"
// -0 -> "0"


// ToString(Array/object):---

// ToPrimitive(string)

// aka:toSting()/valueOf()

// ToString(Array):---

// []-> ""
// [1,2,3]-> "1,2,3"
// [null,undefined]-> ","
// [[[],[],[]],[]]->",,,"
// [,,,,]->",,,"


// ToString(Object):------

// {}->"[object,Object]"
// {a:2}->"[object,Object]"
// {toString(){return "X";}} -> "x"  //apne ishab se output nikale sakte h is tarike se



// ToNumber(7.1.3):-----


// "" -> 0
// "0" -> 0
// "-0" -> -0
// "  009" -> 9
// "3.14159" -> 3.14159
// "0." -> 0
// ".0" -> 0
// "." -> NaN
// "0xaf" -> 175

// ---->

// false -> 0
// True -> 1
// null -> 0
// undefined -> NaN


// ToNumber(object):----

// ToPrimitive(number)
// aka:valueOf()/toString()


// (for []and {}by default):---
// valueOf(){return this;}-->toString()

// {..} -> NaN
// {valueOf(){retrun 3;}} -> 3


// ToNumber(Array):---

// [""] -> 0
// ["0"] -> 0
// ["-0"] -> -0
// [null] -> 0
// [undefined] -> 0
// [1,2,3] -> NaN
// [[[[]]]] -> 0


// ToBoolean(7.1.2):----

// Falsy        //Truthy

// ""            // "foo"
// 0,-0           // 23
// null          // {a:1}
//NaN            // [1,3]
//false          // true
// undefined     //function(){..}