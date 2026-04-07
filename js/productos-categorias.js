// Renderizar servicios por categorías en el index

document.addEventListener('DOMContentLoaded', () => {
    renderizarserviciosPorCategoria('manicura', 'gridCat1');
});

function renderizarserviciosPorCategoria(categoria, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const serviciosFiltrados = servicios.filter(
        servicio => servicio.categoria === categoria
    );

    // Mostrar todos los servicios de la categoría
    grid.innerHTML = serviciosFiltrados.map(servicio => `
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
                <button class="add-to-cart-btn"
                    onclick="window.location.href='producto.html?id=${servicio.id}'"
                    aria-label="Ver detalles de ${servicio.nombre}">
                    Ver servicio
                </button>

                <button class="add-to-cart-btn"
                    onclick="agregarAlCarrito(${servicio.id})"
                    aria-label="Agregar ${servicio.nombre} al carrito">
                    Reservar turno
                </button>
            </div>
        </article>
    `).join('');
}

// Función auxiliar de formateo
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}