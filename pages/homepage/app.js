document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona todos os títulos de serviço na página
    const titulosServico = document.querySelectorAll('.titulo-servico');

    // 2. Itera sobre cada título encontrado
    titulosServico.forEach(titulo => {
        // 3. Adiciona um "ouvinte de evento" (event listener) para o clique
        titulo.addEventListener('click', function() {
            
            // 4. Encontra a descrição detalhada, que é o elemento irmão do título
            // O elemento pai do 'titulo-servico' é o 'li'
            // O elemento filho do 'li' que queremos é o 'descricao-detalhada'
            const itemServico = this.closest('.item-servico');
            const descricao = itemServico.querySelector('.descricao-detalhada');

            // 5. Alterna a propriedade 'display'
            if (descricao.style.display === 'block') {
                // Se estiver visível, esconde
                descricao.style.display = 'none';
            } else {
                // Se estiver escondido, mostra
                descricao.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById("hamburguer");
    const menu = document.getElementById("menu");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("ativo"); // abre/fecha
    });
});
