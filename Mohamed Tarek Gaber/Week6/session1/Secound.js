function get_price() {
    const nativeElement = document.getElementById('native');
    let nativeElementvalue = nativeElement.value.toLowerCase();

    const translatedElement = document.getElementById('translated');
    let translatedElementvalue = translatedElement.value.toLowerCase();

    const countElement = document.getElementById('count');
    let countElementvalue = parseFloat(countElement.value);

    const coponElement = document.getElementById('copon');
    let coponElementvalue = coponElement.value.trim().toUpperCase();

    const discountElement = document.getElementById('discount');
    const discountBox = document.getElementById('discountBox');


    const coupons = {
        "SAVE10": 10,
        "SAVE20": 20,
        "WELCOME50": 50
    };

    let price = 0;
    if (nativeElementvalue === "ar" && translatedElementvalue=="en") {
        price = countElementvalue * 0.8 ;
    }
    else if(nativeElementvalue === "en" && translatedElementvalue=="ar"){
        price = countElementvalue * 0.1;
    }
    else if(nativeElementvalue === "en" && translatedElementvalue=="fr"){
        price = countElementvalue * 0.7;
    }
    else if(nativeElementvalue === "fr" && translatedElementvalue=="en"){
        price = countElementvalue * 0.6;
    }
    else if(nativeElementvalue === "fr" && translatedElementvalue=="ar"){
        price = countElementvalue * 0.9;
    }
    else if(nativeElementvalue === "ar" && translatedElementvalue=="fr"){
        price = countElementvalue * 0.5;
    }


    let discount = 0;
    if (coupons[coponElementvalue]) {
        discount = coupons[coponElementvalue];
        price = price - (price * discount / 100);


        discountBox.style.display = "block";
        discountElement.value = discount;
    } else {

        discountBox.style.display = "none";
    }

    
    const priceElement = document.getElementById('price');
if (discount > 0) {
    priceElement.innerText = `Final Price: ${price} (Discount: ${discount}%)`;
} else {
    priceElement.innerText = `Final Price: ${price}`;
}

}

function toggleMode() {
    const contain = document.getElementById('container');
    contain.classList.toggle('dark');
    contain.classList.toggle('light');
}
