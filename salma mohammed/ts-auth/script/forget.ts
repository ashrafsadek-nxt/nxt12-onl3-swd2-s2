const forgetForm = document.getElementById("forgetForm")as HTMLFormElement;
if (forgetForm) {
	forgetForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = (document.getElementById("forgetEmail")as HTMLInputElement).value;
		const errorEl = document.getElementById("forgetError")as HTMLElement;
		const successEl = document.getElementById("forgetSuccess")as HTMLElement;
		if (! email) {
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
