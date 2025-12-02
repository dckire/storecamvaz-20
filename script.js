// Amazon Luxury Guide - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Search Functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        const category = document.querySelector('.search-dropdown').value;
        
        if (query) {
            // Redirect to Amazon search with affiliate tag
            const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=storecamvaz-20`;
            window.open(searchUrl, '_blank');
            
            // Optional: Track search event
            console.log(`Search performed: ${query} in ${category}`);
        } else {
            searchInput.focus();
        }
    }
    
    // 2. Smooth Scroll for Navigation
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
    
    // 3. Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate successful subscription
                emailInput.value = '';
                showNotification('Thank you for subscribing to luxury updates!', 'success');
                
                // In a real implementation, you would send this to your email service
                console.log('Newsletter subscription:', email);
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // 4. Product Card Hover Effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // 5. Brand Logo Animation
    const brandLogos = document.querySelectorAll('.brand-logo');
    brandLogos.forEach(logo => {
        logo.addEventListener('click', function() {
            const brand = this.getAttribute('data-brand');
            if (brand) {
                // Redirect to Amazon search for this brand
                const brandUrl = `https://www.amazon.com/s?k=${brand}+luxury&tag=storecamvaz-20`;
                window.open(brandUrl, '_blank');
            }
        });
    });
    
    // 6. Price Animation
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        // Simulate price updates (in real implementation, you'd fetch from API)
        setInterval(() => {
            const currentPrice = parseFloat(price.textContent.replace('$', '').replace(',', ''));
            const fluctuation = (Math.random() * 0.02 - 0.01); // +/- 1%
            const newPrice = currentPrice * (1 + fluctuation);
            
            // Only update visually for demo purposes
            price.style.transform = 'scale(1.1)';
            setTimeout(() => {
                price.style.transform = 'scale(1)';
            }, 300);
        }, 10000); // Every 10 seconds
    });
    
    // 7. Amazon Button Tracking
    document.querySelectorAll('a[rel*="sponsored"]').forEach(link => {
        link.addEventListener('click', function() {
            const productName = this.closest('.product-card')?.querySelector('.product-title')?.textContent || 'Unknown Product';
            
            // Track click event (in real implementation, use Google Analytics)
            console.log(`Affiliate link clicked: ${productName}`);
            console.log(`URL: ${this.href}`);
            
            // Optional: Add a small delay to ensure tracking fires
            setTimeout(() => {
                // Link will open in new tab automatically due to target="_blank"
            }, 150);
        });
    });
    
    // 8. Mobile Menu Toggle (for future responsive menu)
    function initMobileMenu() {
        const header = document.querySelector('.amazon-header');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            // Create mobile menu button
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
            
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('mobile-active');
                this.innerHTML = navMenu.classList.contains('mobile-active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Add to header if not already there
            if (!document.querySelector('.mobile-menu-btn')) {
                document.querySelector('.logo-section').appendChild(mobileMenuBtn);
                
                // Add mobile styles
                const style = document.createElement('style');
                style.textContent = `
                    @media (max-width: 768px) {
                        .nav-menu {
                            display: none;
                            flex-direction: column;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background: var(--amazon-black);
                            padding: 1rem;
                            border-top: 1px solid rgba(255,255,255,0.1);
                        }
                        .nav-menu.mobile-active {
                            display: flex;
                        }
                        .mobile-menu-btn {
                            background: none;
                            border: none;
                            color: white;
                            font-size: 1.5rem;
                            cursor: pointer;
                            margin-left: auto;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    // Initialize mobile menu
    initMobileMenu();
    window.addEventListener('resize', initMobileMenu);
    
    // 9. Lazy Load Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // 10. Notification System
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 15px;
                animation: slideIn 0.3s ease;
                max-width: 400px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            .notification-success { background: #4CAF50; }
            .notification-error { background: #F44336; }
            .notification-info { background: #2196F3; }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                line-height: 1;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Add to document
        document.body.appendChild(notification);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // 11. Initialize tooltips for badges
    const badges = document.querySelectorAll('.product-badge, .prime-badge');
    badges.forEach(badge => {
        badge.setAttribute('title', badge.textContent);
    });
    
    // 12. Add loading animation for images
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
            img.addEventListener('load', function() {
                container.style.backgroundColor = 'transparent';
            });
        }
    });
});
