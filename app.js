const bodyParser = require("body-parser");
const express = require("express");
const path = require("path")

class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(bodyParser.json())
        this.express.use(express.static(path.join(__dirname, 'pages')))
    }

    routes() {
        this.express.use(require("./routes"))
    }
}

module.exports = new App().express