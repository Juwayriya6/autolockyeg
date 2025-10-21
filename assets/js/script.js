// script.js — init AOS, nav toggle, set years, mobile-friendly behavior
document.addEventListener('DOMContentLoaded', function () {
  // AOS init
  if (window.AOS) AOS.init({ duration: 700, once: true });

  // Mobile nav toggles (multiple pages)
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const nav = document.querySelector('.nav ul');
      if (nav) nav.classList.toggle('open');
      t.classList.toggle('open');
    });
  });

  // Insert year on all pages
  const yearEls = [document.getElementById('year'), document.getElementById('yearServices'), document.getElementById('yearContact')];
  const y = new Date().getFullYear();
  yearEls.forEach(el => { if (el) el.textContent = y; });

  // Smooth anchor scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Small touch: hide floating buttons while focusing on inputs (avoid accidental taps)
  const floats = document.querySelectorAll('.float-corner');
  document.querySelectorAll('input, textarea, select').forEach(inp => {
    inp.addEventListener('focus', () => floats.forEach(f => f.style.opacity = '0.3'));
    inp.addEventListener('blur', () => floats.forEach(f => f.style.opacity = '1'));
  });
});
