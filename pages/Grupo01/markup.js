function calculaMarkup(
  valorCompra,
  tributosCompra,
  freteCompra,
  percentualLucroDesejado,
) {
  const custo =
    Number(valorCompra) + Number(tributosCompra) + Number(freteCompra);

  // Calcula o valor de venda
  const lucroDesejado = custo * (Number(percentualLucroDesejado) / 100);
  const valorVenda = custo + lucroDesejado;

  // Calcula o markup
  const markup = valorVenda / custo;
  return { markup, valorVenda };
}

module.exports = calculaMarkup;
