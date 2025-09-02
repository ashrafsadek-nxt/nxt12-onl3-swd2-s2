const btnPrice = document.getElementById('btnPrice');
btnPrice.addEventListener('click' , getPrice);

function getPrice(){

const firstLanguage = document.getElementById('firstLanguage');
let firstLang = firstLanguage.value;
const secondLanguage = document.getElementById('secondLanguage');
let secondLang = secondLanguage.value;
const total = document.getElementById('total');
let totalLetters =parseFloat(total.value);


let price = 0 ;
if(firstLang === secondLang){
    window.alert('Please Enter differrnt languages');
}
else if(firstLang === 'ar' && secondLang === 'en'){
    price = totalLetters * 0.8;
}
else if(firstLang === 'en' && secondLang === 'ar'){
    price = totalLetters * 0.1;
}
else if(firstLang ==='en' && secondLang === 'fr'){
    price = totalLetters * 0.7;
}
else if(firstLang === 'fr' && secondLang === 'en'){
    price = totalLetters * 0.6 ;
}
else if (firstLang === 'fr' && secondLang ==='ar'){
    price = totalLetters * 0.9 ;
}
else if(firstLang === 'ar' && secondLang === 'fr'){
    price = totalLetters * 0.5 ;
}

const showPrice = document.getElementById('showPrice');
showPrice.innerText = price.toFixed(3);

const coupon = document.getElementById('coupon');
let cop = coupon.value;

const showDiscount = document.getElementById('showDiscount');
let disc = showDiscount.value;

const discount = document.getElementById('discount');

if(cop === 'moscow' ){
    let finalPrice = price * 0.9;
    showDiscount.innerText = `Price after is ${finalPrice}`;
    discount.style.display = 'inline';
}
else{
    showDiscount.innerText = 'Invalid Coupon';
    discount.style.display = 'inline';
}


}