// # `this`

// In this exercise, you will refactor some code that manages student enrollment records for a workshop, from the module pattern to the namespace pattern using the `this` keyword.

// ## Instructions

// 1. Remove the `defineWorkshop()` module factory, and replace it with an object literal (named `deepJS`) that holds all the module's functions, as well as the `currentEnrollment` and `studentRecords` data arrays.

// 2. Change all internal function references and references to the data  arrays to use the `this` keyword prefix.

// 3. Make sure any place where a `this`-aware callback is passed is hard-bound with `bind(..)`. Don't `bind(..)` a  function reference if it's not `this`-aware.



var deepJS = {
	currentEnrollment : [],
    studentRecords :[],
// any place when we reference property that we were referencing lexically as variable or we refernce a function that's now a method.need this . 
	 addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	},

	 enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	},

	 printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	},

	 enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	},

	 remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	},

	 getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);

		// *************************

		 function matchId(record) {
			return (record.id == studentId);
		}
	},

	 printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(this.sortByNameAsc);

		records.forEach(this.printRecord);
	},

	 sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},

	 printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},

	 paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},

	 needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	},

	 getStudentId(record) {
		return record.id;
	},

	 remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	},

	 notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	},
}


// ********************************

deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

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
// hat's the rule for binding this? Cuz sometimes it's using it and sometimes it isn't.
// >> Kyle Simpson: Yeah, that's actually a good question.

// [00:07:53]
// So there's a couple of places. I'm glad you brought that up, there's a couple of places I should have gone back and said, do we actually need it? So for example, the sortByName, we don't need it because it doesn't make a reference to a this dot in front of it.

// [00:08:06]
// So here, that was actually unnecessary, and the same thing with printRecord. It was unnecessary there because we don't have any this references in it. So in order words, the answer to your question is, you only need to bind this if the method is a this-aware function. We have a few functions on here that are on the namespace but are not this-aware, and so they don't need a binding.
