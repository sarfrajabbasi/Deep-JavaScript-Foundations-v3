// Fundamental Objects
// aka:Built-In Objects
// aka:Native Functions

// Use new :

// Object()
// Array()
// Function()
// Date()
// RegExp()

// Don't use new:

// String()
// Number()
// Boolean()

var yesterday = new Date("March 21, 2022");
console.log(yesterday.toUTCString());
// Sun, 20 Mar 2022 18:30:00 GMT
var transcript = 4.5
var myGPA = String(transcript.gpa);
console.log(myGPA);
// '4.5'
