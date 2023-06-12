const nfServico = require('../pages/Grupo05/calculoINFS');

test('nfServico calculates values correctly for a given input', () => {
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
