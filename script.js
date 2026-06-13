window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  requestAnimationFrame(() => {
    card.classList.add("visible");
  });

  const toggle = document.getElementById("theme-toggle");

  const savedTheme =
    localStorage.getItem("theme") || "dark";

  document.documentElement.dataset.theme = savedTheme;

  toggle.textContent =
    savedTheme === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.dataset.theme;

    const next =
      current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;

    localStorage.setItem("theme", next);

    toggle.textContent =
      next === "dark" ? "☀️" : "🌙";
  });
});
