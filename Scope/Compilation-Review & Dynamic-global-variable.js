var teacher = "sarfraj";
function otherClass(){
    teacher = "sandy";
    topic = "Sad";
    console.log("Welcome");

}

otherClass();//welcome
teacher;//sandy
topic;//sad//coz of auto global scope

