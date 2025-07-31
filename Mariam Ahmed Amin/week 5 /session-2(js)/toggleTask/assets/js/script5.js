function getPrice() 
{
const nativeElement=document.getElementById('native');

let nativeElementValue=nativeElement.value;


const translatedElement=document.getElementById('translated');

let translatedElementValue=translatedElement.value;


const countElement=document.getElementById('count');

let countElementValue= parseFloat(countElement.value);


let ArToEnPrice=countElementValue*0.5;
let EnToArPrice=countElementValue*0.8;

const priceElement=document.getElementById('price');


//check about native language
if(nativeElementValue=='Arabic'||nativeElementValue=='arabic'||nativeElementValue=='Ar' ||nativeElementValue=='ar' )
{
    priceElement.innerText=ArToEnPrice;
}

else if(nativeElementValue=='English'||nativeElementValue=='english'||nativeElementValue=='En' ||nativeElementValue=='en' ){
     priceElement.innerText=EnToArPrice;

}
}


const contain=document.body;

function changeMode(){
    if(contain.classList.contains('light-mode')){

        contain.classList.remove('light-mode');
        contain.classList.add('dark-mode');
    }
    else{
        contain.classList.remove('dark-mode');
        contain.classList.add('light-mode');
    }

}
