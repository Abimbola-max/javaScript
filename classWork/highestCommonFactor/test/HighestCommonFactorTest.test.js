const getHCFOfNumbers = require("../src/HighestCommonFactor");


test ("get HCF of numbers only", () => {
    let arrOfNumbers = [4,12,8];
    let actual = getHCFOfNumbers(arrOfNumbers);
    let output = [2,2]
    expect(actual).toEqual(output);
});

test ("get HCF of numbers only2", () => {
    let arrOfNumbers = [10, 20];
    let actual = getHCFOfNumbers(arrOfNumbers);
    let output = [2]
    expect(actual).toEqual(output);
});