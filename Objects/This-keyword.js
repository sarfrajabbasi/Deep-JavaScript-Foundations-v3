function ask(question){
    console.log(this.teacher,question);
}

function otherClass(){
    var myContext = {
        teacher : "sandy"
    };
    ask.call(myContext,"why?");//sandy why?
}

otherClass();