/*
	Name exercise: six
	Description: Comparison of two bodies in free fall
	Autor:J.acosTA
	Date: 15th march 2025
*/

console.log("Begin");

let mass = 15;
let acceleration = 9.81;
let force;

force = mass * acceleration;

if (force >= 100) {
    console.log("Force is high");
} else {
    console.log("Force is low");
}

console.log("End");
