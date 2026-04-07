// Página de detalle de servicio con galería de imágenes y zoom

let imagenActualIndex = 0;
let zoomActivo = false;

document.addEventListener('DOMContentLoaded', function() {
    cargarDetalleservicio();
    cargarserviciosRelacionados();
});

// Obtener el ID del servicio desde la URL
function obtenerIdservicio() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Cargar detalle del servicio
function cargarDetalleservicio() {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio) {
        mostrarservicioNoEncontrado();
        return;
    }
    
    // Actualizar título de la página
    document.title = `${servicio.nombre} - Mi Tienda Online`;
    
    // Actualizar breadcrumb
    const breadcrumbProduct = document.getElementById('breadcrumbProduct');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = servicio.nombre;
    }
    
    // Renderizar detalle del servicio
    renderizarDetalleservicio(servicio);
}

// Renderizar el detalle completo del servicio
function renderizarDetalleservicio(servicio) {
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
    
    // Determinar estado del stock
    let stockClass = '';
    let stockText = '';
    if (servicio.stock > 10) {
        stockClass = '';
        stockText = `En stock (${servicio.stock} disponibles)`;
    } else if (servicio.stock > 0) {
        stockClass = 'low';
        stockText = `¡Últimas unidades! (${servicio.stock} disponibles)`;
    } else {
        stockClass = 'out';
        stockText = 'Agotado';
    }
    
    // Navegación entre servicios
    const prevProduct = servicios.find(p => p.id === servicio.id - 1);
    const nextProduct = servicios.find(p => p.id === servicio.id + 1);
    
    // Usar galería si existe, sino usar imagen principal
    const imagenesGaleria = servicio.galeria && servicio.galeria.length > 0 
        ? servicio.galeria 
        : [servicio.imagen];
    
    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image-container">
                <!-- Imagen principal -->
                <div class="main-image-wrapper">
                    <img src="${imagenesGaleria[0]}" 
                         alt="${servicio.nombre}" 
                         class="product-detail-image" 
                         id="mainProductImage"
                         onclick="toggleZoom()">
                    
                    ${imagenesGaleria.length > 1 ? `
                        <button class="gallery-nav-btn prev-img" onclick="cambiarImagen(-1)" aria-label="Imagen anterior">
                            ‹
                        </button>
                        <button class="gallery-nav-btn next-img" onclick="cambiarImagen(1)" aria-label="Imagen siguiente">
                            ›
                        </button>
                        
                        <div class="image-counter">
                            <span id="imageCounter">1 / ${imagenesGaleria.length}</span>
                        </div>
                    ` : ''}
                    
                    <div class="zoom-hint">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <span>Click para ampliar</span>
                    </div>
                </div>
                
                <!-- Miniaturas -->
                ${imagenesGaleria.length > 1 ? `
                    <div class="thumbnails-container">
                        ${imagenesGaleria.map((img, idx) => `
                            <img src="${img}" 
                                 alt="${servicio.nombre} - Vista ${idx + 1}" 
                                 class="thumbnail ${idx === 0 ? 'active' : ''}" 
                                 onclick="seleccionarImagen(${idx})"
                                 loading="lazy">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="product-detail-info">
                <span class="product-category">${servicio.categoria}</span>
                <div class="product-title-row">
                    <h1>${servicio.nombre}</h1>
                </div>
                
                <p class="product-stock ${stockClass}">${stockText}</p>
                
                <p class="product-detail-price">$${formatearPrecio(servicio.precio)}</p>
                
                <p class="product-detail-description">${servicio.descripcionDetallada}</p>
                
                <div class="product-features">
                    <h3>Características:</h3>
                    <ul>
                        ${servicio.caracteristicas.map(caracteristica => `
                            <li>${caracteristica}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <!--
                <div class="quantity-selector">
                    <label for="quantity">Cantidad:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cambiarCantidad(-1)" aria-label="Disminuir cantidad">-</button>
                        <span class="quantity-value" id="quantityValue">1</span>
                        <button class="quantity-btn" onclick="cambiarCantidad(1)" aria-label="Aumentar cantidad">+</button>
                    </div>
                </div>
                -->

                <div class="product-actions-detail">
                    <button class="btn-add-cart" id="btnAddCart" onclick="agregarAlCarritoDetalle(${servicio.id})" ${servicio.stock === 0 ? 'disabled' : ''}>
                        ${servicio.stock === 0 ? 'Agotado' : 'Reservar turno'}
                    </button>
                    <a href="carrito.html" class="btn-go-cart" id="btnGoCart" style="display: none;">
                        Ir al Carrito →
                    </a>
                    <!--
                    <button class="btn-buy-now" onclick="comprarAhora(${servicio.id})" ${servicio.stock === 0 ? 'disabled' : ''}>
                        Comprar Ahora
                    </button>
                    -->
                </div>
                
                <div class="share-buttons">
                    <span class="share-label">Compartir:</span>
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(servicio.nombre + ' - ' + window.location.href)}" 
                       target="_blank" rel="noopener" class="share-btn whatsapp" aria-label="Compartir en WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" 
                       target="_blank" rel="noopener" class="share-btn facebook" aria-label="Compartir en Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(servicio.nombre)}&url=${encodeURIComponent(window.location.href)}" 
                       target="_blank" rel="noopener" class="share-btn twitter" aria-label="Compartir en X/Twitter">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <button class="share-btn copy-link" onclick="copiarEnlace()" aria-label="Copiar enlace">
                        <i class="fa-solid fa-link"></i>
                    </button>
                </div>

                <div class="product-navigation">
                    ${prevProduct ? `
                        <a href="producto.html?id=${prevProduct.id}" class="nav-product-btn prev">
                            ← ${prevProduct.nombre}
                        </a>
                    ` : '<span></span>'}
                    
                    ${nextProduct ? `
                        <a href="producto.html?id=${nextProduct.id}" class="nav-product-btn next">
                            ${nextProduct.nombre} →
                        </a>
                    ` : '<span></span>'}
                </div>
            </div>
        </div>
    `;
}

// Cambiar imagen en la galería
function cambiarImagen(direccion) {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio || !servicio.galeria || servicio.galeria.length <= 1) return;
    
    imagenActualIndex += direccion;
    
    // Ciclo infinito
    if (imagenActualIndex < 0) {
        imagenActualIndex = servicio.galeria.length - 1;
    }
    if (imagenActualIndex >= servicio.galeria.length) {
        imagenActualIndex = 0;
    }
    
    actualizarImagenPrincipal();
}

// Seleccionar imagen desde miniatura
function seleccionarImagen(index) {
    imagenActualIndex = index;
    actualizarImagenPrincipal();
}

// Actualizar imagen principal y miniaturas
function actualizarImagenPrincipal() {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio || !servicio.galeria) return;
    
    const mainImage = document.getElementById('mainProductImage');
    const imageCounter = document.getElementById('imageCounter');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        // Efecto de transición
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = servicio.galeria[imagenActualIndex];
            mainImage.style.opacity = '1';
        }, 200);
    }
    
    if (imageCounter) {
        imageCounter.textContent = `${imagenActualIndex + 1} / ${servicio.galeria.length}`;
    }
    
    // Actualizar miniaturas activas
    thumbnails.forEach((thumb, idx) => {
        if (idx === imagenActualIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Toggle zoom en la imagen
function toggleZoom() {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio) return;
    
    const imagenesGaleria = servicio.galeria && servicio.galeria.length > 0 
        ? servicio.galeria 
        : [servicio.imagen];
    
    // Crear modal de zoom
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    zoomModal.innerHTML = `
        <div class="zoom-overlay" onclick="cerrarZoom()"></div>
        <div class="zoom-container">
            <button class="zoom-close" onclick="cerrarZoom()" aria-label="Cerrar zoom">
                <i class="fa-solid fa-xmark"></i>
            </button>
            
            ${imagenesGaleria.length > 1 ? `
                <button class="zoom-nav-btn prev" onclick="event.stopPropagation(); cambiarImagenZoom(-1)" aria-label="Imagen anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="zoom-nav-btn next" onclick="event.stopPropagation(); cambiarImagenZoom(1)" aria-label="Imagen siguiente">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            ` : ''}
            
            <div class="zoom-image-wrapper">
                <img src="${imagenesGaleria[imagenActualIndex]}" 
                     alt="${servicio.nombre}" 
                     class="zoom-image" 
                     id="zoomImage"
                     draggable="false">
            </div>
            
            ${imagenesGaleria.length > 1 ? `
                <div class="zoom-counter">
                    <span id="zoomCounter">${imagenActualIndex + 1} / ${imagenesGaleria.length}</span>
                </div>
                
                <div class="zoom-thumbnails">
                    ${imagenesGaleria.map((img, idx) => `
                        <img src="${img}" 
                             alt="${servicio.nombre} - Vista ${idx + 1}" 
                             class="zoom-thumbnail ${idx === imagenActualIndex ? 'active' : ''}" 
                             onclick="event.stopPropagation(); seleccionarImagenZoom(${idx})">
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(zoomModal);
    document.body.style.overflow = 'hidden';
    zoomActivo = true;
    
    // Animación de entrada
    setTimeout(() => {
        zoomModal.classList.add('active');
    }, 10);
    
    // Habilitar zoom con mouse y touch
    const zoomImg = document.getElementById('zoomImage');
    if (zoomImg) {
        habilitarZoomInteractivo(zoomImg);
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', manejarTeclasZoom);
}

// Cerrar zoom
function cerrarZoom() {
    const zoomModal = document.querySelector('.zoom-modal');
    if (zoomModal) {
        zoomModal.classList.remove('active');
        setTimeout(() => {
            zoomModal.remove();
            document.body.style.overflow = '';
            zoomActivo = false;
        }, 300);
    }
    document.removeEventListener('keydown', manejarTeclasZoom);
}

// Cambiar imagen en modo zoom
function cambiarImagenZoom(direccion) {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio || !servicio.galeria || servicio.galeria.length <= 1) return;
    
    imagenActualIndex += direccion;
    
    if (imagenActualIndex < 0) {
        imagenActualIndex = servicio.galeria.length - 1;
    }
    if (imagenActualIndex >= servicio.galeria.length) {
        imagenActualIndex = 0;
    }
    
    actualizarImagenZoom();
}

// Seleccionar imagen desde miniatura en zoom
function seleccionarImagenZoom(index) {
    imagenActualIndex = index;
    actualizarImagenZoom();
}

// Actualizar imagen en modo zoom
function actualizarImagenZoom() {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio || !servicio.galeria) return;
    
    const zoomImage = document.getElementById('zoomImage');
    const zoomCounter = document.getElementById('zoomCounter');
    const zoomThumbnails = document.querySelectorAll('.zoom-thumbnail');
    
    if (zoomImage) {
        zoomImage.style.opacity = '0';
        zoomImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            zoomImage.src = servicio.galeria[imagenActualIndex];
            zoomImage.style.opacity = '1';
            zoomImage.style.transform = 'scale(1)';
            
            // Resetear zoom interactivo
            zoomImage.style.cursor = 'zoom-in';
            if (zoomImage.dataset.zoomed === 'true') {
                zoomImage.dataset.zoomed = 'false';
            }
        }, 200);
    }
    
    if (zoomCounter) {
        zoomCounter.textContent = `${imagenActualIndex + 1} / ${servicio.galeria.length}`;
    }
    
    zoomThumbnails.forEach((thumb, idx) => {
        if (idx === imagenActualIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Habilitar zoom interactivo en la imagen
function habilitarZoomInteractivo(img) {
    let zoomed = false;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!zoomed) {
            // Hacer zoom
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            img.style.transform = 'scale(2)';
            img.style.cursor = 'zoom-out';
            img.dataset.zoomed = 'true';
            zoomed = true;
        } else {
            // Quitar zoom
            img.style.transform = 'scale(1) translate(0, 0)';
            img.style.cursor = 'zoom-in';
            img.dataset.zoomed = 'false';
            zoomed = false;
            posX = 0;
            posY = 0;
        }
    });
    
    // Drag para mover la imagen zoomeada
    img.addEventListener('mousedown', function(e) {
        if (zoomed) {
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
            img.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging && zoomed) {
            posX = e.clientX - startX;
            posY = e.clientY - startY;
            img.style.transform = `scale(2) translate(${posX}px, ${posY}px)`;
        }
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            img.style.cursor = 'zoom-out';
        }
    });
    
    // Soporte para touch en móvil
    img.addEventListener('touchstart', function(e) {
        if (zoomed) {
            const touch = e.touches[0];
            startX = touch.clientX - posX;
            startY = touch.clientY - posY;
        }
    });
    
    img.addEventListener('touchmove', function(e) {
        if (zoomed) {
            e.preventDefault();
            const touch = e.touches[0];
            posX = touch.clientX - startX;
            posY = touch.clientY - startY;
            img.style.transform = `scale(2) translate(${posX}px, ${posY}px)`;
        }
    });
}

