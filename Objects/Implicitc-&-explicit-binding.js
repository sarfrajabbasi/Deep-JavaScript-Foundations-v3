// implicit binding

var workshop = {
    teacher : "sarfraj",
    ask(question){
        console.log(this.teacher,question);
    },
};

workshop.ask("what is implicit binding");
// sarfraj what is implicit binding




// this : dynamic binding-----------

function ask(question){
    console.log(this.teacher,question);
}

var workshop1 = {
    teacher : "sarfraj",
    ask : ask,
};

var workshop2 = {
    teacher : "sandy",
    ask : ask,
}

workshop1.ask("How do I share a method");
// sarfraj How do I share a method
workshop1.ask("How do I share a method");
// sandy How do I share a method


// -----------explicit binding------------

// all the same above but....

ask.call(workshop1,"can I explicitly set context?");
// sarfraj can I explicitly set context?
ask.call(workshop,"can I explicitly set context?");
// sandy can I explicitly set context?



// ----------Hard-binding---------

var workshop = {
    teacher : "sarfraj",
    ask(question){
        console.log(this.teacher,question);
    },
};

setTimeout(workshop.ask,10,"Lost this?")//not a call site so it's not invoked workshop.ask in  workshop context that's why we lost binding and get undefined
// undefined Lost this?
// cal site look like cb()

// solution
// passing hard bound function and using .bind method
// it will take away all flexibilty thing and force it only use this that we've specifed
setTimeout(workshop.ask.bind(workshop),10,"Hard bound this?")
// sarfraj hard bound this?




// If I go to the trouble to write a this aware set of code, and then most of my core sites are using the flexible dynamism, and every once in a while I have to do something like a hard binding. Then I'm getting a lot of benefits out of that system, seems like a reasonable trade-off.

// [00:08:48]
// On the other hand, if I go to all the trouble to write a this aware system and then everyone or most of my calls sites have to use not bind, that's a clue to me. I'm doing this the hard way. I should switch back and use the predictable lexical closure.

// [00:09:03]
// In other words, there's a better tool use, there's a better way to use the tool. Use what it's good at. If we want flexible dynamism, use a this keyword, if we want predictability, use closures, use lexical scope.
// >> Kyle: So just keep that in mind when you're using the .bind method.

// [00:09:24]
// Not that it is bad, not that it is evil, not that it is an anti-pattern. But if you find that happening more often than not, you're probably doing things the hard way.