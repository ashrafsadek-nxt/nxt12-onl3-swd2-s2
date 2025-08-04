const input = document.getElementById('inp');
const paragraph = document.getElementById('paragraph');
const paragraph2 = document.getElementById('paragraph2');

paragraph.innerHTML = `<p>Delivery Tax : ${0}</p>`;
paragraph2.innerHTML = `<p>Total Count is : ${0} </p>`;
input.addEventListener('input',  function updateTotal(){
let count = input.value;
if (count <=0 || isNaN(count)){ 
var tax = 0;
var total = 0 ;
}
else{
var tax = 10 ; 
var total = parseInt(count) + tax; 
}
paragraph.innerHTML = `<p>Delivery Tax : ${tax}</p>`;
paragraph2.innerHTML = `<p>Total Count is : ${total} </p>`;
}
)

