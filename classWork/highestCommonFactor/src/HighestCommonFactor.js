function getHCFOfNumbers(arrOfNumbers) {
    let divisor = 2;
    let result = [];
    for (let i = 0; i < arrOfNumbers.length; i++) {
        let counter = 0
        for (let j = 0; j < arrOfNumbers.length; j++) {
            if (arrOfNumbers[j] % divisor === 0) {
                arrOfNumbers[j] /= divisor;
                counter += 1;
            }

        }
        if (counter === arrOfNumbers.length) result.push(divisor);
        else divisor++;
    }
    return result;
}

module.exports = getHCFOfNumbers;
























