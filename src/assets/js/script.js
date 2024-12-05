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
