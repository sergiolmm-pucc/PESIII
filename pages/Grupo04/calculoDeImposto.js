function calcularImposto(valorServico) {
    var cpp = valorServico * 0.28; 
    var iss = valorServico * 0.05; 
    var pis = valorServico * 0.0065; 
    var csll = valorServico * 0.015; 
    var irpj = valorServico * 0.08; 
    var cofins = valorServico * 0.03; 
    
    var totalImpostos = cpp + iss + pis + csll + irpj + cofins;
    return {
      cpp: cpp.toFixed(2),
      iss: iss.toFixed(2),
      pis: pis.toFixed(2),
      csll: csll.toFixed(2),
      irpj: irpj.toFixed(2),
      cofins: cofins.toFixed(2),
      totalImpostos: totalImpostos.toFixed(2)
    };
  }
  
  

  module.exports = calcularImposto;
  