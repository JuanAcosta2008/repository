/*
	Name exercise: Motion Simulation
	Description: Calculate how much distance an object travels
	Autor: J.ACOSTA
	Date: march 15th 2025
*/

let mass = parseFloat(prompt("Enter the mass of the object (kg):"));
let force = parseFloat(prompt("Enter the applied force (N):"));

let speed = 0;
let totalDistance = 0;
let seconds = 0;
let time = 15;
let aceleration = 0;

if (force === 0) {
    console.log("The object remains at rest.");
} else {
    aceleration = force / mass;

    while (force >= 0) {
        speed = force / mass;
        speed += aceleration * time;
        totalDistance += speed * time;
        seconds += 1;

        console.log(`Moving time: ${seconds} s`);
        console.log(`Current speed: ${speed.toFixed(2)} m/s`);
        console.log(`Total distance traveled: ${totalDistance.toFixed(2)} m`);

        force = parseFloat(prompt("Enter the applied force (N) - Negative to exit:"));
        if (force < 0) break;
    }
}
