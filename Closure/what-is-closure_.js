// closure:- a closure is a function having access to the parent scope. it preserve the data from outside.

// ==> a closure is an inner function that has access to the outer(encolsing) function's variables.

function ask(question){

    setTimeout(function waitASec(question){
        console.log(question);//reference var.
    },100);


}

ask("what is closure?");
// what is closure?

function all(question){
    return function holdYOurQuestion(){
        console.log(question);
    };
}


var myQuestion = all("what is closure");

console.log(myQuestion());