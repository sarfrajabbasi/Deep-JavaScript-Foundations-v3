var teacher = "sarfarj";
function otherClass(){
    var teacher = "sandy";

    function ask(question){
        console.log(teacher,question);
    }

    ask("why?");
}

console.log(otherClass());
ask("????");//reference error