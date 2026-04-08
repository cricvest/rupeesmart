// ===== RUPEESMART MAIN JS =====

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function handleSubscribe(e) {
  e.preventDefault();
  const note = document.getElementById('nlNote');
  note.textContent = '✓ You\'re in! First tip arrives this Saturday.';
  e.target.reset();
}

// Animate bars in calculator promo on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.article-card, .cat-card, .featured-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .4s ease, transform .4s ease';
  observer.observe(el);
});
