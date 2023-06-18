const { JSDOM } = require("jsdom");
const calcularImposto = require("../pages/Grupo02/calcularImposto");

// Cria uma instância do JSDOM para simular o ambiente do navegador
const dom = new JSDOM();
global.document = dom.window.document;

// Teste da função calcularImposto
describe("calcularImposto", () => {
  let mensagemLabel;

  // Substitui a função mostrarMensagemLabel para capturar a mensagem exibida
  beforeEach(() => {
    global.mostrarMensagemLabel = (mensagem) => {
      mensagemLabel = mensagem;
    };
  });

  // Restaura a função mostrarMensagemLabel original após cada teste
  afterEach(() => {
    global.mostrarMensagemLabel = undefined;
  });

  it("deve exibir uma mensagem se o valorTributo estiver vazio", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "",
    });

    calcularImposto(0.10);
    expect(mensagemLabel).toBe("Por favor, digite um valor no campo de tributo.");
  });

  it("deve exibir uma mensagem se o valorTributo não for um número válido", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "abc",
    });

    calcularImposto(0.10);
    expect(mensagemLabel).toBe("Por favor, digite um valor numérico válido.");
  });

  it("deve exibir uma mensagem se o valorTributo for negativo", () => {
    // Simula o elemento com ID "valorTributo" no documento
    document.getElementById = jest.fn().mockReturnValue({
      value: "-10",
    });

    calcularImposto(0.10);
    expect(mensagemLabel).toBe("Por favor, digite um valor positivo no campo de tributo.");
  });
});
