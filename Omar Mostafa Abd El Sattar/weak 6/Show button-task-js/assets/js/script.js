const myProduct = document.querySelector('section');
const overlay = document.querySelector('.overlay');
const btnShowProduct = document.querySelector('.show-products');
const btnCloseProduct = document.querySelector('.close-modal');

const show = function() {
    myProduct.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hide = function() {
    myProduct.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnShowProduct.addEventListener('click', show);
btnCloseProduct.addEventListener('click', hide);
overlay.addEventListener('click', hide);

document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&& !myProduct.classList.contains('hidden')){ hide()}})
