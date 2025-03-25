/*
	Name exercise:Gun recoil
	Description:Calculate the recoil of a gun
	Autor:Johan Smith Santamaria
	Date: 15th march 2025
*/

let gunbulk = 3;
let bulletbulk = 0.3;
let bulletvelocity = 300;
let recoilvelocity;

recoilvelocity = (bulletbulk * bulletvelocity)/gunbulk;

console.log("Rhe gun recoil is :" + recoilvelocity);
