// input / output
//كل الي جاي تحت ده هو عبارة عن input / output
/* ************************************ */

alert("Hello i'm alert"); 

confirm("Are you sure you want to continue?");
confirm('are you ok?');
// كونفرم دي بتظهر رسالة للمستخدم وبتطلب منه تأكيد
// لما بدوس اوك او كانكل اليوزر كدة بيعمل انبوت للموقع فلو داس اوك الموقع هيعمل حاجة ولو داس كانكل هيعمل حاجة تانية

// كدة انا باخد قيمة من اليوزر وبشتغا عاليها 
prompt('what color you want?');

// document => دي معناها ادخل ع كل اكواد الهتمل وهاتلي الي في الهيدا او البادي وده معناه اني هشتغل ع الدوم 
// فدوكمنت معناها هات الروت بتاعي وهو الهتمل يعني كل اكواد البادي والهيد
// والدوت دي معناها اني دخلت جوا الهيد او البادي document. 

document.getElementById('head').innerText ='programming language especial for frontend (this write by js)';

//getElementById => دي معناها اني هجيب عنصر من الدوم بالid بتاعه
// innerText => دي معناها اني هكتب نص  جوا العنصر ده
// document.getElementById('head') => دي معناها اني هجيب العنصر
// كل دوت بكتبها معناها بخش جوا الحاجة
// اول دوت دخلت بيها جوا الهتمل بعدها تاني دوت دخلت بيها جوا العنصر الي الايدي بتاعه هيد وتاني دوت كتبت تيكست جوا العنصر الهيد

// في طريقة تانية اكتب جوا الهتمل وهي
document.getElementById('dv').innerHTML="<h4>Loose programming language (this write by js)</h4>";
// innerHtml => دي معناها اني هكتب كود هتمل مش تيكست  جوا العنصر ده

// ممكن اعمل نصوص عادي بين كوتيشن والفاليو هنا هتدي قيمة جوا الانبوت فهلاقي مكتوب فيه 123
document.getElementById('ipt').value = 123;

document.write('welcome JavaScript');
document.write('<br>Welcome to JavaScript');
// الديكومنت دوت رايت لو اتعملت بطريقة غير مظبوطة ممكن تلغي الصفحة كلها
// The write() method deletes all existing HTML when used on a loaded document.
// The write() method cannot be used in XHTML or XML.
// روح للزرارر التاني في الهتمل ودوس عليه هيوريك ازاي بيلغي الصفحة كلها

// في الكونسل انا بعرف اي الاخطاء الي عندي ولو في سطر كود كاتبه غلط هو بيعرفني اي السطر ده وهو مهم جدا للديفلوبرز
console.log('moscow');

// variables ==> حجز مكان في الميموري لتخزين داتا او قيم يعني
// اكتر المتغيرات استخداما هي الليت بعده الكونست واخيرا الفار ودي اقلهم بعد ما ظهرت الليت
var x = 10;
console.log(x);
let y = 20;
console.log(y);
const z = 'Ov.';
console.log(z);
// علامة اليساوي في البرمجة اسمها assignment = 
// لما يجيلي ايرور اسمها left hand side assignment error
// ده معناه ان في ايرور على شمال علامة اليساوي

// let xx-ff =68; error => مينفعش اعمل شرطة في تعريف المتغيرات

/*
الفروقات بين فار وليت وكونست
الفار بيسمح بعاادة التعريف re-declaration -- redeclare
var re = 10;
var re = 'hi';

الليت لا يسمح باعادة التعريف فالاتي ده ايرور
let y = 20;
let y = 'hi'; // error => Identifier 'y' has already been declared
وبردوا كونست لا تسمح باعادة التعريف
const x = 10 ;
const x = 200; // error => Identifier 'x' has already been declared
*/
// مش هيحصل ايرور
var re = 10;
var re = 'hi';
/*
var yy = 20;
let yy = 30; 
console.log(yy);
 ايرور 
 main.js:76 Uncaught SyntaxError: Identifier 'yy' has already been declared (at main.js:76:5)

 بردوا ده ايرور
let yy = 20;
var yy = 30; 
console.log(yy);
 */


