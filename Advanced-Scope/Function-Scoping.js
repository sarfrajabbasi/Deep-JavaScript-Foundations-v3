var teacher = "sarfraj";


//..


var teacher = "sandy";
console.log(teacher);//sandy

//...

console.log(teacher);//sandy--oops

// coz name collsion or overlap




var teacher = "sarfraj";

function anotherteacher(){
    var teacher = "sandyy";
    console.log(teacher);//sandy
}

anotherteacher();



console.log(teacher);//sarfraj

