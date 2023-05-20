const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const {Builder,Browser, By} = require('selenium-webdriver')

const screen = { width: 1024, height: 720};

(async function buttonRender(){

    console.log("Iniciando");

    var capabilities = webdriver.Capabilities.chrome();
    capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    let driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .withCapabilities(capabilities)
        .setChromeOptions( new chrome.Options().headless().windowSize(screen))
        .build()
    console.log("driver criado");
    try{
        await driver.get('http://localhost:3000/ht');
        console.log("obteve a pagina");
        let btn = await driver.findElement(By.id('sendbutton'));
        let didSendButtonRender = btn.isDisplayed();
        if (!didSendButtonRender){
            throw new Error('Send button not render properly');
        }



    } finally{
        await driver.quit();
    }

} 
)();