// preserving access to variablea not value

var teacher = "sarfraj";

var myteacher = function(){
    console.log(teacher);
};

teacher = "sandy";

myteacher();

for(var i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log(`i : ${i}`)
    },i *1000)
}

// O/P :--------

// i : 4
// i : 4
// i : 4

// use nanother var

for(var i = 1; i <= 3; i++){
    let j = i;
    setTimeout(function(){
        console.log(`i : ${j}`)
    },i *1000)
}
// O/P :--------

// i : 1
// i : 2
// i : 3


for(let i = 1; i <= 3; i++){

    setTimeout(function(){
        console.log(`i : ${i}`)
    },i *1000)
}


// O/P:-------------

// i : 1
// i : 2
// i : 3
