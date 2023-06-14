const { Builder, By, Key, until } = require('selenium-webdriver');

test('Teste funcional 01 grupo 1', async () => {
  // Inicialização do WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navegação para a página HTML
    await driver.get('http://localhost:3000/MKP');

    // Preenchimento dos campos e submissão do formulário
    await driver.findElement(By.name('valorCompra')).sendKeys('100');
    await driver.findElement(By.name('tributosCompra')).sendKeys('50');
    await driver.findElement(By.name('freteCompra')).sendKeys('50');
    await driver.findElement(By.name('percentualLucroDesejado')).sendKeys('10');
    await driver
      .findElement(By.css('.form-markup input[type="submit"]'))
      .click();

    // Aguarda a exibição do resultado
    await driver.wait(until.elementLocated(By.css('.result')), 5000);
    await driver.wait(until.elementLocated(By.css('.result2')), 5000);

    // Obtém o valor de markup exibido
    const resultado = await driver.findElement(By.css('.result')).getText();
    const resultado2 = await driver.findElement(By.css('.result2')).getText();

    // Verificação do resultado
    expect(resultado).toBe('O preço de venda deve ser de R$ 220');
    expect(resultado2).toBe('O valor de markup é 1.1');

    console.log('Teste funcional bem-sucedido!');
  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    // Encerramento do WebDriver
    await driver.quit();
  }
});