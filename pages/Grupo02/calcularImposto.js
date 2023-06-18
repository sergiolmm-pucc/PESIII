function calcularImposto(imposto) {
    var valorTributo = document.getElementById('valorTributo').value;

    // Verifica se o valorTributo está vazio
    if (valorTributo === null || valorTributo === "") {
        alert("Por favor, digite um valor no campo de tributo.");
        return; // Interrompe a execução da função se o valor estiver vazio
    }

    // Verifica se o valorTributo é um número válido
    if (isNaN(valorTributo)) {
        alert("Por favor, digite um valor numérico válido.");
        return; // Interrompe a execução da função se o valor não for válido
    }

    // Verifica se o valorTributo é negativo
    if (valorTributo < 0) {
        alert("Por favor, digite um valor positivo no campo de tributo.");
        return; // Interrompe a execução da função se o valor for negativo
    }

    // O valorTributo é um número válido, então converte para float
    valorTributo = parseFloat(valorTributo);

    var resultado = valorTributo * imposto;
    alert("O valor do imposto é: " + resultado.toFixed(2));
}
module.exports = calcularImposto;