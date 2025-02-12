const {findExpensiveProducts, findCheapProducts} = require("./Product");
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];

test ("find expensive product", () => {
    let expensiveProduct = findExpensiveProducts(products, 700);
    let result = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 }
    ]
    expect(expensiveProduct).toEqual(result);
})

test ("find cheap product", () => {
    let cheapProduct = findCheapProducts(products, 750);
    let result = [
        { id: 3, name: "Tablet", price: 500 },
        { id: 4, name: "Desktop", price: 700 }
    ]
    expect(cheapProduct).toEqual(result);
})