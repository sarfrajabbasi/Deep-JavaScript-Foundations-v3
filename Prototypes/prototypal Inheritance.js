function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher,teacher);
}


function AnotherWorkshop(teacher){
    Workshop.call(this,teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);

AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
}

var JSRecentParts = new AnotherWorkshop('sarfraj');

JSRecentParts.speakUp('It this actually inheritance');
// sarfraj IS THIS ACTUALLY INHERITANCE?

