// get Native language name
   // needs string Variable
// get Wanted language name
   // needs string Variable
// get Word count name
   // needs int Variable

// Event << Button Click.
    // needs to add event to the button
    // when the user make the event all codes must be excuted
    // to do this have to use 'Function' >>.
// Function => way to organize the code

function getPrice(){

const NativeElement = document.getElementById('Native');
console.log(NativeElement);   
let NativeElementValue = NativeElement.value;
console.log(NativeElementValue); 
console.log(typeof(NativeElementValue)); 


const WantedElement = document.getElementById('Wanted');
console.log(WantedElement);   
let WantedElementValue = WantedElement.value;
console.log(WantedElementValue); 
console.log(typeof(WantedElementValue));

const CountElement = document.getElementById('Count');
console.log(CountElement);   
let CountElementValue = parseFloat(CountElement.value); //Important 'parseFloat'
console.log(CountElementValue); 
console.log(typeof(CountElementValue));
 
// <condition>

let Price = 0;
if(NativeElementValue == "arabic")
{
    Price =  CountElementValue * 0.5;
}
if(NativeElementValue == "english")
{
    Price =  CountElementValue * 0.8;
}

// get result heading  ' u calling<< h3 '
    // needs string Variable
    // const string variable to carry html element
    //innerText 
const PriceElement = document.getElementById('Price');
console.log(PriceElement); 
PriceElement.innerText = Price;     
}

const buttonElement = document.getElementById('button');

button.addEventListener("click", setdark);
button.addEventListener("click", setlight);

function setdark(){
    document.body.style.background = 'black';
    btn.style.color = 'purple';
}
function setlight(){
    document.body.style.background = 'white';
    btn.style.color = 'black';
}