/*
المنظر الاتي اسمه reassign 
يعني بعمل اعادة تعيين لقيمة المتغير
var x = 10;
x = 'ok';
x = 55.22;
وده عادي مش ايرور

*/
// i can do reassign with let and var but not with const
let t =30;
console.log(t);
t = 'moscowww';
console.log(t);

/*

-----   redeclare   ||  reassign
 var       Yes           Yes
 let       No            Yes
 const     No            No

*/

/*
const and let ==> block scope
var ==> function scope
*/

//block scope
/*
if (true) {
    let a = 10;
    const b = 20;
    console.log(a); // 10
    console.log(b); // 20
}

console.log(a); // ❌ Error: a is not defined
console.log(b); // ❌ Error: b is not defined
*/
// function scope
/*
if (true) {
    var x = 100;
    console.log(x); // 100
}
console.log(x); // ✅ 100
*/




// datatypes
// الداتا تايب مش بتتكتب بشكل صريح في الجافاسكريبت
// loose programming language
// يعني مش لازم اقول ان ده رقم او سترينج او بولين
// يعني مش بكتب انواع الدات فالجافا سكريبت الداتا تايب فيها بتتفهم ضمنيا

// string, number, boolean, null, undefined, symbol ==> permitive data types
// object, array , function ==> non-permitive data types
// permitive data types ==> الانواع البسيطة الاولية البدائية - داتا بسيطة مش معقدة
// non-permitive data types ==> الانواع المركبة المعقدة

// permitive datatypes //
let dd = 'ahmed';
console.log(dd);
console.log(typeof dd); // string
console.log(typeof(dd)); // string
dd = 22;
console.log(dd);
console.log(typeof(dd)); // number
dd = 22.345;
console.log(dd);
console.log(typeof(dd)); // number
// الجافا سكريبت كل الارقام اسمها نمبر مفيش لا انتجر ولا فلوت ولا دبل الخ
dd = true;
// dd = True; => error 
console.log(dd);
console.log(typeof(dd)); // boolean
dd = false; 
console.log(dd);
console.log(typeof(dd)); // boolean
dd = null;
console.log(dd);
console.log(typeof(dd)); // / هو نل بس المسمى بتاعه object
// هو النل حاجة فاضية فالتايب اوف بيعامله معاملة الكائن او الاوبحكت الفاضي
dd = undefined; // حاجة غير معرفة ملهاش قيمة
console.log(dd);
console.log(typeof(dd)); // undefined
dd = Symbol('f');
console.log(dd);
console.log(typeof(dd)); // symbol
// symbol == >يعني لما احب ادي قيمة يونيك او فريدة مش بتكرر 

// non-permitive datatypes //
// ليها تلات انواع وهما الاوبجكت  و الاراي والفانكشن
// non-permitive datatypes -- داتا بتخزن كزا قيمة وبتتعامل بحاجة اسمها ريفرينس
// reference ==> بيتعامل بالمرجع
// المرجع ده الي هو زي انا عاوز الانديكس واحد في الاراي او عاوز النيم في الاوبجكت كزا

// Array ==> in console will give type object
// array
dd = [12 , 'aaaa' , true ,34.45];
console.log(dd);
console.log(typeof(dd)); // هو اراي بس المسمى بتاعه object
// array بردوا بس كتبتها بشكل تاني
dd = Array(12 , 'aaaa' , true ,34.45);
console.log(dd);    
console.log(typeof(dd)); // هو اراي بس المسمى بتاعه object

