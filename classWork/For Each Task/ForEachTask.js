function getDoubledNumbers(numbers) {
    let output = [];
    numbers.forEach(number => {
        let answer = number * 2;
        output.push(answer);
    })
    return output;
}

function getEvenNumbers(numbers) {
    let evenNumbers = [];
    numbers.forEach(number => {
        if (number % 2 === 0) evenNumbers.push(number);
    })
    return evenNumbers;
}

function getOddNumbers(numbers) {
    let oddNumbers = [];
    numbers.forEach(number => {
        if (number % 2 !== 0) oddNumbers.push(number);
    })
    return oddNumbers;
}

function getOddNumbers1(numbers) {
    return numbers.filter(number =>  number % 2 !== 0);
}

function addThreeNumbers(numbers) {
    let answer = numbers.map(number => number + 3)
    return answer;
}

function addIndexToElement(numbers) {
    let answer = numbers.map((number, index) => number + index);
    return answer;
}

module.exports = {getDoubledNumbers, getEvenNumbers, getOddNumbers, getOddNumbers1, addThreeNumbers, addIndexToElement};