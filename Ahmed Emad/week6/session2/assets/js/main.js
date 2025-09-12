const btn = document.getElementById('btn');
btn.addEventListener('click', showProducts);

function showProducts() {
    let data = {
        img: 'assets/images/download.png',
        para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, velit totam. Vero, excepturi
                quaerat. Ratione itaque vitae commodi, deleniti qui, nesciunt dolorum reprehenderit earum, aperiam culpa
                aliquid reiciendis officia accusamus?`,
        butn: 'Click'
    };

    const container = document.getElementById('container');
    container.innerHTML = ""; // يمسح القديم قبل الإضافة

    for (let i = 0; i < 4; i++) {

        const productDiv = document.createElement("div");
        productDiv.classList.add("products"); 

        productDiv.innerHTML = `
            <img src="${data.img}" alt="product" class='img'>
            <p>${data.para}</p>
            <button class="btn2">${data.butn}</button>
        `;

        container.appendChild(productDiv);
    }
}
