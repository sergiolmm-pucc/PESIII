
const calculoDeImposto = require('../pages/Grupo04/calculoDeImposto');

test('O Calculo de imposto estao corretos', () => {
  // Chamar a função e obter o resultado
  const resultado = calculoDeImposto(1000); // Supondo um valor de serviço de 1000
  
  // Verificar se os valores estão corretos
  expect(resultado.cpp).toBe('5.88');
  expect(resultado.iss).toBe('1.05');
  expect(resultado.pis).toBe('0.14');
  expect(resultado.csll).toBe('0.32');
  expect(resultado.irpj).toBe('168');
  expect(resultado.cofins).toBe('0.63');
  expect(resultado.totalImpostos).toBe('9.69');
});
test('O total de impostos esta correto', () => {
  // Chamar a função e obter o resultado
  const resultado = calculoDeImposto(1000); // Supondo um valor de serviço de 1000
  
  // Verificar se os valor do total esta correto
  expect(resultado.totalImpostos).toBe('9.69');
});