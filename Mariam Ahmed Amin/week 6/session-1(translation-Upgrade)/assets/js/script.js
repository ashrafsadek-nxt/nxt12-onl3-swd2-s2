
function getPrice() 
{
const nativeElement=document.getElementById('native');

let nativeElementValue=nativeElement.value;


const translatedElement=document.getElementById('translated');

let translatedElementValue=translatedElement.value;


const countElement=document.getElementById('count');
let countElementValue= parseFloat(countElement.value);

  const coupon = document.getElementById('coupon');
  const discount = document.getElementById('discount');
  const priceElement = document.getElementById('price');



 let price=0;



//check about native language
if(nativeElementValue=='Arabic'&& translatedElementValue=='English' )
{
    price=countElementValue*0.8;
}

else if(nativeElementValue=='English'&& translatedElementValue=='Arabic' ){
      price = countElementValue * 0.1;

}
else if(nativeElementValue=='English'&& translatedElementValue=='French' ){
     price = countElementValue * 0.7;

}
else if(nativeElementValue=='French'&&translatedElementValue=='English' ){
     price = countElementValue * 0.6;

}
else if(nativeElementValue=='French'&& translatedElementValue=='Arabic' ){
     price = countElementValue * 0.9;

}
else if(nativeElementValue=='Arabic'&& translatedElementValue=='French'){
     price = countElementValue * 0.5;

}
else{
    price=0; //if they are the same language
}


if(coupon.value==='discount30')
{
    price=price*0.7; 
     discount.style.display='block';
}
else{
    discount.style.display = 'none';
}

priceElement.innerText= `Total price : ${price.toFixed(2)} EG-pounds`
priceElement.style.display='block';

}       
    





