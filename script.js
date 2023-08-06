// Función para mostrar los datos del formulario en un alert
function mostrarDatosFormulario() {
    const Nombres = document.getElementById('Nombres').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const Telefono = document.getElementById('Telefono').value;
    const email = document.getElementById('email').value;
    const FechaNacimiento = document.getElementById('Fecha-Nacimiento').value;
    const mensaje = document.getElementById('mensaje').value;
  
    const datosCompletos = `
      Nombres: ${Nombres}
      Apellidos: ${Apellidos}
      Teléfono: ${Telefono}
      Correo Electrónico: ${email}
      Fecha de Nacimiento: ${FechaNacimiento}
      Mensaje: ${mensaje}
    `;
  
    alert(datosCompletos);
  }
  
  // Event listener para el botón enviar
  document.getElementById('enviar-btn').addEventListener('click', mostrarDatosFormulario);
