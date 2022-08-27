var workshop = {//it's not a scope
    teacher : "sarfraj",
    ask: (question) => {
        console.log(this.teacher,question);//arrow function go up level to global not object.
    },
};//there is only two scope here ask scope or global scope

workshop.ask("what happend to  'this'?");
// undefined what happend to 'this'?

workshop.ask.call( workshop,"still no  'this'?");
