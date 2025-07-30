// input/output
/* */
// alert("hello I'm ALERT");
// confirm("are you okay?");
// prompt("what color you want?");
document.getElementById("head").innerText = "programming language espcial for frontend";
document.getElementById('dv').innerHTML = "<h5>Loose programming language</h5>";
document.getElementById('ipt').value = 123;
document.write("<br>welcome javascript");
console.log(1234);
// variables المتغيرات
// var variable-name;
// var variable-name = value;
var x = 10;
console.log(x); // redeclare اعادة تعريف
var x = 30;
console.log(x);
x = "aaa";   // reassign يسمح باعادة اعطاء قيمة مختلفة
console.log(x);
x = 22.33;
console.log(x);
let y = 20;  // can't be redeclared لا يسمح باعادة التعريف
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
const z = "asdf";  // can't be redeclared لا يسمح باعادة التعريف
console.log(z);    // can't be reassigned لا يسمح بتغيير القيمة 

// datatypes
// primitive datatypes ==> number, string, boolean, null, undefined, Symbol
// string
let dd = '22';
console.log(dd);
console.log(typeof(dd));
// number
dd = 22;
console.log(dd);
console.log(typeof(dd));
// number
dd = 22.345;
console.log(dd);
console.log(typeof(dd));
// boolean
dd = true;
console.log(dd);
console.log(typeof(dd));
// boolean
dd = false;
console.log(dd);
console.log(typeof(dd));
// null ==> in console will give type object
dd = null;
console.log(dd);
console.log(typeof(dd));
// undefined
dd = undefined;
console.log(dd);
console.log(typeof(dd));
// Symbol
dd = Symbol('f');
console.log(dd);
console.log(typeof(dd));
// non-primitive datatypes = reference بيتعامل بالمرجع
// array ==> in console will give type object
dd = [12,"aaaa", true, 34.45];
console.log(dd);
console.log(typeof(dd));
dd = Array(12,"aaaa", true, 34.45);
console.log(dd);
console.log(typeof(dd));
// object
dd = {
    age: 13,
    name: "ahmed"
}
console.log(dd);
console.log(typeof(dd));
// function
dd = function z (){
    let x = 0;
}
console.log(dd);
console.log(typeof(dd));
// arrow function
dd = z => {10+20}
console.log(dd);
console.log(typeof(dd));
// example
// get html element using id from DOM 
const input = document.getElementById('ipt2');
console.log(input);
console.log(typeof(input));
// get the value of html element using variable from DOM 
let num = input.value;
console.log(num);
console.log("type of num is ",typeof(num));
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
console.log(typeof(parseInt("ahmed")))