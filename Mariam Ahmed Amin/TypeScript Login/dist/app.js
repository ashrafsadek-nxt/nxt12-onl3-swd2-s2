"use strict";
class Login {
    constructor() {
        this.username = document.getElementById("username");
        this.password = document.getElementById("password");
        this.form = document.getElementById("loginForm");
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.username.value === "admin" && this.password.value === "1234") {
            alert("Login successful ✅");
        }
        else {
            alert("Invalid credentials ❌");
        }
    }
}
new Login();
//# sourceMappingURL=app.js.map