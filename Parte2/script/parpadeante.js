const pizza = document.getElementById('texto');
const ingredientes = pizza.textContent.split('');
pizza.innerHTML = ''; // Limpiar el contenido inicial

// Crear un nuevo span para cada letra
ingredientes.forEach(ingrediente => {
    const taco = document.createElement('span');
    taco.textContent = ingrediente;
    pizza.appendChild(taco);
});

// Función para hacer parpadear las letras
function parpadear() {
    const tacos = pizza.querySelectorAll('span');
    tacos.forEach(taco => {
        // Generar un número aleatorio para determinar si la letra parpadea
        const debeParpadear = Math.random() > 0.5; // 50% de probabilidad
        if (debeParpadear) {
            taco.classList.toggle('hidden');
        }
    });
}

// Ejecutar la función cada 300 ms
setInterval(parpadear, 300);
