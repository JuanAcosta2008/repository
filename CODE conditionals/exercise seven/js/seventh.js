/*
	Name exercise: seven
	Description: Calculate the friction of an object on a surface
	Autor:J.ACOSTA
	Date: 15th march 2025
*/


let frictionForce;
let objectMass = 8;
let coefficient = 0.4;
let normalForce = objectMass * 10;

frictionForce = coefficient * normalForce;

console.log("The friction force is: " + frictionForce);

if (frictionForce < 50) {
    console.log("The friction is low");
} else {
    console.log("The friction is high");
}
