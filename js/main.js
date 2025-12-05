// ===== CONFIGURATION =====
const CONFIG = {
    AFFILIATE_ID: "storecamvaz-20",
    AMAZON_BASE_URL: "https://www.amazon.com",
    COOKIE_DURATION: 24, // hours
    COMMISSION_RATES: {
        electronics: { min: 1, max: 4 },
        fashion: { min: 4, max: 10 },
        home: { min: 3, max: 8 },
        books: { min: 4, max: 4.5 },
        toys: { min: 3, max: 8 }
    }
};

// ===== PRODUCT DATA =====
const PRODUCTS = [
    {
        id: 1,
        name: "Sony WH-1000XM4 Wireless Headphones",
        description: "Industry-leading noise cancellation with Dual Noise Sensor technology, 30-hour battery life, touch controls, and exceptional sound quality.",
        price: 298.00,
        originalPrice: 348.00,
        category: "electronics",
        subcategory: "audio",
        rating: 4.7,
        ratingCount: 12543,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0863TXGM3",
        badge: "Best Seller",
        commission: 3.5,
        features: ["Noise Cancelling", "30h Battery", "Bluetooth 5.0"]
    },
    {
        id: 2,
        name: "Kindle Paperwhite (11th Gen)",
        description: "6.8\" glare-free display, adjustable warm light, waterproof (IPX8), 32GB storage, and weeks of battery life.",
        price: 139.99,
        originalPrice: 149.99,
        category: "electronics",
        subcategory: "ereaders",
        rating: 4.8,
        ratingCount: 8942,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08N38XPWX",
        badge: "Deal",
        commission: 4.0,
        features: ["Waterproof", "32GB", "Warm Light"]
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        description: "High-back ergonomic chair with adjustable lumbar support, 3D armrests, breathable mesh back, and 360-degree swivel.",
        price: 229.99,
        originalPrice: 299.99,
        category: "home",
        subcategory: "furniture",
        rating: 4.6,
        ratingCount: 4567,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08B3G8M7R",
        badge: "Great Value",
        commission: 8.0,
        features: ["Ergonomic", "Mesh Back", "Adjustable"]
    },
    {
        id: 4,
        name: "Apple Watch Series 9 GPS",
        description: "Advanced health monitoring, GPS, always-on Retina display, water resistant 50m, and comprehensive fitness tracking.",
        price: 399.00,
        originalPrice: 429.00,
        category: "electronics",
        subcategory: "wearables",
        rating: 4.9,
        ratingCount: 21098,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0CHX3J5QY",
        badge: "New",
        commission: 4.0,
        features: ["GPS", "Health Monitor", "Water Resistant"]
    },
    {
        id: 5,
        name: "Foldable Exercise Bike",
        description: "Magnetic resistance with 8 levels, LCD monitor, tablet holder, adjustable seat, and silent operation.",
        price: 189.99,
        originalPrice: 249.99,
        category: "sports",
        subcategory: "fitness",
        rating: 4.4,
        ratingCount: 3245,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08F7Q4F7W",
        badge: "Featured",
        commission: 8.0,
        features: ["Foldable", "8 Levels", "Silent"]
    },
    {
        id: 6,
        name: "Xiaomi Robot Vacuum",
        description: "Laser navigation, app control, 2.5 hours runtime, 2200Pa suction, and automatic charging.",
        price: 329.99,
        originalPrice: 399.99,
        category: "home",
        subcategory: "cleaning",
        rating: 4.5,
        ratingCount: 6789,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B07S3C5JQP",
        badge: "Smart Home",
        commission: 8.0,
        features: ["Laser Mapping", "App Control", "Auto Charge"]
    },
    {
        id: 7,
        name: "GoPro HERO11 Black",
        description: "5.3K video, HyperSmooth 5.0 stabilization, waterproof to 10m, 27MP photos, and night effects.",
        price: 399.99,
        originalPrice: 499.99,
        category: "electronics",
        subcategory: "cameras",
        rating: 4.7,
        ratingCount: 9876,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0BD291WP7",
        badge: "Top Choice",
        commission: 4.0,
        features: ["5.3K Video", "Waterproof", "Stabilization"]
    },
    {
        id: 8,
        name: "Non-Stick Cookware Set (10-Piece)",
        description: "Ceramic non-stick coating, induction compatible, dishwasher safe, and heat resistant handles.",
        price: 89.99,
        originalPrice: 129.99,
        category: "home",
        subcategory: "kitchen",
        rating: 4.3,
        ratingCount: 5432,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08M5X5R8W",
        badge: "Kitchen",
        commission: 8.0,
        features: ["10-Piece", "Non-Stick", "Induction"]
    }
];

