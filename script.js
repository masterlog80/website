window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  requestAnimationFrame(() => {
    card.classList.add("visible");
  });
});
