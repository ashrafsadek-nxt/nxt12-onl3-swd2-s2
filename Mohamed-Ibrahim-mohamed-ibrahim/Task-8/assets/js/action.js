    // Calculate and display the total price
function getTotalprice(){
     // ===== Get DOM elements =====
const source=document.getElementById('source');
const target=document.getElementById('Target');
const wordCount=document.getElementById('wordcount');
const coupon=document.getElementById('coupon');
    // ===== Get input values =====
const source_value=source.value;
const target_value=target.value;
const wordCount_value=parseFloat(wordCount.value);
const coupon_value=coupon.value;
    // ===== Calculate base price =====
let total_price=0;
if( source_value == 'fr'){
    total_price= wordCount_value*0.8;
}
else if(source_value == 'en'){
    total_price= wordCount_value*0.6;
}else{
    total_price= wordCount_value*0.4;
}
   // ===== Apply coupon discount =====
if(coupon_value==='123'){
total_price=total_price*0.2;
}
// ===== display result =====
 const show_price= document.getElementById('Total_Price');
 let h4=document.createElement('h4');
 show_price.innerHTML = "";
 h4.innerText=total_price +'$';
 let h2 = document.createElement("h2");
 h2.textContent=total_price;
show_price.appendChild(h4);
}