// object
dd ={
    age:13,
    name:'ahmed'
};
console.log(dd);//هنا هيجيب البروتو تايب اوبجكت مش اراي زي الاتنين الي فاتوا
//في الاوبجكت مش هيدينا الطول بتاعها ولا عدد عناصر ولا هيرقمهم بزيرو وواحد واتنين انديكسات يعني علطول هجيب المحتوى زي الايدج والنيم
console.log(typeof(dd)); // object

// function
dd = function ov() {
    let x = 10;
};
console.log(dd);
console.log(typeof(dd)); // function

// شكل من اشكال الفانكشن اسمه arrow function
dd = ov =>{10+20}
console.log(dd);
console.log(typeof(dd)); // function



// Example
// عاوز قيمة الي احطها جوا الانبوت اجمع عليها عشرة في الانبوت ابو ايدي اسمه ipt2
// واحط الناتج في البراغارف ابو ايدي اسمه firstP


// get html element using id from DOM

// اي الليمنت هجيبه من الهتمل ومش هغير قيمته يفضل احطه كونست زي البارا والانبوت
// انا ليه عملته كونست عشان يحفظ عنصر الهتمل فيه وميتغيرش
const input = document.getElementById('ipt2');
// const para = document.getElementById('firstP');
console.log(input);
console.log(typeof(input)); // object
// هيجبلي انه اوبجكت عشان الانبوت دي تاجة هتمل معقدة مليانة بيانات كتير وايفينتا وحاجات كتيرة
// فهو اكيد هيكون نان بريميتف داتا تايب


// طبعا الانبوت نان بريميتف داتا تايب فهي ليها خصائص يعني كتيرة
// ومنها الفاليو الي هي اصلا المكان بحفظ فيه القيمة او الانبوت الي هحطه يعني

// get the value of  html element using variable from DOM

// انا عارف ان المتغير انبوت مساويه بالانبوت ايليمنت ده وعارف انه اوبجكت وجوا داتا او خاصية الفاليو فبالدوت الي عملتها دي انا دخلت جوا الاوبجكت وخدت قيمة الفاليو
let num = input.value; // هنا انا باخد القيمة الي في الانبوت
// انا عملته ليت ليه لان القيمة بتاعت الفاليو ممكن تتغيرر عادي
console.log(num); // هنا هيطبعلي القيمة الي في الانبوت
// هنا طبعلي 33 الي هي قيمة الفاليو الي مخزنها في المتغير نيم ومساويه بالانبوت دوت فاليو
console.log('type of num is ' , typeof(num)); // string
// اي بيانات جاية من الفورم في الهتمل ورايحة للجافا سكريبت فهي نوعها استرنج

// get html element using id from DOM

const para = document.getElementById('firstP');
console.log(para);
console.log(typeof(para)); // object

// variable to add 10

let total = num+10;
// output
para.innerText = total; // هيطبع الناتج 3310 لان دولا استرنج اصلا فلازم احولهم لرقم

// num = parseInt(num); // هنا انا بعمل تحويل للقيمة من سترينج لرقم

// get html element using id from DOM

const secondPara = document.getElementById('SecondP');
// parsing = casting
let sum = parseInt(num)+10;
secondPara.innerText = sum;

// parseInt() => دي ميثود تحويل من سترينج لرقم صحيح
// parsebigInt() => دي ميثود تحويل من سترينج لرقم صحيح كبير

console.log(parseInt('ahmed')); // NaN
// NaN => Not a Number
console.log(typeof(parseInt('ahmed'))); // number
// جابت نوعها نمبر لان بارس انت بتحول اي حاجة لنمبر لكن هي لقت جواها كلمة احمد فده مش رقم فهتقول في الكونسل دوت لوج بس انه نان




/*
ملخص الكود الي فات

const input = document.getElementById('ipt2'); // جبت الانبوت
let num = input.value; // اخدت القيمة من الانبوت
const para = document.getElementById('firstP'); // جبت البارا
let total = num + 10; // هنا انا بجمع على القيمة الي في الانبوت
 para.innerText = total; // هنا انا بطبع الناتج في البارا
*/