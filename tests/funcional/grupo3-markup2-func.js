const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Builder, Browser, By, until } = require('selenium-webdriver');

const screen = {
    width: 1024,
    height: 720
  };
   
(async () => {

  console.log("Starting");

 	var capabilities = webdriver.Capabilities.chrome();
	capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    
    let driver = await new Builder()
              .forBrowser(Browser.CHROME)
              .withCapabilities(capabilities)
              .setChromeOptions(new chrome.Options().headless().windowSize(screen))
              .build();

	await driver.manage().setTimeouts({pageLoad: 300000});
	

  try {

    await driver.get('https://billowy-flowery-cousin.glitch.me/MKP2');
    
    await driver.sleep(2000)
	  
    driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('inicio03.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

    await driver.findElement(By.id('custo')).sendKeys('100');
    await driver.findElement(By.id('margem')).sendKeys('12');
    await driver
      .findElement(By.id('btnCalcular'))
      .click();

    await driver.wait(until.elementLocated(By.id('resultMarkup')), 5000);
    await driver.wait(until.elementLocated(By.id('resultPrice')), 5000);

	   driver.takeScreenshot().then(
            function(image, err) {
              require('fs').writeFile('final03.png', image, 'base64', function(err) {
                console.log("erro"+ err);
              });
            }
           );

    const resultPrice = await driver.findElement(By.id('resultPrice')).getText();
    const resultMarkup = await driver.findElement(By.id('resultMarkup')).getText();

    // Verificação do resultado
    if (resultPrice === 'Preço de Venda: R$113.64') {
        console.log('Preço Venda Passou')
    }
    else if(resultMarkup === 'Markup: R$13.64') {
        console.log('Markup Passou')
    }
    else if (resultPrice !== 'Preço de Venda: R$113.64') {
        console.log('Preço Venda Não Passou')
    }
    else if(resultMarkup !== 'Markup: R$13.64') {
        console.log('Markup Não Passou')
    }
    else {
      console.log('Não passou');
    }

    await driver.sleep(5000)
    driver.takeScreenshot()
      .then((image, err) => {
        require('fs').writeFileSync('fim_grupo3.png', image, 'base64', (err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })

      

  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    await driver.quit();
  }
})();
