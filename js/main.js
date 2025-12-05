// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Track Amazon clicks
document.querySelectorAll('a[href*="amazon.com"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Amazon affiliate link clicked:', this.href);
        // You can add Google Analytics or other tracking here
        
        // Show confirmation
        setTimeout(() => {
            alert('Redirecting to Amazon...\n\nThank you for your purchase!');
        }, 100);
    });
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', new Date().getFullYear());
    }
    
    // Add affiliate tag to all Amazon links automatically
    document.querySelectorAll('a[href*="amazon.com"]').forEach(link => {
        if (!link.href.includes('tag=storecamvaz-20')) {
            const url = new URL(link.href);
            url.searchParams.set('tag', 'storecamvaz-20');
            link.href = url.toString();
        }
    });
});
