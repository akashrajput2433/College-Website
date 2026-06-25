const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const backTop = document.querySelector(".back-top");
const header = document.querySelector(".site-header");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

window.addEventListener("scroll", () => {
  backTop?.classList.toggle("visible", window.scrollY > 500);
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
});

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealTargets = document.querySelectorAll(
  ".stats-strip article, .leader-card, .message-copy, .official-card, .notice-box, .registration-card, .service-card, .icon-grid a, .gallery-item, .table-wrap, .contact-panel"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("in-view"));
}
