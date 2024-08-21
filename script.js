const products = [
    { name: "Gyro Sandwich", rating: 4.0, price: 15.00, imgSrc: "./images/food1.jpeg" },
    { name: "Enchilade", rating: 5.0, price: 25.50, imgSrc: "./images/food1.jpeg" },
    { name: "Green Beans", rating: 4.9, price: 12.00, imgSrc: "./images/food1.jpeg" },
    { name: "Pizza", rating: 4.8, price: 18.50, imgSrc: "./images/food1.jpeg" },
    { name: "Chicken Pot Pie", rating: 4.9, price: 25.00, imgSrc: "./images/food1.jpeg" },
    { name: "Green Salad", rating: 4.8, price: 15.00, imgSrc: "./images/food1.jpeg" },
    { name: "Tacos", rating: 4.7, price: 13.00, imgSrc: "./images/food1.jpeg" },
    { name: "Burrito", rating: 4.8, price: 14.50, imgSrc: "./images/food1.jpeg" },
    { name: "Spaghetti", rating: 4.9, price: 20.00, imgSrc: "./images/food1.jpeg" },
    // More products can be added here
];

let currentProductIndex = 0;
const productsPerPage = 6;
const productGrid = document.querySelector('.product-grid');
const seeMoreBtn = document.querySelector('.see-more-btn');

function loadProducts() {
    const nextProducts = products.slice(currentProductIndex, currentProductIndex + productsPerPage);

    nextProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="rating">⭐ ${product.rating}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button>Add To Cart</button>
        `;

        productGrid.appendChild(productCard);
    });

    currentProductIndex += productsPerPage;

    if (currentProductIndex >= products.length) {
        seeMoreBtn.style.display = 'none';
    }
}

seeMoreBtn.addEventListener('click', loadProducts);

// Initial load of products
loadProducts();
