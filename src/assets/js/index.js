// Función para desplazarse suavemente al principio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función que se ejecuta cuando se desplaza la página
window.onscroll = function() {
    scrollFunction();
};

// Función para mostrar u ocultar el botón de regreso al inicio
function scrollFunction() {
    var goTopBtn = document.querySelector('.go-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.classList.add('show');
    } else {
        goTopBtn.classList.remove('show');
    }
}

// Asignar la función scrollToTop al hacer clic en el botón de regreso al inicio
document.querySelector('.go-top-btn').addEventListener('click', scrollToTop);

