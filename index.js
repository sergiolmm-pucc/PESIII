var express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';


const server = express()
server.use(bodyParser.json());


server.listen(PORT, () => console.log(`Escutando em ${PORT}`));

server.get('/', function(req,res){
    res.send("Site de tecnologia");
});

server.get('/ht',(req,res) => res.sendFile(INDEX, {root: __dirname } ));

server.get('/MKP', (req, res) => {
    res.sendFile('./pages/Grupo01/markup.html', { root: __dirname } )
})

server.get('/INFS', (req, res) => res.sendFile('./pages/Grupo05/INFS.html', { root: __dirname } ))

server.get('/INFS2', (req, res) => res.sendFile('./pages/Grupo04/INFS2.html', { root: __dirname } ))

server.get('/NFVP', (req, res) => res.sendFile('./pages/NF_Venda_Produto.html', { root: __dirname } ))
