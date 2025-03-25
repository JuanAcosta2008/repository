/*
	Name exercise: Gravity
	Description: Calculate the weight of an object in different planets
	Autor: J.ACOSTA
	Date: march 16th 2025
*/

let counter;
let planet;
let gravity;
let weight;
let mass = parseFloat(prompt("Enter the mass:"));

for (counter = 1; counter <= 4; counter++) {
    if (counter === 1) {
        gravity = 9.81;
        weight = mass * gravity;
        console.log(`"earth", ${weight.toFixed(2)}`);
    } else if (counter === 2) {
        gravity = 3.7;
        weight = mass * gravity;
        console.log(`"mars", ${weight.toFixed(2)}`);
    } else if (counter === 3) {
        gravity = 24.8;
        weight = mass * gravity;
        console.log(`"jupiter", ${weight.toFixed(2)}`);
    } else {
        gravity = 1.6;
        weight = mass * gravity;
        console.log(`"moon", ${weight.toFixed(2)}`);
    }
}
