function Workshop(teacher){
    this.teacher = teacher;

}

Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};

var deepJS = new Workshop("sarfraj");

deepJS.ask = function(question){
    this.ask(question.toUpperCase());
    // this.__proto__.ask(this,question.toUpperCase());

};

deepJS.ask("Oop, is this infinite recursion");

