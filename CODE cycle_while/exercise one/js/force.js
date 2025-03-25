/*
    Name exercise: FORCE-WHILE
    Description: Write a bulk and aceleration for calculate the force, calculate the total and end if bulk or aceleration is negative
    Author: J.ACOSTAA
    Date: March 16th 2025
*/
let mass = 0;
let acceleration = 0;
let totalForce = 0;
let force = 0;
let counter = 0;

while (mass >= 0 && acceleration >= 0) {
    mass = parseFloat(prompt("Enter mass (negative to exit): "));
    if (mass < 0) break;
    
    acceleration = parseFloat(prompt("Enter acceleration (negative to exit): "));
    if (acceleration < 0) break;
    
    force = mass * acceleration;
    totalForce += force;
    counter++;
    
    console.log("Current force: " + force);
}

console.log("Total calculated forces: " + totalForce);
console.log("Calculations performed: " + counter);
