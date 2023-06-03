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

server.get('/ht',(req,res) => res.sendFile(INDEX, {root: __dirname } ) );

server.get('/MKP', (req, res) => res.sendFile('./pages/markup.html', { root: __dirname } ))

<<<<<<< HEAD
server.get('/NFVP', (req, res) => res.sendFile('./pages/NF_Venda_Produto.html', { root: __dirname } ))
=======
server.get('/MKP2', (req, res) => {
    res.sendFile('./pagesMarkup2/markup2.html', { root: __dirname });
  });

server.get('/INFS', (req, res) => res.sendFile('./pages/Grupo05/INFS.html', { root: __dirname } ))
  
server.get('/INFS2', (req, res) => res.sendFile('./pages/Grupo04/INFS2.html', { root: __dirname } ))

server.post('/MKP2', (req, res) => {
    const custo = req.body.custo;
    const markup = req.body.markup;
  
    if (!custo || !markup) {
      return res.status(400).json({ error: 'Custo e markup são obrigatórios' });
    }
    const precoVenda = custo * (1 + markup / 100);
    res.json({ precoVenda });
  });
>>>>>>> 99724a1c42b1a30609f1440ece750d366e137e48
