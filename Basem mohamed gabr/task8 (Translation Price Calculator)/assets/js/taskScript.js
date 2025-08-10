const translationRates = {
  "en-ar": 0.1,
  "ar-en": 0.8,
  "en-fr": 0.7,
  "fr-en": 0.6,
  "fr-ar": 0.9,
  "ar-fr": 0.5,
};

const validCoupons = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  WELCOME: 0.15,
  STUDENT: 0.25,
};

const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");
const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const couponCode = document.getElementById("couponCode");
const discount = document.getElementById("discount");
const totalPrice = document.getElementById("totalPrice");

function countWords(text) {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

function calculatePrice() {
  const source = sourceLanguage.value;
  const target = targetLanguage.value;
  const text = textInput.value;
  const coupon = couponCode.value.toUpperCase();

  const words = countWords(text);
  wordCount.value = words;

  if (!source || !target || source === target) {
    discount.value = "";
    totalPrice.value = "";
    return;
  }

  const rateKey = `${source}-${target}`;
  const rate = translationRates[rateKey];

  if (!rate) {
    discount.value = "";
    totalPrice.value = "Rate not available";
    return;
  }

  const basePrice = words * rate;

  let discountAmount = 0;
  let discountPercent = 0;

  if (coupon && validCoupons[coupon]) {
    discountPercent = validCoupons[coupon];
    discountAmount = basePrice * discountPercent;
    discount.value = `${discountPercent * 100}% ($${discountAmount.toFixed(
      2
    )})`;
  } else if (coupon) {
    discount.value = "Invalid coupon";
  } else {
    discount.value = "";
  }

  const finalPrice = basePrice - discountAmount;
  totalPrice.value = `$${finalPrice.toFixed(2)}`;
}

sourceLanguage.addEventListener("change", calculatePrice);
targetLanguage.addEventListener("change", calculatePrice);
textInput.addEventListener("input", calculatePrice);
couponCode.addEventListener("input", calculatePrice);

calculatePrice();
