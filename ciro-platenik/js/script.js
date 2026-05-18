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

// Carousel Logic
let currentSlide = 0;
const totalSlides = 3;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carousel = document.getElementById('office-carousel');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        dot.style.opacity = index === currentSlide ? '1' : '0.3';
    });
}
