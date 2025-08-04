

let elment=document.querySelector('.change');

let body =document.querySelector('body')

elment.addEventListener('click',()=>{
    body.classList.toggle('darkMode');
})