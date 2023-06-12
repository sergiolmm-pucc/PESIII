function nfServico(valorBruto) {
    var cpp = 0;
    var iss = 0;
    var pis = 0;
    var csll = 0;
    var irpj = 0;
    var cofins = 0;
    var aliquotaTotal = 0;
  
    if (valorBruto >= 0 && valorBruto <= 180000) {
      cpp = 4.00 / 100;
      iss = 2.01 / 100;
      pis = 0.00 / 100;
      csll = 0.00 / 100;
      irpj = 0.00 / 100;
      cofins = 0.00 / 100;
      aliquotaTotal = cpp + iss + csll + irpj + cofins;
    }
  
    var total = valorBruto / (1 - aliquotaTotal);
  
    var display = [
      `...CPP: ${cpp * 100} %`,
      `...ISS: ${iss * 100} %`,
      `...PIS: ${pis * 100} %`,
      `...CSLL: ${csll * 100} %`,
      `...IRPJ: ${irpj * 100} %`,
      `...COFINS: ${cofins * 100} %`,
      `...O total: ${parseInt(total)} com base no ${parseInt(
        valorBruto
      )} e a aliquota total ${aliquotaTotal * 100}%`,
    ];
  
    return display;
  }
  
  module.exports = nfServico;
  