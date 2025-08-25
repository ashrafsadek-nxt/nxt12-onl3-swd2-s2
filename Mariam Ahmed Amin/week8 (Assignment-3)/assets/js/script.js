
document.getElementById("orderBtn").addEventListener("click", function() {
  alert("Thanks for your interest! Check our menu below 👇");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").classList.remove("d-none");
    valid = false;
  } else {
    document.getElementById("nameError").classList.add("d-none");
  }

  // Email Validation 
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").classList.remove("d-none");
    valid = false;
  } else {
    document.getElementById("emailError").classList.add("d-none");
  }

  // Message Validation
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("messageError").classList.remove("d-none");
    valid = false;
  } else {
    document.getElementById("messageError").classList.add("d-none");
  }

  if (valid) {
    document.getElementById("successMessage").classList.remove("d-none");


    document.getElementById("contactForm").reset();

  
    setTimeout(() => {
      document.getElementById("successMessage").classList.add("d-none");
    }, 3000);
  }
});
