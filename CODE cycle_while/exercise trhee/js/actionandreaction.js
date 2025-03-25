/*
    Name exercise: actionandreaction-WHILE
    Description: Write a force and calculate the equivalent force, calculate the total and end if the force is 0 and the times of the procedure.
    Author: J.ACOSTA 
    Date: March 16th 2025

*/
let actionForce = 0;
actionForce = parseFloat(prompt("Write the action force (equal to 0 to exit): "));
let forceTotal = 0;
let count = -1;
let reactionForce;

while (actionForce !== 0) {
    count++;

    reactionForce = actionForce * -1;
    forceTotal += actionForce;

    console.log("Reaction force: " + reactionForce);

    actionForce = parseFloat(prompt("Write the action force (equal to 0 to exit): "));
}

console.log("Total force: " + forceTotal);
console.log("Number of procedures: " + count);
