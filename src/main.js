const burgerBtn = document.getElementById('burger-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const menuBackdrop = document.getElementById('menu-backdrop');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
  menuBackdrop.classList.add('is-open');
  mobileMenu.classList.add('is-open');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBackdrop.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

menuBackdrop.addEventListener('click', event => {
  if (event.target === menuBackdrop) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

document.querySelectorAll('.menu-nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});
