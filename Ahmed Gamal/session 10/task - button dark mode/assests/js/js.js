function getprice() {

const nat=document.getElementById('nat_lang');
let natv=nat_lang.value;

const trans=document.getElementById('trans_lang');
let transv=trans_lang.value;

const num=document.getElementById('number');
let numv=parseFloat(num.value);
if(natv=="ar"){
  var con=0.5;
}
else{
var con=0.25;
}
let count=numv*con;

const result=document.getElementById('result');
result.innerText="the price is :" + count;
}

let x=0;
function changemode(){
if(x==0){//light
const contain =document.getElementById("contain"); 
contain.classList.remove('dark');
contain.classList.add('light');
 x=1;
}  
else{//dark
const contain =document.getElementById("contain"); 
contain.classList.remove('light');
contain.classList.add('dark');
 x=0;
}
}