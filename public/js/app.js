document.addEventListener('DOMContentLoaded', () => {
  const bookBtn = document.querySelector('.my-btn');
  const modal = document.getElementById('modal');

  bookBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; 
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
const closeBtn = document.getElementById('close-modal');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
