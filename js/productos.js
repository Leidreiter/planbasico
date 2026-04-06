// Base de datos de productos con galer?a de im?genes
// Generado autom?ticamente desde Google Sheets
// ?ltima actualizaci?n: 6/4/2026, 01:10:34

const productos = [
    {
        id: 1,
        nombre: "Manicura b?sica",
        descripcion: "Limpieza, corte, limado, tratamiento y esmaltado.",
        descripcionDetallada: "Limpieza de u?as, corte, limado, tratamiento de cut?culas y esmaltado tradicional. Es el servicio est?ndar de mantenimiento.",
        precio: 15000,
        imagen: "https://drive.google.com/uc?export=view&id=1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm",
        galeria: [
            "https://drive.google.com/uc?export=view&id=1rd4pdOsMxyGYPKelKjmSSNj-Nkpa_aOm"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atenci?n VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 2,
        nombre: "Esmaltado semipermanente",
        descripcion: "Esmalte gel con lampara UV/LED",
        descripcionDetallada: "Aplicaci?n de esmalte gel que se seca con l?mpara UV/LED y dura entre 2 y 3 semanas sin descascararse.",
        precio: 22000,
        imagen: "https://drive.google.com/uc?export=view&id=1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6",
        galeria: [
            "https://drive.google.com/uc?export=view&id=1clxwr84yA212Ui7NtBMt7IxdkT9J6ab6"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atenci?n VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 3,
        nombre: "U?as esculpidas (gel o acr?lico)",
        descripcion: "Extensi?n y modelado de u?as",
        descripcionDetallada: "Extensi?n y modelado de u?as sobre moldes o tips, ideal para alargar o reforzar u?as naturales.",
        precio: 28000,
        imagen: "https://drive.google.com/uc?export=view&id=1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN",
        galeria: [
            "https://drive.google.com/uc?export=view&id=1jxGJ0M5SLiNBFao-ry_s2IhROtHWbMzN"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atenci?n VIP",
            "cuidado y detalle"
        ]
    },
    {
        id: 4,
        nombre: "Nail art (decoraci?n de u?as)",
        descripcion: "Dise?os personalizados de u?as",
        descripcionDetallada: "Dise?os personalizados: dibujos, piedras, encapsulados, degradados, efectos (chrome, mate, etc.).",
        precio: 35000,
        imagen: "https://drive.google.com/uc?export=view&id=10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6",
        galeria: [
            "https://drive.google.com/uc?export=view&id=10nFBnN5hWEtLuLzaG_a-e_12MWRhEaM6"
        ],
        categoria: "manicura",
        stock: NaN,
        caracteristicas: [
            "servicio profesional",
            "atenci?n VIP",
            "cuidado y detalle"
        ]
    }
];


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

// Mostrar notificaci?n
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

// Agregar estilos de animaci?n
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

// Inicializar al cargar la p?gina
document.addEventListener('DOMContentLoaded', renderizarProductos);
