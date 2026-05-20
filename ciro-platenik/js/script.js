/**
 * Script for Ciro Platenik Landing Page
 * Handles animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar scroll effect
    const header = document.getElementById('main-nav');
    const logo = document.querySelector('.logo');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'py-4', 'border-gray-100');
            header.classList.remove('py-6', 'border-white/10', 'bg-[#0E121E]/60', 'backdrop-blur-md');
            if (logo) logo.classList.replace('text-white', 'text-primary');
            links.forEach(link => link.classList.replace('text-white', 'text-primary'));
        } else {
            header.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'py-4', 'border-gray-100');
            header.classList.add('py-6', 'border-white/10', 'bg-[#0E121E]/60', 'backdrop-blur-md');
            if (logo) logo.classList.replace('text-primary', 'text-white');
            links.forEach(link => link.classList.replace('text-primary', 'text-white'));
        }
    });

    // Mobile menu toggle (simple version)
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const navLinks = document.querySelector('.hidden.md\\:flex');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // In a real project, we'd toggle a mobile-specific menu
            // For this minimalist version, we'll just alert or scroll to contact
            document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Carousel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots   = document.querySelectorAll('.carousel-dot');
    let current  = 0;

    slides.forEach(s => {
        s.style.position   = 'absolute';
        s.style.inset      = '0';
        s.style.transition = 'opacity 0.6s ease-in-out';
        s.style.opacity    = '0';
    });

    function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((s, i) => s.style.opacity = i === current ? '1' : '0');
        dots.forEach((d, i) => d.style.opacity   = i === current ? '1' : '0.3');
    }

    document.getElementById('carousel-prev').addEventListener('click', () => show(current - 1));
    document.getElementById('carousel-next').addEventListener('click', () => show(current + 1));
    dots.forEach(d => d.addEventListener('click', () => show(+d.dataset.index)));

    show(0);
});
