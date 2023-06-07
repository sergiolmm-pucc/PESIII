function calculaMarkup(valorVenda, valorCompra) {
    return ((valorVenda - valorCompra) / 100) * 100;
}

let form = document.querySelector(".form-markup");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valorCompra = form.elements.valorCompra.value;
    let valorVenda = form.elements.valorVenda.value;
    let valorDeMarkup = calculaMarkup(valorCompra, valorVenda)

    document.querySelector(".result").innerHTML = `Valor de markup: ${valorDeMarkup}%`

});