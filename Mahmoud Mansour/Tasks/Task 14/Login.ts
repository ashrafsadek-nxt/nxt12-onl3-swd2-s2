const form = document.getElementById("loginForm") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement;

async function authenticate(email: string, password: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "password123") {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  }
);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  const success = await authenticate(email, password);
  if (success) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }
}
);
