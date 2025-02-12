const {getDoubledNumbers, getEvenNumbers, getOddNumbers, getOddNumbers1, addThreeNumbers, addIndexToElement, getWordsGreaterThanFourLetters, objectsWithAgeGreaterThanTwenty} = require("./ForEachTask.js")

beforeEach(() => numbers = [2, 3, 4, 5, 6, 7]);


test ("multiply each element by two", () => {
    let result = getDoubledNumbers(numbers);
    let answer = [4, 6, 8, 10, 12, 14]
    expect(result).toEqual(answer);
});

test ("check even numbers", () => {
    let result = getEvenNumbers(numbers);
    let answer = [2,4,6];
    expect(result).toEqual(answer);
})

test ("check odd numbers", () => {
    let result = getOddNumbers(numbers);
    let answer = [3,5,7];
    expect(result).toEqual(answer);
})

test ("check odd numbers for filter", () => {
    let result = getOddNumbers1(numbers);
    let answer = [3,5,7];
    expect(result).toEqual(answer);
})

test("add three to each element", () => {
    let result = addThreeNumbers(numbers);
    let answer = [5,6,7,8,9,10];
    expect(result).toEqual(answer);
})

test ("add index to each element", () => {
    let result = addIndexToElement(numbers);
    let answer = [2, 4, 6, 8, 10, 12];
    expect(result).toEqual(answer);
})

test ("return words with length greater tthan four", () => {
    let words = ["hello", "world", "javascript", "java", "egg"];
    let result = getWordsGreaterThanFourLetters(words);
    let answer = ["hello", "world", "javascript"];
    expect(result).toEqual(answer);
})

test ("return objects with age greater than twenty", () => {
    const students = [
        {name: "John", age: 20},
        {name: "Jane", age: 21},
        {name: "Alice", age: 19},
        {name: "Bob", age: 22},
    ];
    let expected = objectsWithAgeGreaterThanTwenty(students);
    let result = [
        {name: "Jane", age: 21},
        {name: "Bob", age: 22},
        ]
    expect(expected).toStrictEqual(result);
})