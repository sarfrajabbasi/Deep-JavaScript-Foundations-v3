var myAge = Number("0o46")//38
var myAge = Number("39")//39
var myAge = Number("n/a")//NaN
var myAge = 'my son s age';

myCateAge === myCateAge;  //flase oops!

isNaN(myAge)//false
isNaN(myCateAge)//true
isNaN("my son's age")//true oops

Number.isNaN(myCateAge);//true
Number.isNaN("my son's age");//false


// NaN : Invalid Number

// don't:undefined
// don't:null
// don't:false
// don't:-1
// don't:0