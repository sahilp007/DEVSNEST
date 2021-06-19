// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

console.log(student)
console.log(student.name)
console.log(student.sclass)
console.log(student.rollno)
console.log(student.name, student.rollno)


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

console.log(student)
delete (student.rollno)
console.log(student)

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

console.log(Object.keys(student).length)

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},

	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},

	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}
];

console.log(" Is ", library[0].title, 'read? ', library[0].readingStatus)
console.log(" Is ", library[1].title, 'read? ', library[1].readingStatus)
console.log(" Is ", library[2].title, 'read? ', library[2].readingStatus)


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

cy = {
	pie: Math.PI,
	rad: 12,
	hei: 2,
	w: 1
}
let v = ((cy.pie) * (cy.hei) * (cy.rad) * (cy.rad))
console.log(v.toFixed(4))