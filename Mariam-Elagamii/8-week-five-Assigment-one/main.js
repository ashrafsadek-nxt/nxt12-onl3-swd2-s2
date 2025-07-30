/* 1-input/output instructions*/
alert("Hello, I'm alert");
confirm("Are you okay?");
prompt("How old are you?");

/* 2-Get elements of HTML by JS*/
document.getElementById("head").innerText = "Mariam Task for Javascript";
document.getElementById('myDiv').innerHTML = "<h5>Loose programming language</h5>";
document.getElementById('ipt').value = 123;
document.writeln("<br>welcome javascript");
console.log(1234);

/* 3-variables */
var x = 10;
console.log(x); // redeclare اعادة تعريف

var x = 30;
console.log(x);
x = "aaa";   // reassign يسمح باعادة اعطاء قيمة مختلفة
console.log(x);

let y = 20;  // can't be redeclared لا يسمح باعادة التعريف
console.log(y);
y = 230;    // reassign يسمح باعادة اعطاء قيمة مختلفة
console.log(y);
y = "ahmed aly";
console.log(y);

let $y = 20;
console.log($y);

const z = "mariam";  // can't be redeclared لا يسمح باعادة التعريف
console.log(z);    // can't be reassigned لا يسمح بتغيير القيمة 

/* 4-datatypes */
// primitive datatypes ==> number, string, boolean, null, undefined, Symbol
let dd = '22';     // string
dd = 22;           // number
dd = 22.345;       // number
dd = true;         // boolean
dd = false;        // boolean
dd = null;         // null → نوعه "object" في JavaScript
dd = undefined;    // undefined
dd = Symbol('f');  // Symbol

// non-primitive datatypes = reference بيتعامل بالمرجع
dd = [12, "aaaa", true, 34.45];    // Array
dd = Array(12, "aaaa", true, 34.45); // طريقة ثانية لإنشاء مصفوفة
dd = {
    age: 13,
    name: "ahmed"
}; // Object
dd = function z() {
    let x = 0;
}; // Function
dd = z => { 10 + 20 }; // Arrow Function

/* 5-Parssing*/
// جلب عنصر input
const input = document.getElementById('ipt2');
console.log(input);
console.log(typeof (input));

// أخذ القيمة من input (دايمًا بترجع كـ string)
let num = input.value;
console.log(num);
console.log("type of num is ", typeof (num));

// جلب عنصر لعرض النتيجة
const para = document.getElementById('firstP');

// جمع string مع رقم → يعامله كسلسلة نصية
let total = num + 10;
para.innerText = total;

// جلب عنصر ثاني لعرض نتيجة الجمع الصحيح
const secondPara = document.getElementById('secondP');

// تحويل القيمة إلى رقم (int) باستخدام parseInt
let sum = parseInt(num) + 10;
secondPara.innerText = sum;

// تجربة على تحويل قيمة نصية غير رقمية
console.log(parseInt("ahmed")); // NaN
console.log(typeof (parseInt("ahmed"))); // number
