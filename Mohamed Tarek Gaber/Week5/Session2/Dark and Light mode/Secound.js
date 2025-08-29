    function get_price() {
    const nativeElement = document.getElementById('native');
    let nativeElementvalue = nativeElement.value.toLowerCase();

    const translatedElement = document.getElementById('translated');
    let translatedElementvalue = translatedElement.value.toLowerCase();

    const countElement = document.getElementById('count');
    let countElementvalue = parseFloat(countElement.value);

    let price = 0;
    if (nativeElementvalue === "arabic") {
        price = countElementvalue * 0.5;
    } else {
        price = countElementvalue * 0.8;
    }

    const priceElement = document.getElementById('price');
    priceElement.innerText = price;
    }

function toggleMode() {
    const contain = document.getElementById('container');
    contain.classList.toggle('dark');
    contain.classList.toggle('light');
}
