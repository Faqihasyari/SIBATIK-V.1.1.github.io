document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) { // Tailwind breakpoint untuk md adalah 768px
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach(el => el.removeAttribute('data-aos'));
        }
    });