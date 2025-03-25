/*
	Name exercise: Forces for
	Description: Calculates a certein amount of forces with different masses and accelerations.
	Autor: J.ACOSTA

	Date: march 15th 2025
*/

let mass;
let acceleration;
let force;
let n = parseInt(prompt("Enter number of calculations to perform:"));
let i;

for (i = 1; i <= n; i++) {
    mass = parseFloat(prompt("Enter the mass:"));
    acceleration = parseFloat(prompt("Enter the acceleration:"));
    force = mass * acceleration;
    console.log("The force is: " + force);
}
