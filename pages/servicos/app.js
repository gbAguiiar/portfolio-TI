const modal = document.getElementById("modal-servico");
const fechar = document.querySelector(".fechar");

const titulo = document.getElementById("modal-titulo");
const imagem = document.getElementById("modal-imagem");
const descricao = document.getElementById("modal-descricao");
const preco = document.getElementById("modal-preco");

const servicos = {
    1: {
        titulo: "Reparo de Computadores",
        imagem: "../../imagens/Homepage/homepage.jpg",
        descricao: "Realizo reparo completo em computadores e notebooks, incluindo diagnóstico, limpeza profunda, troca de peças, otimização, remoção de vírus e muito mais.",
        preco: "Preço: R$ 80 a R$ 250 dependendo do serviço."
    },
    2: {
        titulo: "Manutenção de Redes",
        imagem: "../../imagens/sobre/manutenção.jpeg",
        descricao: "Configuração de redes Wi-Fi, cabeamento, repetidores, roteadores, switch e análise completa de conectividade.",
        preco: "Preço: R$ 120 a R$ 350."
    },
    3: {
        titulo: "Instalação de Software",
        imagem: "../../imagens/sobre/instalação.jpeg",
        descricao: "Instalação e configuração de Windows, Office, antivírus, drivers e softwares essenciais.",
        preco: "Preço: R$ 60 a R$ 200."
    },
    4: {
        titulo: "Consultoria em TI",
        imagem: "../../imagens/sobre/eu.jpeg",
        descricao: "Consultoria profissional para melhorar segurança, desempenho e produtividade na sua infraestrutura.",
        preco: "Preço: A partir de R$ 150."
    }
};

document.querySelectorAll(".btn-detalhes").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.servico;

        titulo.innerText = servicos[id].titulo;
        imagem.src = servicos[id].imagem;
        descricao.innerText = servicos[id].descricao;
        preco.innerText = servicos[id].preco;

        modal.style.display = "flex";
    });
});

