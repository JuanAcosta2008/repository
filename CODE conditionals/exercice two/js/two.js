/*
	Name exercise: second
	Description: Determination of age of majority and average age
	Autor: j. ACOSTA 
	Date: 15th march 2025
*/

let ageOne = 19;
let ageTwo = 15;
let ageThree = 25;
let average;

if (ageOne >= 18) {
	console.log("The age is of legal age");
} else {
	console.log("The age is not of legal age");
}

if (ageTwo >= 18) {
	console.log("The age is of legal age");
} else {
	console.log("The age is not of legal age");
}

if (ageThree >= 18) {
	console.log("The age is of legal age");
} else {
	console.log("The age is not of legal age");
}

average = (ageOne + ageTwo + ageThree) / 3;

if (average >= 18) {
	console.log("The average age is of legal age");
} else {
	console.log("The average age is not of legal age");
}
