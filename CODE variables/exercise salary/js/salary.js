/*
	Name exercise:Salary
	Description:Calculate the salary of a work paid per day and discount the health, arl and pension
	Autor:J.ACOSTA
	Date: 15th march 2025
*/

let salary;
let daysWorked = 60;
let valueDay = 80000;
let health;
let arl;
let netSalary;
let pension;

salary = daysWorked * valueDay;
health = salary * 0.12;
arl = salary * 0.052;
pension = salary * 0.16;

netSalary = salary - (health + arl + pension);




console.log("The salary is:"+ salary +", the health is: "+ health +", the arl is: "+ arl +", the pension is: "+ pension +" and the net salary is: "+ netSalary );
