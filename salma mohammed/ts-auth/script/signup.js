const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirm = document.getElementById("signupConfirm").value;
        const errorEl = document.getElementById("signupError");
        const sucesseEl = document.getElementById("signupSuccess");
        if (!email) {
            errorEl.textContent = "please enter email";
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorEl.textContent = "Enter a valid email address ex:name@gmail.com";
            return;
        }
        if (!password) {
            errorEl.textContent = "please enter password";
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            errorEl.textContent = "Password must be 8+ chars, include 1 uppercase & 1 number";
            return;
        }
        if (!confirm) {
            errorEl.textContent = "please confirm password";
            return;
        }
        if (password !== confirm) {
            errorEl.textContent = "Passwords do not match!";
            return;
        }
        errorEl.textContent = "";
        sucesseEl.textContent = `signed in sucessfully as ${email}`;
        signupForm.reset();
    });
}
export {};
//# sourceMappingURL=signup.js.map