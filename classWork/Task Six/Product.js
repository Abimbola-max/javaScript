function findExpensiveProducts(products, threshold) {
    return products.filter(product => product.price > threshold);
}

module.exports = findExpensiveProducts;