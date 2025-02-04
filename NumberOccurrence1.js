function occurrence(numbers) {
	
	let output = {};
	for(let count = 0; count < numbers.length; count++) {
		let countIndex = 0;
		for(let counter = 0; counter < numbers.length; counter++) {
			if (numbers[count] == numbers[counter]) countIndex++;
		}
		output[numbers[count]] = countIndex;
	}
	return output
}

let numbers = [1,2,2,3,5,6];
console.log(occurrence(numbers));