// delegated objects
var Workshop = {
    setTeacher(teacher){
        this.teacher = teacher;
    },
    ask(question){
        console.log(this.teacher,question);
    }
};

var Anotherworkshop = Object.assign(
    Object.create(Workshop),
    {
        speakUp(msg){
            this.ask(msg.toUppercase());
        }
    }
);

var JSRecentParts = Object.create(Anotherworkshop);
JSRecentParts.setTeacher('sarfraj');
JSRecentParts.speakUp("BUT isn't this cleaner");
// sarfraj BUT ISN"T THIS CLEANER