// creating hard-bound methods on classes
class Foo {
    constructor(x) { this.foo = x; }
    hello() { console.log(this.foo); }
 }
 
 class Bar extends Foo {
   constructor(x) { super(x); this.bar = x * 100; }
   world() { console.log(this.bar); }
 }
 
 bindMethods(Foo.prototype);
 bindMethods(Bar.prototype);
 
 var x = new Foo(3);
 x.hello();  // 3
 setTimeout(x.hello,50);   // 3
 
 var y = new Bar(4);
 y.hello();  // 4
 y.world();  // 400
 setTimeout(y.hello,50);   // 4
 setTimeout(y.world,50);   // 400


// ES6 classes: hactastrophy-----------

var method = (function defineMethod(){
    var instances = new WeakMap();
 
    return function method(obj,methodName,fn) {
       Object.defineProperty(obj,methodName,{
          get() {//getter is acting like a proxy to automatically vend these hard  bound or auto hard bound functions for you.  
             if (!instances.has(this)) {
                instances.set(this,{});
             }
             var methods = instances.get(this);
             if (!(methodName in methods)) {
                methods[methodName] = fn.bind(this);
             }
             return methods[methodName];
          }
       });
    }
 })();
//  so you get the benefit of having a function on the prototype that can be inherited. But every time you access it as a context dot, you're gonna get a hard bound version of it.
 function bindMethods(obj) {
    for (let ownProp of Object.getOwnPropertyNames(obj)) {
       if (typeof obj[ownProp] == "function") {
          method(obj,ownProp,obj[ownProp]);
       }
    }
 }


//  ES6 class:inheritable hard this-bound methods--------

class workshop{
    constructor(teacher){
        this.teacher = teacher;
    }

    ask(question){
        console.log(this.teacher,question);
    }
}

class AnotherWorkshop extends workshop{
    speakup(msg){
        this.ask(msg);
    }
}

var JSRecentParts = new AnotherWorkshop("sarfraj");

bindMethods(workshop.prototype);
bindMethods(AnotherWorkshop.prototype);//bind Methods

JSRecentParts.speakup("what's different here?");
// sarfraj what's different here?
setTimeout(JSRecentParts.speakup,100,"oh! nut does this feel gross?")
// sarfraj oh! nut does this feel gross?