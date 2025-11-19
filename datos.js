emailjs.init("dlDLx1bTfAPNMiIGh"); // Tu Public Key

document.getElementById('datosForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const datos = {
    ci: document.getElementById('ci').value,
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    direccion: document.getElementById('direccion').value,
    sexo: document.getElementById('sexo').value,
    ciudad: document.getElementById('ciudad').value,
    telefono: document.getElementById('telefono').value,
    fecha: document.getElementById('fecha').value,
    correo: document.getElementById('correo').value
  };

  emailjs.send("service_19ji7rt", "template_x87cz8c", datos)
    .then(() => {
      document.getElementById('status-message').innerText = "✅ Datos enviados con éxito.";
      document.getElementById('datosForm').reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById('status-message').innerText = "❌ Hubo un error al enviar los datos.";
    });
});
