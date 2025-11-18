document.addEventListener('DOMContentLoaded', function() {
   
    const titulosServico = document.querySelectorAll('.titulo-servico');

  
    titulosServico.forEach(titulo => {
      
        titulo.addEventListener('click', function() {
        
            const itemServico = this.closest('.item-servico');
            const descricao = itemServico.querySelector('.descricao-detalhada');

        
            if (descricao.style.display === 'block') {
          
                descricao.style.display = 'none';
            } else {
          
                descricao.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById("hamburguer");
    const menu = document.getElementById("menu");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("ativo"); 
    });
});
