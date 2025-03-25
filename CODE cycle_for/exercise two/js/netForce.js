/*
	Name exercise: net forces - first Newton's law
	Description: calculate certain amount of net forces and says if the object is accelerating or no.
	Autor: J.ACOSTA
	Date: march 16th 2025
*/


let n = parseInt(prompt("Enter number of calculations:"));
let counter = 1;

for(counter = 1; counter <= n; counter++) {
    let mass = parseFloat(prompt(counter + ". Enter mass (kg):"));
    let acceleration = parseFloat(prompt(counter + ". Enter acceleration (m/s²):"));
    let force = mass * acceleration;

    console.log(`Force: ${force.toFixed(2)} N`);

    if(force === 0) {
        console.log("Object at rest");
    } else {
        console.log("Object in motion");
    }
}
