document.addEventListener("DOMContentLoaded", function() {
   
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error cargando el archivo:', error));
    }
   
    loadHTML('src/partials/_header.html', 'header-placeholder');
    loadHTML('src/partials/_footer.html', 'footer-placeholder');
});