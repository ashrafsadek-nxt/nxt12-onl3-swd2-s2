const forgotForm = document.getElementById("forgot-form") as HTMLFormElement;
const forgotError = document.getElementById("error") as HTMLElement;

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value.trim();

  if (!email.indexOf("@")) {
    forgotError.textContent = "Invalid email!";
    return;
  }

  alert(`Password reset link sent to ${email}`);
});
