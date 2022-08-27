var student;
var teacher;

student;  //undeifned
teacher;  //undeifned
student = "you";
teacher = "sarfraj";

function teacher(){//it move to function first
    return "sarfraj";
}

var otherTeacher;//and then var declarations

// teacher();//sarfraj  // and then executed
// otherTeacher(); //typeError

otherTeacher = function(){ 

    return "suzy";
    
};

// hnadle during first phase and then exceuted

console.log(teacherM());


function teacherM(){
    console.log("hello")
}

// **************EXAMPLE OF HOISTING***************


var teacher = "sarfraj";

otherTeacher();//undefined


function otherTeacher(){
    console.log(teacher);
    // var teacher = "sandy";
}

// var hoisting?
//usually bad:/
teacher = "sarfraj";//wrong wayyyy
var teacher;


// function hoisting?
// IMO actually pretty usefull
getTeacher();  //sarfraj


function getTeacher(){
    return teacher;
}