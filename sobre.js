// Objeto que armazena os textos para cada botão
const textosSobre = {
    'pessoal': `Meu nome é Amanda Souza, tenho 24 anos e minha jornada no mundo da beleza começou muito jovem, aos 14 anos, em uma ONG, fazendo um curso de Penteados Afros junto com minha mãe. A relação profissional e pessoal com a minha mãe foi marcante, trabalhando juntas no salão da garagem de casa. Um momento de grande impacto que ocorreu em minha vida foi a piora da saúde de sua mãe devido a um Câncer de Mama, o que a levou a deixar o salão para buscar um emprego CLT e auxiliar durante o tratamento. Infelizmente, uma semana após eu deixar o emprego CLT, minha mãe faleceu em 06/08/2019, com apenas 37 anos. Este evento ocorreu no mesmo mês em que eu vim a completar 18 anos. Atualmente, a minha vida pessoal se entrelaça com a profissional, pois trabalho em conjunto com minha irmã mais velha, Ana Paula, e meu marido, Luciano, que agora faz parte da estrutura de negócios.`,

    'profissional': `Agora falando da carreira na área da beleza começou oficialmente aos 14 anos, após o curso de Penteados Afros, treinando e atendendo no salão da garagem de casa ao lado de minha mãe. No início, o negócio tinha pouquíssimos clientes e quase nenhuma divulgação. Então eu resolvi me tornar a minha própria vitrine, pois as pessoas observavam meu cabelo e começavam a pedir meus serviços. Após um breve período de 6 meses trabalhando como CLT, voltei à estaca zero. A pandemia (a partir de 2020) foi um ponto de virada: criei meu perfil profissional no Instagram, onde comecei a postar vídeos sobre meu cabelo e arranjos, usando a internet para alcançar um público e me tornar minha própria ferramenta de divulgação. Com a volta da vida normal, reabri o salão da garagem, onde comecei a realizar atendimentos e ministrar cursos. O rápido crescimento fez com que aquele espaço se tornasse pequeno. Em Novembro de 2021, com o apoio do meu pai, inaugurei meu salão atual, maior e de frente para a rua, mas na mesma localização. Me destaquei na internet pelos resultados com tranças, o que impulsionou a demanda por meu curso de forma presencial. O crescimento do negócio a levou a focar na expansão da área de ensino. Meu marido, Luciano, entrou para o negócio em 2025 para auxiliar na escalada de cursos no digital, o que resultou no lançamento de cursos on-line. Atualmente, o maior faturamento provém dos cursos presenciais e on-line, mas ainda mantenho os atendimentos como uma "porta de entrada" e fonte de autoridade para o ensino.`,

    'premio': `Em 2024, Amanda teve a oportunidade de participar de um desafio na Record. Prêmio Conquistado: R$ 10.000,00 (dez mil reais). Uso do Prêmio: Com o valor do prêmio, Amanda abriu sua sala de cursos, separando o espaço de ensino do salão de atendimento. Se for de seu interesse você pode ver o video em que eu ganhei esse prêmio:</br> </br> <iframe width="560" height="315" style="margin: auto;" src="https://www.youtube.com/embed/x1ZxxjxRbKs?si=pGHFBYUDOBqy46iF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
};

// Função principal que será chamada no clique do botão
function exibirTexto(tipo) {
    // 1. Encontra o elemento de parágrafo onde o texto será exibido
    const paragrafo = document.getElementById('paragrafoSobre');

    // 2. Encontra o texto correspondente no objeto 'textosSobre' usando o 'tipo' (pessoal, profissional, premio)
    const textoParaExibir = textosSobre[tipo];

    // 3. Verifica se o texto existe e o insere no HTML
    if (textoParaExibir) {
        // Usamos innerHTML com <br> para adicionar quebras de linha e formatar melhor o texto.
        // No seu caso, como é um texto longo, vamos apenas definir o texto:
        paragrafo.innerHTML = textoParaExibir;

        // Opcional: Adicionar um pequeno efeito de transição ou destacar o botão ativo
        destacarBotaoAtivo(tipo);

    } else {
        paragrafo.innerHTML = "Conteúdo não encontrado.";
    }
}


// Função para destacar o botão que foi clicado (melhora a experiência do usuário)
function destacarBotaoAtivo(tipoAtivo) {
    // 1. Remove a classe 'active' de todos os botões
    const botoes = document.querySelectorAll('.botao-sobre-texto');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // 2. Adiciona a classe 'active' ao botão clicado
    // Como os botões não têm um 'data-attribute' único no HTML atual, vamos procurar pelo conteúdo do texto do botão.
    // É mais eficiente usar um ID ou data-attribute, mas faremos a busca pelo índice aqui para simplificar a correção do seu HTML.

    // MELHOR FORMA:
    // A forma mais robusta e simples é que seu HTML passe o ID (pessoal, profissional, premio) e procuramos o botão que tem essa palavra.
    // A forma mais simples é que seu CSS aplique o destaque no foco/hover e confie no HTML/JS para a funcionalidade.

    // Vamos usar a forma mais simples:
    const botoesComOnclick = document.querySelectorAll('#botoes-sobre button');

    // Mapeia o 'tipo' (string) para o índice do botão (0, 1, 2)
    const indice = ['pessoal', 'profissional', 'premio'].indexOf(tipoAtivo);

    if (indice >= 0 && botoesComOnclick[indice]) {
        botoesComOnclick[indice].classList.add('active');
    }
}


// Opcional: Exibir a História Pessoal por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    exibirTexto('pessoal');
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
    // Se você tiver uma animação para o botão, ajuste-a aqui.
}