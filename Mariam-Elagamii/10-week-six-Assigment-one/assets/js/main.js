const rates = {
    "en->ar": 0.1,
    "ar->en": 0.8,
    "en->fr": 0.7,
    "fr->en": 0.6,
    "fr->ar": 0.9,
    "ar->fr": 0.5
};
const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function () {
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;
    const wordCount = parseInt(document.getElementById("wordCount").value);
    const coupon = document.getElementById("coupon").value.trim();
    const resultDiv = document.getElementById("result");
    const discountBox = document.getElementById("discount-box");
    const key = `${source}->${target}`; //rates values
    if (source === target) {
        resultDiv.textContent = "Source and target languages must be different.";
        discountBox.style.display = "none";
        return;
    }
    let price = wordCount * rates[key];
    let discount = 0;
    if (coupon !== "") {
        discount = 0.1;
        price -= price * discount;
        discountBox.style.display = "block";
    } else {
        discountBox.style.display = "none";
    }
    resultDiv.textContent = `Total Price: $${price.toFixed(2)}`;
});
