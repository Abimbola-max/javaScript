const ps = require("prompt-sync")
const prompt = ps();


console.log("Hello World")

let numberOne = "5"

Number(numberOne)

console.log(numberOne) 

let myName = "Abimbola"

let age = 24

console.log(myName)

let firstNumber = 6
let secondNumber = 8

let total = firstNumber + secondNumber

console.log("The total is " + total)

let firstRemainder = secondNumber % firstNumber

console.log("The remainder is " + firstRemainder)

let temperature = prompt("Enter temperature: ");

if (temperature > 30) {
	console.log("Too hot!!");

} else if (temperature < 30) {
	console.log("Too low!!");
	
} else {
	console.log("Normal.");
}

let yourName;
do {
	yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);
 





