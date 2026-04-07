// Base de datos de servicios con galería de imágenes
// Generado automáticamente desde Google Sheets
// Última actualización: 6/4/2026, 02:46:17

const servicios = [
    {
        id: 1,
        nombre: "Manicura básica",
        descripcion: "Limpieza, corte, limado, tratamiento y esmaltado.",
        descripcionDetallada: "Limpieza de uñas, corte, limado, tratamiento de cutículas y esmaltado tradicional. Es el servicio estándar de mantenimiento.",
        precio: 15000,
        imagen: "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
        galeria: [
            "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 2,
        nombre: "Esmaltado semipermanente",
        descripcion: "Esmalte gel con lampara UV/LED",
        descripcionDetallada: "Aplicación de esmalte gel que se seca con lámpara UV/LED y dura entre 2 y 3 semanas sin descascararse.",
        precio: 22000,
        imagen: "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
        galeria: [
            "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 3,
        nombre: "Uñas esculpidas (gel o acrílico)",
        descripcion: "Extensión y modelado de uñas",
        descripcionDetallada: "Extensión y modelado de uñas sobre moldes o tips, ideal para alargar o reforzar uñas naturales.",
        precio: 28000,
        imagen: "https://lh3.googleusercontent.com/d/1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN",
        galeria: [
            "https://lh3.googleusercontent.com/d/1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 4,
        nombre: "Nail art (decoración de uñas)",
        descripcion: "Diseños personalizados de uñas",
        descripcionDetallada: "Diseños personalizados: dibujos, piedras, encapsulados, degradados, efectos (chrome, mate, etc.).",
        precio: 35000,
        imagen: "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
        galeria: [
            "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    }
];


// ============================================
// FUNCIONES DEL CLIENTE (Navegador)
// ============================================

// Renderizar servicios
function renderizarservicios() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = servicios.map(servicio => `
        <article class="product-card">
            <a href="servicio.html?id=${servicio.id}" class="product-link">
                <img src="${servicio.imagen}" alt="${servicio.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${servicio.nombre}</h3>
                    <p class="product-description">${servicio.descripcion}</p>
                    <p class="product-price">${formatearPrecio(servicio.precio)}</p>
                </div>
            </a>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="window.location.href='servicio.html?id=${servicio.id}'" aria-label="Ver detalles de ${servicio.nombre}">
                    Ver servicio
                </button>

                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${servicio.id})" aria-label="Agregar ${servicio.nombre} al carrito">
                    Agregar al Carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Agregar al carrito
function agregarAlCarrito(id) {
    const servicio = servicios.find(p => p.id === id);
    if (!servicio) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: servicio.id,
            nombre: servicio.nombre,
            precio: servicio.precio,
            imagen: servicio.imagen,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
    mostrarNotificacion('servicio agregado al carrito');
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarservicios);
