const burgerBtn = document.querySelector('burger-btn');
const mobileMenu = document.querySelector('mobile-menu');
const menuClose = document.querySelector('.mobile-menu-close');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// додатково: закриття при кліку на посилання
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});