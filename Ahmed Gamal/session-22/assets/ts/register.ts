const registerForm = document.getElementById("register-form") as HTMLFormElement;
const regError = document.getElementById("error") as HTMLElement;

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const confirm = (document.getElementById("confirm") as HTMLInputElement).value;

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

  alert(`Registered user: ${name} (${email})`);
});
