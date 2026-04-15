// Base de datos de productos con galería de imágenes
// Generado automáticamente desde Google Sheets
// Última actualización: 15/4/2026, 12:02:38

const productos = [
    {
        id: 1,
        nombre: "Manicura básica",
        descripcion: "Limpieza, corte, limado, tratamiento y esmaltado.",
        descripcionDetallada: "Limpieza de uñas, corte, limado, tratamiento de cutículas y esmaltado tradicional. Es el servicio estándar de mantenimiento.",
        precio: 15000,
        imagen: "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
        galeria: [
            "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
            "https://lh3.googleusercontent.com/d/1lYd3dwgnLnkTdgtn5Ynk2q0wkfArvtE2",
            "https://lh3.googleusercontent.com/d/1TebYCvIyXKWURoimYnDHqtwxz5MlxDcV",
            "https://lh3.googleusercontent.com/d/12lJN6SmKZ6MvzRkWE9F_5nhdTWh1vpZo"
        ],
        categoria: "manicura",
        stock: 10,
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
            "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
            "https://lh3.googleusercontent.com/d/1GrTOaOm2JDnFGxkET4hBOoAvOpojrkYP",
            "https://lh3.googleusercontent.com/d/1YB5tKsB8OKC3BP4-Dt6DiCKsOv7xfk9j",
            "https://lh3.googleusercontent.com/d/1c-RmEWNWPn19juc-TtCyDeXStx_GpMsR"
        ],
        categoria: "manicura",
        stock: 10,
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
            "https://lh3.googleusercontent.com/d/1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN",
            "https://lh3.googleusercontent.com/d/1ynE-ZIcF3fgi2LZfs46NuYbUIJxT6mrq",
            "https://lh3.googleusercontent.com/d/1QnahFaEnY3gpt7kFMhjO08VW4AglIeLT",
            "https://lh3.googleusercontent.com/d/1JSs6NBHWgumXGiwSoWHOYecbmphr02MQ"
        ],
        categoria: "manicura",
        stock: 10,
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
            "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
            "https://lh3.googleusercontent.com/d/12ZJWfuPZ0MmLIYhUeDS_5glFnP1suqGT",
            "https://lh3.googleusercontent.com/d/1ruNqdMG2TSb0QvNSqP_UTFN26dOaRoRB",
            "https://lh3.googleusercontent.com/d/1W2cxw7TU5Ms6n99fGZ5t74D1hheA-qn3"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 5,
        nombre: "Esmaltado semipermanente",
        descripcion: "Esmalte gel con lampara UV/LED",
        descripcionDetallada: "Aplicación de esmalte gel que se seca con lámpara UV/LED y dura entre 2 y 3 semanas sin descascararse.",
        precio: 22000,
        imagen: "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
        galeria: [
            "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
            "https://lh3.googleusercontent.com/d/1GrTOaOm2JDnFGxkET4hBOoAvOpojrkYP",
            "https://lh3.googleusercontent.com/d/1YB5tKsB8OKC3BP4-Dt6DiCKsOv7xfk9j",
            "https://lh3.googleusercontent.com/d/1c-RmEWNWPn19juc-TtCyDeXStx_GpMsR"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 6,
        nombre: "Nail art (decoración de uñas)",
        descripcion: "Diseños personalizados de uñas",
        descripcionDetallada: "Diseños personalizados: dibujos, piedras, encapsulados, degradados, efectos (chrome, mate, etc.).",
        precio: 35000,
        imagen: "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
        galeria: [
            "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
            "https://lh3.googleusercontent.com/d/12ZJWfuPZ0MmLIYhUeDS_5glFnP1suqGT",
            "https://lh3.googleusercontent.com/d/1ruNqdMG2TSb0QvNSqP_UTFN26dOaRoRB",
            "https://lh3.googleusercontent.com/d/1W2cxw7TU5Ms6n99fGZ5t74D1hheA-qn3"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 7,
        nombre: "Manicura básica",
        descripcion: "Limpieza, corte, limado, tratamiento y esmaltado.",
        descripcionDetallada: "Limpieza de uñas, corte, limado, tratamiento de cutículas y esmaltado tradicional. Es el servicio estándar de mantenimiento.",
        precio: 15000,
        imagen: "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
        galeria: [
            "https://lh3.googleusercontent.com/d/1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
            "https://lh3.googleusercontent.com/d/1lYd3dwgnLnkTdgtn5Ynk2q0wkfArvtE2",
            "https://lh3.googleusercontent.com/d/1TebYCvIyXKWURoimYnDHqtwxz5MlxDcV",
            "https://lh3.googleusercontent.com/d/12lJN6SmKZ6MvzRkWE9F_5nhdTWh1vpZo"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 8,
        nombre: "Uñas esculpidas (gel o acrílico)",
        descripcion: "Extensión y modelado de uñas",
        descripcionDetallada: "Extensión y modelado de uñas sobre moldes o tips, ideal para alargar o reforzar uñas naturales.",
        precio: 28000,
        imagen: "https://lh3.googleusercontent.com/d/1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN",
        galeria: [
            "https://lh3.googleusercontent.com/d/1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN",
            "https://lh3.googleusercontent.com/d/1ynE-ZIcF3fgi2LZfs46NuYbUIJxT6mrq",
            "https://lh3.googleusercontent.com/d/1QnahFaEnY3gpt7kFMhjO08VW4AglIeLT",
            "https://lh3.googleusercontent.com/d/1JSs6NBHWgumXGiwSoWHOYecbmphr02MQ"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 9,
        nombre: "Nail art (decoración de uñas)",
        descripcion: "Diseños personalizados de uñas",
        descripcionDetallada: "Diseños personalizados: dibujos, piedras, encapsulados, degradados, efectos (chrome, mate, etc.).",
        precio: 35000,
        imagen: "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
        galeria: [
            "https://lh3.googleusercontent.com/d/10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
            "https://lh3.googleusercontent.com/d/12ZJWfuPZ0MmLIYhUeDS_5glFnP1suqGT",
            "https://lh3.googleusercontent.com/d/1ruNqdMG2TSb0QvNSqP_UTFN26dOaRoRB",
            "https://lh3.googleusercontent.com/d/1W2cxw7TU5Ms6n99fGZ5t74D1hheA-qn3"
        ],
        categoria: "manicura",
        stock: 10,
        caracteristicas: [
            "servicio profesional",
            "atención VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 10,
        nombre: "Esmaltado semipermanente",
        descripcion: "Esmalte gel con lampara UV/LED",
        descripcionDetallada: "Aplicación de esmalte gel que se seca con lámpara UV/LED y dura entre 2 y 3 semanas sin descascararse.",
        precio: 22000,
        imagen: "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
        galeria: [
            "https://lh3.googleusercontent.com/d/1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
            "https://lh3.googleusercontent.com/d/1GrTOaOm2JDnFGxkET4hBOoAvOpojrkYP",
            "https://lh3.googleusercontent.com/d/1YB5tKsB8OKC3BP4-Dt6DiCKsOv7xfk9j",
            "https://lh3.googleusercontent.com/d/1c-RmEWNWPn19juc-TtCyDeXStx_GpMsR"
        ],
        categoria: "manicura",
        stock: 10,
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
                    Ver producto
                </button>

                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})" aria-label="Agregar ${producto.nombre} al carrito">
                    Agregar al Carrito
                </button>
            </div>
        </article>
    `).join('');
}

// Agregar al carrito
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
