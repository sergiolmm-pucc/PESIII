const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

const screen = { width: 1024, height: 720};

(async () => {

  console.log("Iniciando");

  var capabilities = webdriver.Capabilities.chrome();
  capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

  // Inicialização do WebDriver com opção headless
  const driver = await new Builder()
    .forBrowser('chrome')
    .withCapabilities(capabilities)
    .setChromeOptions( new chrome.Options().headless().windowSize(screen))
    .build();

  try {
    // Navegação para a página HTML
    await driver.get('https://billowy-flowery-cousin.glitch.me/MKP');
    
    await driver.sleep(45000)
	  
    driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('inicio14.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

    
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


	   driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('final14.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

    // Obtém o valor de markup exibido
    const resultado = await driver.findElement(By.css('.result')).getText();
    const resultado2 = await driver.findElement(By.css('.result2')).getText();

    // Verificação do resultado
    if (resultado === 'O preço de venda deve ser de R$ 220'
      && resultado2 === 'O valor de markup é 1.1') {
        console.log('Passou')
    }
    else {
      console.log('Não passou');
    }

    await driver.sleep(5000)
    driver.takeScreenshot()
      .then((image, err) => {
        require('fs').writeFileSync('fim_grupo1.png', image, 'base64', (err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })

      

  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    // Encerramento do WebDriver
    await driver.quit();
  }
})();
