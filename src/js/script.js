document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.querySelector(".ham__logo img");
  const nav = document.querySelector(".js-nav");

  hamIcon.addEventListener("click", function() {
    nav.classList.toggle('d-flex');
  });

  nav.addEventListener("click", function() {
    nav.classList.toggle('d-flex');
  });
});