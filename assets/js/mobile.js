const toggleMobileMenu = () => {
  document.querySelector(".nav__overlay").classList.toggle("active");
  document.querySelector(".nav__burger").classList.toggle("open");
  document.querySelector(".nav__mobile").classList.toggle("active");
};
