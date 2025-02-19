function getHCFOfNumbers(arrOfNumbers) {
    let divisor = 2;
    let result = [];
    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] === 0) {
            break;

        }
        for (let j = 0; j < arrOfNumbers.length; j++) {
            if (arrOfNumbers[j] % arrOfNumbers[divisor++] === 0) {

            }
        }
    }
    return result;
}
let arrayOfNumbers = [4,12,8]
console.log(getHCFOfNumbers(arrayOfNumbers))
// module.exports = getHCFOfNumbers;























