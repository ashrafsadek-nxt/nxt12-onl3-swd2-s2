//================ Contact Form ==================
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if(name && email.includes("@") && message.length > 10){
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Please fill the form correctly.";
    msg.style.color = "red";
  }
});

//================ Toggle Dark Mode ==================
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

//================ GitHub Projects ==================
const projectsSection = document.getElementById("projects");
const githubProjectsContainer = document.getElementById("github-projects");
const githubUsername = "AhmedGamal17-9";

projectsSection.addEventListener("mouseenter", async () => {
  githubProjectsContainer.style.display = "flex";
  githubProjectsContainer.innerHTML = "<p>Loading projects...</p>";

  try {
    const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repos = await res.json();
    githubProjectsContainer.innerHTML = "";
    repos.forEach(repo => {
      const a = document.createElement("a");
      a.href = repo.html_url;
      a.target = "_blank";
      a.textContent = repo.name;
      githubProjectsContainer.appendChild(a);
    });
  } catch(err) {
    githubProjectsContainer.innerHTML = "<p>Failed to load projects.</p>";
    console.error(err);
  }
});
projectsSection.addEventListener("mouseleave", () => {
  githubProjectsContainer.style.display = "none";
});

//================ Pricing ==================
const pricingData = [
  {
    name: "Basic Package",
    class: "basic",
    priceRange: "From 1,000 to 3,000 EGP",
    target: "Individuals or small businesses looking to establish a basic online presence.",
    features: [
      "Single-page website (Landing Page)",
      "Responsive design for mobile and desktop",
      "Basic HTML, CSS, and JavaScript",
      "Contact form integration",
      "Delivery within 5 working days"
    ],
    discount: 10,
    discountDurationDays: 7
  },
  {
    name: "Standard Package",
    class: "standard",
    priceRange: "From 3,000 to 7,000 EGP",
    target: "Businesses seeking a multi-page website with enhanced functionality.",
    features: [
      "Includes all features of the Basic Package",
      "Up to 5 pages",
      "Interactive elements using React or advanced JavaScript",
      "Basic SEO optimization",
      "Social media integration",
      "Delivery within 10 working days"
    ],
    discount: 15,
    discountDurationDays: 7
  },
  {
    name: "Advanced Package",
    class: "advanced",
    priceRange: "From 7,000 to 15,000 EGP",
    target: "Enterprises or professionals requiring a fully customized, feature-rich website.",
    features: [
      "Includes all features of the Standard Package",
      "Unlimited pages with custom designs",
      "API integrations",
      "Advanced SEO and performance optimization",
      "Custom animations and transitions",
      "Delivery within 15 working days"
    ],
    discount: 20,
    discountDurationDays: 7
  }
];

function displayProfessionalPricing() {
  const container = document.getElementById("pricing-list");

  pricingData.forEach(item => {
    const discountEndTime = new Date().getTime() + item.discountDurationDays * 24 * 60 * 60 * 1000;
    const div = document.createElement("div");
    div.classList.add("pricing-item", item.class);
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Price:</strong> ${item.priceRange}</p>
      <p><strong>Ideal for:</strong> ${item.target}</p>
      <p><strong>Discount:</strong> ${item.discount}%</p>
      <ul>${item.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <p class="countdown">Discount ends in: calculating...</p>
    `;
    container.appendChild(div);

    const countdownEl = div.querySelector(".countdown");
    const timer = setInterval(() => {
      const now = new Date().getTime();
      let distance = discountEndTime - now;

      if(distance <= 0){
        countdownEl.textContent = "Discount ended";
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownEl.textContent = `Discount ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  });
}
displayProfessionalPricing();
