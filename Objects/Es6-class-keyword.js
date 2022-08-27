class workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new workshop("sarfraj");
var reactJS = new workshop("sandy");

deepJS.ask("Is 'class' a class?");
// sarfraj Is 'class' a class?

reactJS.ask("Is this class ok?");
// sandy Is this class ok?

// EXTENDS clouse:--

// extend one class to another

// class workshop{
//     constructor(teacher){
//         this.teacher = teacher;
//     }
//     ask(question){
//         console.log(this.teacher,question);
//     }
// }

class AnotherWorkshop extends workshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

var JSRecentParts = new AnotherWorkshop("sarfraj");

JSRecentParts.speakUp("are classes getting better?");
// sarfraj are classes getting better?

// you can invoke  that method exactly like object

// Super KEyword----------------
//
// relative polymorphism

// this is an example of extension beyond syntactic sugar because prior to ES6 classes, there was essentially no way to do relative polymorphism. There was no equivalent of the super keyword.

class AnotherWorkshop extends workshop {
  ask(msg) {
    super.ask(msg.toUpperCase());
    // super keyword in it, which allows you to do relative polymorphism. If you have a child class that defines a method of the same name as a parent class, so called shadowing. If you have one that defines the same method name in a child as in the parent.you can refer to the parent from the child by saying (super.)
  }
}

var JSRecentParts = new AnotherWorkshop("sarfraj");

JSRecentParts.ask("are classes getting better?");
// sarfraj ARE CLASSES SUPER?

// ES6 classes : Dynamic (this)--------

// still doesn't change anything fundamentally in how function work or this keyword get bound.
// use in timeout it's gonna loose it's binding

class workshop {
  constructor(teacher) {}
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new workshop("sarfraj");

setTimeout(deepJS.ask, 100, "still losing 'this'? ");
// undefined Still losing 'this'?
// there is no auto bound

// INSTEAD-----------
// instead of defining a method on a prototype,we added in constructor and use a hardbound method or arrow function
//  ES6 classes : fixing 'this';
class workshop {
  constructor(teacher) {
    this.ask = (question) => {
      //use lexical this
      console.log(this.teacher, question);
    }; //it's no longer protoype anymore,it's your instance;
  }
}

var deepJS = new workshop("sarfraj");

setTimeout(deepJS.ask, 100, "still losing 'this'? ");
// sarfraj Is 'this' fixed?

// you create real terrible version of module(ugly version of module)
