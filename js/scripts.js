//---- Mobile Menu ----
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.mobile-menu-button');
const closeBtn = document.querySelector('.close-menu');

if (menuBtn && closeBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
}

//-- Form Submision Message --
const form = document.getElementById('ctaForm');
const successMsg = document.querySelector('.form-success');

if (form && successMsg) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.opacity = '1';
    }, 50);
  });
}
