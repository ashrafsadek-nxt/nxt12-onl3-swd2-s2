
function getPrice() {
    //clear privious text in output
    const outputInfo = document.getElementById("output");
    outputInfo.innerText = '';

    //get native value
    const nativeElement = document.getElementById("native");
    let nativeValue = nativeElement.value;
    //get translated value
    const translatedElement = document.getElementById("translated");
    let translatedValue = translatedElement.value;
    //get word count
    const wordCount = document.getElementById("count");
    let countValue = wordCount.value;
    //get coupon value if exists
    const coupon = document.getElementById("coupon");
    let couponValue = coupon.value;

    /* check native and translated langs, if same alert
    else check word count, if not exist alert
    else 
        get price then check for coupon value
            if exist display discount value, before and after price
            else, display final value*/
    

    if (nativeValue === translatedValue) {
        outputInfo.innerText = "native and translated languages cant be same!!";
        outputInfo.style.color = "red";
    }
    else if (countValue === '') {
        outputInfo.innerText = "must eneter word count";
        outputInfo.style.color = "red";
    }
    else {
        countValue = parseInt(countValue);

        //get price of translation
        let price = 0;
        if (nativeValue === "Ar" && translatedValue === "En") {
            price = countValue * 0.8;
        }
        else if (nativeValue === "Ar" && translatedValue === "Fr") {
            price = countValue * 0.5;
        }
        else if (nativeValue === "En" && translatedValue === "Ar") {
            price = countValue * 0.1;
        }
        else if (nativeValue === "En" && translatedValue === "Fr") {
            price = countValue * 0.7;
        }
        else if (nativeValue === "Fr" && translatedValue === "Ar") {
            price = countValue * 0.9;
        }
        else if (nativeValue === "Fr" && translatedValue === "En") {
            price = countValue * 0.6;
        }

        /*if user entered a coupon, gives random value for discount between 1%-50%
        then displays discount value then  price before and after discount,
        else if user didnt enter coupon display total price only*/
        if (couponValue !== "") {
            outputInfo.style.color = "black";
            let discVal = Math.floor(Math.random() * 50) + 1;
            discFactor = discVal / 100;
            discPrice = Math.ceil(price - (price * discFactor));
            outputInfo.innerText = `discount value: ${discVal} %
            total before discount: ${price}
            total after discount: ${discPrice}`;
        }
        else {
            outputInfo.style.color = "black";
            outputInfo.innerText = `total: ${price}`;
        }

    }

}