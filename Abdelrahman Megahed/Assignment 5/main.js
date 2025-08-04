const btn = document.getElementById("btn");
let txt = document.body.classList.contains("dark-mode");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
