
alert("Hello, I'm alert");
confirm("Are you okay?");
prompt("How old are you?");


document.getElementById("head").innerText = "Mariam Task for Javascript";
document.getElementById('myDiv').innerHTML = "<h5>Loose programming language</h5>";
document.getElementById('ipt').value = 123;
document.writeln("<br>welcome javascript");
console.log(1234);


var x = 10;
console.log(x); 

var x = 30;
console.log(x);
x = "aaa";   
console.log(x);

let y = 20;  
console.log(y);
y = 230;    
console.log(y);
y = "ahmed aly";
console.log(y);

let $y = 20;
console.log($y);

const z = "mariam";  
console.log(z);    


let dd = '22';     // string
dd = 22;           // number
dd = 22.345;       // number
dd = true;         // boolean
dd = false;        // boolean
dd = null;         // null → نوعه "object" في JavaScript
dd = undefined;    // undefined
dd = Symbol('f');  // Symbol


dd = [12, "aaaa", true, 34.45];    // Array
dd = Array(12, "aaaa", true, 34.45); // طريقة ثانية لإنشاء مصفوفة
dd = {
    age: 13,
    name: "ahmed"
}; // Object
dd = function z() {
    let x = 0;
};
dd = z => { 10 + 20 }; 

/* 5-Parssing*/

const input = document.getElementById('ipt2');
console.log(input);
console.log(typeof (input));


let num = input.value;
console.log(num);
console.log("type of num is ", typeof (num));


const para = document.getElementById('firstP');


let total = num + 10;
para.innerText = total;


const secondPara = document.getElementById('secondP');


let sum = parseInt(num) + 10;
secondPara.innerText = sum;


console.log(parseInt("ahmed")); 
console.log(typeof (parseInt("ahmed"))); 
