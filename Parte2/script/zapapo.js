// Selecciona la imagen central
const cuerpoCentral = document.getElementById('cuerpoCentral');
const piernaIzquierda = document.getElementById('piernaS'); // Asegúrate de que la clase coincida
const cuerpoDurazno = document.getElementById('duraznO');

// Define las rutas para las imágenes original y la de reemplazo
const imagenOriginal = '../img/2.png';
const imagenReemplazo = '../img/5.png';

// Crea objetos de audio para las canciones
const cancionMostrar = new Audio('../djmorfiusyelpelondelmaicrofonyunou/Poniko.mp3"'); // Ruta de la primera canción
const cancionOcultar = new Audio('../djmorfiusyelpelondelmaicrofonyunou/Uboa.mp3"'); // Ruta de la segunda canción


// Habilita el evento de mouse después de que las animaciones iniciales terminen
setTimeout(() => {
    // Cambia la imagen cuando el cursor está sobre el brazo izquierdo
    cuerpoCentral.addEventListener('mouseover', () => {
        cuerpoCentral.src = imagenReemplazo;
        piernaIzquierda.classList.add('hidden'); // Oculta la pierna izquierda sin animación
        cuerpoDurazno.classList.add('hidden');
        cancionOcultar.play(); // Reproduce la canción cuando se oculta la pierna
    });

    // Restaura la imagen original y muestra la pierna izquierda cuando el cursor sale
    cuerpoCentral.addEventListener('mouseout', () => {
        cuerpoCentral.src = imagenOriginal;
        piernaIzquierda.classList.remove('hidden'); // Muestra la pierna izquierda
        cuerpoDurazno.classList.remove('hidden');
        cancionMostrar.play(); // Reproduce la canción cuando se muestra la pierna
    });
}, 20000); // Espera 20000 ms (20 segundos) para habilitar los eventos