// Manejar teclas en modo zoom
function manejarTeclasZoom(e) {
    if (!zoomActivo) return;
    
    switch(e.key) {
        case 'Escape':
            cerrarZoom();
            break;
        case 'ArrowLeft':
            cambiarImagenZoom(-1);
            break;
        case 'ArrowRight':
            cambiarImagenZoom(1);
            break;
    }
}

// Control de cantidad
let cantidadSeleccionada = 1;

function cambiarCantidad(cambio) {
    const servicioId = obtenerIdservicio();
    const servicio = servicios.find(p => p.id === servicioId);
    
    if (!servicio) return;
    
    cantidadSeleccionada += cambio;
    
    // Limitar entre 1 y stock disponible
    if (cantidadSeleccionada < 1) cantidadSeleccionada = 1;
    if (cantidadSeleccionada > servicio.stock) cantidadSeleccionada = servicio.stock;
    
    // Actualizar display
    const quantityDisplay = document.getElementById('quantityValue');
    if (quantityDisplay) {
        quantityDisplay.textContent = cantidadSeleccionada;
    }
}

// Reservar turno desde detalle
function agregarAlCarritoDetalle(id) {
    const servicio = servicios.find(p => p.id === id);
    if (!servicio) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += cantidadSeleccionada;
    } else {
        cart.push({
            id: servicio.id,
            nombre: servicio.nombre,
            precio: servicio.precio,
            imagen: servicio.imagen,
            quantity: cantidadSeleccionada
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarContadorCarrito();
    mostrarNotificacion(`${cantidadSeleccionada} ${cantidadSeleccionada === 1 ? 'servicio agregado' : 'servicios agregados'} al carrito`);
    
    // Mostrar botón "Ir al Carrito"
    const btnAddCart = document.getElementById('btnAddCart');
    const btnGoCart = document.getElementById('btnGoCart');
    
    if (btnAddCart && btnGoCart) {
        btnAddCart.style.display = 'none';
        btnGoCart.style.display = 'inline-flex';
    }
    
    // Resetear cantidad
    cantidadSeleccionada = 1;
    const quantityDisplay = document.getElementById('quantityValue');
    if (quantityDisplay) {
        quantityDisplay.textContent = '1';
    }
}

// Comprar ahora
function comprarAhora(id) {
    agregarAlCarritoDetalle(id);
    setTimeout(() => {
        window.location.href = 'carrito.html';
    }, 500);
}

// Cargar servicios relacionados
function cargarserviciosRelacionados() {
    const servicioId = obtenerIdservicio();
    const servicioActual = servicios.find(p => p.id === servicioId);
    
    if (!servicioActual) return;
    
    let relacionados = servicios.filter(p => 
        p.id !== servicioId && p.categoria === servicioActual.categoria
    );
    
    if (relacionados.length < 3) {
        const otros = servicios.filter(p => 
            p.id !== servicioId && !relacionados.includes(p)
        );
        relacionados = [...relacionados, ...otros];
    }
    
    relacionados = relacionados.slice(0, 3);
    
    const grid = document.getElementById('relatedProducts');
    if (!grid) return;
    
    grid.innerHTML = relacionados.map(servicio => `
        <article class="product-card">
            <a href="producto.html?id=${servicio.id}" class="product-link">
                <img src="${servicio.imagen}" alt="${servicio.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${servicio.nombre}</h3>
                    <p class="product-description">${servicio.descripcion}</p>
                    <p class="product-price">$${formatearPrecio(servicio.precio)}</p>
                </div>
            </a>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${servicio.id})" aria-label="Agregar ${servicio.nombre} al carrito">
                    Reservar turno
                </button>
            </div>
        </article>
    `).join('');
}

// Mostrar servicio no encontrado
function mostrarservicioNoEncontrado() {
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="empty-cart">
            <h2>servicio no encontrado</h2>
            <p>El servicio que buscas no existe o ha sido eliminado</p>
            <a href="index.html" class="shop-btn">Volver a la tienda</a>
        </div>
    `;
}

// Notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #9e70db;
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


// Copiar enlace al portapapeles
function copiarEnlace() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        mostrarNotificacion('Enlace copiado al portapapeles');
    }).catch(() => {
        // Fallback para navegadores que no soportan clipboard API
        const input = document.createElement('input');
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        mostrarNotificacion('Enlace copiado al portapapeles');
    });
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}