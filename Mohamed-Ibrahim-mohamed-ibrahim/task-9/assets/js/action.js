// products array of object
const products=[
    {
        image:"url",
        description:"product-one-description"
    },
      {
        image:"url",
        description:"product-one-description"
    } ,
      {
        image:"url",
        description:"product-one-description"
    }
]
// select Dom Elemnts
const productsContainer = document.getElementById('productsContainer');
const btnShowProducts = document.getElementById('showProductsBtn');
// renderall product inside the container
function showProducts(){
    // clear container before adding new products
    productsContainer.innerHTML='';
    // loop throw products array 
    products.forEach(product => {
    // create card product
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');
   // product image
   const img = document.createElement('img');
   img.src=product.image;
   img.alt='image-product';
   // product description
   const desc = document.createElement('p');
   desc.innerText = product.description;
   // create button add to card 
   const addBtn = document.createElement('button');
   addBtn.textContent='Add to Cart';
   // add elment in cart 
   productCard.appendChild(img);
   productCard.appendChild(desc);
   productCard.appendChild(addBtn);
   //append cart in container  
   productsContainer.appendChild(productCard);
  });
 


}
btnShowProducts.addEventListener('click',showProducts);



