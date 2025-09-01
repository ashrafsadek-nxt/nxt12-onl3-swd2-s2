// Button click event
document.getElementById("learnBtn").addEventListener("click", () => {
    alert("Thanks for showing interest! Scroll down to see my works.");
});

// Contact form validation + response
const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        response.textContent = "Message sent successfully!";
        form.reset();
    } else {
        response.textContent = "Please fill out all fields.";
        response.classList.add("text-danger");
    }
});
