function calculaMarkup(valorVenda, valorCompra) {
    if(!valorVenda | !valorCompra) return 0
    return ((valorVenda - valorCompra) / 100) * 100;
}

module.exports = calculaMarkup