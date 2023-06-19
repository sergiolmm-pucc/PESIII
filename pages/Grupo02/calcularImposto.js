function calcularImposto(valor, tributo) {
  let msgErro = "";
  if (valor === null || valor === "") {
    msgErro = "Por favor digite numeros validos.";
    return msgErro;
  }
  if (isNaN(valor)) {
    msgErro = "Por favor, digite um valor numérico válido.";
    return msgErro;
  }
  // Verifica se o valorTributo é negativo
  if (valor < 0) {
    msgErro = "Por favor, digite um valor positivo no campo de tributo.";
    return msgErro; // Interrompe a execução da função se o valor for negativo
  }
  let resultado = tributo * valor;
  return resultado;
}

function escolheImposto(imposto) {
  const value = document.getElementById("valorTributo").value;
  const text = document.getElementById("text-result");
  let result;
  switch (imposto) {
    case 1:
      result = calcularImposto(value, 0.1);
      if (typeof result !== "number") {
        text.innerHTML = result;
      } else {
        text.innerHTML = `O imposto é R$ ${result}`;
      }
     
      break;

    case 2:
      result = calcularImposto(value, 0.15);
      if (typeof result !== "number") {
        text.innerHTML = `${result}`;
      } else{
        text.innerHTML = `O imposto é R$ ${result}`;
      }
      break;

    case 3:
        result = calcularImposto(value, 0.05);
        if (typeof result !== "number") {
          text.innerHTML = `${result}`;
        } else{
          text.innerHTML = `O imposto é R$ ${result}`;
        }
      break;

    case 4:
        result = calcularImposto(value, 0.02);
        if (typeof result !== "number") {
          text.innerHTML = `${result}`;
        } else{
          text.innerHTML = `O imposto é R$ ${result}`;
        };
      break;

    case 5:
        result = calcularImposto(value, 0.08);
      if (typeof result !== "number") {
        text.innerHTML = `${result}`;
      } else{
        text.innerHTML = `O imposto é R$ ${result}`;
      }
      break;

    default:
      break;
  }
}

module.exports = calcularImposto;
