const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 19.99
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 45.99
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 34.89
    },
    {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        price: 87.99
    }
];

document.getElementById("show-products").addEventListener("click", () => {
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = ""; // Clear existing products
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.style.width = "190px";
        listItem.style.listStyle = "none";
        listItem.style.marginBottom = "20px";
        listItem.style.marginRight = "10px";

        // Product image (placeholder)
        const img = document.createElement("img");
        img.src = `https://placehold.co/600x400?text=${encodeURIComponent(product.name)}`;
        img.alt = product.name;
        img.style.display = "block";
        img.style.marginBottom = "8px";
        img.style.width = "100%";

        // Product name
        const name = document.createElement("h3");
        name.textContent = product.name;

        // Product price
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price.toFixed(2)}`;

        // Buy button
        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Buy";
        buyBtn.onclick = () => {
            alert(`You bought ${product.name} for $${product.price.toFixed(2)}`);
        };

        listItem.appendChild(img);
        listItem.appendChild(name);
        listItem.appendChild(price);
        listItem.appendChild(buyBtn);

        productsList.appendChild(listItem);
    });
});