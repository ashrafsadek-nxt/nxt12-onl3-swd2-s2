const forgetForm = document.getElementById("forgetForm");
if (forgetForm) {
    forgetForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("forgetEmail").value;
        const errorEl = document.getElementById("forgetError");
        const successEl = document.getElementById("forgetSuccess");
        if (!email) {
            errorEl.textContent = "Please enter your email!";
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorEl.textContent = "Enter a correct email";
            return;
        }
        errorEl.textContent = "";
        successEl.textContent = `Password reset link sent to ${email}`;
        forgetForm.reset();
    });
}
export {};
//# sourceMappingURL=forget.js.map