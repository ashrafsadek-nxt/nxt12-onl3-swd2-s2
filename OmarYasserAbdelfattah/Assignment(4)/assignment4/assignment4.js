var heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener("click", function () {
  alert("Welcome to the Blog Section!");
});

var form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Message sent successfully!");
    form.reset();
  }
});

var readMoreLinks = document.querySelectorAll(".read-more");
readMoreLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Full article will be available soon!");
  });
});