const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[modal-close]');
const modal = document.querySelector('[data-modal]');

// Відкрити
openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-active');
});

// Закрити по кнопці
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
  document.body.style.overflow = '';
});

// Закрити по кліку на фон
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
});

// Закрити по Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
});


