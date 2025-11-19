emailjs.init("dlDLx1bTfAPNMiIGh"); // Tu Public Key

document.getElementById('encuestaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const encuesta = {
    musica: document.getElementById('musica').value,
    deporte: document.getElementById('deporte').value,
    estudios: document.getElementById('estudios').value,
    laboral: document.getElementById('laboral').value,
    otros: document.getElementById('otros').value
  };

  emailjs.send("service_19ji7rt", "template_x87cz8c", encuesta)
    .then(() => {
      document.getElementById('status-message').innerText = "✅ Encuesta enviada con éxito.";
      document.getElementById('encuestaForm').reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById('status-message').innerText = "❌ Hubo un error al enviar la encuesta.";
    });
});
