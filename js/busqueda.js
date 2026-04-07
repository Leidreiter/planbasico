// Sistema de búsqueda de servicios en tiempo real - Compatible con categorías

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;

    // Búsqueda en tiempo real mientras se escribe
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        // Mostrar/ocultar botón de limpiar
        if (query.length > 0) {
            clearButton.classList.add('visible');
        } else {
            clearButton.classList.remove('visible');
        }
        
        // Realizar búsqueda
        buscarservicios(query);
    });

    // Limpiar búsqueda
    if (clearButton) {
        clearButton.addEventListener('click', limpiarBusqueda);
    }

    // Limpiar al presionar ESC
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            limpiarBusqueda();
        }
    });
});

// Función principal de búsqueda
function buscarservicios(query) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const searchResults = document.getElementById('searchResults');
    
    if (!grid || !servicios) return;

    // Si no hay búsqueda, mostrar categorías
    if (!query || query.length === 0) {
        document.body.classList.remove('searching');
        if (noResults) noResults.classList.remove('visible');
        if (searchResults) searchResults.textContent = '';
        return;
    }

    // Activar modo búsqueda (oculta las secciones de categorías)
    document.body.classList.add('searching');

    // Normalizar query (minúsculas, sin acentos)
    const queryNormalizado = normalizarTexto(query);

    // Filtrar servicios
    const serviciosFiltrados = servicios.filter(servicio => {
        const nombreNormalizado = normalizarTexto(servicio.nombre);
        const descripcionNormalizada = normalizarTexto(servicio.descripcion);
        const categoriaNormalizada = normalizarTexto(servicio.categoria);
        
        return nombreNormalizado.includes(queryNormalizado) || 
               descripcionNormalizada.includes(queryNormalizado) ||
               categoriaNormalizada.includes(queryNormalizado);
    });

    // Mostrar resultados
    if (serviciosFiltrados.length > 0) {
        renderizarserviciosFiltrados(serviciosFiltrados);
        if (noResults) noResults.classList.remove('visible');
        
        // Mostrar cantidad de resultados
        if (searchResults) {
            const plural = serviciosFiltrados.length === 1 ? 'servicio encontrado' : 'servicios encontrados';
            searchResults.textContent = `${serviciosFiltrados.length} ${plural}`;
        }
    } else {
        // No hay resultados
        grid.innerHTML = '';
        if (noResults) noResults.classList.add('visible');
        if (searchResults) searchResults.textContent = 'No se encontraron resultados';
    }
}

// Renderizar servicios filtrados
function renderizarserviciosFiltrados(serviciosFiltrados) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = serviciosFiltrados.map(servicio => `
        <article class="product-card">
            <a href="servicio.html?id=${servicio.id}" class="product-link">
                <img src="${servicio.imagen}" alt="${servicio.nombre}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${servicio.nombre}</h3>
                    <p class="product-description">${servicio.descripcion}</p>
                    <p class="product-price">$${formatearPrecio(servicio.precio)}</p>
                </div>
            </a>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="window.location.href='servicio.html?id=${servicio.id}'" aria-label="Ver detalles de ${servicio.nombre}">
                    Ver servicio
                </button>
                
                <button class="add-to-cart-btn" onclick="agregarAlCarrito(${servicio.id})" aria-label="Agregar ${servicio.nombre} al carrito">
                    Reservar turno
                </button>
            </div>
        </article>
    `).join('');
}

// Normalizar texto (quitar acentos y convertir a minúsculas)
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Limpiar búsqueda
function limpiarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    
    if (searchInput) searchInput.value = '';
    if (clearButton) clearButton.classList.remove('visible');
    if (searchResults) searchResults.textContent = '';
    if (noResults) noResults.classList.remove('visible');
    
    // Volver a mostrar las secciones de categorías
    document.body.classList.remove('searching');
    
    // Hacer foco en el input
    if (searchInput) searchInput.focus();
}

// Formatear precio
function formatearPrecio(precio) {
    return precio.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}