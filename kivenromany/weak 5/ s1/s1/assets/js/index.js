// input/output
alert("hello iam alert");
confirm("are you okay?");
prompt("what color want ?");
document.getElementById("head").innerText="programming language espcial for ftonted";
document.getElementById("dv").innerHTML="<h5>loose programming language</h5>";
document.getElementById("ipt").value=123 ;


// variables
var x =10;
console.log(x); // redeclare اعادة تعريف
var x =30;
console.log(x);
x ="aaa";   // reassign يسمح باعادة اعطاء قيمة مختلفه
console.log(x);
x =22.33 ;
console.log(x);
let y =20;  // can't be redeclared لا يسمح باعادة التعريف
console.log(y);
y = 230;    // reassign يسمح باعادة اعطاء قيمة مختلفة
console.log(y);
y = "ahmed aly";
console.log(y);
let $y = 20;
console.log($y);
let _y = 20;
console.log(_y);
let g_y4 = 20;
console.log(_y);
const z ="kkk";  // can't be redeclared لا يسمح باعادة التعريف
console.log(z);    // can't be reassigned لا يسمح بتغيير القيمة 

// datatypes
// primitive datatypes ==> number , string, boolean, null, undefined, symbol
// string 
let dd = "22" ;
console.log(dd);
console.log(typeof(dd));
// number
dd = 22;
console.log(dd);
console.log(typeof(dd));
// number
dd = 22.45;
console.log(dd);
console.log(typeof(dd));
//  booleandd
 dd = true;
 console.log(dd);
 console.log(typeof(dd));
//  booleandd
  dd = false;
  console.log(dd);
  console.log(typeof(dd));
//   null ==> in console will give type object 
 dd = null;
 console.log(dd);
 console.log(typeof(dd))

 // undefined
dd = undefined;
console.log(dd);
console.log(typeof(dd));
// Symbol
dd = Symbol("f")
console.log(dd);
console.log(typeof(dd));
// non-primitive datatypes = reference بيتعامل بالمرجع
// array ==> in console will give type object
dd=[12 , "aaaa",true , 34.54];
console.log(dd);
console.log(typeof(dd));
dd = Array ( 12, " ddd",34.45);
console.log(dd);
console.log(typeof(dd));
// Object
dd = {
    age: 13,
    name : "ahmed" ,
}
console.log(dd);
console.log(typeof(dd));
// function
dd = function z () {
    let x = 0 ;
}
console.log(dd);
console.log(typeof(dd));
// arrow function
dd = z => {10+20}
console.log(dd);
console.log(typeof(dd))
// example
// get HTML element using id from DOM 
const input =document.getElementById("ipt2"); 
console.log(input)
console.log(typeof(input))
// get the value of html element using variable from DOM
let num = input.value ;
console.log(num);
console.log("type of num is ",typeof(num))
// get html element using id from DOM 
const para = document.getElementById('firstP');
console.log(para);
console.log(typeof(para));
// variable to add 10
let total = num + 10;
// output
para.innerText = total;
// get html element using id from DOM 
const secondPara = document.getElementById('secondP');
// parsing = casting
let sum = parseInt(num) + 10;
secondPara.innerText = sum;
console.log(parseInt("ahmed"));
console.log(typeof(parseInt("ahmed")));