// ===== DOM ELEMENTS =====
const dom = {
    loadingScreen: document.getElementById('loadingScreen'),
    navMenu: document.getElementById('navMenu'),
    menuToggle: document.getElementById('menuToggle'),
    productsGrid: document.getElementById('productsGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    backToTop: document.getElementById('backToTop'),
    currentYear: document.getElementById('currentYear'),
    // Calculator elements
    monthlyClicks: document.getElementById('monthlyClicks'),
    conversionRate: document.getElementById('conversionRate'),
    averageOrder: document.getElementById('averageOrder'),
    commissionRate: document.getElementById('commissionRate'),
    clicksValue: document.getElementById('clicksValue'),
    rateValue: document.getElementById('rateValue'),
    orderValue: document.getElementById('orderValue'),
    commissionValue: document.getElementById('commissionValue'),
    monthlySales: document.getElementById('monthlySales'),
    monthlyCommission: document.getElementById('monthlyCommission'),
    yearlyCommission: document.getElementById('yearlyCommission')
};

// ===== UTILITY FUNCTIONS =====
const utils = {
    // Format currency
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);
    },
    
    // Format number with commas
    formatNumber: (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    },
    
    // Generate Amazon affiliate URL
    generateAmazonUrl: (asin = '', searchTerm = '') => {
        let url = CONFIG.AMAZON_BASE_URL;
        
        if (asin) {
            url += `/dp/${asin}`;
        } else if (searchTerm) {
            url += `/s?k=${encodeURIComponent(searchTerm)}`;
        }
        
        url += `?tag=${CONFIG.AFFILIATE_ID}`;
        return url;
    },
    
    // Generate star rating HTML
    generateStarRating: (rating) => {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        return stars;
    },
    
    // Add affiliate tag to all Amazon links
    addAffiliateTags: () => {
        const links = document.querySelectorAll('a[href*="amazon.com"]');
        links.forEach(link => {
            try {
                const url = new URL(link.href);
                if (!url.searchParams.has('tag')) {
                    url.searchParams.set('tag', CONFIG.AFFILIATE_ID);
                    link.href = url.toString();
                }
            } catch (error) {
                console.warn('Could not update link:', link.href);
            }
        });
    },
    
    // Set cookie for tracking
    setAffiliateCookie: () => {
        const cookieName = 'affiliate_ref';
        const cookieValue = CONFIG.AFFILIATE_ID;
        const hours = CONFIG.COOKIE_DURATION;
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        document.cookie = `${cookieName}=${cookieValue}; expires=${date.toUTCString()}; path=/; domain=.amazon.com; SameSite=None; Secure`;
    }
};

