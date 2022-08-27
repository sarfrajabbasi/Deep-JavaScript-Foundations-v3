 var workshop = {
     teacher : "sarfraj",
     ask : function ask(question){
         console.log(this.teacher,question);
     },
 };

 new (workshop.ask.bind(workshop))("what does this do?");
//  undeifned what does this do?

// on line 9 i have all three invoke the function with new keyword.three rule match on call site.

// 