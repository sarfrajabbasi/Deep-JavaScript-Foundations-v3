function lookupRecord(searchStr){
    try{
        var id = getRecord(searchStr);
    }
    catch(err){
        var id  = -1;
    }
    return id;
}

function formatStr(str){
    let prefix,rest;

    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
    if(/^FOO:/.test(str)){
        return str;
}

return str.slice(4);

}