// ===== PRODUCT FUNCTIONS =====
const productManager = {
    currentFilter: 'all',
    
    // Filter products
    filterProducts: (filter) => {
        productManager.currentFilter = filter;
        let filteredProducts = [];
        
        switch(filter) {
            case 'high-commission':
                filteredProducts = PRODUCTS.filter(p => p.commission >= 7);
                break;
            case 'bestsellers':
                filteredProducts = PRODUCTS.filter(p => p.ratingCount > 5000);
                break;
            case 'deals':
                filteredProducts = PRODUCTS.filter(p => p.originalPrice && p.price < p.originalPrice);
                break;
            default:
                filteredProducts = PRODUCTS;
        }
        
        productManager.renderProducts(filteredProducts);
    },
    
    // Render products to grid
    renderProducts: (products) => {
        if (!dom.productsGrid) return;
        
        dom.productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const discount = product.originalPrice 
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.dataset.category = product.category;
            
            productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                
                <div class="product-image">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         loading="lazy"
                         onerror="this.src='https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                </div>
                
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${utils.generateStarRating(product.rating)}
                        </div>
                        <span class="rating-count">(${utils.formatNumber(product.ratingCount)})</span>
                    </div>
                    
                    <div class="product-price">
                        <span class="current-price">${utils.formatCurrency(product.price)}</span>
                        ${product.originalPrice ? 
                            `<span class="original-price">${utils.formatCurrency(product.originalPrice)}</span>` : 
                            ''}
                        ${discount > 0 ? 
                            `<span class="discount">-${discount}%</span>` : 
                            ''}
                        <span class="commission-badge">${product.commission}% commission</span>
                    </div>
                    
                    <div class="product-features">
                        ${product.features.map(feature => 
                            `<span class="feature-tag">${feature}</span>`
                        ).join('')}
                    </div>
                    
                    <div class="product-actions">
                        <a href="${utils.generateAmazonUrl(product.asin)}" 
                           target="_blank" 
                           class="btn-amazon" 
                           data-product-id="${product.id}"
                           data-product-name="${product.name}">
                            <i class="fab fa-amazon"></i>
                            Buy on Amazon
                        </a>
                        <button class="btn-details" data-product-id="${product.id}">
                            <i class="fas fa-info-circle"></i>
                            Details
                        </button>
                    </div>
                </div>
            `;
            
            dom.productsGrid.appendChild(productCard);
        });
        
        // Add event listeners to new buttons
        productManager.attachProductEvents();
    },
    
    // Show product details modal
    showProductDetails: (productId) => {
        const product = PRODUCTS.find(p => p.id === parseInt(productId));
        
        if (!product) return;
        
        const modalHTML = `
            <div class="product-modal-overlay">
                <div class="product-modal">
                    <button class="modal-close" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-header">
                        <h2>${product.name}</h2>
                        <span class="modal-badge">${product.badge}</span>
                    </div>
                    <div class="modal-body">
                        <img src="${product.image}" alt="${product.name}" class="modal-image">
                        <div class="modal-info">
                            <p class="modal-description">${product.description}</p>
                            <div class="modal-rating">
                                ${utils.generateStarRating(product.rating)}
                                <span>${product.rating} (${utils.formatNumber(product.ratingCount)} reviews)</span>
                            </div>
                            <div class="modal-price">
                                <span class="current">${utils.formatCurrency(product.price)}</span>
                                ${product.originalPrice ? 
                                    `<span class="original">${utils.formatCurrency(product.originalPrice)}</span>` : 
                                    ''}
                                <span class="commission">${product.commission}% commission</span>
                            </div>
                            <div class="modal-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <a href="${utils.generateAmazonUrl(product.asin)}" 
                               target="_blank" 
                               class="btn-amazon modal-buy"
                               data-product-id="${product.id}">
                                <i class="fab fa-amazon"></i>
                                Buy on Amazon - ${utils.formatCurrency(product.price)}
                            </a>
                            <p class="modal-note">
                                <i class="fas fa-info-circle"></i>
                                Using affiliate ID: <strong>${CONFIG.AFFILIATE_ID}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Create and show modal
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer.firstElementChild);
        
        const modal = document.querySelector('.product-modal-overlay');
        
        // Close modal events
        const closeModal = () => modal.remove();
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal) closeModal();
        });
        
        // Track buy button click
        modal.querySelector('.modal-buy').addEventListener('click', (e) => {
            analytics.trackProductClick(product.id, product.name, 'modal');
        });
    },
    
    // Attach events to product buttons
    attachProductEvents: () => {
        // Detail buttons
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.currentTarget.dataset.productId;
                productManager.showProductDetails(productId);
            });
        });
        
        // Amazon buy buttons
        document.querySelectorAll('.btn-amazon[data-product-id]').forEach(link => {
            link.addEventListener('click', (e) => {
                const productId = e.currentTarget.dataset.productId;
                const productName = e.currentTarget.dataset.productName;
                analytics.trackProductClick(productId, productName, 'card');
            });
        });
    }
};

