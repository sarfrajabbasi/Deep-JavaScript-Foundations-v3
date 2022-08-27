// The case for Preferring ==

// knowing types is always better that not knowing them
// static types is not the only(or even necessarily best) way to know your types

// == is not about comparisons with unknown types
// == is about comparisons with known type(s),optionally where conversions are helpful

// if you know the type(s) in a comparison:---

// if both types are the same, == is identical to ===
// Using === would be unnecessary,so prefer the shorter ==

// since === is pointless when the types don't match,it's similarly unnecessary when they do match.

// if the types are different,using one === would be broken
// prefer the more powerful == or don't compare at all
// if the types are different,the equivalent of one == would be two(or more!)===(ie,"slower")

// prefer the "faster" single == 

// if the types are different,two(or more!)=== comparisons may distract the reader
// prefer the cleaner single==

// summary :--- whether the types match or not, == is the more sensible choice


// not knowing the types means not fully understanding that code

// so,best to refactor so you can know the types

// The uncertainty of not knowing types should be obvious to reader
// the most obvious signal is ===

// not knowing the types is equivalent to assuming type conversion
// because of corner cases,the only safe choice is ===


// summary : if you can't or won't use known and obvious types, === is the only reasonable choice

// even if === would always be equivalent to == in your code,using it everywhere sends a wrong semantic signal: "protecting myself since i don'tknow/trust the types"

// summary :---- making types known and obvious leads to better code. if types are known, == is best.

// otherwise,fall back to ===.
