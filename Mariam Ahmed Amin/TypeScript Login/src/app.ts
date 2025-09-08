class Login {
  private username: HTMLInputElement;
  private password: HTMLInputElement;
  private form: HTMLFormElement;

  constructor() {
    this.username = document.getElementById("username") as HTMLInputElement;
    this.password = document.getElementById("password") as HTMLInputElement;
    this.form = document.getElementById("loginForm") as HTMLFormElement;

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    if (this.username.value === "admin" && this.password.value === "1234") {
      alert("Login successful ✅");
    } else {
      alert("Invalid credentials ❌");
    }
  }
}

new Login();
