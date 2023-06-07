const { describe } = require('node:test')
const calculaMarkup = require('../pages/Grupo01/markup')

// Teste função grupo 1 de calculo de Markup

test('(1000, 100) = 900', () => {
    const res = calculaMarkup(1000, 100)

    expect(res).toBe(900)
})

test('(850, 100) = ', () => {
    const res = calculaMarkup(850, 100)

    expect(res).toBe(750)
})

test('(850, 10) = 840', () => {
    const res = calculaMarkup(850, 10)

    expect(res).toBe(840)
})

test('(850, 0) = 0', () => {
    const res = calculaMarkup(850, 0)

    expect(res).toBe(0)
})

test('(0, 0) = 0', () => {
    const res = calculaMarkup(0, 0)

    expect(res).toBe(0)
})

test('(undefined, 50) = 0', () => {
    const res = calculaMarkup(undefined, 50)

    expect(res).toBe(0)
})

test('(50, undefined) = 0', () => {
    const res = calculaMarkup(50, undefined)

    expect(res).toBe(0)
})

test('(undefined, undefined) = 0', () => {
    const res = calculaMarkup(undefined, undefined)

    expect(res).toBe(0)
})