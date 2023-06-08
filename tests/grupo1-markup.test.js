const calculaMarkup = require('../pages/Grupo01/markup')

test('Teste função grupo 1 de calculo de Markup (1000, 100)', () => {
    const res = calculaMarkup(1000, 100)

    expect(res).toBe(900)
})

test('Teste função grupo 1 de calculo de Markup (850, 100)', () => {
    const res = calculaMarkup(850, 100)

    expect(res).toBe(750)
})

test('Teste função grupo 1 de calculo de Markup (950, 10)', () => {
    const res = calculaMarkup(850, 10)

    expect(res).toBe(840)
})