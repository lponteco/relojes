// Función para validar el formulario
function validateForm(event) {
    let isValid = true;
  
    // Validación del nombre
    const name = document.getElementById("name");
    const errorName = document.getElementById("errorName");
    if (name.value.trim() === "") {
      errorName.textContent = "El nombre es obligatorio.";
      isValid = false;
    } else {
      errorName.textContent = "";
    }
  
    // Validación del email
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      errorEmail.textContent = "El formato del correo electrónico no es válido.";
      isValid = false;
    } else {
      errorEmail.textContent = "";
    }
  
    // Validación de la contraseña
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    if (password.value.trim() === "") {
      errorPassword.textContent = "La contraseña es obligatoria.";
      isValid = false;
    } else {
      errorPassword.textContent = "";
    }
  
    // Validación de la confirmación de la contraseña
    const confirmPassword = document.getElementById("confirmPassword");
    const errorConfirmPassword = document.getElementById("errorConfirmPassword");
    if (confirmPassword.value.trim() === "") {
      errorConfirmPassword.textContent = "La confirmación de la contraseña es obligatoria.";
      isValid = false;
    } else if (confirmPassword.value !== password.value) {
      errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
      isValid = false;
    } else {
      errorConfirmPassword.textContent = "";
    }
  
    // Si el formulario es válido, se muestra un mensaje de éxito y se limpia el formulario
    if (isValid) {
      alert("¡Te has registrado con éxito!");
      // Guardar las credenciales del usuario
      localStorage.setItem('userEmail', email.value);
      localStorage.setItem('userPassword', password.value);
      
      // Redirigir al usuario a la página de inicio
      window.location.href = "index.html"; // Puedes cambiarlo a la URL de tu página de inicio
    } else {
      event.preventDefault(); // Evitar el envío si no es válido
    }
  
    return isValid;
  }
  
  // Mostrar mensajes de error al escribir
  document.getElementById("name").addEventListener("input", function() {
    const name = document.getElementById("name");
    const errorName = document.getElementById("errorName");
    if (name.value.trim() === "") {
      errorName.textContent = "El nombre es obligatorio.";
    } else {
      errorName.textContent = "";
    }
  });
  
  document.getElementById("email").addEventListener("input", function() {
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(email.value)) {
      errorEmail.textContent = "El formato del correo electrónico no es válido.";
    } else {
      errorEmail.textContent = "";
    }
  });
  
  document.getElementById("password").addEventListener("input", function() {
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    if (password.value.trim() === "") {
      errorPassword.textContent = "La contraseña es obligatoria.";
    } else {
      errorPassword.textContent = "";
    }
  });
  
  document.getElementById("confirmPassword").addEventListener("input", function() {
    const confirmPassword = document.getElementById("confirmPassword");
    const password = document.getElementById("password");
    const errorConfirmPassword = document.getElementById("errorConfirmPassword");
    if (confirmPassword.value.trim() === "") {
      errorConfirmPassword.textContent = "La confirmación de la contraseña es obligatoria.";
    } else if (confirmPassword.value !== password.value) {
      errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
    } else {
      errorConfirmPassword.textContent = "";
    }
  });
  
  // Asignar la función de validación al formulario al enviarlo
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    validateForm(event);
  });
  
  // Función de inicio de sesión (puedes usarla en otro archivo o página)
  function login() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
  
    if (emailInput.value === storedEmail && passwordInput.value === storedPassword) {
      localStorage.setItem('loggedIn', true);
      alert("Inicio de sesión exitoso");
      window.location.href = 'index.html'; // Redirige a la página que deseas después de iniciar sesión
    } else {
      alert("Credenciales incorrectas");
    }
  }
  
  // Asignar la función de inicio de sesión al formulario de inicio de sesión
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    login();
  });
  
  
  