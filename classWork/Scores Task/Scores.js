function checkScores(testScores) {
    return testScores.filter(score => score.scores >= 70);
}

function addScores(scores) {
    return scores.map((score) => score + 5);
}

function squareOf(integers) {
    return integers.map(integer => integer * integer);
}

// function sharedBooks(name, book) {
//     let shareBooks = "";
//     for(const[key, value] of Object.entries(name, book)) {
//         shareBooks += `${key}: ${value} `;
//     }
//     return shareBooks;
// }

function addTiming(timing) {
    return timing.filter(time => time.includes("PM"));
}

function calculateExpense(expenses) {
    let total = 0;
    for (let expense in expenses) {
        total += expenses[expense];
    }
    return total;
}


module.exports = {checkScores, addScores, squareOf, addTiming, calculateExpense};