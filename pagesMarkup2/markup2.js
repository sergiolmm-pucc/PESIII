const calcMarkup = (custo, markup) => {
    if (typeof custo == "number" && typeof markup == "number")
        return custo * (1 + markup / 100);
    return null
}

module.exports = calcMarkup