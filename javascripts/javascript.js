let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
menu.classList.toggle("fa-times");
navbar.classList.toggle("active");

};

window.onscroll = () =>{
    menu.classList.remove("fa-times");
navbar.classList.remove("active");

};

// Simple Home Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.home-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = '1';
                slide.style.transform = 'scale(1.05)';
            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'scale(1)';
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Show first slide initially
    showSlide(0);
    
    // Auto-advance slides every 8 seconds
    setInterval(nextSlide, 8000);
    
    // Add smooth transitions on window resize
    window.addEventListener('resize', function() {
        showSlide(currentSlide);
    });
});

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});