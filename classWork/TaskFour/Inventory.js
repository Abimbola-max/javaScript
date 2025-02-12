
function getEachFruitNameQuantity(inventory) {
    let fruitsDetails = "";
    for(const[key, value] of Object.entries(inventory)) {
        fruitsDetails += `${key}: ${value} `;

    }
    return fruitsDetails;
}

function totalNumberOfFruits(inventory) {
    const totalSum = Object.values(inventory).reduce((sum, value) => sum + value, 0);
    return totalSum;
}

module.exports = {getEachFruitNameQuantity, totalNumberOfFruits}