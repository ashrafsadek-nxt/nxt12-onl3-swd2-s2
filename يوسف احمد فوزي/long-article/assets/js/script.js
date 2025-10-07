// DOM Elements
const progressBar = document.getElementById("progressBar");
const backToTopBtn = document.getElementById("backToTop");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

// Progress Bar Animation
function updateProgressBar() {
  const windowTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (windowTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
}

// Back to Top Button Visibility
function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
}

// Smooth Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Mobile Navigation Toggle
function toggleMobileNav() {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
  navToggle.classList.remove("active");
  navLinks.classList.remove("active");
}

// Navbar background opacity based on scroll
function updateNavbarStyle() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
}

// Animate sections on scroll
function animateOnScroll() {
  const sections = document.querySelectorAll(".content-section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = windowHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Highlight active section in navigation
function highlightActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Reading time estimator
function estimateReadingTime() {
  const text = document.querySelector("main").innerText;
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  const readTimeElement = document.querySelector(".read-time");
  if (readTimeElement) {
    readTimeElement.textContent = `${readingTime} min read`;
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop =
          targetSection.getBoundingClientRect().top + window.pageYOffset - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        closeMobileNav();
      }
    });
  });
}

// Add active styles for navigation
function addActiveNavStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .nav-links a.active {
            color: #3498db;
        }
        .nav-links a.active::after {
            width: 100%;
        }
    `;
  document.head.appendChild(style);
}

// Initialize all functionality
function init() {
  // Initial setup
  estimateReadingTime();
  addActiveNavStyles();
  initSmoothScroll();

  // Event listeners
  window.addEventListener("scroll", () => {
    updateProgressBar();
    toggleBackToTop();
    updateNavbarStyle();
    animateOnScroll();
    highlightActiveSection();
  });

  backToTopBtn.addEventListener("click", scrollToTop);
  navToggle.addEventListener("click", toggleMobileNav);

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close mobile nav on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileNav();
    }
  });

  // Initial calls
  updateProgressBar();
  toggleBackToTop();
  updateNavbarStyle();
  animateOnScroll();
  highlightActiveSection();
}

// Start when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effect to paragraphs
  const paragraphs = document.querySelectorAll(".content-section p");

  paragraphs.forEach((p) => {
    p.addEventListener("mouseenter", function () {
      this.style.paddingLeft = "2rem";
      this.style.borderLeft = "3px solid #3498db";
    });

    p.addEventListener("mouseleave", function () {
      this.style.paddingLeft = "0";
      this.style.borderLeft = "none";
    });
  });

  // Add typing effect to the main title (optional)
  const mainTitle = document.querySelector(".article-header h1");
  if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        mainTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    // Start typing effect after a small delay
    setTimeout(typeWriter, 500);
  }
});
