document.addEventListener("DOMContentLoaded", function() {
   
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                console.log('Header cargado correctamente');
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


  document.addEventListener("DOMContentLoaded", function() {
    const carritoButton = document.querySelector('.carrito');
    const contadorUnidades = document.getElementById('cart-count');

    console.log(contadorUnidades); // Verifica si el contador se encuentra

    let sumaProductos = 0;

    carritoButton.addEventListener('click', function() {
        sumaProductos++; // Aumentar la cantidad de productos
        console.log(sumaProductos); // Verifica el contador de productos
        if (contadorUnidades) {
            contadorUnidades.textContent = sumaProductos; // Actualizar el texto del contador
        } else {
            console.error("No se encontró el contador");
        }
    });
});

// Obtén el elemento de hamburguesa y el menú de navegación
const menuToggle = document.querySelector('.menu-toggle');
const nav1 = document.querySelector('.nav1');

// Agrega un evento de clic para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    nav1.classList.toggle('active');
});
