document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-comentarios');
    const comentarioInput = document.getElementById('comentario');
    const listaComentarios = document.getElementById('lista-comentarios');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const comentarioTexto = comentarioInput.value.trim();
        if (comentarioTexto === '') return;

        const comentarioElemento = document.createElement('div');
        comentarioElemento.className = 'comentario';
        comentarioElemento.innerText = comentarioTexto;

        listaComentarios.appendChild(comentarioElemento);
        comentarioInput.value = '';
    });

    // Tooltip functionality
    const linksWithTitle = document.querySelectorAll('a[title]');
    linksWithTitle.forEach(link => {
        link.addEventListener('mouseover', () => {
            const tooltip = link.querySelector('::before');
            tooltip.style.animation = 'tooltipFade 0.3s ease-in-out';
        });
    });
});
