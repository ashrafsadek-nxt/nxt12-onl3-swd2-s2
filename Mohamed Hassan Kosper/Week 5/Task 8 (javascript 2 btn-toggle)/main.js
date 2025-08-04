const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click", function toggle() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "Light mode";
  } else {
    btn.innerText = "Dark mode";
  }
});
