const { describe } = require('node:test');
const { JSDOM } = require("jsdom");
const calcularImposto = require("../pages/Grupo02/calcularImposto");

// Cria uma instância do JSDOM com uma string HTML vazia
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

// Teste da função calcularImposto
describe("calcularImposto", () => {
  let alertMessage;

  // Substitui a função alert para capturar a mensagem exibida
  beforeEach(() => {
    global.alert = (message) => {
      alertMessage = message;
    };
  });

  // Restaura a função alert original após cada teste
  afterEach(() => {
    global.alert = undefined;
  });

  it("deve exibir um alerta se o valorTributo estiver vazio", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "",
    });

    calcularImposto(0.10);
    expect(alertMessage).toBe("Por favor, digite um valor no campo de tributo.");
  });

  it("deve exibir um alerta se o valorTributo não for um número válido", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "abc",
    });

    calcularImposto(0.10);
    expect(alertMessage).toBe("Por favor, digite um valor numérico válido.");
  });

  it("deve exibir um alerta se o valorTributo for negativo", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "-10",
    });

    calcularImposto(0.10);
    expect(alertMessage).toBe("Por favor, digite um valor positivo no campo de tributo.");
  });
});
