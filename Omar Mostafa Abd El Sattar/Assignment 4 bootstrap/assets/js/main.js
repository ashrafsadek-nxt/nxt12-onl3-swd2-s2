/// Menu show & hidden/////////

const navMenu= document.getElementById('nav-menu'),
navToggle= document.getElementById('nav-toggle'),
navClose =document.getElementById('nav-close');
// /////// Validate if constant exist/////

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
  });
}

// ///////MENu hidden Validate if constant exist/////

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
  });
}
// /// Remove Menu Mobile//////
const navLink =document.querySelectorAll('nav-link');
const linkAction=()=>{
  const navMenu= document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction)
);

// // change background header/////

const scrollHeader =()=>{
    const header =document.getElementById('header');

    this.scrollY >= 20
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll',scrollHeader);
// ///scroll section active link////

// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () => {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//      sectionTop = current.offsetTop - 58 , // علشان يبدأ قبل ما يوصل بالظبط
//      sectionId = current.getAttribute('id'),
//      sectionClass =document.querySelector('.nav-menu a[href*=' + sectionId +']');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      
//         sectionClass.classList.add('active-link');
//     } else {
     
//         sectionClass.classList.remove('active-link');
//     }
//   });
// };

// window.addEventListener('scroll',scrollActive);

// اجمع الأقسام واللينكات مرة واحدة
const sections = Array.from(document.querySelectorAll('section[id]'));
const links = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));

// خريطة من id -> عنصر اللينك
const linkMap = new Map(
  links.map(a => [a.getAttribute('href').slice(1), a])
);

// دالة موحدة لتفعيل لينك واحد وإلغاء الباقي
function setActive(id) {
  linkMap.forEach((a, key) => {
    a.classList.toggle('active-link', key === id);
  });
}

// تفعيل حسب الاسكرول
function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  const offset = 58; // ارتفاع الهيدر 
  let currentId = null;

  for (const sec of sections) {
    const top = sec.offsetTop - offset;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) { currentId = sec.id; break; }
  }

  if (currentId && linkMap.has(currentId)) setActive(currentId);
}

window.addEventListener('scroll', onScroll);

// (اختياري) تفعيل عند الضغط كمان
links.forEach(a => {
  a.addEventListener('click', () => {
    const id = a.getAttribute('href').slice(1);
    if (linkMap.has(id)) setActive(id);
  });
});

// /// dark light theme/////////
window.addEventListener('DOMContentLoaded',()=>{
    const toggleBtn= document.getElementById('theme-toggle');

    function applyTheme(theme){
        if(theme==='light'){
            document.body.classList.add('light-theme');
            toggleBtn.classList.remove('ri-sun-line');
            toggleBtn.classList.add('ri-moon-line');
        } else{
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');
        }

        localStorage.setItem('theme',theme);
    }

    const savedTheme =localStorage.getItem('theme')|| 'dark';
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click',()=>{
        const isLight= document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    });
});



// //scrool about animation/////
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span,{
        backgroundSize: '100% 100%',
        ease:'none',
        scrollTrigger: {
            trigger:span,
            start:'top bottom',
            end: 'top center',
            scrub:true,
        },
    });
});

// ///Mixitup/////////////
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

// ////avtive work/////
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWork.forEach((a) => {
  a.addEventListener("click", activeWork);
});

// ////////email///////////

const contactForm = document.getElementById('contact-form'),

contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message'),
message = document.getElementById('message');

const sendEmail =(e) => {

    e.preventDefault();

    if(
        contactName.valu ===''||
        contactEmail.value ===''||
        contactMessage.value ===''
    ){
        message.textContent ='Write all the input fields';

        setTimeout(() =>{
            message.textContent ='';
        },300 );
    } else{
        emailjs
        .sendForm(
            'service_xq6olqq', 
            'template_mnnncbr',
             '#contact-form',
             'JGi03Ja88prdNKOf0'
            )
        .then(
  () => {
    message.textContent ='Message sent';

      setTimeout(() =>{
            message.textContent ='';
        },5000 );
  },
  (error) => {
    alert('OOPs! SOMTHING WENT WRONG.....', error)
  },
);

contactName.value ='';
contactEmail.value ='';
contactMessage.value ='';

    }
};

contactForm.addEventListener('submit', sendEmail);

// ///// scroll reveal animation///////

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
});

sr.reveal('.home-data');
sr.reveal('.home-img-wrapper',{ delay:500});
sr.reveal('.home-social-grid',{ delay:600});
sr.reveal('.services-card , .mix',{ interval:100});

sr.reveal('.skills-developer, .resume-left, .contact-group',{ origin:'left'});
sr.reveal('.skills-designer, .resume-right, .contact-form',{ origin:'right'});