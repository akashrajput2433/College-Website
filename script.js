const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const backTop = document.querySelector(".back-top");

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

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
