const productos = [
    { "id": 1, "nombre": "Reloj Elegante", "precio": 200, "imagen": "reloj1.jpg" },
    { "id": 2, "nombre": "Reloj Deportivo", "precio": 100, "imagen": "reloj2.jpg" },
    { "id": 3, "nombre": "Reloj Clásico", "precio": 50, "imagen": "reloj3.jpg" }
  ];
  
  // Función para cargar los productos en el catálogo
  function cargarProductos() {
    const contenedorProductos = document.getElementById('productos-container');
    contenedorProductos.innerHTML = "";
  
    productos.forEach(producto => {
      const productoHTML = document.createElement('div');
      productoHTML.classList.add('producto');
      productoHTML.innerHTML = `
        <img src="images/${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="agregar-carrito" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      contenedorProductos.appendChild(productoHTML);
    });
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
  
    if (producto) {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
      const productoExistente = carrito.find(item => item.id === id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }
  
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
    }
  }
  
  // Función para mostrar el carrito y calcular el precio total
  function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoBody = document.getElementById('carrito-body');
    carritoBody.innerHTML = "";
  
    let precioTotal = 0;
  
    if (carrito.length === 0) {
      carritoBody.innerHTML = "<tr><td colspan='5'>El carrito está vacío.</td></tr>";
    } else {
      carrito.forEach(item => {
        const carritoItem = document.createElement('tr');
        carritoItem.classList.add('carrito-item');
        carritoItem.innerHTML = `
          <td><img src="images/${item.imagen}" alt="${item.nombre}" style="width: 50px;"> ${item.nombre}</td>
          <td>$${item.precio}</td>
          <td><span id="cantidad-${item.id}">${item.cantidad}</span></td>
          <td>$${item.precio * item.cantidad}</td>
          <td>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            <button onclick="editarCantidad(${item.id}, 'sumar')">+</button>
            <button onclick="editarCantidad(${item.id}, 'restar')">-</button>
          </td>
        `;
        carritoBody.appendChild(carritoItem);
  
        precioTotal += item.precio * item.cantidad;
      });
  
      document.getElementById('total-price').textContent = precioTotal;
    }
  
    // Mostrar u ocultar el encabezado de la tabla según el carrito
    const thead = document.querySelector('thead');
    if (carrito.length === 0) {
      thead.style.display = 'none';  // Ocultar el encabezado si el carrito está vacío
    } else {
      thead.style.display = '';  // Mostrar el encabezado si hay productos en el carrito
    }
  }
  
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== id); 
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
  }
  
  // Función para editar la cantidad de un producto en el carrito
  function editarCantidad(id, operacion) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito.find(item => item.id === id);
  
    if (producto) {
      if (operacion === 'sumar') {
        producto.cantidad += 1;
      } else if (operacion === 'restar' && producto.cantidad > 1) {
        producto.cantidad -= 1;
      }
  
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
    }
  }
  
  // Función para finalizar la compra
  function pagar() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    if (carrito.length > 0) {
      carrito = [];  // Vaciar carrito
      localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar en localStorage
  
      alert("¡Gracias por tu compra! El carrito se ha vaciado.");
      mostrarCarrito();
    } else {
      alert("Tu carrito está vacío.");
    }
  }
  
  // Función para cerrar sesión
  function cerrarSesion() {
    localStorage.removeItem('usuario'); // Eliminar usuario de la sesión
    alert("Has cerrado sesión.");
    
    // Redirigir al index (página de inicio)
    window.location.href = 'index.html';  // Cambia 'index.html' al nombre de tu archivo de inicio si es diferente
  }
  
  // Llamar a esta función cuando cargue la página
  document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();  // Cargar productos en el catálogo
    mostrarCarrito();   // Mostrar el carrito al cargar la página
  });
  