// Select buttons and popup
const serviceBtns = document.querySelectorAll('.service-btn');
const popup = document.getElementById('service-popup');
const closeBtn = document.querySelector('#service-popup .close-btn');

// Open popup
serviceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

// Close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close if clicking outside content
window.addEventListener('click', (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});

// Handle form submission redirect (Netlify form)
const forms = document.querySelectorAll('form[name="service-request"]');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    setTimeout(() => {
      window.location.href = "thank-you.html"; // Redirect after submission
    }, 100); // Small delay for Netlify to capture submission
  });
});
