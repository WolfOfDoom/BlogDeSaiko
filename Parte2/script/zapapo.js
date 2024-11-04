// Selecciona la imagen central
const cuerpoCentral = document.getElementById('cuerpoCentral');
const piernaIzquierda = document.getElementById('piernaS'); // Asegúrate de que la clase coincida
const cuerpoDurazno = document.getElementById('duraznO');

// Define las rutas para las imágenes original y la de reemplazo
const imagenOriginal = '../img/2.png';
const imagenReemplazo = '../img/5.png';

// Crea objetos de audio para las canciones
const cancionMostrar = new Audio('../../djmorfiusyelpelondelmaicrofonyunou/Poniko.mp3'); // Ruta de la primera canción
const cancionOcultar = new Audio('../../djmorfiusyelpelondelmaicrofonyunou/Uboa.mp3'); // Ruta de la segunda canción

// Reproduce la canción inicial al cargar la página
cancionMostrar.play();

// Habilita el evento de mouse después de que las animaciones iniciales terminen
setTimeout(() => {
    // Cambia la imagen cuando el cursor está sobre el brazo izquierdo
    cuerpoCentral.addEventListener('mouseover', () => {
        cuerpoCentral.src = imagenReemplazo;
        piernaIzquierda.classList.add('hidden'); // Oculta la pierna izquierda sin animación
        cuerpoDurazno.classList.add('hidden');
        cancionMostrar.pause(); // Pausa la canción actual
        cancionOcultar.currentTime = 0; // Reinicia la segunda canción
        cancionOcultar.play(); // Reproduce la segunda canción
    });

    // Restaura la imagen original y muestra la pierna izquierda cuando el cursor sale
    cuerpoCentral.addEventListener('mouseout', () => {
        cuerpoCentral.src = imagenOriginal;
        piernaIzquierda.classList.remove('hidden'); // Muestra la pierna izquierda
        cuerpoDurazno.classList.remove('hidden');
        cancionMostrar.play(); // Reproduce la canción cuando se muestra la pierna
        cancionOcultar.pause(); // Pausa la segunda canción
        cancionMostrar.currentTime = 0; // Reinicia la primera canción
        cancionMostrar.play(); // Reproduce la primera canción
    });
}, 20000); // Espera 20000 ms (20 segundos) para habilitar los eventos
