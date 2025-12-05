// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM4 Headphones",
        description: "Industry-leading noise cancellation, 30-hour battery life, exceptional sound quality.",
        price: 298.00,
        originalPrice: 348.00,
        category: "technology",
        rating: 4.7,
        ratingCount: 1250,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0863TXGM3",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Kindle Paperwhite 11th Gen",
        description: "6.8\" display, waterproof, adjustable warm light, 32GB storage.",
        price: 139.99,
        originalPrice: 149.99,
        category: "technology",
        rating: 4.8,
        ratingCount: 890,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08N38XPWX",
        badge: "Deal"
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        description: "Adjustable lumbar support, 3D armrests, high-density foam padding.",
        price: 229.99,
        originalPrice: 299.99,
        category: "home",
        rating: 4.6,
        ratingCount: 450,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08B3G8M7R",
        badge: "Great Value"
    },
    {
        id: 4,
        name: "Apple Watch Series 9",
        description: "GPS, health monitor, water resistant, always-on Retina display.",
        price: 399.00,
        originalPrice: 429.00,
        category: "technology",
        rating: 4.9,
        ratingCount: 2100,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0CHX3J5QY",
        badge: "New"
    },
    {
        id: 5,
        name: "Foldable Exercise Bike",
        description: "8 resistance levels, LCD monitor, tablet holder, silent operation.",
        price: 189.99,
        originalPrice: 249.99,
        category: "sports",
        rating: 4.4,
        ratingCount: 320,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08F7Q4F7W",
        badge: "Featured"
    },
    {
        id: 6,
        name: "Xiaomi Robot Vacuum",
        description: "Laser mapping, app control, 2.5 hours runtime, programmable cleaning.",
        price: 329.99,
        originalPrice: 399.99,
        category: "home",
        rating: 4.5,
        ratingCount: 670,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B07S3C5JQP",
        badge: "Smart Home"
    },
    {
        id: 7,
        name: "GoPro HERO11 Black",
        description: "5.3K video, HyperSmooth 5.0, waterproof to 10m, 27MP photos.",
        price: 399.99,
        originalPrice: 499.99,
        category: "sports",
        rating: 4.7,
        ratingCount: 980,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0BD291WP7",
        badge: "Top Choice"
    },
    {
        id: 8,
        name: "Non-Stick Cookware Set",
        description: "10 pieces, all stove compatible, easy cleaning, ergonomic handle.",
        price: 89.99,
        originalPrice: 129.99,
        category: "home",
        rating: 4.3,
        ratingCount: 540,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08M5X5R8W",
        badge: "Kitchen"
    }
];

// ===== GLOBAL VARIABLES =====
const AFFILIATE_ID = "storecamvaz-20";
let filteredProducts = [...products];

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loadingScreen');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const backToTop = document.getElementById('backToTop');
const currentYear = document.getElementById('currentYear');

// ===== MAIN FUNCTIONS =====

// 1. Initialization
function init() {
    // Show current year
    currentYear.textContent = new Date().getFullYear();
    
    // Load products
    renderProducts(filteredProducts);
    
    // Setup filters
    setupFilters();
    
    // Setup event listeners
    setupEventListeners();
    
    // Add affiliate tag to all Amazon links
    addAffiliateTags();
    
    // Simulate loading
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 800);
}

