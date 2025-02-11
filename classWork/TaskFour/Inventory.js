
function getEachFruitNameQuantity(inventory) {
    let fruitsDetails = "";
    for(const[key, value] of Object.entries(inventory)) {
        fruitsDetails += `${key}: ${value} `;

    }
    return fruitsDetails;
}

module.exports = {getEachFruitNameQuantity}