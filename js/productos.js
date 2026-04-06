// Base de datos de productos con galería de imágenes
// Generado automáticamente desde Google Sheets
// Última actualización: 5/4/2026, 12:19:15

const productos = [
    {
        id: 1,
        nombre: "gorro Dormir",
        descripcion: "Gorra de categoría 1",
        descripcionDetallada: "Gorra de categoría 1 - Gorra de categoría 1",
        precio: 8000,
        imagen: "https://lh3.googleusercontent.com/d/15_Ck7vyYsDelpxaiFxGy2st71Jkkiy1p",
        galeria: [
            "https://lh3.googleusercontent.com/d/15_Ck7vyYsDelpxaiFxGy2st71Jkkiy1p",
            "https://lh3.googleusercontent.com/d/1gUQvREIEWwOhuiuwEer5GQ01KB4rqJwH",
            "https://lh3.googleusercontent.com/d/10Ycxl2cxTNnLGY_a2p_Ke1oNS8BbiBl4",
            "https://lh3.googleusercontent.com/d/1B-iX_NIDHe0T_WyYlK3HTSXrU7IFADeS",
            "https://lh3.googleusercontent.com/d/1zfKFg9iNy8TzzW78qhVgKe1d5RxVjUX8"
        ],
        categoria: "categoria1",
        stock: 200,
        caracteristicas: [
            "alogodón",
            "industria nacional",
            "estilizada",
            "personalizable"
        ]
    },
    {
        id: 2,
        nombre: "gorro Bruja",
        descripcion: "Gorra de categoría 1",
        descripcionDetallada: "Gorra de categoría 1 - Gorra de categoría 1",
        precio: 8000,
        imagen: "https://lh3.googleusercontent.com/d/1Ifxs_XTgreF3-NtoZCBCQeua3wC3IJAs",
        galeria: [
            "https://lh3.googleusercontent.com/d/1Ifxs_XTgreF3-NtoZCBCQeua3wC3IJAs",
            "https://lh3.googleusercontent.com/d/1AwhBVe4RvTTjX3_6ox1lvaALv_QHKhlj",
            "https://lh3.googleusercontent.com/d/1keQ4cp0wvPWdWALReZlMYnHmOfWDaoeD",
            "https://lh3.googleusercontent.com/d/1JCq_GaTiV6LWm64taAfEW9FKTsCkYJ1m",
            "https://lh3.googleusercontent.com/d/17gvQ42huws6rnPYcUuaS4QCJR8N0QmQw"
        ],
        categoria: "categoria1",
        stock: 200,
        caracteristicas: [
            "alogodón",
            "industria nacional",
            "estilizada",
            "personalizable"
        ]
    },
    {
        id: 3,
        nombre: "gorro Cumple",
        descripcion: "Gorra de categoría 1",
        descripcionDetallada: "Gorra de categoría 1 - Gorra de categoría 1",
        precio: 8000,
        imagen: "https://lh3.googleusercontent.com/d/1doHfuSpVkEGbzh1E-Ze6WbT-_rMUPHxv",
        galeria: [
            "https://lh3.googleusercontent.com/d/1doHfuSpVkEGbzh1E-Ze6WbT-_rMUPHxv",
            "https://lh3.googleusercontent.com/d/1nwgHA_jGDdKWZ4luL7GYn5hedPmPGELS",
            "https://lh3.googleusercontent.com/d/1BpRBDU4fwJBOYlvVuW9tduzYKcdV5MHC",
            "https://lh3.googleusercontent.com/d/1JTkMZR7gln4qLiyK7CPy8TtF3LARXGNa",
            "https://lh3.googleusercontent.com/d/1ogrhfETHCCftKCzyCnNVUoEddXMynakR"
        ],
        categoria: "categoria1",
        stock: 200,
        caracteristicas: [
            "alogodón",
            "industria nacional",
            "estilizada",
            "personalizable"
        ]
    },
    {
        id: 4,
        nombre: "gorra Lluvia",
        descripcion: "Gorra de categoría 1",
        descripcionDetallada: "Gorra de categoría 1 - Gorra de categoría 1",
        precio: 8000,
        imagen: "https://lh3.googleusercontent.com/d/18xYPGb7zN43_J9mwOm5CP2hEQ9EiI8re",
        galeria: [
            "https://lh3.googleusercontent.com/d/18xYPGb7zN43_J9mwOm5CP2hEQ9EiI8re",
            "https://lh3.googleusercontent.com/d/1uJGjF0Xvt_cxiwQYrcgxle7jY4KQSN35",
            "https://lh3.googleusercontent.com/d/18liHkmuHhoHHIA_LdUct4eQ4oovqCL77",
            "https://lh3.googleusercontent.com/d/1XYGOtgZ6HR77GUEreOefxfGg_QOyuzbC",
            "https://lh3.googleusercontent.com/d/1G6MNVyz06cncNjxYfsIh7u-SDOE-cksV"
        ],
        categoria: "categoria1",
        stock: 200,
        caracteristicas: [
            "alogodón",
            "industria nacional",
            "estilizada",
            "personalizable"
        ]
    }
];


// ============================================
// FUNCIONES DEL CLIENTE (Navegador)
// ============================================

// Renderizar productos
function renderizarProductos() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = productos.map(producto => `
        <article class="product-card">
            <a href="producto.html?id=${producto.id}" class="product-link">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <p class="product-price">${formatearPrecio(producto.precio)}</p>
                </div>
            </a>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="window.location.href='producto.html?id=${producto.id}'" aria-label="Ver detalles de ${producto.nombre}">
                    Ver servicio
                </button>

                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})" aria-label="Agregar ${producto.nombre} al carrito">
                    Reservar turno
                </button>
            </div>
        </article>
    `).join('');
}

// Reservar turno
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
    mostrarNotificacion('Producto agregado al carrito');
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
document.addEventListener('DOMContentLoaded', renderizarProductos);
