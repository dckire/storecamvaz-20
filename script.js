// Toggle del menú móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Simular envío del newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if (email) {
        alert('¡Gracias por suscribirte! Te enviaremos las mejores ofertas.');
        this.reset();
    }
});

// Actualizar año en el footer
document.querySelector('.footer-bottom p').innerHTML = 
    document.querySelector('.footer-bottom p').innerHTML.replace('2024', new Date().getFullYear());

// Efecto scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Simular datos de productos (podrías reemplazar con una API real)
const products = [
    {
        title: "Audífonos Inalámbricos Premium",
        rating: 4.5,
        price: 129.99,
        oldPrice: 179.99,
        asin: "B08N5WRWNW",
        badge: "Mejor Elección"
    },
    {
        title: "Smartwatch Deportivo 2024",
        rating: 4.0,
        price: 89.99,
        oldPrice: 129.99,
        asin: "B09V3MN4XK",
        badge: "Gran Valor"
    },
    {
        title: "Altavoz Bluetooth Portátil",
        rating: 5.0,
        price: 59.99,
        oldPrice: null,
        asin: "B08C4Z5V6T",
        badge: "Recomendado"
    }
];

// Podrías usar esto para generar productos dinámicamente
function generateProductHTML(product) {
    return `
        <div class="product-card">
            <div class="product-badge">${product.badge}</div>
            <img src="https://via.placeholder.com/500x300?text=${encodeURIComponent(product.title)}" alt="${product.title}" class="product-img">
            <div class="product-content">
                <h3>${product.title}</h3>
                <div class="rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">${product.rating}/5</span>
                </div>
                <p class="product-desc">Producto de alta calidad con excelentes características.</p>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <a href="https://www.amazon.com/dp/${product.asin}/?tag=storecamvaz-20" target="_blank" class="buy-button">
                    <i class="fab fa-amazon"></i> Ver en Amazon
                </a>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Contador de clicks en enlaces de afiliado (simulación)
document.querySelectorAll('a[href*="amazon.com"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Enlace de afiliado clickeado: ${this.href}`);
        // Aquí podrías agregar Google Analytics o otro tracking
    });
});
