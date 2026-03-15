// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#020617';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle (Basic)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Form Submission Logic
const contactForm = document.getElementById('portfolioForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Manthan will get back to you soon!');
    contactForm.reset();
});

// Smooth Scroll Offset Adjustment
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = 80; // height of navbar
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
