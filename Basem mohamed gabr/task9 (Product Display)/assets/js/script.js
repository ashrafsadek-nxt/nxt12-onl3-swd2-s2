const products = [
  {
    img: "https://picsum.photos/150?random=" + Math.random(),
    text: "Product 1 description",
    btn: "Buy",
  },
  {
    img: "https://picsum.photos/150?random=" + Math.random(),
    text: "Product 2 description",
    btn: "Order",
  },
  {
    img: "https://picsum.photos/150?random=" + Math.random(),
    text: "Product 3 description",
    btn: "Details",
  },
  {
    img: "https://picsum.photos/150?random=" + Math.random(),
    text: "Product 4 description",
    btn: "Add to Cart",
  },
];

function showProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p) => {
    container.innerHTML += `
          <div class="product">
            <img src="${p.img}" alt="Product">
            <p>${p.text}</p>
            <button>${p.btn}</button>
          </div>
        `;
  });
}
