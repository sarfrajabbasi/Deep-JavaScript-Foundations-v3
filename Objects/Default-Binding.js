var teacher = "sarfraj";

function ask(question){
    console.log(this.teacher,question);
    // don't have context object,dot call,dot bind ,new. doesn't match any other rules then it's fallback is defined in the spec,in non-strict mode,default to goal.
}

function askAgain(question){
    "use strict";
    console.log(this.teacher,question);
    // coz the type of  this,whatever that may be,doesn't have the teacher method or property on it? specifically in stict mode,when you invoke it with no other this bindings,the deafault behavior is to leave this undefined. so you are now trying to access a property on the undefiend value,which is type error.
}

ask("wha's the non-strict-mode default?")
// sarfraj what's the non-strict-mode default?

askAgain("what's the strict-mode-default")
// TypeError