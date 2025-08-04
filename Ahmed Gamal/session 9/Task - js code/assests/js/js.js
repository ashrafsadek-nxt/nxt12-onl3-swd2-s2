/*
HTML Link :
internal : onclick ondbclick ="..."
external :<script src=""></script>
internal :<script></script>

massege :

alert("ok");

confirm("ok / cancle");

prompt("ok +input / cancle"); */

//-----------------------------------------------------------
// variables

var x = "value1" ; // re-declare<overwrite> + re-assign<overwrite> + Function Scope +not block-scope

//console.log(x); // Accessing a variable before it's defined
var x = 5;


let y = "value" ; // not re-declare + re-assign + block-scope

const z = "value" ; // nor re-declare + not re-assign + block-scope

//-----------------------------------------------------------
/*primitive datatypes : 7

number - BigInt [big numbers] - string - boolean - 

null [object][Deliberately empty value] -

undefined[The default value for any variable that has not been assigned a value] -

symbol[A completely specific and unique value even if you write the same name inside it] 

console.log(typeof(x));
*/
//-----------------------------------------------------------
//non-primitive datatypes = It isn't stored by value directly, but by reference in memory
let a = 5;                 let obj1 = { name: "Ali" };
let b = a;                 let obj2 = obj1;
b = 10;                    obj2.name = "Said";
console.log(a); /*5*/      console.log(obj1.name); /*Said*/

//object : A set of {key:value}
var array1 = {
  name:"ahmed" ,
  age:22
};

//Array : A special type of object used to store an ordered list of values using an index
var array1 = [12,"aaa",true,null];
var array2 = Array[12,"aaa",true,null];

console.log(array1);
console.log(typeof(array1));

//function
var fun1 = function c () {
  let x="ahj";
};
console.log(typeof(fun1));

//arrow function
var fun2 = c => {};
console.log(typeof(fun2));

//----------------------------------------------------------
/* DOM :

document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.getElementsByName("attribute-name")

*/
document.getElementById("pid").innerText="new text";// change the textcontent of HTML element
document.getElementById("preid").innerText="456";


document.getElementById("divid").innerHTML="<h4>h4</h4>"; //change the all content of HTML element

document.write('<h2>new elemnt W</h2>');//add HTML element

document.getElementById("idinput1").value=55;// change value of value-attribute

//example
const input=document.getElementById("idinput2");// html element is an object /html element is const 
console.log(input);//the entire html element 
console.log(typeof(input));// html element is an object
let num =input.value;
console.log(num); console.log(typeof(num));// all data comes from html form is string
let total1 =num + 10; console.log(total1);
// casting
let total2 =parseInt(num) + 10; console.log(total2);
console.log( parseInt("a"), typeof(parseInt("a")) );// NaN is a number