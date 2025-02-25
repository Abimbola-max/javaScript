const getHCFOfNumbers = require("./HighestCommonFactor");

test ("get HCF of numbers only", () => {
    let arrOfNumbers = [4,12,8];
    let actual = getHCFOfNumbers(arrOfNumbers);
    let output = [2,2]
    expect(actual).toEqual(output);
});

test ("get HCF of numbers divisible by three", () => {
    let arrOfNumbers = [6,9,15];
    let actual = getHCFOfNumbers(arrOfNumbers);
    let output = [3]
    expect(actual).toEqual(output);
})

test ("get HCF of numbers divisble by five", () => {
    let arrOfNumbers = [5,10,15];
    let actual = getHCFOfNumbers(arrOfNumbers);
    let output = [5];
    expect(actual).toEqual(output);
})