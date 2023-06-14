const calculaMarkup = require('../pages/Grupo01/markup');

test('Teste função grupo 1 de calculo de Markup (100, 50, 50, 10)', () => {
  const res = calculaMarkup(100, 50, 50, 10);

  expect(res).toStrictEqual({ markup: 1.1, valorVenda: 220 });
});

test('Teste função grupo 1 de calculo de Markup (200, 100, 100, 20)', () => {
  const res = calculaMarkup(200, 100, 100, 20);

  expect(res).toStrictEqual({ markup: 1.2, valorVenda: 480 });
});

test('Teste função grupo 1 de calculo de Markup (1000, 50, 20 ,35)', () => {
  const res = calculaMarkup(1000, 50, 20, 35);

  expect(res).toStrictEqual({ markup: 1.35, valorVenda: 1444.5 });
});
