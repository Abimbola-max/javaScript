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
    let
        answer = numbers.map((number, index) => number + index);
    return answer;
}

function isOdd(number) {
    let answer = number % 2 !== 0
    return answer;
}

function getOddNumbers2(numbers) {
    return numbers.filter(isOdd)
}
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(getOddNumbers2(numbers)); // using the call back function

function getWordsGreaterThanFourLetters(words) {
    return words.filter((word) => word.length > 4);
}

function objectsWithAgeGreaterThanTwenty(students) {
    return students.filter(student => student.age > 20)
}


module.exports = {getDoubledNumbers, getEvenNumbers, getOddNumbers, getOddNumbers1, addThreeNumbers, addIndexToElement, getWordsGreaterThanFourLetters, objectsWithAgeGreaterThanTwenty};