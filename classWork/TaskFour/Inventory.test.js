const {getEachFruitNameQuantity} = require("./Inventory.js");

beforeEach(() => inventory = {
        apple: 10,
        banana: 5,
        orange: 5,
        mango: 12
});

test ("print each fruits name and its quantity", () => {
    let everyFruits = getEachFruitNameQuantity(inventory);
    let answer =  "apple: 10 banana: 5 orange: 5 mango: 12 ";
    expect(everyFruits).toEqual(answer)
})