var teacher = "sarfraj";

{
    let teacher = "sandy";
    console.log(teacher);//sandy

}

console.log(teacher);//sarfraj

function diff(x,y){
    if(x > y){
        let tmp = x;
        x = y;
        y = tmp;
    }

    return y - x;
}

function repeat(fn,n){
    var result;

    for(var i = 0; i < n ; i++){
        result = fn ( result, i);
    }
    return result;
}


function lookupRecord(searchStr){

try {
    var id = getRecord(searchStr);
}
catch(err){
    var id = -1;
}

return id;

}