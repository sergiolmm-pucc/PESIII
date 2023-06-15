const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, until } = require('selenium-webdriver');

(async () => {
  console.log("Iniciando");

  const options = new chrome.Options();
  options.addArguments("--headless");
  options.addArguments("--window-size=1024,720");

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.manage().setTimeouts({ pageLoad: 300000 });

  try {
    await driver.get('https://billowy-flowery-cousin.glitch.me/INFS');
    await driver.sleep(3000);

    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('inicio_grupo5.png', image, 'base64', function(err) {
        console.log("Erro: " + err);
      });
    });

    const inputElement = await driver.findElement(By.id('calculo'));
    await inputElement.sendKeys('180000');

    const calcularButton = await driver.findElement(By.id('sendbutton'));
    await calcularButton.click();

    await driver.sleep(5000);

    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFileSync('fim_grupo5.png', image, 'base64', (err) => {
        console.log(err);
      });
    });

    const resultadoElement = await driver.findElement(By.id('resultado'));
    const results = await resultadoElement.getText();
    const expectedResults = [
      '...CPP: 4 %',
      '...ISS: 2.01 %',
      '...PIS: 0 %',
      '...CSLL: 0 %',
      '...IRPJ: 0 %',
      '...COFINS: 0 %',
      '...O total: 191509 com base no 180000 e a aliquota total 6.01%',
    ];

    console.log(results.split('\n'));
    console.log(expectedResults);

    if (results.split('\n').toString() === expectedResults.toString()) {
      console.log('Teste funcional passou');
    } else {
      console.error('Teste funcional falhou');
    }
  } catch (error) {
    console.error('Erro durante o teste funcional:', error);
  } finally {
    await driver.quit();
  }
})();
