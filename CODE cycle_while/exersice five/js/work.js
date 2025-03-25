/*
	Name exercise: Work Machine
	Description: Calculate work with force and distance
	Autor: J.ACOSTA
	Date: march 15th 2025
*/

let force = 0, distance = 0, totalWork = 0;
let counter = 0;

while (true) {
    let forceInput = prompt("Enter the applied force (N):");
    let distanceInput = prompt("Enter the distance traveled (m):");

    if (forceInput === null || distanceInput === null) {
        console.log("Program canceled by user.");
        break;
    }

    force = parseFloat(forceInput);
    distance = parseFloat(distanceInput);

    if (isNaN(force) || isNaN(distance)) {
        console.log("Invalid input. Please enter numeric values.");
        continue;
    }

    if (distance < 0) {
        console.log("Program finished.");
        break;
    }

    let work = force * distance;
    totalWork += work;
    counter++;

    console.log(`Work done: ${work.toFixed(2)} J`);
    console.log(`Total work accumulated: ${totalWork.toFixed(2)} J`);
    console.log(`Number of calculations performed: ${counter}`);
}

