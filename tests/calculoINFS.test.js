const nfServico = require('../pages/Grupo05/calculoINFS');

test('nfServico calcula corretamente os valores para uma entrada específica', () => {
  const valorBruto = 180000;
  const expectedDisplay = [
    '...CPP: 4 %',
    '...ISS: 2.01 %',
    '...PIS: 0 %',
    '...CSLL: 0 %',
    '...IRPJ: 0 %',
    '...COFINS: 0 %',
    '...O total: 191509 com base no 180000 e a aliquota total 6.01%',
  ];

  expect(nfServico(valorBruto)).toEqual(expectedDisplay);
});

test('nfServico calcula os valores corretamente para uma entrada dentro do segundo intervalo', () => {
  const valorBruto = 250000;
  const expectedDisplay = [
    /...CPP: 4 %/,
    /...ISS: 2.79 %/,
    /...PIS: 0 %/,
    /...CSLL: 0 %/,
    /...IRPJ: 0 %/,
    /...COFINS: 1.42 %/,
    /...O total: 272360 com base no 250000 e a aliquota total 8.21%/,
  ];

  const receivedDisplay = nfServico(valorBruto);

  // Compare cada linha individualmente usando expressões regulares com tolerância
  for (let i = 0; i < expectedDisplay.length; i++) {
    expect(receivedDisplay[i]).toMatch(expectedDisplay[i]);
  }
});

test('nfServico calcula corretamente os valores para uma entrada dentro do terceiro intervalo', () => {
  const valorBruto = 400000;
  const expectedDisplay = [
    /...CPP: 4.07 %/,
    /...ISS: 3\.5[0-9]+ %/,
    /...PIS: 0.35 %/,
    /...CSLL: 0.43 %/,
    /...IRPJ: 0.48 %/,
    /...COFINS: 1.43 %/,
    /...O total: 444000 com base no 400000 e a aliquota total 9.91%/,
  ];

  const receivedDisplay = nfServico(valorBruto);

  // Compare cada linha individualmente usando expressões regulares com tolerância
  for (let i = 0; i < expectedDisplay.length; i++) {
    expect(receivedDisplay[i]).toMatch(expectedDisplay[i]);
  }
});
