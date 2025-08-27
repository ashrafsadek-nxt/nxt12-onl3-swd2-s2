




// Avent
    //need to add  event to the button 

//Function => to keep all events of any button
    //fumction syntax
    //function functionName(){}


function get_price() 
{
const nativeElement =document.getElementById('native');
let nativeElementvalue=nativeElement.value;

const translatedElement =document.getElementById('translated');
let translatedElementvalue=translatedElement.value; 

const countElement =document.getElementById('count');
let countElementvalue=parseFloat(countElement.value);
let price=0;
if(nativeElementvalue=="arabic"){
    price=countElementvalue*0.5;
}
else{
    price=countElementvalue*0.8
}
const priceElement =document.getElementById('price');
priceElement.innerText = price;

}
function lightmode(){
    const contain = document.getElementById('container');
    contain.classList.remove('dark');
    contain.classList.add('light');
}
function darkmode(){
    const contain = document.getElementById('container');
    contain.classList.remove('light');
    contain.classList.add('dark');
}