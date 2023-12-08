// Función para desplazarse suavemente al principio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función que se ejecuta cuando se desplaza la página
window.onscroll = function () {
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

// Función para alternar la visibilidad del menú en pantallas pequeñas
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var mobileMenu = document.querySelector('.nav-list');
    menuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", function () {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("show");
    });

    // Cerrar el menú al hacer clic en un enlace del menú móvil
    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            mobileMenu.classList.remove("show");
        });
    });
});
