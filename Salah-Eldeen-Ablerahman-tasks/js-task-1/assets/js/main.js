// hello everybody

// ways to display any thing on the screen 
alert(`hello from alert`);
confirm(`hello from confirm`);
prompt(`hello from prompt`);

document.getElementById('demo').innerText = 'hello from innerText';
document.getElementById('pen').innerHTML= "<h5>hello from innerHTML</h5>";
document.getElementById('num').value= 2007;
document.write('welcome from write')

// variables rules
var x = 5; //declare
console.log(x);
var x = 7; //redeclare true
console.log(x);
x = 19; //reassign true
console.log(x);

let y = 5; //declare
console.log(y);
// let y = 7; //redeclare false
console.log(y);
y = 19; //reassign true
console.log(y);

const z = 5; //declare
console.log(z);
// const z = 7; //redeclare false
console.log(z);
// z = 19; //reassign false
console.log(z);

// primitive datatypes (number, string, boolean, null, undefined, Symbol)

// string
let a = '22';
console.log(a);
console.log(typeof(a));
// number ==> number
a = 22;
console.log(a);
console.log(typeof(a));
// float ==> number
a = 22.345;
console.log(a);
console.log(typeof(a));
// boolean
a = true;
console.log(a);
console.log(typeof(a));
// boolean
a = false;
console.log(a);
console.log(typeof(a));
// null ==> object
a = null;
console.log(a);
console.log(typeof(a));
// undefined ==> number
a = undefined;
console.log(a);
console.log(typeof(a));
// Symbol ==> symbol
a = Symbol('y');
console.log(a);
console.log(typeof(a));





// non-primitive datatypes (reference) 
// array ==> object
a = [12,"aaaa", true, 34.45];
console.log(a);
console.log(typeof(a));

a = Array(12,"aaaa", true, 34.45);
console.log(a);
console.log(typeof(a));

// object ==> object
a = {
    age: 13,
    name: "ahmed"
}
console.log(a);
console.log(typeof(a));

// function ==> function
a = function z (){
    let x = 0;
}
console.log(a);
console.log(typeof(a));

// arrow function ==> function
a = z => {10+20}
console.log(a);
console.log(typeof(a));

// example
// get html element using id from DOM 
const input = document.getElementById('tex');
console.log(input);
console.log(typeof(input));

// get the value of html element using variable from DOM 
let num = input.value;
console.log(num);
console.log("type of num is ",typeof(num));

// get html element using id from DOM 
const para = document.getElementById('par');
console.log(para);
console.log(typeof(para));

// variable to add 10
let total = num + 10;

// output
para.innerText = total;

// get html element using id from DOM 
const secondPara = document.getElementById('spar');

// parsing = casting
let sum = parseInt(num) + 10;
secondPara.innerText = sum;
console.log(parseInt("ahmed"));
console.log(typeof(parseInt("ahmed")));