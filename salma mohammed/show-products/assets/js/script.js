    const products = [
      {
        id: 1,
        name: "Product 1",
        description: "This is the first product description, its awesome!",
        image: "assets/img/cat.jpg",
        cost: "10$"
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is the second product description, its awesome!",
        image: "assets/img/cat.jpg",
        cost: "20$"
      },
      {
        id: 3,
        name: "Product 3",
        description: "This is the third product description, its awesome!",
        image: "assets/img/cat.jpg",
        cost: "14.99$"
      },
      {
        id: 4,
        name: "Product 4",
        description: "This is the fourth product description, its awesome!",
        image: "assets/img/cat.jpg",
        cost: "10.49$"
      }
    ];

function showProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <button>Buy Now for ${product.cost}</button>
        `;
        container.appendChild(card);
      });
}

