var forgotForm = document.getElementById("forgot-form");
var forgotError = document.getElementById("error");
forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value.trim();
    if (!email.indexOf("@")) {
        forgotError.textContent = "Invalid email!";
        return;
    }
    alert("Password reset link sent to ".concat(email));
});
