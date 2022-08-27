function teacher(){
 console.log("hello")

}

var myteacher = function anotherTeacher(){//these function is not declaration
    console.log(anotherTeacher);
};

console.log(teacher)
console.log(myeacher)
console.log(anotherTeacher)//reference error