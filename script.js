const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");

if (header && navToggle) {
  const navigation = document.getElementById(navToggle.getAttribute("aria-controls"));

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    header.classList.toggle("is-open", !isOpen);
  });

  navigation?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navToggle.setAttribute("aria-expanded", "false");
      header.classList.remove("is-open");
    }
  });
}
