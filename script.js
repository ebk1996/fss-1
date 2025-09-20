
// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission handler
const form = document.getElementById('leadForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your request has been submitted. We will contact you soon.');
    form.reset();
});
