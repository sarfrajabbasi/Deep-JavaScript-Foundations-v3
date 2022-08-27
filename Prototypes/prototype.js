// Prototype Class

function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};

var deepJS = new Workshop("sarfraj");
var reactJS = new Workshop("sandy");

console.log(deepJS.ask("Is 'prototype'a class?"));
// sarfraj Is 'prototype'a class?
console.log(reactJS.ask("Isn't 'prototype' ugly?"));
// sandy Isn't 'prototype' ugly?

deepJS.constructor === Workshop;

deepJS.__proto__ === Workshop.prototype; //true

Object.getPrototypeOf(deepJS) === Workshop.prototype; //true