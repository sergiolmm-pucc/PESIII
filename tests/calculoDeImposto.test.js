
const calculoDeImposto = require('../pages/Grupo04/calculoDeImposto');

test('O calculo dos impostos estao corretos ', () => {
//   // Chamar a função e obter o resultado
   const resultado = calculoDeImposto(1000); // Supondo um valor de serviço de 1000
  
   // Verificar se os valores estão corretos
   expect(resultado.cpp).toBe('280.00');
   expect(resultado.iss).toBe('50.00');
   expect(resultado.pis).toBe('6.50');
   expect(resultado.csll).toBe('15.00');
   expect(resultado.irpj).toBe('80.00');
   expect(resultado.cofins).toBe('30.00');
   expect(resultado.totalImpostos).toBe('461.50');
 });
