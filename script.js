window.addEventListener("DOMContentLoaded", () => {
  console.log("script loaded");

  const toggle = document.getElementById("theme-toggle");

  console.log("toggle =", toggle);

  toggle.addEventListener("click", () => {
    console.log("button clicked");

    document.body.style.background = "red";
  });
});
