/*
    Name: Area Comparison
    Description: Compares three areas and prints all comparisons
    Author: Acosta 
    Date: March/15/25
*/
let sideOne = 5;
let sideTwo = 10;
let sideThree = 15;


if (areaOne == areaTwo && areaOne == areaThree) {
    console.log("All areas are equal");
} 
else if (areaOne == areaTwo) {
    console.log("Area one and area two are greater and equal");
} 
else if (areaTwo == areaThree) {
    console.log("Area two and area three are greater and equal");
} 
else if (areaOne == areaThree) {
    console.log("Area one and area three are greater and equal");
} 
else if (areaOne > areaTwo && areaOne > areaThree) {
    console.log("Area one is the greatest");
} 
else if (areaTwo > areaOne && areaTwo > areaThree) {
    console.log("Area two is the greatest");
} 
else {
    console.log("Area three is the greatest");
}
