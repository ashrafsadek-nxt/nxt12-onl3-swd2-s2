var registerForm = document.getElementById("register-form");
var regError = document.getElementById("error");
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    if (!name) {
        regError.textContent = "Name is required!";
        return;
    }
    if (!email.indexOf("@")) {
        regError.textContent = "Invalid email!";
        return;
    }
    if (password.length < 6) {
        regError.textContent = "Password must be at least 6 characters!";
        return;
    }
    if (password !== confirm) {
        regError.textContent = "Passwords do not match!";
        return;
    }
    alert("Registered user: ".concat(name, " (").concat(email, ")"));
});
