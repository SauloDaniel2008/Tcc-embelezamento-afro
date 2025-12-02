const formulario = document.getElementById('form-agendar');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Como a validação HTML (required) já bloqueia a submissão
    
    // Usando checkValidity() para ter certeza (boa prática):
    if (formulario.checkValidity()) {
        // 1. Ação Principal: Exibe a mensagem de sucesso em um pop-up de alerta
        alert("Agendamento efetuado com sucesso!");
        
        // 2. Ação Secundária (Opcional, mas recomendado):
        // Limpar os campos do formulário após o sucesso:
        formulario.reset(); 
        
        // Se você precisar limpar a div de mensagem de sucesso anterior,
        // (embora agora ela não seja mais usada, é bom limpá-la por segurança)
        const paragrafo = document.getElementById('efetuado');
        paragrafo.innerText = "";
        
        // Se este formulário DEVERIA ser enviado, você faria o envio (fetch) aqui.
        
    } else {
        // Se houver algum problema (o que só acontece se o novalidate 
        // foi mantido e o JS está fazendo a validação manual),
        // o reportValidity() faz o navegador exibir os erros:
        formulario.reportValidity();
    }
});