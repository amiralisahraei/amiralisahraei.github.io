document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.glass-nav ul');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.glass-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-level');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level;
        });
    };
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('skill-level')) {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements
    document.querySelectorAll('.timeline-item, .skill-bar, .project-card').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const formSuccess = document.createElement('div');
            formSuccess.className = 'form-success show';
            formSuccess.textContent = 'Thank you! Your message has been sent.';
            contactForm.appendChild(formSuccess);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                formSuccess.remove();
            }, 5000);
        });
    }
    
    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'assets/js/particles-config.json', function() {
            console.log('Particles.js loaded');
        });
    }
});