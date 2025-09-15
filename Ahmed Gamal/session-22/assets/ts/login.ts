const loginForm = document.getElementById("login-form") as HTMLFormElement;
const loginError = document.getElementById("error") as HTMLElement;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  if (!email.indexOf("@")) {
    loginError.textContent = "Invalid email!";
    return;
  }
  if (!password) {
    loginError.textContent = "Password required!";
    return;
  }

  alert(`Logged in as ${email}`);
});
