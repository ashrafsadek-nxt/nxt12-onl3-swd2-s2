let links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
let projects = document.querySelectorAll(".card");
projects.forEach(card => {
  card.addEventListener("click", () => {
    alert("You clicked on " + card.textContent);
  });
});