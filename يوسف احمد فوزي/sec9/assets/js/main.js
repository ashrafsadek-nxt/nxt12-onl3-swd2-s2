document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");
  const countInput = document.getElementById("count");
  const couponInput = document.getElementById("coupon");
  const priceDisplay = document.getElementById("price");
  const totalPriceContainer = document.getElementById("total-price");
  const errorDisplay = document.getElementById("error");

  let discountSpan = document.createElement("span");
  discountSpan.style.display = "block";
  discountSpan.style.marginTop = "8px";
  discountSpan.style.color = "#e74c3c";
  discountSpan.style.fontWeight = "bold";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorDisplay.textContent = "";
    if (discountSpan.parentElement) discountSpan.remove();

    const fromLanguage = fromSelect.value;
    const toLanguage = toSelect.value;
    const wordCount = parseInt(countInput.value, 10);
    const couponCode = couponInput.value.trim().toUpperCase();

    if (!fromLanguage || !toLanguage) {
      errorDisplay.textContent = "Please select both languages.";
      return;
    }

    if (fromLanguage === toLanguage) {
      errorDisplay.textContent = "From and To languages must be different.";
      return;
    }

    if (isNaN(wordCount) || wordCount <= 0) {
      errorDisplay.textContent = "Please enter a valid word count.";
      return;
    }

    const prices = {
      "en-ar": 0.2,
      "en-fr": 0.3,
      "ar-en": 0.2,
      "ar-fr": 0.3,
      "fr-en": 0.2,
      "fr-ar": 0.3,
    };

    const key = `${fromLanguage}-${toLanguage}`;
    const pricePerWord = prices[key];

    if (!pricePerWord) {
      errorDisplay.textContent = "Invalid language combination.";
      return;
    }

    let totalPrice = wordCount * pricePerWord;
    let discountAmount = 0;

    if (couponCode === "DISCOUNT10") {
      discountAmount = totalPrice * 0.1;
      totalPrice -= discountAmount;
      discountSpan.textContent = `Discount: -${discountAmount.toFixed(2)}$`;
      totalPriceContainer.appendChild(discountSpan);
    }

    priceDisplay.textContent = `${totalPrice.toFixed(2)}$`;
  });
});
