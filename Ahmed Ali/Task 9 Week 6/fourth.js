const btn = document.getElementById('btn1');
btn.addEventListener( "click", getPrice )

function getPrice()
{
const source = document.getElementById('source').value;//Sourec
const target = document.getElementById('target').value;//Target
const count = parseInt(document.getElementById('count').value);//Word Count
const coupon = document.getElementById('coupon').value;//Coupon

const price = document.getElementById('result').value;
let pricePerWord = 0;

  if(source === "Ar" && target ==="En")
  {
    pricePerWord = 0.8;
  }
  else if(source === "En" && target ==="Ar")
  {
     pricePerWord = 0.1;
  }
  else if(source === "Ar" && target ==="Fr")
  {
     pricePerWord = 0.5;
  }
  else if(source === "En" && target ==="Fr")
  {
     pricePerWord = 0.7;
  }
  else if(source === "Fr" && target ==="Ar")
  {
    pricePerWord = 0.9;
  }
  else if(source === "Fr" && target ==="En")
  {
     pricePerWord = 0.6;
  }
  else{
     pricePerWord = 0;
  }
   
  var total = Number * PricePerWord;
  var discount = 0;

  if( coupon !== "")
  {
    discount = total * 0.1;
    total = total - discount;

    //discount.style.display = "block"
    document.getElementById('discount').style.display = "block";
  }
   document.getElementById('result').innerText = " The Price is : " + total;
}

