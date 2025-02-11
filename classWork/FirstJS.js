function multiply(numberOne, numberTwo) {
	return numberOne * numberTwo;
};

function addTwoNumbers(numberOne, numberTwo) {
  let answer = numberOne + numberTwo;
  return answer;
};

function divide(numberTwo, numberOne) {
  let answer = numberTwo / numberOne;
  return answer;
};

const getOddNumbers = (arr) => {
	let newArray = [];
	let count = 0;
	for (index in arr) {
		if (arr[index] % 2 != 0) {
			newArray[count++] = arr[index];
		}
	} return newArray;
};


module.exports = {multiply, addTwoNumbers, divide, getOddNumbers};