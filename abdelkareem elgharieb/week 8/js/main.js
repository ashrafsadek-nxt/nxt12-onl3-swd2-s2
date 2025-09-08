const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 19.99,
        category: "electronics"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 29.99,
        category: "clothing"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 39.99,
        category: "electronics"
    },
    {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        price: 49.99,
        category: "books"
    }
];

let cart = [];

// Responsive Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navCollapse.classList.toggle('show');
        });
    }
});

// Enhanced Product Display with Bootstrap and Animations
document.getElementById("show-products")?.addEventListener("click", () => {
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = "";
    productsList.className = "row g-4"; // Bootstrap grid

    products.forEach((product, index) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-lg-3 col-md-4 col-sm-6 product-card";
        colDiv.style.opacity = "0";
        colDiv.style.transform = "translateY(20px)";
        colDiv.style.transition = "all 0.5s ease";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100 shadow-sm";
        cardDiv.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        // Hover effects
        cardDiv.addEventListener('mouseenter', function () {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
        });

        cardDiv.addEventListener('mouseleave', function () {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "";
        });

        // Product image
        const img = document.createElement("img");
        img.src = `https://placehold.co/300x200?text=${encodeURIComponent(product.name)}`;
        img.alt = product.name;
        img.className = "card-img-top";
        img.style.height = "200px";
        img.style.objectFit = "cover";

        // Card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        // Product name
        const name = document.createElement("h5");
        name.textContent = product.name;
        name.className = "card-title";

        // Product description
        const description = document.createElement("p");
        description.textContent = product.description;
        description.className = "card-text text-muted";

        // Product price
        const price = document.createElement("p");
        price.innerHTML = `<strong>$${product.price.toFixed(2)}</strong>`;
        price.className = "card-text";

        // Buy button
        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Add to Cart";
        buyBtn.className = "btn btn-primary mt-auto";
        buyBtn.onclick = () => addToCart(product);

        cardBody.appendChild(name);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(buyBtn);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        productsList.appendChild(colDiv);

        // Animate cards in
        setTimeout(() => {
            colDiv.style.opacity = "1";
            colDiv.style.transform = "translateY(0)";
        }, index * 100);
    });
});

// Cart functionality
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.animation = 'pulse 0.3s ease';
    }
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = '1', 100);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}
