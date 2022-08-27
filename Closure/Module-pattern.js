// module pattern is not:----
// common-pattern
// nameSpace Pattren
// make-object and put your data on it:-
// put as proprerty instead of variables

var workShop = {
    teacher : "sarfraj",
    ask(question){
        console.log(this.teacher,question)
    },

};
// coz things are public so it's not a module
workShop.ask("Is this a module?")//sarfraj Is this a modlue?

// this is 100% not module
//  reason is coz module pattern required the conscept of encapsuation
// encapsulation mean hideing data and behavior.only collected togather which is what the nameSpace creates,but i need some notion of hiding (inforamtion) or some control of visibilty.

// the module is that there things are public ,that's public API and there things that are private , thats  thing that nobody  on the ouside can touch.

// even only visiblity notion is either public or private it,s still a encapsulation
// things are public are not module


// actuall module

// classic or revaling module pattern

var workShop = (function module(teacher){
    var publicAPI = {ask,};
    return publicAPI;

    // ******************

    function ask(question){
        console.log(teacher,question)
    }
})("sarfraj");

workShop.ask("It's a module, right?");
// sarfraj It's a module, right?


// also can make with regular function which called multiple time***********


function workshopModule(teacher){
    var publicAPI = {ask,}
    return publicAPI;

    // ************

    function ask(question){
        console.log(teacher,question)
    }
};

var workShop = workshopModule("sarfraj");

workShop.ask("It's a module, right?")

// sarfraj It's a module, right?

// that is the module pattern in a nutshell. The idea that I take some behavior, and data that that behavior operates on, and encapsulate it into a data structure. Hide what I don't need to show, and expose only the minimal necessary API. That's a module. And I would argue that the module pattern is certainly the most prevalent, and potentially the most important of all code organization patterns.

// [00:07:48]
// Probably 80, 90% of all JavaScript that's ever been written has used some mechanism like the module pattern as it's code organization pattern. That's not to say you don't have other patterns, like classes, for example, but the module pattern is extremely prevalent and important, and it's important that we understand how it works.