// ===== CALCULATOR FUNCTIONS =====
const calculator = {
    // Initialize calculator
    init: () => {
        if (!dom.monthlyClicks) return;
        
        // Set initial values
        calculator.updateValues();
        calculator.calculateEarnings();
        
        // Add event listeners
        dom.monthlyClicks.addEventListener('input', () => {
            dom.clicksValue.textContent = utils.formatNumber(dom.monthlyClicks.value);
            calculator.calculateEarnings();
        });
        
        dom.conversionRate.addEventListener('input', () => {
            dom.rateValue.textContent = `${dom.conversionRate.value}%`;
            calculator.calculateEarnings();
        });
        
        dom.averageOrder.addEventListener('input', () => {
            dom.orderValue.textContent = utils.formatCurrency(dom.averageOrder.value);
            calculator.calculateEarnings();
        });
        
        dom.commissionRate.addEventListener('input', () => {
            dom.commissionValue.textContent = `${dom.commissionRate.value}%`;
            calculator.calculateEarnings();
        });
    },
    
    // Update display values
    updateValues: () => {
        dom.clicksValue.textContent = utils.formatNumber(dom.monthlyClicks.value);
        dom.rateValue.textContent = `${dom.conversionRate.value}%`;
        dom.orderValue.textContent = utils.formatCurrency(dom.averageOrder.value);
        dom.commissionValue.textContent = `${dom.commissionRate.value}%`;
    },
    
    // Calculate earnings
    calculateEarnings: () => {
        const clicks = parseInt(dom.monthlyClicks.value);
        const conversion = parseFloat(dom.conversionRate.value) / 100;
        const orderValue = parseFloat(dom.averageOrder.value);
        const commission = parseFloat(dom.commissionRate.value) / 100;
        
        const orders = clicks * conversion;
        const monthlySales = orders * orderValue;
        const monthlyCommission = monthlySales * commission;
        const yearlyCommission = monthlyCommission * 12;
        
        // Update display
        dom.monthlySales.textContent = utils.formatCurrency(monthlySales);
        dom.monthlyCommission.textContent = utils.formatCurrency(monthlyCommission);
        dom.yearlyCommission.textContent = utils.formatCurrency(yearlyCommission);
    }
};

// ===== ANALYTICS & TRACKING =====
const analytics = {
    // Track product click
    trackProductClick: (productId, productName, source) => {
        const eventData = {
            event: 'product_click',
            product_id: productId,
            product_name: productName,
            source: source,
            affiliate_id: CONFIG.AFFILIATE_ID,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            referrer: document.referrer
        };
        
        // Log to console (replace with your analytics service)
        console.log('📊 Product Click:', eventData);
        
        // Set affiliate cookie
        utils.setAffiliateCookie();
        
        // Show confirmation message
        setTimeout(() => {
            alert(`🛒 Redirecting to Amazon!\n\nAffiliate ID: ${CONFIG.AFFILIATE_ID}\nCommission: 24-hour cookie\nThank you for your support!`);
        }, 150);
        
        // Send to analytics endpoint (example)
        // fetch('/api/track', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(eventData)
        // });
    },
    
    // Track page view
    trackPageView: () => {
        const pageData = {
            event: 'page_view',
            page_title: document.title,
            page_url: window.location.href,
            affiliate_id: CONFIG.AFFILIATE_ID,
            timestamp: new Date().toISOString()
        };
        
        console.log('📊 Page View:', pageData);
    },
    
    // Track filter change
    trackFilterChange: (filter) => {
        console.log('📊 Filter Changed:', filter);
    }
};

