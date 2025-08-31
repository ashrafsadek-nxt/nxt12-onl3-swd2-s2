const toggleBtn = document.getElementById('toggleButton');

//addEventListener => كاني بقوله استمع لهذا الحدث لاني هطبق عليه خصاءص معينة

toggleBtn.addEventListener('click', function(){
   // classList => هو كلاس بالسي اس اس بقدر اعدل عليه او امسخ او اضيف او اعمل اي حاجة فيه زي ادد او ريموف او توجل
   document.body.classList.toggle('darkMode')

})

// كلمة Toggle
//  في البرمجة معناها التبديل بين حالتين.
// هنا لو الكلاس "" موجود يتشال، ولو مش موجود يضاف.
