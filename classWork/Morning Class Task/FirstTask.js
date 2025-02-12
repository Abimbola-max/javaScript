function addOneToTheBackOfAnArray(numbers) {
    let addedNumber = 1;
    for (let index = numbers.length - 1; index >= 0; index--) {
        let sum = numbers[index] + addedNumber;
        addedNumber = Math.floor(sum / 10);
        numbers[index] = sum % 10;
    }
    if (addedNumber > 0) {
        numbers.unshift(addedNumber);
    }
    return numbers;
}

module.exports = addOneToTheBackOfAnArray;

