document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Seleciona o formulário

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData(form); // Cria um objeto FormData com os dados do formulário

        fetch('/clientes', {
            method: 'POST', // Método HTTP para enviar os dados (neste exemplo, é um POST)
            body: formData, // Os dados do formulário em formato FormData
        })
        .then(response => {
            if (response.ok) {
                // O envio foi bem-sucedido, você pode realizar ações adicionais aqui, se necessário
                console.log('Dados enviados com sucesso!');
            } else {
                // O envio falhou, você pode lidar com erros aqui
                console.error('Erro ao enviar dados.');
            }
        })
        .catch(error => {
            // Captura erros de rede ou outros erros
            console.error('Erro inesperado:', error);
        });
    });
});
