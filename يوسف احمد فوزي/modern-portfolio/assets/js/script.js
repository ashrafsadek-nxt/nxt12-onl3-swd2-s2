// Modern Portfolio JavaScript with Advanced Features

class ModernPortfolio {
  constructor() {
    this.init();
    this.setupEventListeners();
    this.setupAnimations();
    this.startTypingAnimation();
    this.setupTheme();
  }

  init() {
    //#region Elements
    // Loading screen
    this.loadingScreen = document.getElementById("loadingScreen");
    // Navigation elements
    this.navbar = document.getElementById("navbar");
    this.navMenu = document.getElementById("navMenu");
    this.hamburger = document.getElementById("hamburger");
    this.themeToggle = document.getElementById("themeToggle");
    this.navLinks = document.querySelectorAll(".nav-link");

    // Animation elements
    this.typingText = document.getElementById("typingText");
    this.statNumbers = document.querySelectorAll(".stat-number");
    this.skillBars = document.querySelectorAll(".skill-progress-bar");

    // Project elements
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.projectCards = document.querySelectorAll(".project-card");
    this.projectModal = document.getElementById("projectModal");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalDescription = document.getElementById("modalDescription");
    this.modalTech = document.getElementById("modalTech");

    // Form elements
    this.contactForm = document.getElementById("contactForm");

    //#endregion

    // Typing animation texts
    this.typingTexts = [
      "Frontend Developer",
      "UI/UX Designer",
      "React Specialist",
      "Problem Solver",
      "Creative Thinker",
    ];
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;

    // Project data
    this.projectData = {
      "E-commerce Platform": {
        description:
          "A full-featured e-commerce platform built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Stripe API",
          "Redux",
          "Express.js",
        ],
      },
      "Banking App UI": {
        description:
          "Modern and secure banking application UI design with focus on user experience and accessibility. Includes account management, transaction history, and mobile-first design.",
        technologies: [
          "Figma",
          "Sketch",
          "Adobe XD",
          "Principle",
          "InVision",
          "Zeplin",
        ],
      },
      "Analytics Dashboard": {
        description:
          "Real-time analytics dashboard with interactive charts and data visualization. Built for monitoring business metrics and generating insightful reports.",
        technologies: [
          "Vue.js",
          "Chart.js",
          "D3.js",
          "Firebase",
          "Vuetify",
          "Socket.io",
        ],
      },
      "Food Delivery App": {
        description:
          "Cross-platform mobile application for food delivery with real-time order tracking, payment processing, and restaurant management system.",
        technologies: [
          "React Native",
          "Redux",
          "Google Maps API",
          "Firebase",
          "Stripe",
          "Push Notifications",
        ],
      },
    };

