const menuBtn = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
}
showSlide();

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide();
};
prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
};

const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.onsubmit = e => {
  e.preventDefault();
  response.textContent = "Thank you! Your message has been sent.";
  form.reset();
};
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 50) {
      sec.classList.add("visible");
    }
  });
};