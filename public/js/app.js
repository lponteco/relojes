document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Errores de validación
  const errores = {
    email: "El correo debe ser válido (incluye '@' y '.').",
    password: "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un signo.",
  };

  // Función para validar los campos
  const validarCampo = (campo, errorId, condicion, mensaje) => {
    const error = document.getElementById(errorId);
    if (condicion) {
      error.innerText = mensaje;
      return false;
    } else {
      error.innerText = "";
      return true;
    }
  };

  // Función para validar todo el formulario
  const validarFormulario = () => {
    const emailValido = validarCampo(
      email,
      "errorEmail",
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
      errores.email
    );

    const passwordValido = validarCampo(
      password,
      "errorPassword",
      password.value.trim() === "" ||
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password.value),
      errores.password
    );

    return emailValido && passwordValido; // Retornamos si todos los campos son válidos
  };

  // Validamos a medida que se ingresa texto
  form.addEventListener("input", validarFormulario);

  // Evento de submit del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene la recarga de la página

    const formularioValido = validarFormulario();

    // Si el formulario no es válido, evitamos el submit
    if (!formularioValido) {
      console.log("Formulario no válido, no se puede enviar.");
      return;
    }

    console.log('Formulario enviado correctamente.');

    const emailValido = email.value === 'kaisa@gmail.com';
    const passwordValido = password.value === 'Aqua12345$';

    // Si las credenciales son correctas, se guarda el estado de inicio de sesión y redirige
    if (emailValido && passwordValido) {
      localStorage.setItem('loggedIn', true);
      console.log('Inicio de sesión exitoso');
      window.location.href = 'pagina.html';  // Redirige a catalogo.html
    } else {
      alert('Credenciales incorrectas');
    }
  });
});



