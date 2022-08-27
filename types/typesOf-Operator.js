var v;
console.log(typeof v);//'undefined

var v= '1';
console.log(typeof v);//'String'

var v= 2;
console.log(typeof v);//'number'

var v= true;
console.log(typeof v);//'boolean'

var v= {};
console.log(typeof v);//'Object'

var v= Symbol();
console.log(typeof v);//'symbol'

console.log(typeof doesntExist);//'undefined'

var v= null;
console.log(typeof v);//'Object'

var v= function(){};
console.log(typeof v);//'function'

var v= [1,2,3];
console.log(typeof v);//'Object'

// coming soon!
var v =42n;
// or:BigInt(42)
console.log(typeof v);//'BigINt'
