//input/output
// alert("Hello");
// confirm("Are you okay");
// prompt("what color you want");
document.getElementById("head").innerText = "programming language especially for frontend";
document.getElementById("dv").innerHTML = "<h4>Loose programming language</h4>";
document.getElementById("ipt").value = "123";
document.write("welcome javascript");
console.log(1234);

//variables
// var variable-name = value;
var x = 10; //redeclare اعادة تعريف
console.log(x); 
//reassign
x = 22;
console.log(x); 

let y = 20; //can't be declared
console.log(y); 
//reassign
y = 230;
console.log(y); //reassign

const z = "asdf"; //can't be declared
console.log(z);   //can't be reassigned

// Datatypes
//primitive datatypes:
// (number, string, boolean, null, undefined, symbol)

//string
let dd = 'aly';
console.log(dd);
console.log(typeof(dd));

//number
dd = 22;
console.log(dd);
console.log(typeof(dd));

//boolean
dd = true;
console.log(dd);
console.log(typeof(dd));

dd = false;
console.log(dd);
console.log(typeof(dd));

//null ==> in console will give type object
dd = null;
console.log(dd);
console.log(typeof(dd));

//undefined
dd = undefined;
console.log(dd);
console.log(typeof(dd));

//symbol
dd = Symbol('f');
console.log(dd);
console.log(typeof(dd));

// nonprimitive datatypes:
// (Arrays, object,)

//arrays ==> in console will give type object
dd = [12,"aaa", true, 34.7];
console.log(dd);
console.log(typeof(dd));

dd = Array(12,"aaa", true, 34.7);
console.log(dd);
console.log(typeof(dd));

dd = Array(12,"aaa", true, 34.7);
console.log(dd);
console.log(typeof(dd));

//object
dd = {
    age: 13,
    name: "ahmed"
}
console.log(dd);
console.log(typeof(dd));

//function
dd = function z(){
    let x = 0;
}
console.log(dd);
console.log(typeof(dd));

//arrow function
dd = z => {10+20}
console.log(dd);
console.log(typeof(dd));

//example
//get html element using id from DOM
const input = document.getElementById('ipt2');
console.log(input);
console.log(typeof(input));

//get the value of html element using variable from DOM
let num = input.value; 
console.log(num);
console.log("type of num is ",typeof(num));

//get html element using id from DOM
const para = document.getElementById('firstP');
console.log(para);
console.log(typeof(para));

//variable to add 10 
let total = parseInt(num) + 10;

//output
para.innerText = total;

const secondpara = document.getElementById('secondP');
let sum = parseInt(num) + 10;
secondpara.innerText = total;

console.log(parseInt(ahmed));
console.log (typesof(parseInt(ahmed)));