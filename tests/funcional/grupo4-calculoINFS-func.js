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
      require('fs').writeFile('start_grupo04.png', image, 'base64', function(err) {
        console.log("Erro: " + err);
      });
    });

    const inputElement = await driver.findElement(By.id('valorDoServicoInput'));
    await inputElement.sendKeys('20000');

    const btnCalc = await driver.findElement(By.id('btnCalc'));
    await btnCalc.click();
    console.log('Botão clicado com sucesso!');

    await driver.sleep(5000);

    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFileSync('end_grupo04.png', image, 'base64', (err) => {
        console.log(err);
      });
    });

    const resultElement = await driver.findElement(By.id('resultadoDoImpostos'));
    const results = await resultElement.getText();
    const expectedResults = [
        '...CPP: R$ 14000.00',
        '...ISS: R$ 2500.00',
        '...PIS: R$ 325.00',
        '...CSLL: R$ 750.00',
        '...IRPJ: R$ 4000.00',
        '...COFINS: R$ 1500.00',
        '...O total: R$ 22575.00 com base no R$ 20000.00 e a aliquota total 112.88%',
      ];
      

    console.log(results.split('\n'));
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
