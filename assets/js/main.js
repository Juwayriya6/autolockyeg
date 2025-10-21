// main.js

// Get popup elements
const serviceBtns = document.querySelectorAll('.service-btn');
const popup = document.getElementById('service-popup');
const closeBtn = document.querySelector('#service-popup .close-btn');

// Open popup on any "Request Service" button click
serviceBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link action
    if(popup){
      popup.style.display = 'flex';
    }
  });
});

// Close popup on close button click
if(closeBtn){
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

// Close popup if clicking outside content
window.addEventListener('click', (e) => {
  if(e.target === popup){
    popup.style.display = 'none';
  }
});
