const {checkScores, addScores, squareOf} = require("./Scores.js");

test ("check students scores greater than seventy", () => {
    const testScores = [
        {name: "John Doe", scores: 70},
        {name: "Dami", scores: 60},
        {name: "Bolaji", scores: 50},
        {name: "Femi", scores: 75},
        {name: "Jaye", scores: 90},
        {name: "Taye", scores: 10},
        {name: "Ayo", scores: 22},
        {name: "Tope", scores: 67},
        {name: "Sade", scores: 20},
        {name: "Bisi", scores: 80},
    ];
    let scores = checkScores(testScores)
    let result = [
        {name: "John Doe", scores: 70},
        {name: "Femi", scores: 75},
        {name: "Jaye", scores: 90},
        {name: "Bisi", scores: 80}
    ]
    expect(scores).toStrictEqual(result)
})

test ("increase scores by five", () => {
    let scores = [85,92,78,88,95]
    let expected = addScores(scores);
    let result = [90,97,83,93,100]
    expect(expected).toStrictEqual(result)
})

test ("test that the numbers can be squared", () => {
    let integers = [2,4,6,8,10]
    let answer = squareOf(integers)
    let result = [4,16,36,64,100]
    expect(answer).toStrictEqual(result)
})

test ("test")