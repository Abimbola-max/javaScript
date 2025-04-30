const PRODUCT_URL = "https://fakestoreapi.com/products";

// const productsWrapper = document.getElementsByClassName("products");
const productsWrapper = document.querySelector(".products");

// console.log(productsWrapper);
// console.log(productsContainer);


// this is for promise
const getProducts = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        displayProducts(data);
    })
    .catch((error) => console.log(error));
};

// you can use the keyword async without await but you cannot use await without async
// const getProducts = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json(); // the error from the backend is inside the data
//         console.log(data);
//     } catch (error) { // this error is catching error that are not thrown in the backend
//         console.log(error); //you could do console.error and also use the string + error to pass the error message
//     }
// }

getProducts(PRODUCT_URL);

function displayProducts(products) {
    products.forEach(product => {
        console.log(product);
        // console.log(product);console.log(product);
        const {title, price, description, image} = product;
        const productHMTL = document.createElement("div");
        productHMTL.classList.add("product");
        productHMTL.innerHTML = `
            <img src="${image}" alt="">
            <div>
                <p>${title}</p>
                <p>price: &#8358 ${price}</p>
            </div>
            <p>${description}</p>
        `
        productsWrapper.appendChild(productHMTL);
    })

}