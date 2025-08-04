// Get references to DOM elements
const source = document.getElementById("source"); // Source language selector
const target = document.getElementById("target"); // Target language selector
const copoun = document.getElementById("copoun"); // Coupon input
const count = document.getElementById("count"); // Word count input
const btn = document.getElementById("btn"); // Calculate button
const result = document.getElementById("result"); // Result display

// Variables for price and discount
let pricePerWord = 0;
let discount = 0;

// Calculate total price based on selected languages and word count
function calculateTotalPrice() {
  if (source.value === "ar") {
    if (target.value === "en") {
      pricePerWord = 0.8;
    } else if (target.value === "fr") {
      pricePerWord = 0.5;
    }
  } else if (source.value === "en") {
    if (target.value === "ar") {
      pricePerWord = 0.1;
    } else if (target.value === "fr") {
      pricePerWord = 0.7;
    }
  } else if (source.value === "fr") {
    if (target.value === "ar") {
      pricePerWord = 0.9;
    } else if (target.value === "en") {
      pricePerWord = 0.6;
    }
  }
  // Multiply price per word by word count
  return pricePerWord * count.value;
}

// Apply discount if coupon code is valid
function applyDiscount(totalPrice) {
  if (copoun.value === "DISCOUNT10") {
    discount = 0.1;
  }
  return totalPrice - totalPrice * discount;
}

// Handle button click and display the price
function renderPrice(e) {
  e.preventDefault();
  const totalPrice = calculateTotalPrice();
  const finalPrice = applyDiscount(totalPrice);

  // Show result with or without discount
  if (totalPrice === finalPrice) {
    result.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
  } else {
    result.innerHTML = `<h3>Before Price: $${totalPrice.toFixed(
      2
    )}</h3><h3>After Discount: $${finalPrice.toFixed(2)}</h3>`;
  }
}

// Add event listener to button
btn.addEventListener("click", renderPrice);
