// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').classList.add('hidden');
  });

  // Open clicked if it was closed
  if (!isOpen) {
    item.classList.add('open');
    answer.classList.remove('hidden');
  }
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.challenge-card, .testimonial-card, .pilar-card, .faq-item').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== NAV SHADOW ON SCROLL =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('shadow-sm');
  } else {
    nav.classList.remove('shadow-sm');
  }
});

// ===== STAGGER CARDS =====
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.challenge-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});