// ===== EVENT HANDLERS =====
const eventHandlers = {
    // Mobile menu toggle
    setupMobileMenu: () => {
        if (!dom.menuToggle || !dom.navMenu) return;
        
        dom.menuToggle.addEventListener('click', () => {
            dom.navMenu.classList.toggle('active');
            const isOpen = dom.navMenu.classList.contains('active');
            dom.menuToggle.innerHTML = isOpen 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
            dom.menuToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                dom.navMenu.classList.remove('active');
                dom.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                dom.menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!dom.navMenu.contains(e.target) && !dom.menuToggle.contains(e.target)) {
                dom.navMenu.classList.remove('active');
                dom.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                dom.menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    },
    
    // Back to top button
    setupBackToTop: () => {
        if (!dom.backToTop) return;
        
        const toggleBackToTop = () => {
            if (window.scrollY > 300) {
                dom.backToTop.classList.add('visible');
                document.querySelector('.header').classList.add('scrolled');
            } else {
                dom.backToTop.classList.remove('visible');
                document.querySelector('.header').classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', toggleBackToTop);
        
        dom.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },
    
    // Filter buttons
    setupFilters: () => {
        dom.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                dom.filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter products
                const filter = button.dataset.filter;
                productManager.filterProducts(filter);
                
                // Track filter change
                analytics.trackFilterChange(filter);
            });
        });
    },
    
    // Smooth scroll for anchor links
    setupSmoothScroll: () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },
    
    // Window resize handler
    setupResizeHandler: () => {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Close mobile menu on desktop
                if (window.innerWidth > 991 && dom.navMenu) {
                    dom.navMenu.classList.remove('active');
                    if (dom.menuToggle) {
                        dom.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                        dom.menuToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }, 250);
        });
    },
    
    // Form handlers
    setupForms: () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Handle form submission
                alert('Thank you for your interest! This is a demonstration form.');
                form.reset();
            });
        });
    }
};

// ===== INITIALIZATION =====
const init = () => {
    // Set current year in footer
    if (dom.currentYear) {
        dom.currentYear.textContent = new Date().getFullYear();
    }
    
    // Load products
    productManager.renderProducts(PRODUCTS);
    
    // Setup calculator
    calculator.init();
    
    // Setup event handlers
    eventHandlers.setupMobileMenu();
    eventHandlers.setupBackToTop();
    eventHandlers.setupFilters();
    eventHandlers.setupSmoothScroll();
    eventHandlers.setupResizeHandler();
    eventHandlers.setupForms();
    
    // Add affiliate tags to all Amazon links
    utils.addAffiliateTags();
    
    // Track page view
    analytics.trackPageView();
    
    // Hide loading screen
    setTimeout(() => {
        if (dom.loadingScreen) {
            dom.loadingScreen.classList.add('hidden');
        }
    }, 1000);
    
    // Performance monitoring
    window.addEventListener('load', () => {
        if ('performance' in window) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }
    });
};

// ===== START APPLICATION =====
document.addEventListener('DOMContentLoaded', init);

// ===== PUBLIC API (for debugging) =====
window.AffiliateStore = {
    config: CONFIG,
    products: PRODUCTS,
    utils: utils,
    productManager: productManager,
    calculator: calculator,
    analytics: analytics,
    refreshProducts: () => productManager.renderProducts(PRODUCTS),
    simulatePurchase: (productId) => {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            alert(`Simulated purchase: ${product.name}\nCommission: $${(product.price * (product.commission/100)).toFixed(2)}`);
        }
    }
};

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// ===== OFFLINE SUPPORT =====
window.addEventListener('online', () => {
    console.log('🟢 Online - Affiliate store connected');
});

window.addEventListener('offline', () => {
    console.log('🔴 Offline - Using cached data');
});