// 2. Render products
function renderProducts(productsArray) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsArray.forEach(product => {
        const discount = product.originalPrice 
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
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
                        ${generateStarRating(product.rating)}
                    </div>
                    <span class="rating-count">(${product.ratingCount})</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? 
                        `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : 
                        ''}
                    ${discount > 0 ? 
                        `<span class="discount">-${discount}%</span>` : 
                        ''}
                </div>
                
                <div class="product-actions">
                    <a href="https://www.amazon.com/dp/${product.asin}/?tag=${AFFILIATE_ID}" 
                       target="_blank" 
                       class="btn-amazon" 
                       data-product-id="${product.id}">
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
        
        productsGrid.appendChild(productCard);
    });
    
    // Add events to detail buttons
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.currentTarget.dataset.productId;
            showProductDetails(productId);
        });
    });
    
    // Add events to Amazon links
    document.querySelectorAll('.btn-amazon').forEach(link => {
        link.addEventListener('click', trackAmazonClick);
    });
}

// 3. Generate star ratings
function generateStarRating(rating) {
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
}

// 4. Setup filters
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter products
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.category === filter
                );
            }
            
            // Render filtered products
            renderProducts(filteredProducts);
        });
    });
}

// 5. Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        const modalHTML = `
            <div class="product-modal">
                <div class="modal-content">
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <div class="modal-price">$${product.price.toFixed(2)}</div>
                    <a href="https://www.amazon.com/dp/${product.asin}/?tag=${AFFILIATE_ID}" 
                       target="_blank" 
                       class="btn-amazon modal-buy">
                        <i class="fab fa-amazon"></i>
                        Buy on Amazon
                    </a>
                </div>
            </div>
        `;
        
        // Create modal
        const modal = document.createElement('div');
        modal.innerHTML = modalHTML;
        document.body.appendChild(modal.firstElementChild);
        
        // Setup modal events
        const modalElement = document.querySelector('.product-modal');
        const closeButton = modalElement.querySelector('.modal-close');
        const buyButton = modalElement.querySelector('.modal-buy');
        
        closeButton.addEventListener('click', () => {
            modalElement.remove();
        });
        
        buyButton.addEventListener('click', trackAmazonClick);
        
        // Close modal when clicking outside
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement) {
                modalElement.remove();
            }
        });
        
        // Close with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalElement) {
                modalElement.remove();
            }
        });
        
        // Add modal styles
        const modalStyles = `
            <style>
                .product-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    padding: 20px;
                }
                
                .modal-content {
                    background-color: white;
                    padding: 30px;
                    border-radius: 16px;
                    max-width: 500px;
                    width: 100%;
                    position: relative;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #666;
                    cursor: pointer;
                    padding: 5px;
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-content h2 {
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
                
                .modal-content img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }
                
                .modal-content p {
                    margin-bottom: 20px;
                    color: #666;
                }
                
                .modal-price {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #FF9900;
                    margin-bottom: 20px;
                }
                
                .modal-buy {
                    width: 100%;
                    justify-content: center;
                }
                
                @media (max-width: 576px) {
                    .modal-content {
                        padding: 20px;
                    }
                    
                    .modal-content img {
                        height: 200px;
                    }
                    
                    .modal-content h2 {
                        font-size: 1.3rem;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
}

// 6. Track Amazon clicks
function trackAmazonClick(e) {
    const productId = e.currentTarget.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    
    // Log to console (you can replace with Google Analytics)
    console.log('🔗 Amazon link clicked:', {
        product: product?.name || 'General',
        url: e.currentTarget.href,
        timestamp: new Date().toISOString()
    });
    
    // Show redirect message
    setTimeout(() => {
        alert('🛒 Redirecting to Amazon! Thank you for your purchase.\n\nRemember: Any product you buy in the next 24 hours generates a commission.');
    }, 100);
}

// 7. Add affiliate tags to all Amazon links
function addAffiliateTags() {
    const amazonLinks = document.querySelectorAll('a[href*="amazon.com"]');
    amazonLinks.forEach(link => {
        try {
            const url = new URL(link.href);
            if (!url.searchParams.has('tag')) {
                url.searchParams.set('tag', AFFILIATE_ID);
                link.href = url.toString();
            }
        } catch (error) {
            console.log('Error updating link:', link.href);
        }
    });
}

// 8. Setup event listeners
function setupEventListeners() {
    // Mobile menu
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
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Back to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
            document.querySelector('.header').classList.add('scrolled');
        } else {
            backToTop.classList.remove('visible');
            document.querySelector('.header').classList.remove('scrolled');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for internal links
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
    
    // Prevent form submissions (if any)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted (simulated)');
            form.reset();
        });
    });
    
    // Handle window resize for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 991 && navMenu) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        }, 250);
    });
    
    // Touch events for mobile
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// 9. Add new product dynamically
function addNewProduct(productData) {
    const newProduct = {
        id: products.length + 1,
        ...productData
    };
    
    products.push(newProduct);
    renderProducts(products);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', init);

// ===== DEBUG FUNCTIONS =====
function debug(message, data = null) {
    console.log(`🔍 ${message}:`, data);
}

function simulatePurchase() {
    console.log('💰 Purchase simulation completed');
    alert('Simulated purchase completed. Commission generated!');
}

// ===== EXPORT FOR MODULES =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        renderProducts,
        generateStarRating,
        trackAmazonClick
    };
}
