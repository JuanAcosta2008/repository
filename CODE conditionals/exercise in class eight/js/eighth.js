/*
	Name exercise: Acceleration
	Description: Calculate the acceleration of an object subjected to a force
	Autor:J.ACOSTA
	Date: 15th march 2025
*/
let acceleration;
let mass = 10;
let force = 15;

acceleration = force / mass;

console.log("The acceleration is: " + acceleration);

if (acceleration >= 5) {
    console.log("The acceleration is high");
} else {
    console.log("The acceleration is low");
}
