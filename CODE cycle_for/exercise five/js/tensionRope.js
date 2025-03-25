/*
	Name exercise: tension of a rope
	Description: Calculate certain amount of tensions of different masses in a rope
	Autor: J.ACOSTA
	Date: 16th march 2025
*/
let tension, mass, gravity, counter, n;

gravity = 9.81;
n = parseInt(prompt("Enter number of calculations:"));

for(counter = 1; counter <= n; counter++) {
    mass = parseFloat(prompt(counter + ". Enter mass:"));
    tension = mass * gravity;
    console.log("Tension:", tension);
}
