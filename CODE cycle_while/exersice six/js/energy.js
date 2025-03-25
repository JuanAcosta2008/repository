/*
	Name exercise: gravityPotentialEnergy Potential Gravity
	Description: Calculate potential energy grativy
	Autor: J.ACOSTA 
	Date: march 15th 2025
*/

const gravity = 9.81;
let mass, height, total = 0;
let counter = 1;

while (true) {
    height = parseFloat(prompt("Enter the height of the object (m):"));

    if (height >= 0) {
        mass = parseFloat(prompt("Enter the mass of the object (kg):"));
        let epg = mass * gravity * height;
        total = total + epg;
        counter = counter + 1;

        console.log(`Total EPG: ${total.toFixed(2)} J`);
        console.log(`Number of calculations performed: ${counter}`);
    } else {
        console.log("Program finished.");
        break;
    }
}
