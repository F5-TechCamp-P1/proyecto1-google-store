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
function cambiarImagen(imagen) {
    // Obtén la fuente de la imagen clickeada
    const nuevaFuente = imagen.src;
    
    // Cambia la fuente de la imagen principal
    document.getElementById('imagen-principal').src = nuevaFuente;
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