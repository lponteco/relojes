document.getElementById("header").innerHTML = `
<header id="header">
  <div id="logo">
    <h1>Relojes Elegantes</h1>
  </div>
  <nav id="nav">
    <ul>
      <li><a href="/index.html">Inicio</a></li>
      <li><a href="#">Catálogo</a></li>
       <li><a href="#carrito">Carrito</a></li>
       <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
  <div id="menu-toggle" class="menu-icon">
    <span>&#9776;</span> <!-- Icono de menú hamburguesa -->
  </div>
  <!-- Icono de modo oscuro/luz -->
  <div id="dark-mode-toggle" class="dark-mode-icon" onclick="toggleDarkMode()">
    <span id="dark-mode-icon">&#9789;</span> <!-- Icono de sol (para modo claro por defecto) -->
  </div>
</header>

`;

document.getElementById("footer").innerHTML = `
<footer id="footer">
 <a name="contact"></a>
    <div class="footer-content">
      <p>&copy; 2024 Relojes Elegantes. Todos los derechos reservados.</p>
      <nav>
        <ul>
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </footer>
`;