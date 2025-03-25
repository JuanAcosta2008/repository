/*
	Name exercise:paralel force
	Description:Calculate the paralel force of and object in diferent inclined planes  
	Autor:J.ACOSTA
	Date: 15th march 2025
*/

let thetaNumber, parallerForce, mass, gravity, numberRange, iteration;

gravity = 9.81;
numberRange = parseInt(prompt("Enter number of calculations:"));

for(iteration = 1; iteration <= numberRange; iteration++) {
    mass = parseFloat(prompt(iteration + ". Enter mass:"));
    thetaNumber = parseFloat(prompt(iteration + ". Enter angle (degrees):"));
    parallerForce = mass * gravity * Math.sin(thetaNumber * Math.PI / 180);
    console.log("Parallel force:", parallerForce.toFixed(2));
}
