function calcularImposto(imposto) {
    var valorTributo = document.getElementById('valorTributo').value;
    var mensagemLabel = document.getElementById('mensagemLabel');

    // Verifica se o valorTributo está vazio
    if (valorTributo === null || valorTributo === "") {
        mostrarMensagemLabel("Por favor, digite um valor no campo de tributo.");
        return; // Interrompe a execução da função se o valor estiver vazio
    }

    // Verifica se o valorTributo é um número válido
    if (isNaN(valorTributo)) {
        mostrarMensagemLabel("Por favor, digite um valor numérico válido.");
        return; // Interrompe a execução da função se o valor não for válido
    }

    // Verifica se o valorTributo é negativo
    if (valorTributo < 0) {
        mostrarMensagemLabel("Por favor, digite um valor positivo no campo de tributo.");
        return; // Interrompe a execução da função se o valor for negativo
    }

    // O valorTributo é um número válido, então converte para float
    valorTributo = parseFloat(valorTributo);

    var resultado = valorTributo * imposto;
    mostrarMensagemLabel("O valor do imposto é: " + resultado.toFixed(2));

    // Define um tempo para a mensagem desaparecer após 8 segundos
    setTimeout(function() {
        mensagemLabel.style.display = "none";
    }, 8000);
}

function mostrarMensagemLabel(mensagem) {
    var mensagemLabel = document.getElementById('mensagemLabel');
    mensagemLabel.innerHTML = mensagem;
    mensagemLabel.style.display = "block";
}

module.exports = calcularImposto;