    // Hide loading screen after page load
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loadingScreen.classList.add("fade-out");
        setTimeout(() => {
          this.loadingScreen.style.display = "none";
        }, 500);
      }, 500);
    });
  }

  setupEventListeners() {
    // Hamburger menu toggle
    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("active");
      this.navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on nav links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.hamburger.classList.remove("active");
        this.navMenu.classList.remove("active");
      });
    });

    // Theme toggle
    this.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    // Smooth scrolling for nav links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop =
            targetSection.getBoundingClientRect().top + window.pageYOffset - 70;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Update active nav link
          this.updateActiveNavLink(targetId);
        }
      });
    });

    // Project filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        this.filterProjects(filter);

        // Update active filter button
        this.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    // Contact form submission
    if (this.contactForm) {
      this.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmission(e);
      });
    }

    // Scroll events
    window.addEventListener("scroll", () => {
      this.handleScroll();
      this.updateActiveNavLink();
    });

    // Close modal when clicking outside
    if (this.projectModal) {
      this.projectModal.addEventListener("click", (e) => {
        if (e.target === this.projectModal) {
          this.closeProjectModal();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.projectModal.classList.contains("show")) {
        this.closeProjectModal();
      }
    });
  }

  setupAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");

          // Animate stat numbers
          if (entry.target.classList.contains("stat-number")) {
            this.animateNumber(entry.target);
          }

          // Animate skill bars
          if (entry.target.classList.contains("skill-progress-bar")) {
            this.animateSkillBar(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      ".stat-number, .skill-progress-bar, .project-card, .timeline-item, .about-card"
    );
    animatedElements.forEach((el) => observer.observe(el));
  }

  startTypingAnimation() {
    if (!this.typingText) return;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentText = this.typingTexts[this.currentTextIndex];

      if (this.isDeleting) {
        this.typingText.textContent = currentText.substring(
          0,
          this.currentCharIndex - 1
        );
        this.currentCharIndex--;
      } else {
        this.typingText.textContent = currentText.substring(
          0,
          this.currentCharIndex + 1
        );
        this.currentCharIndex++;
      }

      let typeSpeedCurrent = this.isDeleting ? deleteSpeed : typeSpeed;

      if (!this.isDeleting && this.currentCharIndex === currentText.length) {
        typeSpeedCurrent = pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex =
          (this.currentTextIndex + 1) % this.typingTexts.length;
        typeSpeedCurrent = 500;
      }

      setTimeout(type, typeSpeedCurrent);
    };

    type();
  }

  setupTheme() {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    this.updateThemeIcon(newTheme);
  }

  updateThemeIcon(theme) {
    const icon = this.themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  handleScroll() {
    const scrolled = window.pageYOffset;

    // Update navbar style
    if (scrolled > 50) {
      this.navbar.classList.add("scrolled");
    } else {
      this.navbar.classList.remove("scrolled");
    }

    // Parallax effect for hero section
    const hero = document.querySelector(".hero");
    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }
  }

  updateActiveNavLink(targetId = null) {
    if (!targetId) {
      // Auto-detect active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
          currentSection = section.getAttribute("id");
        }
      });

      targetId = `#${currentSection}`;
    }

    // Update nav link classes
    this.navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === targetId) {
        link.classList.add("active");
      }
    });
  }

  animateNumber(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target;
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  animateSkillBar(element) {
    const width = element.style.getPropertyValue("--width");
    element.style.width = width;
  }

  filterProjects(filter) {
    this.projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
        card.style.animation = "fadeInUp 0.5s ease";
      } else {
        card.style.display = "none";
      }
    });
  }

  openProjectModal(projectTitle) {
    const projectInfo = this.projectData[projectTitle];

    if (projectInfo && this.projectModal) {
      this.modalTitle.textContent = projectTitle;
      this.modalDescription.textContent = projectInfo.description;

      // Update technologies
      this.modalTech.innerHTML = "";
      projectInfo.technologies.forEach((tech) => {
        const span = document.createElement("span");
        span.textContent = tech;
        this.modalTech.appendChild(span);
      });

      this.projectModal.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }

  closeProjectModal() {
    if (this.projectModal) {
      this.projectModal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  }

  handleFormSubmission(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Reset form
      e.target.reset();

      // Show success message
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = "var(--success-color)";

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "";
      }, 3000);

      // You can replace this with actual form submission logic
      console.log("Form submitted:", data);

      // Show notification
      this.showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
    }, 2000);
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${
                  type === "success" ? "check-circle" : "info-circle"
                }"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${
              type === "success"
                ? "var(--success-color)"
                : "var(--primary-color)"
            };
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;

    // Add to DOM
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    });
  }

  // Public methods for external access
  static openModal(projectTitle) {
    if (window.portfolioInstance) {
      window.portfolioInstance.openProjectModal(projectTitle);
    }
  }

  static closeModal() {
    if (window.portfolioInstance) {
      window.portfolioInstance.closeProjectModal();
    }
  }
}

// Global functions for HTML onclick handlers
function openProjectModal(projectTitle) {
  ModernPortfolio.openModal(projectTitle);
}

function closeProjectModal() {
  ModernPortfolio.closeModal();
}

// Add notification animations to document
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.portfolioInstance = new ModernPortfolio();
});

// Export for module systems (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = ModernPortfolio;
}
