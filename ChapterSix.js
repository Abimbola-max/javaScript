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