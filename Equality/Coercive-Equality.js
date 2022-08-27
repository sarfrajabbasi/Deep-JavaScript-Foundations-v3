// like every other opertions,coercion helpful in an Equality comparison or not;

// like every other operation,do we know the types or not


// Equality :- null == undeifned--------

var workshop1 = {topic : null};
var workshop2 = {};

if(
    (workshop1.topic === null || workshop1.topic === undefined) && (workshop2.topic === null || workshop2.topic === undefined)
){
// ....
}

// instead do this:---

if(
    workshop1.topic == null &&
    workshop2.topic == null
){
// ...
}


