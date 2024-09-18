let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true //if value is false then output is 0

console.log(typeof(score)); //1

console.log(typeof score); //2
console.log(typeof score1); //3
console.log(typeof score2); //4
console.log(typeof score3); //5
console.log(typeof score4); //6
console.log(typeof score5); //7

console.log("-------------------------------");

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)

console.log("-------------------------------");

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);
console.log(typeof valueInNumber5);

console.log(valueInNumber);
console.log(valueInNumber1);
console.log(valueInNumber2);
console.log(valueInNumber3);
console.log(valueInNumber4);
console.log(valueInNumber5);
console.log("\n");


console.log("*************************Operaions***************************");
console.log("\n");
/*

2 + 2
2 - 2
2 * 2
2 ** 3
2 / 3
2 % 3

*/

let str1 = "Hello"
let str2 = "Jithin"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+""); // never do it