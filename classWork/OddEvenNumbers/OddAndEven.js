function getOddAndEvenNumbers(numbers) {
    return numbers.map(number => (number % 2 === 0) ? 1 : 0)
}

module.exports = getOddAndEvenNumbers;