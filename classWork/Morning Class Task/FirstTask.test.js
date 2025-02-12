const addOneToTheBackOfAnArray = require("./FirstTask.js");

test("add one to the back of anArray",  () => {
    let numbers = [3,4,2];
    let actual = addOneToTheBackOfAnArray(numbers)
    let expected = [3,4,3];
    expect(actual).toEqual(expected);
})

test("add one to the back of an Array",  () => {
    let numbers = [8,9,9,9];
    let actual = addOneToTheBackOfAnArray(numbers)
    let expected = [9,0,0,0];
    expect(actual).toEqual(expected);
})