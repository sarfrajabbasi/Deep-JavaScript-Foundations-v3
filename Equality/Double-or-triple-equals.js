var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollments1 = 16;
var workshopEnrollments2 = workshopEnrollments1 + 0;


studentName1 == studentName2;  //True
studentName1 === studentName2;  //True

workshopEnrollments1 == workshopEnrollments2; //True
workshopEnrollments1 === workshopEnrollments2; //True

var worrkshop1 = {
    name : "Deep JS Foundations"
    //Nope
};

var worrkshop2 = {
    name : "Deep JS Foundations"
    //Nope
}

// == allows coercion(type Different)
// === disallows coercion(type same)


