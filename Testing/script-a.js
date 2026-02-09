// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
    }
  });
}

// Hero quick form (fake submit)
const quickForm = document.getElementById("quick-form");
const quickSuccess = document.getElementById("form-success");

if (quickForm && quickSuccess) {
  quickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    quickForm.reset();
    quickSuccess.hidden = false;
    quickSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// Contact form (fake submit)
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    contactSuccess.hidden = false;
    contactSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// Intro modal
const introButton = document.getElementById("play-intro");
const introModal = document.getElementById("intro-modal");

function closeModal() {
  if (!introModal) return;
  introModal.classList.remove("is-open");
  introModal.setAttribute("aria-hidden", "true");
}

if (introButton && introModal) {
  introButton.addEventListener("click", () => {
    introModal.classList.add("is-open");
    introModal.setAttribute("aria-hidden", "false");
  });

  introModal.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target.matches("[data-close-modal]") ||
      target.classList.contains("modal-backdrop")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && introModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
