// Login
const loginForm = document.getElementById("loginForm")as HTMLFormElement;
if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = (document.getElementById("loginEmail")as HTMLInputElement).value;
		const password = (document.getElementById("loginPassword")as HTMLInputElement).value;
		const errorEl = document.getElementById("loginError")as HTMLElement;
		const successEl = document.getElementById("loginSuccess")as HTMLElement;

		if (! email) {
			errorEl.textContent = "please enter email";
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errorEl.textContent = "Enter a correct email";
			return;
		}
		if (! password) {
			errorEl.textContent = "please enter password";
			return;
		}
		errorEl.textContent = "";
		successEl.textContent = `logged in sucessfully as ${email}`;
		loginForm.reset();
	});
}
