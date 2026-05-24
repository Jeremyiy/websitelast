// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ========================== AUDIO SYSTEM ======================================================= */
  const clickSound = new Audio("images,vids/click1.mp3"); 

  clickSound.volume = 0.8;

  let soundUnlocked = false;

  function unlockAudio() {
    if (soundUnlocked) return;
    soundUnlocked = true;

    // preload unlock trick
    clickSound.play().then(() => {
      clickSound.pause();
      clickSound.currentTime = 0;
    }).catch(() => {});
  }

  ["click", "touchstart", "keydown"].forEach(evt => {
    document.addEventListener(evt, unlockAudio, { once: true });
  });

  function playClick() {
    if (!soundUnlocked) return;
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }

  /* ====================================== NAV TOGGLE ===================================================== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const closeBtn = document.getElementById("closeMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  if (closeBtn && navMenu) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  }

  /* =============================================== SCROLL ANIMATION ==================================================== */
  const animatedElements = document.querySelectorAll(
    "#species .species-card, #ecosystems .species-card, .reveal-on-scroll"
  );

  if (animatedElements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("revealed", entry.isIntersecting);
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
  }

  /* ================================= FILTER: SPECIES ===================================================== */
  const speciesSection = document.querySelector("#species");

  if (speciesSection) {
    const speciesButtons = speciesSection.querySelectorAll(".filter-buttons button");
    const speciesCards = speciesSection.querySelectorAll(".species-card");

    speciesButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        speciesButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        speciesCards.forEach(card => {
          const status = card.dataset.status;
          card.style.display =
            (filter === "all" || filter === status) ? "flex" : "none";
        });

        speciesSection.querySelectorAll(".slider-container").forEach(initSlider);
      });
    });
  }

  /* ================================================ FILTER: ECOSYSTEM ======================================================= */
  const ecoSection = document.querySelector("#ecosystems");

  if (ecoSection) {
    const ecoButtons = ecoSection.querySelectorAll(".ecosystem-filter-buttons button");
    const ecoCards = ecoSection.querySelectorAll(".species-card");

    ecoButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        ecoButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        ecoCards.forEach(card => {
          const status = card.dataset.status;
          card.style.display =
            (filter === "all" || filter === status) ? "flex" : "none";
        });

        ecoSection.querySelectorAll(".slider-container").forEach(initSlider);
      });
    });
  }

  /* ======================================================= SLIDER ===================================================== */
  document.querySelectorAll(".slider-container").forEach(initSlider);

  function initSlider(container) {
    const scroll = container.querySelector(".species-scroll");
    const leftBtn = container.querySelector(".arrow.left");
    const rightBtn = container.querySelector(".arrow.right");

    if (!scroll) return;

    let index = 0;

    const getCards = () =>
      [...scroll.querySelectorAll(".species-card")]
        .filter(c => getComputedStyle(c).display !== "none");

    function updateSlider() {
      const cards = getCards();
      if (!cards.length) return;

      const maxIndex = cards.length - 1;

      if (index > maxIndex) index = 0;
      if (index < 0) index = maxIndex;

      const card = cards[index];

      scroll.scrollTo({
        left: card.offsetLeft + (card.offsetWidth / 2) - (scroll.clientWidth / 2),
        behavior: "smooth"
      });

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    }

    function move(dir) {
      index += dir;
      updateSlider();
      playClick();
    }

    if (rightBtn) rightBtn.addEventListener("click", () => move(1));
    if (leftBtn) leftBtn.addEventListener("click", () => move(-1));

    setTimeout(updateSlider, 150);
  }

  /* ========================================================= FEEDBack =================================================== */
  const feedbackForm = document.querySelector(".feedback-form");
  const popup = document.getElementById("thankPopup");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("nameInput")?.value.trim();
      const message = document.getElementById("feedbackInput")?.value.trim();

      if (!name || !message) {
        alert("Please fill out all fields.");
        return;
      }

      const data = {
        name,
        message,
        date: new Date().toLocaleString()
      };

      let saved = JSON.parse(localStorage.getItem("feedbacks")) || [];
      saved.push(data);
      localStorage.setItem("feedbacks", JSON.stringify(saved));

      if (popup) {
        popup.style.display = "flex";
        setTimeout(() => popup.style.display = "none", 2000);
      }

      feedbackForm.reset();
    });
  }

  /* ================================================= DIVIDER ===================================================== */
  const divider = document.querySelector(".home-divider");

  if (divider) {
    window.addEventListener("scroll", () => {
      const scale = Math.min(window.scrollY / 200, 1.2);
      divider.style.transform = `scaleX(${scale})`;
    });
  }

  /* ================================================ AOS ===================================================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120
    });
  }

  /* ================================= MODAL ======================================================= */
  const modal = document.getElementById("speciesModal");
  const closeModal = document.getElementById("closeModal");

  const modalImg = document.getElementById("modalImg");
  const modalStatus = document.getElementById("modalStatus");
  const modalTitle = document.getElementById("modalTitle");
  const modalLatin = document.getElementById("modalLatin");
  const modalDescription = document.getElementById("modalDescription");
  const modalHabitat = document.getElementById("modalHabitat");
  const modalThreat = document.getElementById("modalThreat");
  const modalRole = document.getElementById("modalRole");

  const cards = document.querySelectorAll(".horizontal-card");

  if (modal) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        modal.classList.add("show");

        if (modalImg) modalImg.src = card.dataset.image || "";
        if (modalTitle) modalTitle.textContent = card.dataset.title || "";
        if (modalLatin) modalLatin.textContent = card.dataset.latin || "";
        if (modalDescription) modalDescription.textContent = card.dataset.description || "";
        if (modalHabitat) modalHabitat.textContent = card.dataset.habitat || "";
        if (modalThreat) modalThreat.textContent = card.dataset.threat || "";
        if (modalRole) modalRole.textContent = card.dataset.role || "";

        if (modalStatus) {
          modalStatus.textContent = (card.dataset.status || "").toUpperCase();
          modalStatus.className = "modal-status " + (card.dataset.status || "");
        }

        document.body.style.overflow = "hidden";
        playClick();
      });
    });

    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    });
  }

  /* ================================================= NAV ACTIVE SCROLl ================================================== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-right a");

  if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  }

});