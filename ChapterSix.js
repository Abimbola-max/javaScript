import promptSync from "prompt-sync";
const prompt = promptSync();


//6.1

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
console.log(sumDigits(234));



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
