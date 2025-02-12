function checkScores(testScores) {
    return testScores.filter(score => score.scores >= 70);
}

function addScores(scores) {
    return scores.map((score) => score + 5);
}

function squareOf(integers) {
    return integers.map(integer => integer * integer);
}

module.exports = {checkScores, addScores, squareOf};