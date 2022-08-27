// coercion : we all do it..
var numStudents = 16;

console.log(
    `There are ${numStudents} students`

);
// "There are 16 students."



// coercion : string concatenation (number to string)

var msg1 = "There are";
var numStudents = 16;
var msg2 = "Students";

console.log(msg1 + numStudents +msg2);

// "There are 16 students."

var numStudents = 16;

console.log(
    `There are ${numStudents + ""} students.`

);

// "There are 16 students."


var numStudents = 16;

console.log(
    `There are ${[numStudents].join("")} students.`

);

// "There are 16 students."



var numStudents = 16;

console.log(
    `There are ${numStudents.toString()} students.`

);

// "There are 16 students."


var numStudents = 16;

console.log(
    `There are ${String(numStudents)} students.`

);

// "There are 16 students."

// -------
var studentsInputElem = 16

function addAStudent(numStudents){
    return numStudents + 1;
}
console.log(addAStudent(studentsInputElem.value));

// "161" oops!


function addAStudent(numStudents){
    return numStudents + 1;
}
console.log(addAStudent(Number(+studentsInputElem.value)));

// "17" 

function addAStudent(numStudents){
    return numStudents - 1;
}
console.log(addAStudent(studentsInputElem.value));

// "15" 


// Recall flasy vs Truthy?

if(studentsInputElem.value){
    numStudents = Number(studentsInputElem.value);
}

while(newStudents.lenght){
    enrollStudents(newStudents.pop1())
}


if(!!studentsInputElem.value){
    numStudents = Number(studentsInputElem.value);
}

while(newStudents.lenght > 0){
    enrollStudents(newStudents.pop1())
}


if(studentsInputElem.value){
    numStudents = Number(studentsInputElem.value);
}

// ******************

Boolean(""); //false

Boolean("   \t\n"); //True oops!


var workShop = getRegistration(student);

if(workShop){
    console.log(
        `Welcome ${student.name} to ${workShop.name}.`
    )
};


Boolean(undefined); //false
Boolean(null); //false
Boolean({}); //false