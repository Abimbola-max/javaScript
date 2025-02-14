const getOddAndEvenNumbers = require("../OddAndEven.js");

test ("get odd and even numbers", () => {
    let numbers = [3,1,3,4,6,7,8];
    let oddAndEvenNumbers = getOddAndEvenNumbers(numbers);
    let answer = [0,0,0,1,1,0,1]
    expect(oddAndEvenNumbers).toEqual(answer);
})

test ("get even and even numbers only", () => {
    let numbers = [2,2,4,4,6,10,8];
    let oddAndEvenNumbers = getOddAndEvenNumbers(numbers);
    let answer = [1,1,1,1,1,1,1]
    expect(oddAndEvenNumbers).toEqual(answer);
})

test ("get odd and odd numbers only", () => {
    let numbers = [17,3,7,9,3,5,13];
    let oddAndEvenNumbers = getOddAndEvenNumbers(numbers);
    let answer = [0,0,0,0,0,0,0]
    expect(oddAndEvenNumbers).toEqual(answer);
})