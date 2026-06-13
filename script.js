console.log("VERSION 2026-06-13 TEST");

window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const toggle = document.getElementById("theme-toggle");

  if (card) {
    requestAnimationFrame(() => {
      card.classList.add("visible");
    });
  }

  if (!toggle) {
    console.error("Theme toggle button not found");
    return;
  }

  const savedTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);

  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme");

    const next =
      current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);

    toggle.textContent =
      next === "dark" ? "☀️" : "🌙";
  });
});
