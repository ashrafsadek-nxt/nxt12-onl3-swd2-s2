const btn =document.getElementById('btn');
btn.addEventListener('click',getprice);

function getprice(){
 const source = document.getElementById("source_lang").value;
 const target = document.getElementById("target_lang").value; 
 const number = parseInt(document.getElementById("wordcount").value);
 const copoun =document.getElementById('copoun').value;

  let pricePerWord = 0;
  
       if (source === "en" && target === "ar") pricePerWord = 0.1;
  else if (source === "ar" && target === "en") pricePerWord = 0.8;
  else if (source === "en" && target === "fr") pricePerWord = 0.7;
  else if (source === "fr" && target === "en") pricePerWord = 0.6;
  else if (source === "fr" && target === "ar") pricePerWord = 0.9;
  else if (source === "ar" && target === "fr") pricePerWord = 0.5;
  else pricePerWord = 0;

  var total = number * pricePerWord;
   var discountAmount = 0;

  if ( copoun !== "") {
    discountAmount = total * 0.1;
    total = total - discountAmount;

    document.getElementById("discountdiv").style.display = "block";
    document.getElementById("discount").innerText = discountAmount;
  } else {
    document.getElementById("discountdiv").style.display = "none";
  }

    document.getElementById("result").innerText = "the price is : " + total;

}
