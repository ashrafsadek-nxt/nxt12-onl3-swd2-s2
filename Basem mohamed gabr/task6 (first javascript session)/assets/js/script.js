//       input/ output
//alert('Hello');
//confirm('are you okay?');*
//prompt("what color you want");
document.getElementById("head").innerText =
  "Programming language special for frontend";
document.getElementById("dv").innerHTML = "<h5>Loose programming language</h5>";
document.getElementById("ipt").value = 2019;
document.write("<br>welcome javascript");
console.log("1234");
//        variables
var x = 10; //Can be redeclared
x = 30; //can be reassigned                 can-can
console.log(x);
let y = 20; //Can't be redeclared
y = 15; //can be reassigned                     can't-can
console.log(y);
const z = "Basem"; //Can't be redeclared //cant be reassinged           can't-can't
console.log(`${z} Jabr`);
// const, let (block scope)

// primitive datatypes -> value
// number(int, decimal), string, boolean, null, undefined, symbol
let string = "ali";
let string2 = "22";
console.log(string);
console.log(typeof string);
console.log(typeof string2);
let int = 22;
console.log(typeof int);
let boln = false;
console.log(typeof bolean);
let _null = null;
console.log(_null);
console.log(typeof _null);
let symbol = "@";
console.log(symbol);
console.log(typeof symbol);

//non-primitive datatypes  -> refrence
//array
int = [12, "basem", true, 34.45];
console.log(int);
console.log(typeof int);
int = Array[(12, "basem", true, 34.45)];
console.log(int);
console.log(typeof int);
// object
int = {
  age: 13,
  name: "ahmed",
};
console.log(int);
console.log(typeof int);
// function
int = function z() {};
console.log(int);
console.log(typeof int);
// arrow function
int = (z) => {
  10 + 20;
};
console.log(int);
console.log(typeof int);
// example
const input = document.getElementById("ipt2");
console.log(input);
console.log(typeof input);
let num = Number(input.value);
console.log(num);
console.log(typeof num);
const para = document.getElementById("firstP");
console.log(para);
console.log(typeof para);

let total = num + 10;
para.innerText = total;
console.log(total);

let parsedInt = parseInt("45.99");
let parsedFloat = parseFloat("45.99");
let castedNum = Number("123");
console.log(parsedInt, parsedFloat, castedNum);
