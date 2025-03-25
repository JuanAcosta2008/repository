/*
	Name exercise: Three numbers
	Description: Compare three numbers and say whats greater
	Autor:J.acosta 
	Date: 15th march 2025
*/

let numberOne = 20;
let numberTwo = 5;
let numberThree = 20;



if (numberOne == numberTwo && numberTwo == numberThree) {
    console.log("All numbers are equal");
} 
else if (numberOne > numberTwo && numberTwo == numberThree) {
    console.log(numberOne + " is greater and " + numberTwo + " and " + numberThree + " are equal");
} 
else if (numberTwo > numberOne && numberOne == numberThree) {
    console.log(numberTwo + " is greater and " + numberOne + " and " + numberThree + " are equal");
} 
else if (numberThree > numberOne && numberOne == numberTwo) {
    console.log(numberThree + " is greater and " + numberOne + " and " + numberTwo + " are equal");
} 
else if (numberOne == numberTwo && numberOne > numberThree) {
    console.log(numberOne + " and " + numberTwo + " are equal and greater than "+ numberThree);
} 
else if (numberOne == numberThree && numberOne > numberTwo) {
    console.log(numberOne + " and " + numberThree + " are equal and greater than "+ numberTwo);
} 
else if (numberTwo == numberThree && numberTwo > numberOne) {
    console.log(numberTwo + " and " + numberThree + " are equal and greater than "+ numberOne);
} 
else if (numberOne > numberTwo && numberTwo > numberThree) {
    console.log(numberOne + " is greater than " + numberTwo + " is greater than " + numberThree);
} 
else if (numberOne > numberThree && numberThree > numberTwo) {
    console.log(numberOne + " is greater than " + numberThree + " is greater than " + numberTwo);
} 
else if (numberTwo > numberOne && numberOne > numberThree) {
    console.log(numberTwo + " is greater than " + numberOne + " is greater than " + numberThree);
} 
else if (numberTwo > numberThree && numberThree > numberOne) {
    console.log(numberTwo + " is greater than " + numberThree + " is greater than " + numberOne);
} 
else if (numberThree > numberOne && numberOne > numberTwo) {
    console.log(numberThree + " is greater than " + numberOne + " is greater than " + numberTwo);
} 
else {
    console.log(numberThree + " is greater than " + numberTwo + " is greater than " + numberOne);
}


