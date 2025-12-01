const formulario = document.getElementById('form-agendar');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const paragrafo = document.getElementById ('efetuado');
    paragrafo.innerText = "Agendamento efetuado com sucesso!";
    paragrafo.style.color = "green";
    paragrafo.style.fontWeight = "bold";
    paragrafo.style.textAlign = "center";
});

