// input / output

 alert("hellooo im alert");
 confirm("are you okay?");
 prompt("what color you want ?")
 document.getElementById("head").innerText = "Welcome , Hello world ! ";
 document.getElementById('dv').innerHTML="<h5> First task in js </h5>";
 document.getElementById('ipt').value="mmmm";
 document.write("<br> <br> Welcome javascript");
 console.log(1234);

 //المتغيرات

 // var variable_name= value
 var x=10;
 console.log(x);
 let y=20;  //more used
 console.log(y);
 const z= "vvvv";
 console.log(z);
 let dd=null;
 console.log(typeof(dd));
 dd=[1,"jjj",true, 43.55];
 console.log(dd);
 console.log(typeof(dd)); //object
 dd=Array(1,"jjj",true, 43.55);
 console.log(dd);
 console.log(typeof(dd));
 dd={
     age:13,
     name:" mariam"
 }
 console.log(dd);
 console.log(typeof(dd));
 dd= function z(){
     let x=0;
 }

 
 //arrow function
 dd= z=>{10+20};
 console.log(dd);
 console.log(typeof(dd));

const input = document.getElementById('ipt2');
const para=document.getElementById('firstp');
const para2=document.getElementById('secondp');

console.log(input); //type of input is object
console.log(para);

let num= input.value;

console.log(num);

let total = num + 10;
let sum = parseInt(num) + 10;


para.innerText = total;
para2.innerText=sum;

