// Service popup
const serviceBtn = document.querySelectorAll('.service-btn');
const popup = document.getElementById('service-popup');
const closeBtn = document.querySelector('#service-popup .close-btn');

serviceBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === popup){
    popup.style.display = 'none';
  }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('nav ul');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
