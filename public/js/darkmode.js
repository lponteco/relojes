// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    // Obtén el cuerpo del documento y el icono
    const body = document.body;
    const icon = document.getElementById('dark-mode-icon');
  
    // Alterna la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
  
    // Cambia el icono de acuerdo al modo
    if (body.classList.contains('dark-mode')) {
      icon.innerHTML = '&#9788;';  // Luna (modo oscuro)
    } else {
      icon.innerHTML = '&#9789;';  // Sol (modo claro)
    }
  }
  