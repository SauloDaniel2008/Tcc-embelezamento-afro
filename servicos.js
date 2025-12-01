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
            
            const parametro = btn.dataset.id; // ← pega o valor do HTML

            const card = btn.closest('.cartao-servico');
            if (!card) return;
            const detalhe = card.querySelector('.container-imagem .detalhe');
            let descricao = '';
            
            if (parametro === "01") {
                descricao = "O cabelo é alinhado com pomada, puxado para trás bem esticado e preso, deixando o penteado fechado, firme e polido."
            }

            if (parametro === "02"){
                descricao = "O combo noivinha alinha o cabelo com pomada, puxa tudo em mechas bem esticadas e prende com firmeza, criando um visual polido e elegante."
            }

            if (parametro === "03"){
                descricao = "No aplique baixo, o cabelo é preso em um rabo baixo e o aplique é fixado por baixo dele, sendo unido e modelado junto ao cabelo natural."
            }

            if (parametro === "04"){
                descricao = "A trança única com elementos é feita alinhando o cabelo, trançando ao centro e adicionando os acessórios enquanto trança."
            }

            if (parametro === "05"){
                descricao = "O cabelo é alinhado e preso em um rabo alto ou baixo bem firme. Depois, as fibras Marley são fixadas no elástico e enroladas ou trançadas junto ao rabo natural, criando um volume grande e texturizado."
            }

            if (parametro === "06"){
                descricao = "O cabelo é dividido, as mechas do topo ou laterais são puxadas para trás, alinhadas e presas com grampo ou elástico, enquanto o restante fica solto e modelado."
            }

            if (parametro === "07"){
                descricao = "No moicano, as laterais são alinhadas e presas, e o centro fica solto e modelado para cima, formando a faixa elevada."
            }

            if (parametro === "08"){
                descricao = "O cabelo é alinhado, as laterais são presas para ficarem baixas e, no centro, o cabelo é dividido em partes presas com elásticos, formando várias “bolhas” enfileiradas que criam o efeito de moicano."
            }

            if (parametro === "09"){
                descricao = "As tranças com aplique são feitas alinhando o cabelo natural, adicionando o aplique desde o início de cada trança e trançando tudo junto para dar volume, comprimento e acabamento uniforme."
            }

            if (parametro === "10"){
                descricao = "O cabelo é alinhado e preso em um coque firme. Depois, os elementos (fios brilhantes, presilhas, strass, flores ou fitas) são colocados ao redor ou dentro do coque para decorar e dar destaque."
            }

            if (parametro === "11"){
                descricao = "O cabelo é alinhado, puxado para o topo da cabeça e preso bem firme. Depois, o comprimento é enrolado e fixado formando um coque alto, polido e estruturado."
            }

            if (parametro === "12"){
                descricao = "O cabelo é alinhado e preso na nuca. Em seguida, as mechas são moldadas e fixadas com grampos para formar um coque baixo com desenho modelado e acabamento polido."
            }

            if (parametro === "13"){
                descricao = "O estilo com tic tac é feito abrindo as presilhas, encaixando-as na raiz do cabelo em mechas separadas e fechando para fixar. Depois, o cabelo é solto por cima para esconder as presilhas e dar volume ou comprimento."
            }

            if (parametro === "14"){
                descricao = "A tiara reta meia cabeça é feita dividindo o topo, alinhando o cabelo e trançando ou esticando uma faixa reta de mechas, que vai de um lado ao outro da cabeça. O restante do cabelo fica solto ou modelado."
            }

            if (parametro === "15"){
                descricao = "A faixa do topo é separada e feita com vários coquinhos soltos que formam a tiara, enquanto o resto do cabelo fica livre."
            }

            if (parametro === "16"){
                descricao = "Separa-se uma faixa no topo, inicia-se a trança invertida e, no centro, as argolas são colocadas entre as mechas conforme a trança é feita. O resto do cabelo fica solto ou finalizado."
            }

            if (parametro === "17"){
                descricao = "Fazem-se cinco flat twists alinhados na parte de cima/lat. da cabeça, todos direcionados para a nuca. Ao chegarem ao final, as pontas são unidas e presas formando um coque baixo firme e polido."
            }

            if (parametro === "18"){
                descricao = "O cabelo é alinhado e preso em um rabo baixo bem firme. Depois, todo o comprimento é trançado de forma longa e polida, criando a trança única baixa no estilo Beyoncé."
            }

            if (parametro === "19"){
                descricao = "O cabelo é dividido ao meio e cada lado é trançado desde a raiz até as pontas, bem firme e rente ao couro cabeludo, formando duas tranças boxeadoras."
            }

            if (parametro === "20"){
                descricao = "Divide-se ao meio, trança-se rente à raiz e o orgânico é adicionado com costura dupla para dar volume nas duas tranças."
            }


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
