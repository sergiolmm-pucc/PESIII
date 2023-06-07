function calculaMarkup(valorVenda, valorCompra) {
    return ((valorVenda - valorCompra) / 100) * 100;
}

module.exports = calculaMarkup