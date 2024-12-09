document.addEventListener("DOMContentLoaded", function() {
   
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error cargando el archivo:', error));
    }
   
    loadHTML('partials/_header.html', 'header-placeholder');
    loadHTML('partials/_footer.html', 'footer-placeholder');
});

let imagenesPorColor = {
    rosa: {
        principal: "/src/assets/images/google_pixel_9_pro_xl_rosa_5_.jpg",
        botones: [
            "/src/assets/images/google_pixel_9_pro_xl_rosa_1_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_rosa_2_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_rosa_3_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_rosa_4_.jpg"
        ]
    },
    verde: {
        principal: "/src/assets/images/google-pixel-9-256gb-verde (1).jpg",
        botones: [
            "/src/assets/images/google-pixel-9-256gb-verde (3).jpg",
            "/src/assets/images/google-pixel-9-256gb-verde (4).jpg",
            "/src/assets/images/google-pixel-9-256gb-verde (5).jpg",
            "/src/assets/images/google-pixel-9-256gb-verde (6).jpg"
        ]
    },
    porcelana: {
        principal: "/src/assets/images/google_pixel_9_pro_xl_porcelana_5_.jpg",
        botones: [
            "/src/assets/images/google_pixel_9_pro_xl_porcelana_1_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_porcelana_2_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_porcelana_3_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_porcelana_4_.jpg"
        ]
    },
    obsidian: {
        principal: "/src/assets/images/google_pixel_9_pro_xl_obsidian_5_.jpg",
        botones: [
            "/src/assets/images/google_pixel_9_pro_xl_obsidian_1_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_obsidian_2_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_obsidian_3_.jpg",
            "/src/assets/images/google_pixel_9_pro_xl_obsidian_4_.jpg"
        ]
    }
};
// Esta función cambia la imagen principal y las imágenes de los botones de la izquierda
function cambiarImagenDeBoton(index) {
    // Obtener la imagen principal
    const imagenPrincipal = document.getElementById('imagen-principal');

    // Obtener la imagen de la imagen seleccionada
    const imagenSeleccionada = document.querySelectorAll('.botones_izquierda img')[index];

    // Actualizar la imagen principal
    imagenPrincipal.src = imagenSeleccionada.src;
}

// Esta función cambia las imágenes de los botones y la imagen principal según el color
function cambiarImagenPorColor(color) {
    // Cambiar la imagen principal
    const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = imagenesPorColor[color].principal;

    // Cambiar las imágenes de los botones de la izquierda
    const botones = document.querySelectorAll('.botones_izquierda img');
    botones.forEach((boton, idx) => {
        boton.src = imagenesPorColor[color].botones[idx];
    });
}
// Obtener el botón de "Añadir al carrito" y el contador del carrito
const carritoButton = document.querySelector('.carrito');
const contadorUnidades = document.getElementById('cart-count');

// Inicializamos el contador de productos
let sumaProductos = 0;

// Función para añadir productos al carrito
carritoButton.addEventListener('click', function() {
    sumaProductos++; // Aumentar la cantidad de productos
    contadorUnidades.textContent = sumaProductos; // Actualizar el texto del contador
});