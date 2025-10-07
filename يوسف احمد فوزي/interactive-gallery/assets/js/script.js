// Interactive Gallery JavaScript
class InteractiveGallery {
  constructor() {
    this.currentFilter = "all";
    this.visibleItems = new Set();
    this.hiddenItems = new Set();
    this.interactionLog = [];
    this.galleryItems = [];
    this.statistics = {
      totalViews: 0,
      categoryFilters: 0,
      itemsHidden: 0,
      itemsShown: 0,
      totalInteractions: 0,
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadGalleryItems();
    this.updateStatistics();
    this.logInteraction("Gallery initialized successfully");

    // Initial animation
    setTimeout(() => {
      this.animateItemsEntrance();
    }, 500);
  }

  setupEventListeners() {
    // Navigation buttons
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.handleFilterClick(e.target);
      });
    });

    // Control buttons
    document.getElementById("showAllBtn").addEventListener("click", () => {
      this.showAllItems();
    });

    document.getElementById("hideAllBtn").addEventListener("click", () => {
      this.hideAllItems();
    });

    document
      .getElementById("randomAnimateBtn")
      .addEventListener("click", () => {
        this.randomAnimateItems();
      });

    document.getElementById("resetGalleryBtn").addEventListener("click", () => {
      this.resetGallery();
    });

    // Clear log button
    document.getElementById("clearLogBtn").addEventListener("click", () => {
      this.clearInteractionLog();
    });

    // Gallery item toggles
    this.setupItemToggles();
  }

  setupItemToggles() {
    const toggleButtons = document.querySelectorAll(".item-toggle");
    toggleButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const item = e.target.closest(".gallery-item");
        this.toggleItemVisibility(item, e.target);
      });
    });
  }

  handleFilterClick(button) {
    // Remove active class from all buttons
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    // Get filter value
    const filter = button.dataset.filter;
    this.currentFilter = filter;

    // Apply filter
    this.filterItems(filter);

    // Update statistics
    this.statistics.categoryFilters++;
    this.statistics.totalInteractions++;
    this.updateStatistics();

    // Log interaction
    this.logInteraction(`Filtered by category: ${filter}`);
  }

  filterItems(category) {
    const items = document.querySelectorAll(".gallery-item");
    let visibleCount = 0;

    items.forEach((item, index) => {
      const itemCategory = item.dataset.category;

      setTimeout(() => {
        if (category === "all" || itemCategory === category) {
          this.showItem(item);
          visibleCount++;
        } else {
          this.hideItem(item);
        }
      }, index * 50); // Staggered animation
    });

    // Update statistics after animation
    setTimeout(() => {
      this.statistics.totalViews += visibleCount;
      this.updateStatistics();
    }, items.length * 50 + 300);
  }

  showItem(item) {
    item.classList.remove("hidden");
    item.style.display = "block";

    // Animate entrance
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "scale(1) translateY(0)";
    }, 10);

    const itemId = item.dataset.id;
    this.visibleItems.add(itemId);
    this.hiddenItems.delete(itemId);

    // Update toggle button
    const toggleBtn = item.querySelector(".item-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = "Hide Item";
      toggleBtn.classList.remove("show-btn");
    }
  }

  hideItem(item) {
    item.style.opacity = "0";
    item.style.transform = "scale(0.8) translateY(20px)";

    setTimeout(() => {
      item.classList.add("hidden");
      item.style.display = "none";
    }, 300);

    const itemId = item.dataset.id;
    this.hiddenItems.add(itemId);
    this.visibleItems.delete(itemId);

    // Update toggle button
    const toggleBtn = item.querySelector(".item-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = "Show Item";
      toggleBtn.classList.add("show-btn");
    }
  }

  toggleItemVisibility(item, button) {
    const itemId = item.dataset.id;
    const itemTitle = item.querySelector("h3").textContent;

    if (this.visibleItems.has(itemId)) {
      this.hideItem(item);
      this.statistics.itemsHidden++;
      this.logInteraction(`Hidden item: ${itemTitle}`);
    } else {
      this.showItem(item);
      this.statistics.itemsShown++;
      this.logInteraction(`Shown item: ${itemTitle}`);
    }

    this.statistics.totalInteractions++;
    this.updateStatistics();
  }

  showAllItems() {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item, index) => {
      setTimeout(() => {
        this.showItem(item);
      }, index * 30);
    });

    this.statistics.totalInteractions++;
    this.updateStatistics();
    this.logInteraction("Showed all items");
  }

  hideAllItems() {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item, index) => {
      setTimeout(() => {
        this.hideItem(item);
      }, index * 30);
    });

    this.statistics.totalInteractions++;
    this.updateStatistics();
    this.logInteraction("Hidden all items");
  }

  randomAnimateItems() {
    const items = document.querySelectorAll(".gallery-item:not(.hidden)");
    const animations = ["animate-pulse", "animate-bounce", "animate-shake"];

    items.forEach((item, index) => {
      setTimeout(() => {
        const randomAnimation =
          animations[Math.floor(Math.random() * animations.length)];

        // Remove existing animation classes
        animations.forEach((anim) => item.classList.remove(anim));

        // Add new animation
        item.classList.add(randomAnimation);

        // Remove animation class after completion
        setTimeout(() => {
          item.classList.remove(randomAnimation);
        }, 600);
      }, index * 100);
    });

    this.statistics.totalInteractions++;
    this.updateStatistics();
    this.logInteraction("Applied random animations to visible items");
  }

  resetGallery() {
    // Reset filter
    this.currentFilter = "all";

    // Reset navigation
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelector('[data-filter="all"]').classList.add("active");

    // Show all items
    this.showAllItems();

    // Reset statistics
    this.statistics = {
      totalViews: 0,
      categoryFilters: 0,
      itemsHidden: 0,
      itemsShown: 0,
      totalInteractions: 1, // Count the reset action
    };

    this.updateStatistics();
    this.logInteraction("Gallery reset to initial state");
  }

  animateItemsEntrance() {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";

        setTimeout(() => {
          item.style.transition = "all 0.6s ease-out";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 50);
      }, index * 100);
    });
  }

  loadGalleryItems() {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
      const itemId = item.dataset.id;
      this.galleryItems.push({
        id: itemId,
        category: item.dataset.category,
        title: item.querySelector("h3").textContent,
        element: item,
      });

      this.visibleItems.add(itemId);
    });
  }

  updateStatistics() {
    // Update DOM elements
    document.getElementById("totalViews").textContent =
      this.statistics.totalViews;
    document.getElementById("categoryFilters").textContent =
      this.statistics.categoryFilters;
    document.getElementById("hiddenItems").textContent = this.hiddenItems.size;
    document.getElementById("visibleItems").textContent =
      this.visibleItems.size;
    document.getElementById("totalInteractions").textContent =
      this.statistics.totalInteractions;

    // Add pulse animation to updated stats
    this.pulseStatistics();
  }

  pulseStatistics() {
    const statValues = document.querySelectorAll(".stat-value");
    statValues.forEach((stat) => {
      stat.style.transform = "scale(1.1)";
      stat.style.color = "var(--success-color)";

      setTimeout(() => {
        stat.style.transform = "scale(1)";
        stat.style.color = "var(--primary-color)";
      }, 200);
    });
  }

  logInteraction(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = {
      time: timestamp,
      message: message,
      id: Date.now(),
    };

    this.interactionLog.unshift(logEntry);

    // Limit log to 50 entries
    if (this.interactionLog.length > 50) {
      this.interactionLog = this.interactionLog.slice(0, 50);
    }

    this.updateLogDisplay();
  }

  updateLogDisplay() {
    const logContent = document.getElementById("logContent");

    logContent.innerHTML = this.interactionLog
      .map(
        (entry) => `
            <div class="log-entry" data-id="${entry.id}">
                <span style="color: var(--primary-color); font-weight: 600;">[${entry.time}]</span> 
                ${entry.message}
            </div>
        `
      )
      .join("");

    // Animate new entries
    const newEntry = logContent.querySelector(".log-entry");
    if (newEntry) {
      newEntry.classList.add("highlight");
      setTimeout(() => {
        newEntry.classList.remove("highlight");
      }, 1000);
    }
  }

  clearInteractionLog() {
    this.interactionLog = [];
    document.getElementById("logContent").innerHTML =
      '<div class="log-entry">Log cleared</div>';

    setTimeout(() => {
      document.getElementById("logContent").innerHTML = "";
    }, 2000);

    this.logInteraction("Interaction log cleared");
  }

  // Advanced features
  searchItems(query) {
    const items = document.querySelectorAll(".gallery-item");
    const searchTerm = query.toLowerCase();

    items.forEach((item) => {
      const title = item.querySelector("h3").textContent.toLowerCase();
      const description = item.querySelector("p").textContent.toLowerCase();
      const category = item.dataset.category.toLowerCase();

      const matches =
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        category.includes(searchTerm);

      if (matches) {
        this.showItem(item);
        item.style.border = "2px solid var(--success-color)";
        setTimeout(() => {
          item.style.border = "none";
        }, 2000);
      } else {
        this.hideItem(item);
      }
    });

    this.logInteraction(`Searched for: "${query}"`);
  }

  exportStatistics() {
    const stats = {
      timestamp: new Date().toISOString(),
      currentFilter: this.currentFilter,
      statistics: this.statistics,
      visibleItems: Array.from(this.visibleItems),
      hiddenItems: Array.from(this.hiddenItems),
      totalItems: this.galleryItems.length,
      interactionLog: this.interactionLog.slice(0, 10), // Last 10 interactions
    };

    const dataStr = JSON.stringify(stats, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = `gallery-stats-${Date.now()}.json`;
    link.click();

    this.logInteraction("Statistics exported to JSON file");
  }

  // Keyboard shortcuts
  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case "1":
            e.preventDefault();
            document.querySelector('[data-filter="all"]').click();
            break;
          case "2":
            e.preventDefault();
            document.querySelector('[data-filter="nature"]').click();
            break;
          case "3":
            e.preventDefault();
            document.querySelector('[data-filter="technology"]').click();
            break;
          case "4":
            e.preventDefault();
            document.querySelector('[data-filter="art"]').click();
            break;
          case "5":
            e.preventDefault();
            document.querySelector('[data-filter="architecture"]').click();
            break;
          case "a":
            e.preventDefault();
            this.showAllItems();
            break;
          case "h":
            e.preventDefault();
            this.hideAllItems();
            break;
          case "r":
            e.preventDefault();
            this.randomAnimateItems();
            break;
        }
      }
    });

    this.logInteraction("Keyboard shortcuts enabled (Ctrl + 1-5, A, H, R)");
  }

  // Auto-save state to localStorage
  saveState() {
    const state = {
      currentFilter: this.currentFilter,
      visibleItems: Array.from(this.visibleItems),
      hiddenItems: Array.from(this.hiddenItems),
      statistics: this.statistics,
      timestamp: Date.now(),
    };

    localStorage.setItem("galleryState", JSON.stringify(state));
  }

  loadState() {
    const savedState = localStorage.getItem("galleryState");
    if (savedState) {
      try {
        const state = JSON.parse(savedState);

        // Restore filter
        this.currentFilter = state.currentFilter || "all";
        document.querySelectorAll(".nav-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        document
          .querySelector(`[data-filter="${this.currentFilter}"]`)
          .classList.add("active");

        // Restore statistics
        this.statistics = { ...this.statistics, ...state.statistics };
        this.updateStatistics();

        // Apply saved state
        this.filterItems(this.currentFilter);

        this.logInteraction("Previous session state restored");
        return true;
      } catch (error) {
        this.logInteraction("Failed to restore previous session");
        return false;
      }
    }
    return false;
  }

  // Performance monitoring
  startPerformanceMonitoring() {
    this.performanceData = {
      startTime: performance.now(),
      interactions: 0,
      averageResponseTime: 0,
    };

    // Monitor interaction response times
    const originalLogInteraction = this.logInteraction;
    this.logInteraction = (message) => {
      const start = performance.now();
      originalLogInteraction.call(this, message);
      const end = performance.now();

      this.performanceData.interactions++;
      const responseTime = end - start;
      this.performanceData.averageResponseTime =
        (this.performanceData.averageResponseTime *
          (this.performanceData.interactions - 1) +
          responseTime) /
        this.performanceData.interactions;
    };
  }

  // Initialize advanced features
  initAdvancedFeatures() {
    this.setupKeyboardShortcuts();
    this.startPerformanceMonitoring();

    // Auto-save state every 30 seconds
    setInterval(() => {
      this.saveState();
    }, 30000);

    // Try to load previous state
    this.loadState();

    // Add search functionality if search input exists
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.searchItems(e.target.value);
        }, 300);
      });
    }
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const gallery = new InteractiveGallery();

  // Initialize advanced features after basic setup
  setTimeout(() => {
    gallery.initAdvancedFeatures();
  }, 1000);

  // Make gallery globally accessible for debugging
  window.gallery = gallery;

  // Add export button functionality if it exists
  const exportBtn = document.getElementById("exportStatsBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      gallery.exportStatistics();
    });
  }
});

// Service Worker registration for offline functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Add smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href").startsWith("#")
  ) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Hide loading spinner if it exists
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});
