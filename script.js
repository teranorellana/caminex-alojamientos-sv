// 1. Interacción con el DOM: Menú Hamburguesa
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    // Alternar clase para mostrar/ocultar menú en móviles
    navLinks.classList.toggle('active');
});

// 2. Validación de Formulario y Manipulación del DOM
const form = document.getElementById('reserva-form');
const mensajeDiv = document.getElementById('form-mensaje');

form.addEventListener('submit', function(event) {
    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Limpiar mensajes previos
    mensajeDiv.innerHTML = '';
    mensajeDiv.className = '';

    // Validaciones
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarMensaje('Por favor, completa todos los campos requeridos.', 'mensaje-error');
        return;
    }

    // Validación simple de email usando expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarMensaje('Por favor, ingresa un correo electrónico válido.', 'mensaje-error');
        return;
    }

    // Interacción con el DOM: Mostrar éxito y limpiar formulario
    mostrarMensaje(`¡Gracias ${nombre}! Tu solicitud ha sido enviada con éxito.`, 'mensaje-exito');
    form.reset();
});

// Función auxiliar para manipular el DOM e inyectar mensajes
function mostrarMensaje(texto, clase) {
    mensajeDiv.textContent = texto;
    mensajeDiv.classList.add(clase);
}
