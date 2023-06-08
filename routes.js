const express = require("express")
const routes = express.Router();
const INDEX = '/index.html';

routes.get('/', function (req, res) {
    res.send("Site de tecnologia");
});

routes.get('/ht', (req, res) => res.sendFile(INDEX, { root: __dirname }));

routes.get('/MKP', (req, res) => {
    res.sendFile('./pages/Grupo01/markup.html', { root: __dirname })
})

routes.get('/NFVP', (req, res) => res.sendFile('./pages/NF_Venda_Produto.html', { root: __dirname }))

routes.get('/MKP2', (req, res) => {
    res.sendFile('./pagesMarkup2/markup2.html', { root: __dirname });
});

routes.get('/INFS', (req, res) => res.sendFile('./pages/Grupo05/INFS.html', { root: __dirname }))

routes.get('/INFS2', (req, res) => res.sendFile('./pages/Grupo04/INFS2.html', { root: __dirname }))

routes.post('/MKP2', (req, res) => {
    const custo = req.body.custo;
    const markup = req.body.markup;

    if (!custo || !markup) {
        return res.status(400).json({ error: 'Custo e markup são obrigatórios' });
    }
    const precoVenda = custo * (1 + markup / 100);
    res.json({ precoVenda });
});

module.exports = routes;