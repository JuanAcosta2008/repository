/*
	name exercise: first
	description: Compare the areas of three squares
	Autor: J. ACOSTA 
	Date: 15th march 2025
*/

let sideOne = 2;
let sideTwo = 6;
let sideThree = 5;

let areaOne;
let areaTwo;
let areaThree;

areaOne = sideOne*sideOne;
areaTwo = sideTwo*sideTwo;
areaThree = sideThree*sideThree;

if (areaOne == areaTwo && areaTwo == areaThree) {
	console.log("All areas are equal");
}
else if (areaOne > areaTwo && areaOne > areaThree) {
	console.log(areaOne+ " is greater");
}
else if (areaTwo > areaOne && areaTwo > areaThree) {
	console.log(areaTwo+ " is greater");
}
else if (areaThree > areaOne && areaThree > areaTwo) {
	console.log(areaThree+ " is greater");
}
else if (areaOne == areaThree && areaOne > areaThree) {
	console.log(areaOne+ " and " +areaTwo+ " are greater")
}
else if (areaOne == areaThree && areaOne > areaTwo) {
	console.log(areaOne+ " and " +areaThree+ " are greater")
}
else {
	console.log(areaTwo+ " and " +areaThree+ " are greater")
}