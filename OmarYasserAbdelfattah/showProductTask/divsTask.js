const products = [
    {name: "Product 1", description: "This is Product 1", img:"assets/images/progphoto.jpg", price: "$10"},
    {name: "Product 2", description: "This is Product 2", img:"assets/images/progphoto.jpg", price: "$15"},
    {name: "Product 3", description: "This is Product 3", img:"assets/images/progphoto.jpg", price: "$20"},
    {name: "Product 4", description: "This is Product 4", img:"assets/images/progphoto.jpg", price: "$25"},
];

document.getElementById('showBtn').addEventListener('click', showProducts);

function showProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button>Buy Now</button>
        `;

        container.appendChild(card);
    });
}
