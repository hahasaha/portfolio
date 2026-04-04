// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Active nav link
const current = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Scroll fade for nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.borderBottomColor = window.scrollY > 40
      ? 'rgba(0,0,0,0.12)'
      : 'rgba(0,0,0,0.06)';
  }
});
