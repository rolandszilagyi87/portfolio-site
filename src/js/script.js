document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.querySelector(".header__ham img");
  const nav = document.querySelector(".js-nav");
  const main = document.querySelector("main");

  hamIcon.addEventListener("click", function() {
    nav.classList.toggle('d-flex');
    nav.classList.toggle("d-none");
    main.classList.toggle("d-none");
  });

  nav.addEventListener("click", function() {
    nav.classList.toggle('d-flex');
    nav.classList.toggle("d-none");
    main.classList.toggle("d-none");
  });
});