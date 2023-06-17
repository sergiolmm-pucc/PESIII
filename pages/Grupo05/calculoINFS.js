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
  } else if (valorBruto > 180000 && valorBruto <= 360000) {
    cpp = 4.00 / 100;
    iss = 2.79 / 100;
    pis = 0.00 / 100;
    csll = 0.00 / 100;
    irpj = 0.00 / 100;
    cofins = 1.42 / 100;
    aliquotaTotal = cpp + iss + csll + irpj + cofins;
  } else if (valorBruto > 360000 && valorBruto <= 540000) {
    cpp = 4.07 / 100;
    iss = 3.50 / 100;
    pis = 0.35 / 100;
    csll = 0.43 / 100;
    irpj = 0.48 / 100;
    cofins = 1.43 / 100;
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
