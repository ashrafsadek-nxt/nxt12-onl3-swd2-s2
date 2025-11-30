// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const errorEl = document.getElementById("loginError");
        const successEl = document.getElementById("loginSuccess");
        if (!email) {
            errorEl.textContent = "please enter email";
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorEl.textContent = "Enter a correct email";
            return;
        }
        if (!password) {
            errorEl.textContent = "please enter password";
            return;
        }
        errorEl.textContent = "";
        successEl.textContent = `logged in sucessfully as ${email}`;
        loginForm.reset();
    });
}
export {};
//# sourceMappingURL=login.js.map