const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.contains("dark") ? btn.innerText = "Light mode" : btn.innerText = "Dark mode";
});