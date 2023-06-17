const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');

(async () => {
  try {
    // Configuração do ambiente do WebDriver e opções do navegador
    const screen = {
      width: 1024,
      height: 720
    };

    const chromeOptions = new Options();
    chromeOptions.addArguments('--headless');
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.windowSize(screen);

    const builder = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions);

    // Criação da instância do WebDriver
    const driver = await builder.build();

    // Navegação para a página HTML
    await driver.get('https://billowy-flowery-cousin.glitch.me/NFVP');
    // Wait for 5 secs to let the dynamic content to load
    await driver.sleep(5000);


    // Esperar o site carregar completamente
    await driver.wait(until.elementLocated(By.id('valorTributo')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('valorTributo'))), 10000);

   // Captura de tela final
    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('inicio-grupo2.png', image, 'base64', function (err) {
        console.log('Erro' + err);
      });
    });

    
    // Verificação dos botões de impostos
    const csllButton = await driver.findElement(By.id('CSLL'));
    const irpjButton = await driver.findElement(By.id('IRPJ'));
    const cofinsButton = await driver.findElement(By.id('COFINS'));
    const pisButton = await driver.findElement(By.id('PIS'));
    const issButton = await driver.findElement(By.id('ISS'));

    // Verifica se os botões estão visíveis
    if (
      (await csllButton.isDisplayed()) &&
      (await irpjButton.isDisplayed()) &&
      (await cofinsButton.isDisplayed()) &&
      (await pisButton.isDisplayed()) &&
      (await issButton.isDisplayed())
    ) {
      console.log('Passou: Botões de impostos estão visíveis');
    } else {
      console.log('Falhou: Botões de impostos não estão visíveis');
    }


    // Verificação do cálculo de imposto
    valorTributoInput = await driver.findElement(By.id('valorTributo'));
    await valorTributoInput.sendKeys('1000');


    // Clique no botão CSLL
    await csllButton.click();
    
    await driver.sleep(5000);
/*
    const csllValue = await driver.executeScript('return calcularImposto(0.10)');
    console.log('Resultado do cálculo de CSLL:', csllValue);



    
    // Verificação do destaque dos botões
    const buttons = await driver.findElements(By.className('button'));

    for (const button of buttons) {
      await driver.actions().move({ origin: button }).perform();

      const isHovered = await button.getAttribute('class');
      if (isHovered.includes('button-hover')) {
        console.log('Passou: Botão com destaque visual ao passar o mouse');
      } else {
        console.log('Falhou: Botão sem destaque visual ao passar o mouse');
      }
    }
*/
    // Captura de tela final
    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('fim-grupo2.png', image, 'base64', function (err) {
        console.log('Erro' + err);
      });
    });

    // Encerramento do WebDriver
    await driver.quit();
  } catch (error) {
    console.error('Teste funcional falhou:', error);
  }
})();
