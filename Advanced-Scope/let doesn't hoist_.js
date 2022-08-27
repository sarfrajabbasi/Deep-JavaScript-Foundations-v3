// "let doesn't hoist ?" //false

{teacher = "sarfraj"; //TDZ error
let teacher;
}

var name = "sarfraj";
{
    console.log(name);// TDZ error
    let name = "sandy";
}