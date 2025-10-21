const popup = document.getElementById('service-popup');
const serviceBtns = document.querySelectorAll('.service-btn');
const closeBtn = document.querySelector('.close-btn');

serviceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});
