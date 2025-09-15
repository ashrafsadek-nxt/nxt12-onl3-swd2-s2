var loginForm = document.getElementById("login-form");
var loginError = document.getElementById("error");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!email.indexOf("@")) {
        loginError.textContent = "Invalid email!";
        return;
    }
    if (!password) {
        loginError.textContent = "Password required!";
        return;
    }
    alert("Logged in as ".concat(email));
});
