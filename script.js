document.addEventListener('DOMContentLoaded', function() {
    // Navegación con el logotipo
    document.getElementById('logo').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Manejo de enlaces de especialidades
    document.getElementById('especialidades-link').addEventListener('click', function(event) {
        event.preventDefault();
        cargarEspecialidadAleatoria();
    });
});

function cargarEspecialidadAleatoria() {
    const especialidades = [
        'atun.html',
        'merluza.html',
        'langosta.html',
        'camaron.html'
      
     
    ];
    const especialidadAleatoria = especialidades[Math.floor(Math.random() * especialidades.length)];
    window.location.href = especialidadAleatoria;
}
