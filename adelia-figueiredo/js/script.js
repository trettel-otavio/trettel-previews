// ── Scroll fade-in ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// ── Mobile nav ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translateY(7px)' : '';
    spans[1].style.opacity = isOpen ? '0' : '';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translateY(-7px)' : '';
  });

  // close on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach((s) => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
}

// ── Sticky nav shadow ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── CTA pulse ──
const ctaBtn = document.querySelector('.btn-primary');
if (ctaBtn) {
  let pulsing = false;
  setInterval(() => {
    if (pulsing) return;
    pulsing = true;
    ctaBtn.style.boxShadow = '0 0 0 0 rgba(90,122,98,0.5)';
    ctaBtn.animate(
      [
        { boxShadow: '0 0 0 0 rgba(90,122,98,0.45)' },
        { boxShadow: '0 0 0 12px rgba(90,122,98,0)' },
      ],
      { duration: 700, easing: 'ease-out' }
    ).onfinish = () => {
      pulsing = false;
      ctaBtn.style.boxShadow = '';
    };
  }, 4000);
}
