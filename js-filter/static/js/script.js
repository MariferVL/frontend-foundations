// Contenedor principal para la lógica de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad botón Donar
    const btnDonar = document.getElementById('btn-donar');

    if (btnDonar) {
        btnDonar.addEventListener('click', () => {
            // Mostrar la alerta 
            alert('¡Gracias por donar a AdoptaTuÁrbol!');
        });
    }

    // Funcionalidad botones Adoptar
    const adoptButtons = document.querySelectorAll('.btn-adoptar-card');

    adoptButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentButton = event.target;

            // Si ya está adoptado, no hace nada
            if (currentButton.classList.contains('adopted')) {
                return;
            }

            // Cambiar el texto y la clase
            currentButton.textContent = 'Adoptado';
            currentButton.classList.remove('btn-adoptar-card');
            currentButton.classList.add('adopted');

        });
    });

    const selectorFiltro = document.getElementById('filtro-arboles');
    const tituloMostrando = document.getElementById('mostrar-titulo');
    const mensajeVacio = document.getElementById('mensaje-vacio');
    const tarjetas = document.querySelectorAll('.card');

    // Función principal para filtrar la galería
    function filtrarGaleria() {
        const filtro = selectorFiltro.value;
        const nombreFiltro = selectorFiltro.options[selectorFiltro.selectedIndex].text;

        tituloMostrando.textContent = nombreFiltro;

        let tarjetasVisibles = 0;

        tarjetas.forEach(card => {
            const tipoArbol = card.getAttribute('data-tipo');

            if (filtro === 'todos' || filtro === tipoArbol) {
                card.classList.remove('hidden');
                tarjetasVisibles++;
            } else {
                card.classList.add('hidden');
            }
        });


        // Mostrar u ocultar mensaje de "Sin resultados"
        if (tarjetasVisibles === 0) {
            mensajeVacio.classList.remove('hidden'); 
        } else {
            mensajeVacio.classList.add('hidden');    
        }

    }

    // Inicializar filtro al cargar la página
    filtrarGaleria();

    // Escuchar cambios en selector
    selectorFiltro.addEventListener('change', filtrarGaleria);
});