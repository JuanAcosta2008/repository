/*
	Name exercise: five
	Description: Determine the force of an object and compare it to a limit
	Autor:J.ACOSTA
	Date: 15th march 2025
*/


let mass = 8;
let acceleration = 10;
let force;

force = mass * acceleration;

console.log("The force is: " + force);

if (force >= 100) {
    console.log("Force is high");
} else {
    console.log("Force is low");
}
