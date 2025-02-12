const  findExpensiveProducts = require("./Product");
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];

test ("find expensive product", () => {
    let expensiveProduct = findExpensiveProducts(products, 700);
    let result = ["Laptop 1200, Phone 800"];
    expect(expensiveProduct).toEqual(result);
})