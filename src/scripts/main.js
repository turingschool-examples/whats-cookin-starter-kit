let navBarToggle = document.querySelector('.navbar-toggle');
let mainNav = document.querySelector('.main-nav');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});