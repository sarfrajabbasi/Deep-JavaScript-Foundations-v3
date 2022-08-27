// Equality : prefers numeric comparison-----

var workshopEnrollments1 = 16;
var workshopEnrollments2 = workshop2Elem.value;

if(Number(workshopEnrollments1) === Number(workshopEnrollments2)){
    // ...
}

// ask : what do we know about the types here ?

if(workshopEnrollments1 == workshopEnrollments2){
    // ..
}


var workshop1Count = 42;
var workshop2Count = [42];

if(workshop1Count == workshop2Count){
    // yep (hmm...)
}

// whats happening upper part  i will  show you----

var workshop1Count = 42;
var workshop2Count = [42];

// if (workshop1Count == workshop2Count){
//     // if(42=="42"){
//         //if(42===42){

//         }
//     }
// }

if(true){
    // yep (hmm...)
}

// == summery

// if the types are the same : ===
// if null or undefined : equal
// if non-primitives : ToPrimitve
// Prefer :TONumber


