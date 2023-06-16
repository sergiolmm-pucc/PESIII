const chrome = require('selenium-webdriver/chrome');
const { Builder, By, until } = require('selenium-webdriver');

(async () => {
  console.log("Projeto rodando");

  const options = new chrome.Options();
  options.addArguments("--headless");
  options.addArguments("--window-size=1024,720");

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.manage().setTimeouts({ pageLoad: 400000 });

  try {
    await driver.get('https://billowy-flowery-cousin.glitch.me/infs2');
    await driver.sleep(3500);

    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('startgrupo04.png', image, 'base64', function(err) {
        console.log("Erro1: " + err);
      });
    });

    const inputElement = await driver.findElement(By.id('valorDoServicoInput'));
    await inputElement.sendKeys('20000');

    const btnCalc = await driver.findElement(By.id('btnCalc'));
    await btnCalc.click();
    console.log('Botão clicado com sucesso!');

    await driver.sleep(5000);

    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFileSync('endgrupo04.png', image, 'base64', (err) => {
        console.log("Erro2: " + err);
      });
    });

    const resultElement = await driver.findElement(By.id('resultadoDoImpostos'));
    const results = await resultElement.getText();
      const expectedResults = [
        'CPP: R$ 5600.00',
        'ISS: R$ 1000.00',
        'PIS: R$ 130.00',
        'CSLL: R$ 300.00',
        'IRPJ: R$ 1600.00',
        'COFINS: R$ 600.00',
        'Total de Impostos: R$ 9230.00'
      ];

    // console.log(results.split('\n'));
    console.log(expectedResults);

     if (results.split('\n').toString() === expectedResults.toString()) {
       console.log('Teste funcional deu certo');
     } else {
       console.error('Teste funcional falhou');
     }
  } catch (error) {
    console.error('Erro durante o teste funcional:', error);
  } finally {
    await driver.quit();
  }
})();
