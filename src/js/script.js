document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.querySelector(".ham__logo img");
  const nav = document.querySelector(".js-nav");

  hamIcon.addEventListener("click", function() {
    nav.style.display = "flex";
  });

  nav.addEventListener("click", function() {
    nav.style.display = "none";
  });
});