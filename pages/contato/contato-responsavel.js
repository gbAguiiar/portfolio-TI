const form = document.getElementById("formContato");
const container = document.querySelector(".form-container");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recarregar a página

    alert("O responsável entrará em contato!");

    container.innerHTML = `
        <h1 style="text-align:center; margin-bottom:10px;">Formulário enviado com sucesso!</h1>
        <p style="text-align:center; font-size:18px; color:#444;">
            Obrigado por entrar em contato. Em breve retornaremos sua mensagem.
        </p>
    `;
});
