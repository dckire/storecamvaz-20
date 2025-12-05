// ===== DATOS DE PRODUCTOS =====
const products = [
    {
        id: 1,
        name: "Audífonos Sony WH-1000XM4",
        description: "Cancelación de ruido líder, 30 horas de batería, calidad de sonido excepcional.",
        price: 298.00,
        originalPrice: 348.00,
        category: "tecnologia",
        rating: 4.7,
        ratingCount: 1250,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0863TXGM3",
        badge: "Mejor Venta"
    },
    {
        id: 2,
        name: "Kindle Paperwhite 11ª Gen",
        description: "Pantalla de 6.8\", resistente al agua, luz cálida ajustable, 32GB.",
        price: 139.99,
        originalPrice: 149.99,
        category: "tecnologia",
        rating: 4.8,
        ratingCount: 890,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08N38XPWX",
        badge: "Oferta"
    },
    {
        id: 3,
        name: "Silla de Oficina Ergonómica",
        description: "Soporte lumbar ajustable, reposabrazos 3D, espuma de alta densidad.",
        price: 229.99,
        originalPrice: 299.99,
        category: "hogar",
        rating: 4.6,
        ratingCount: 450,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08B3G8M7R",
        badge: "Gran Valor"
    },
    {
        id: 4,
        name: "Apple Watch Series 9",
        description: "GPS, monitor de salud, resistencia al agua, pantalla Retina siempre activa.",
        price: 399.00,
        originalPrice: 429.00,
        category: "tecnologia",
        rating: 4.9,
        ratingCount: 2100,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0CHX3J5QY",
        badge: "Nuevo"
    },
    {
        id: 5,
        name: "Bicicleta Estática Plegable",
        description: "8 niveles de resistencia, monitor LCD, soporte para tablet, silenciosa.",
        price: 189.99,
        originalPrice: 249.99,
        category: "deportes",
        rating: 4.4,
        ratingCount: 320,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08F7Q4F7W",
        badge: "Destacado"
    },
    {
        id: 6,
        name: "Robot Aspirador Xiaomi",
        description: "Mapeo láser, control por app, 2.5 horas de autonomía, limpieza programable.",
        price: 329.99,
        originalPrice: 399.99,
        category: "hogar",
        rating: 4.5,
        ratingCount: 670,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B07S3C5JQP",
        badge: "Smart Home"
    },
    {
        id: 7,
        name: "GoPro HERO11 Black",
        description: "5.3K video, HyperSmooth 5.0, resistente al agua 10m, 27MP fotos.",
        price: 399.99,
        originalPrice: 499.99,
        category: "deportes",
        rating: 4.7,
        ratingCount: 980,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B0BD291WP7",
        badge: "Mejor Elección"
    },
    {
        id: 8,
        name: "Juego de Sartenes Antiadherentes",
        description: "10 piezas, apto para todo tipo de cocinas, fácil limpieza, mango ergonómico.",
        price: 89.99,
        originalPrice: 129.99,
        category: "hogar",
        rating: 4.3,
        ratingCount: 540,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        asin: "B08M5X5R8W",
        badge: "Cocina"
    }
];

// ===== VARIABLES GLOBALES =====
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

// ===== FUNCIONES PRINCIPALES =====

// 1. Inicialización
function init() {
    // Mostrar año actual
    currentYear.textContent = new Date().getFullYear();
    
    // Cargar productos
    renderProducts(filteredProducts);
    
    // Configurar filtros
    setupFilters();
    
    // Configurar eventos
    setupEventListeners();
    
    // Simular carga
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
}

// 2. Renderizar productos
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
                        Comprar en Amazon
                    </a>
                    <button class="btn-details" data-product-id="${product.id}">
                        <i class="fas fa-info-circle"></i>
                        Detalles
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Agregar eventos a los botones de detalles
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.currentTarget.dataset.productId;
            showProductDetails(productId);
        });
    });
    
    // Agregar eventos a los enlaces de Amazon
    document.querySelectorAll('.btn-amazon').forEach(link => {
        link.addEventListener('click', trackAmazonClick);
    });
}

// 3. Generar estrellas de calificación
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

// 4. Configurar filtros
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Filtrar productos
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.category === filter
                );
            }
            
            // Renderizar productos filtrados
            renderProducts(filteredProducts);
        });
    });
}

// 5. Mostrar detalles del producto
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
                        Comprar en Amazon
                    </a>
                </div>
            </div>
        `;
        
        // Crear modal
        const modal = document.createElement('div');
        modal.innerHTML = modalHTML;
        document.body.appendChild(modal.firstElementChild);
        
        // Configurar eventos del modal
        const modalElement = document.querySelector('.product-modal');
        const closeButton = modalElement.querySelector('.modal-close');
        const buyButton = modalElement.querySelector('.modal-buy');
        
        closeButton.addEventListener('click', () => {
            modalElement.remove();
        });
        
        buyButton.addEventListener('click', trackAmazonClick);
        
        // Cerrar modal al hacer clic fuera
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement) {
                modalElement.remove();
            }
        });
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalElement) {
                modalElement.remove();
            }
        });
        
        // Agregar estilos para el modal
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
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
}

// 6. Rastrear clics en Amazon
function trackAmazonClick(e) {
    const productId = e.currentTarget.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    
    // Registrar en consola (puedes reemplazar con Google Analytics)
    console.log('🔗 Enlace de Amazon clickeado:', {
        product: product?.name || 'General',
        url: e.currentTarget.href,
        timestamp: new Date().toISOString()
    });
    
    // Mostrar mensaje de redirección
    setTimeout(() => {
        alert('🛒 ¡Redirigiendo a Amazon! Gracias por tu compra.\n\nRecuerda: Cualquier producto que compres en las próximas 24 horas genera una comisión.');
    }, 100);
}

// 7. Configurar eventos
function setupEventListeners() {
    // Menú móvil
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Back to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
            
            // Header scroll effect
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
    
    // Smooth scroll para enlaces internos
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
    
    // Agregar tag de afiliado a todos los enlaces de Amazon automáticamente
    document.addEventListener('DOMContentLoaded', () => {
        const amazonLinks = document.querySelectorAll('a[href*="amazon.com"]');
        amazonLinks.forEach(link => {
            const url = new URL(link.href);
            if (!url.searchParams.has('tag')) {
                url.searchParams.set('tag', AFFILIATE_ID);
                link.href = url.toString();
            }
        });
    });
    
    // Prevenir envío de formularios (si hay alguno)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Formulario enviado (simulado)');
            form.reset();
        });
    });
}

// 8. Agregar productos dinámicamente (ejemplo de función)
function addNewProduct(productData) {
    const newProduct = {
        id: products.length + 1,
        ...productData
    };
    
    products.push(newProduct);
    renderProducts(products);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', init);

// ===== FUNCIONES DE DEPURACIÓN =====
function debug(message, data = null) {
    console.log(`🔍 ${message}:`, data);
}

function simulatePurchase() {
    console.log('💰 Simulación de compra realizada');
    alert('Compra simulada realizada. ¡Comisión generada!');
}

// ===== EXPORTAR FUNCIONES (si se necesita) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        renderProducts,
        generateStarRating,
        trackAmazonClick
    };
}
