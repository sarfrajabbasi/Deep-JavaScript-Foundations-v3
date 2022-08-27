// ## Instructions (Part 2)

// Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.

// For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.

// As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).


var getStudentsFromId = studentId => 
studentRecords.find(
    record => record.id == studentId
);
var printRecords = recordIds => 
recordIds.map(getStudentsFromId).sort(
    (record1,record2) => (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1 : 0
)
.foreach(record = console.log(`${record.name} ${record.id} ${record.paid ? "paid" : "not paid"}`))


var paidStudentsToEnroll = () => [
    ...currentEnrollment,
    ...(
        studentRecords.filter(
            record => (record.paid && !currentEnrollment.includes(record.id))
        ).map(record => record.id)
    )
];
var remindUnpaid = recordIds => printRecords( 
    recordIds.filter( 
    studentId => !getStudentById(studentId).paid
    )
    );
// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/