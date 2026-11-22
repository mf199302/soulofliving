/* Soul of Living — interactions and editable brand content */
const siteContent = {
  company: { name: "Soul of Living", year: 2026 },
  latinLove: {
    name: "Latin Love Cairo",
    phone: "+20 15 5964 2700",
    email: "husseinhatemlatinlove@gmail.com",
    location: "Narges Buildings, New Cairo, Cairo, Egypt",
    instagram: "https://www.instagram.com/latinlovecairo/",
    facebook: "https://www.facebook.com/LatinLoveCairo"
  },
  placeholders: {
    interiorDesign: "[DESIGN STUDIO]",
    propertyManagement: "The BnB Collective",
    generalEmail: "hello@soulofliving.com"
  },
  ventures: {
    caironiture: "https://www.caironiture.com/"
  }
};

// Keep the displayed year and the content details easy to update.
document.getElementById("year").textContent = siteContent.company.year;

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


// Fall back to the text mark if the external Facebook profile image cannot load.
const latinLogo = document.querySelector(".latin-love-logo");
if (latinLogo) {
  latinLogo.addEventListener("error", () => {
    latinLogo.closest(".latin-logo-frame")?.classList.add("logo-load-failed");
  }, { once: true });
}

const latinShortcutLogo = document.querySelector(".venture-shortcut-latin .shortcut-mark img");
if (latinShortcutLogo) {
  latinShortcutLogo.addEventListener("error", () => {
    latinShortcutLogo.closest(".shortcut-mark")?.classList.add("logo-load-failed");
  }, { once: true });
}

// Progressive reveal; content remains visible if IntersectionObserver is unavailable.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

// Static-site contact form: opens the visitor's email client; no data is stored.
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`${data.get("subject")} — Soul of Living`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
  );

  formNote.textContent = "Opening your email application…";

  window.location.href =
    `mailto:info@soulofliving.com?subject=${subject}&body=${body}`;
});