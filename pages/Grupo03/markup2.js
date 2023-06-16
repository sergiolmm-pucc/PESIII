const calcMarkup = (custo, margemLucro) => {
    if (typeof custo == "number" && typeof margemLucro == "number") {
        const markup = (custo / (1 - (margemLucro / 100))) - custo;
        const precoVenda = custo + markup;
        return { markup, precoVenda }
    }
    return null
}

module.exports = calcMarkup