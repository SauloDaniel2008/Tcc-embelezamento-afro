// =========================================
// JAVASCRIPT
// =========================================

// Função para abrir/fechar menu no celular
function toggleMenu() {
    const navList = document.getElementById('lista-navegacao');
    navList.classList.toggle('ativo');
}

// Fechar o menu ao clicar em um link (para UX melhor no celular)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('lista-navegacao').classList.remove('ativo');
    });
});
