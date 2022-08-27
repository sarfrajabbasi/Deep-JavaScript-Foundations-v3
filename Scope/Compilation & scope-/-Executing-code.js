
// outer scope(global scope) is red bucket

var teacher = "sarfraj";//red marbale

function otherClass(){//another red marbale // and blue buckets
    var teacher = "lola";//blue marbale
    console.log("Welcome")
}

function ask (){//another red marbale //green bucket
    var quesion = "why"//green marble
    console.log(quesion);
}

otherClass();//welcome!
ask();//why


// ----------------

var teacher = "sarfraj";
//complier handel     //excution handle
// they are two saparate thing

function otherClass(){
    var teacher = "lola";
    console.log("Welcome")
}

function ask (){
    var quesion = "why"
    console.log(quesion);
}

otherClass();
ask();