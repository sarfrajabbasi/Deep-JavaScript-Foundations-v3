var ids = people.map(person => person.id);

var ids = people.map(function getId(person){
    return person.id;
})

// promise chains

getPerson()

.then(person => getData(person.id))
.then(renderData);
getPerson()
.then(function getDataFrom(person){
    return getData(person.id);
})
.then(renderData);


var getId = person => person.id;
var ids = people.map(getId);

// *****************

var getDataFrom = person => getData(person.id);
getPerson()
.then(getDataFrom)
.then(renderData);