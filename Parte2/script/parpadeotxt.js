let texto = document.getElementById('parpadeo');

// Función para generar un tiempo aleatorio pa que se muera el texto entre un rango dado (mínimo y máximo)
function tiempoAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

function encender() {
    texto.classList.remove('off');
    // Genera un tiempo aleatorio entre 1 y 3 segundos para prender
    let tiempoEncendido = tiempoAleatorio(100, 1000);
    setTimeout(apagar, tiempoEncendido);
}

function apagar() {
    texto.classList.add('off');
    // Genera un tiempo aleatorio entre 0.5 y 2 segundos para morirse
    let tiempoApagado = tiempoAleatorio(50, 2000);
    setTimeout(encender, tiempoApagado);
}

// Inicia el ciclo
encender();

