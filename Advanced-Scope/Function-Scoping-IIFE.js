// immediatley-invoked-function-expression

var teacher = "sarfraj";

//this IIFE is anonymous :(

(function(teacher){
    console.log(teacher); //sandy
})("sandy")

console.log(teacher);//sarfraj




// var teacher;
// try {
//     teacher = fetchTeacher(1);
// }
// catch (err){
//     teacher = "sarfraj";
// }

var teacher = (function getTeacher(){
    try {
        return fetchTeacher(1);
    }
    catch (err){
        return "sarfraj";
    }
})();


