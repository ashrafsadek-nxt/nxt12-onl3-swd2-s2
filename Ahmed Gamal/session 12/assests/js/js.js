const btn = document.getElementById('btn');
btn.addEventListener("click" , show);
function show(){
  let sec =document.getElementById('sec');
  let pro1 =document.getElementById('pro1');
  let pro2 =document.getElementById('pro2');
  let pro3 =document.getElementById('pro3');
  let pro4 =document.getElementById('pro4');
  sec.style.display="flex";
  let obj1={
    image: 'assests/images/car 1.png',
    name: 'Product 1',
    price: '$10M',
    description: `car`
  }
  let obj2={
    image: 'assests/images/car 2.png',
    name: 'Product 2',
    price: '$3M',
    description: `car`
  }
  let obj3={
    image: 'assests/images/car 3.png',
    name: 'Product 3',
    price: '$5M',
    description: `car`
  }  
  let obj4={
    image: 'assests/images/car 4.png',
    name: 'Product 4',
    price: '$9M',
    description: `car`
  }
  pro1.innerHTML=`
    <img src="${obj1.image}" alt="${obj1.name}">
    <h2>${obj1.name}</h2>
    <p class="des">description is ${obj1.description}</p>
    <h4 class="pric">${obj1.price}</h4>
    <button>More info</button>
  `;
  pro2.innerHTML=`
    <img src="${obj2.image}" alt="${obj2.name}">
    <h2>${obj2.name}</h2>
    <p class="des">description is ${obj2.description}</p>  
    <h4 class="pric">${obj2.price}</h4>
    <button>More info</button>
  `;
  pro3.innerHTML=`
    <img src="${obj3.image}" alt="${obj3.name}">
    <h2>${obj3.name}</h2>
    <p class="des">description is ${obj3.description}</p>
    <h4 class="pric">${obj3.price}</h4>
    <button>More info</button>
  `;
  pro4.innerHTML=`
    <img src="${obj4.image}" alt="${obj4.name}">
    <h2>${obj4.name}</h2>
    <p class="des">description is ${obj4.description}</p>
    <h4 class="pric">${obj4.price}</h4>
    <button>More info</button>
  `;
}