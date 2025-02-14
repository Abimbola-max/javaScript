function checkScores(testScores) {
    return testScores.filter(score => score.scores >= 70);
}

function addScores(scores) {
    return scores.map((score) => score + 5);
}

function squareOf(integers) {
    return integers.map(integer => integer * integer);
}

function sharedBooks(name, book) {
    let shareBooks = {};
    for(const[index, key] of name.entries()) {
        shareBooks[key] = book[index];
    }
    return shareBooks;
}

function addTiming(timing) {
    return timing.filter(time => time.includes("PM")).filter(time => time.split(":")[0] < 4);
}

function calculateExpense(expenses) {
    let total = 0;
    for (let expense in expenses) {
        total += expenses[expense];
    }
    return total;
}


module.exports = {checkScores, addScores, squareOf, sharedBooks,addTiming, calculateExpense};