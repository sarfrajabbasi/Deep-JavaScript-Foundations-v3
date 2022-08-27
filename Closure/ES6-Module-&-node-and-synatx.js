// ES6 module
worksShop.mjs

var teacher = "sarfraj";
export default function ask(question){
    console.log(teacher,question)
};

// ES6 Module syntax:-
// bring module into your syntax(to import (them)

// two major style of import

// name import syntax
// namespace import

var teacher = "sarfarj";
export default function ask (question){
    console.log(teacher,question);
};

import ask from "workshop.mjs";

ask("It's   default import, right?");
// sarfraj It's a default import, right?


import * as workshop from "workshop.mjs"

workshop.ask("It's a namespace import, right?")