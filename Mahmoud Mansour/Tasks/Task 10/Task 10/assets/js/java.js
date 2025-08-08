const inp1 = document.getElementById("sourceInput");
let source = inp1.value;

const inp2 = document.getElementById("targetInput");
let target = inp2.value;

const inp3 = document.getElementById("couponInput");
let discount = inp3.value;

const inp4 = document.getElementById("countInput");
let count = inp4.value;

const sum = document.getElementById("Total");

const btn = document.getElementById("button")
btn.addEventListener("click", getsum)

let price = 0;

const prices = {
  en_ar: 0.5,
  en_fr: 0.3,
  ar_en: 0.4,
  ar_fr: 0.3,
  fr_ar: 0.4,
  fr_en: 0.6,
};

function getsum()
{
    source = inp1.value;
    target = inp2.value;
    discount = inp3.value;
    count = inp4.value;

    if(source == "Arabic" && target == "English")
    {
        price = count * prices["ar_en"];
        sum.innerText = price;
    }
    else if(source == "Arabic" && target == "French")
    {
        price = count * prices["ar_fr"];
        sum.innerText = price;
    }
    else if(source == "English" && target == "Arabic")
    {
        price = count * prices["en_ar"];
        sum.innerText = price;
    }
    else if(source == "English" && target == "French")
    {
        price = count * prices["en_fr"];
        sum.innerText = price;
    }
    else if(source == "French" && target == "Arabic")
    {
        price = count * prices["fr_ar"];
        sum.innerText = price;
    }
    else if(source == "French" && target == "English")
    {
        price = count * prices["fr_en"];
        sum.innerText = price;
    }
    else
    {
        sum.innerText = "Not Valid";
    }
}
  const sumSpan = document.getElementById("Total");
  const coupon = document.getElementById("couponInput");
  const disBox = document.getElementById("dis");
  const disVal = document.getElementById("discountValue");

  const coupons = {
    SAVE10: 10,
    HALFOFF: 50,
    FREE100: 15
  };

  document.getElementById("button").addEventListener("click", () => {
    const code = coupon.value.trim().toUpperCase();
    const price = parseFloat(sumSpan.innerText);
    disBox.style.display = "none";

    if (coupons[code]) {
      const percent = coupons[code];
      const discount = (price * percent) / 100;
      const newTotal = price - discount;

      disVal.innerText = `-${discount.toFixed(2)} (${percent}%)`;
      disBox.style.display = "block";
      sumSpan.innerText = newTotal.toFixed(2);
    }
  });
