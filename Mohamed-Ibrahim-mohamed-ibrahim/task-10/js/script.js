// Toggle Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form Validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    form.reset();
  } else {
    alert("Please fill all fields correctly.");
  }
});

// Scroll to Top
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Slider
let index = 0;
const slides = document.getElementById("slides");
const slideCount = slides.children.length;

function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slideCount;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + slideCount) % slideCount;
  showSlide();
}
