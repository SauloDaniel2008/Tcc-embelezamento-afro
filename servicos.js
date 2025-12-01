// Insere dinamicamente os cartões e adiciona comportamento ao botão 'Saiba mais'
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.saiba-btn');
    if (!buttons.length) return;

    let openCard = null;

    function closeCard(card) {
        if (!card) return;
        const detalhe = card.querySelector('.container-imagem .detalhe');
        if (detalhe) detalhe.classList.remove('show');
        card.style.boxShadow = '';
        if (openCard === card) openCard = null;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.cartao-servico');
            if (!card) return;
            const detalhe = card.querySelector('.container-imagem .detalhe');
            const descricao = 'Descrição do serviço: Nesta seção trazemos informações sobre o procedimento, tempo médio, materiais utilizados e recomendações pós-serviço. Entre em contato para mais detalhes e agendamentos.';

            // fechar outro cartão aberto
            if (openCard && openCard !== card) {
                closeCard(openCard);
            }

            if (detalhe.classList.contains('show')) {
                // já está aberto -> fechar
                detalhe.classList.remove('show');
                card.style.boxShadow = '';
                openCard = null;
            } else {
                detalhe.innerHTML = `<p>${descricao}</p>`;
                // ativar com requestAnimationFrame para garantir a transição
                requestAnimationFrame(() => detalhe.classList.add('show'));
                card.style.boxShadow = '0 8px 22px rgba(0,0,0,0.16)';
                openCard = card;
            }
        });

        const card = btn.closest('.cartao-servico');
        if (card) {
            card.addEventListener('mouseleave', () => {
                const detalhe = card.querySelector('.container-imagem .detalhe');
                if (detalhe && detalhe.classList.contains('show')) {
                    detalhe.classList.remove('show');
                    card.style.boxShadow = '';
                    if (openCard === card) openCard = null;
                }
            });
        }
    });
});
