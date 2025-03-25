/*
	Name exercise: fourth
	Description: Calculate the final grades
	Autor:J. ACOSTA 
	Date: 15th march 2025*/

let gradeOne = 3.0;
let gradeTwo = 4.5;
let gradeThree = 2.5;
let finalGrade;

gradeOne = gradeOne * 0.20;
gradeTwo = gradeTwo * 0.35;
gradeThree = gradeThree * 0.45;

finalGrade = gradeOne + gradeTwo + gradeThree;

console.log("The final grade is: " + finalGrade);

if (finalGrade >= 4.5) {
    console.log("Top grade");
} else if (finalGrade >= 3.5) {
    console.log("Good grade");
} else if (finalGrade >= 3.0) {
    console.log("Regular grade");
} else {
    console.log("Bad grade");
}
