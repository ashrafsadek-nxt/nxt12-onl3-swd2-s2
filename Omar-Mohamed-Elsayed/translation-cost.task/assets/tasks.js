const rates = {
  "en-ar": 0.12,
  "ar-en": 0.85,
  "en-fr": 0.65,
  "fr-en": 0.62,
  "fr-ar": 0.95,
  "ar-fr": 0.55,
};

const coupons = {
  HELLO10: 0.1,
  FIRST20: 0.2,
  BONUS15: 0.15,
  STUDY25: 0.25,
};

const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const userText = document.getElementById("userText");
const countWords = document.getElementById("countWords");
const promoCode = document.getElementById("promoCode");
const discountValue = document.getElementById("discountValue");
const finalCost = document.getElementById("finalCost");

function getWordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function updateCost() {
  const from = fromLang.value;
  const to = toLang.value;
  const text = userText.value;
  const promo = promoCode.value.trim().toUpperCase();

  const words = getWordCount(text);
  countWords.value = words;

  if (!from || !to || from === to) {
    discountValue.value = "";
    finalCost.value = "";
    return;
  }

  const key = `${from}-${to}`;
  const rate = rates[key];

  if (!rate) {
    discountValue.value = "";
    finalCost.value = "N/A";
    return;
  }

  let base = words * rate;
  let discountAmt = 0;

  if (promo && coupons[promo]) {
    discountAmt = base * coupons[promo];
    discountValue.value = `${(coupons[promo] * 100).toFixed(0)}% (-$${discountAmt.toFixed(2)})`;
  } else if (promo) {
    discountValue.value = "Invalid code";
  } else {
    discountValue.value = "";
  }

  finalCost.value = `$${(base - discountAmt).toFixed(2)}`;
}

[fromLang, toLang, userText, promoCode].forEach(el => {
  el.addEventListener("input", updateCost);
});

updateCost();
