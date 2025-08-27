/*
alert("Hello,I am alert");
confirm("Are you ok");
prompt("What color you want");*/
document.getElementById("head").innerText ="Programming language only for front-end ";//give the page of html all 
document.getElementById('dv').innerHTML = "<h5>Loose programming language</h5>";
document.getElementById('ipt').value = 123;
document.writeln("<br>Welcome js");//ممكن تلغي كل الكلام الي موجود في الصفحة
console.log(1234);//بتظهر ف ال console to help if foind an error 
//Variables
//var Variable-name =value; =>Before ES6
var x = 6;//Third use 
console.log(x);
//after ES6
let y = 20;//الاكثر استخداما 
const z ="Mohamed";//Secound use
let $y = 20; 
const _z ="Mohamed";
console.log(y);
console.log(z);
console.log($y);
console.log(_z);
/*Diff of var,let,const (Redeclare)
var:عادي اغرف نفس اسم المتعير بقيم مختلفة var x = 1; var x = 2;
let:مينفغش
const:ميتفعش
*/
/*Diff of var,let,const (Reasign)
var => var x =2; x=4; ينفع 
let => let y = 3; y = 6 ينفع
const: مينفعش
*/
/*Diff of var,let,const 
var => Not Block scope
let => Block scope
const => Block scope
*/


// ##Datatypes##
//primitive datatypes
var d='Mohamed';
console.log(d);
console.log(typeof(d));
d=Symbol('Mohamed');
console.log(d);
console.log(typeof(d));
//NULL :object && undefined && sympol

//Non-primitive datatypes = refrence بيتعامل بالمرجع
// 1- Array =>will give type object
d=[12,"aaaa",true,32.23];
console.log(d);
console.log(typeof(d));
// * Array
d=Array(12,"aaaa",true,32.23);
console.log(d);
console.log(typeof(d));
//2-Object
d={
    age:22,
    name: "Mohamed"
}
console.log(d);
console.log(typeof(d));

//3-Function
d= function z() {
    let p =0;

}
console.log(d);
console.log(typeof(d));
// arrow Function
d=  z => {10+20}
console.log(d);
console.log(typeof(d));
//example
//get html element using id from DOM
const input =document.getElementById('ipt4');//Const :علشان المتغير يفضل ثابت معايا
console.log(input);
console.log(typeof(input));

//get the value of html element using variable from DOM
let num = input.value;
console.log(num);
console.log(typeof(num))//string : string اي بياناتى جاية من الفورم تكون 

//get html element using id from DOM
const para =document.getElementById('fp');
console.log(para);
console.log(typeof(para));

//variable to add 10
let total = parseInt(num)+ 10;
//output 
para.innerText=total;
