document.addEventListener('DOMContentLoaded', () => {
    // Header shadow on scroll
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('bg-beige/95', 'backdrop-blur-md', 'shadow-sm');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.remove('bg-beige/95', 'backdrop-blur-md', 'shadow-sm');
                header.classList.add('bg-transparent');
            }
        });
    }

    // Fade-up animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-up to sections
    const sections = document.querySelectorAll('.fade-up-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
