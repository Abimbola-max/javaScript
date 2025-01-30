import promptSync from "prompt-sync";
const prompt = promptSync();

//6.1
/**
function getPantagonalNumber(number) {
	let numbers = number * ((3 * number) - 1) / 2;
	return numbers;
}
console.log("The first task answers are below");
console.log(getPantagonalNumber(1));
console.log(getPantagonalNumber(2));
console.log(getPantagonalNumber(3));
console.log(getPantagonalNumber(4));


//6.2

function sumDigits(digit) {
	let total = 0;
	while (digit != 0) {
		let remainder = digit % 10;
		total += remainder;
		digit = Math.trunc(digit / 10);
	}
	return total;
}

console.log("The second task answers are below");
let digit = prompt("Enter a number: ");
console.log(sumDigits(digit));



//6.3

function reverse(number) {
	let reversedNumber = 0;
  	let numberStorage = number;
  	while (numberStorage != 0) {
    		let digit = numberStorage % 10;
    		reversedNumber = reversedNumber * 10 + digit;
    		numberStorage = Math.floor(numberStorage / 10);
  	}

  	return reversedNumber;

}

function isPalindrome(number){
	let reversed = reverse(number);
 	return number === reversed;
}

console.log("The third task answers are below");
let number = prompt("Enter a number: ");
console.log(reverse(number));
console.log(isPalindrome(number));


//6.4

function reversed(integer) {
	let reversedNumber = 0;
  	let numberStorage = integer;
  	while (numberStorage != 0) {
    		let digit = numberStorage % 10;
    		reversedNumber = reversedNumber * 10 + digit;
    		numberStorage = Math.floor(numberStorage / 10);
  	}

  	return reversedNumber;

}
console.log("The fourth task answers are below");
let integer = prompt("Enter a number: ");
console.log(reverse(integer));



//6.5

function displaySortedNumbers(firstNumber, secondNumber, thirdNumber) {

	let smallest = 0;
	let middle = 0;
	let largest = 0;

	if (firstNumber < secondNumber && firstNumber < thirdNumber) {
		smallest = firstNumber;
	} else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
  		smallest = secondNumber;
	} else {
  		smallest = thirdNumber;
	}

	if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  		largest = firstNumber;
	} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  		largest = secondNumber;
	} else {
  		largest = thirdNumber;
	}

	middle = (firstNumber + secondNumber + thirdNumber) - smallest - largest;

	return [smallest, middle, largest];
}

console.log("The fifth task answers are below");
let firstNumber = parseInt(prompt("Enter first number: "));
let secondNumber = parseInt(prompt("Enter second number: "));
let thirdNumber = parseInt(prompt("Enter third number: "));
console.log(displaySortedNumbers(firstNumber, secondNumber, thirdNumber));
*/

//6.6
//function displayPattern(number) {

let number = prompt("Enter a number: ");
	for (let count = 1; count <= number; count++) {
		for(let counter = 1; counter <= count; counter++) {
			console.log("");
		console.log(count + "" + counter);
		};
		
	};


  





