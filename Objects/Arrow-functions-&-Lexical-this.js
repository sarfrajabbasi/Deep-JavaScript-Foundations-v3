var workshop ={
    teacher : "sarfraj",
    ask(question){//enclosing scope ask
        setTimeout(() => {
            console.log(this.teacher,question);
        },100);
    },
};

workshop.ask("Is this lexical 'this'?");//the this keyword point out inside of ask.coz ask function get set by the call site.
// that parent scope that had a this keyword pointing at the workshop object.that what we mean by lexical this.it's not hard bound function.
// it's a function that doesn't have this at all.so its resolve lexcially.
// sarfraj Is this lexical 'this'?