
function getEachFruitNameQuantity(inventory) {
    for(let fruits in inventory) {
        let entries = Object.entries(inventory)
        return entries;
    }
}

module.exports = {getEachFruitNameQuantity}