// MOBILE MENU
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.mobile-menu-button');
const closeBtn = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  sidebar.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('hidden');
});

// FORM SUCCESS MESSAGE
const form = document.getElementById('ctaForm');
const successMsg = document.querySelector('.form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.opacity = '1';
  }, 50);
});
// MOBILE MENU
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.mobile-menu-button');
const closeBtn = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  sidebar.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('hidden');
});

// FORM SUCCESS MESSAGE
const form = document.getElementById('ctaForm');
const successMsg = document.querySelector('.form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.opacity = '1';
  }, 50);
});
