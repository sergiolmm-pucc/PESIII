var express = require('express');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';


const server = express()


server.listen(PORT, () => console.log(`Escutando em ${PORT}`));

server.get('/', function(req,res){
    res.send("Site de tecnologia");
});

server.get('/ht',(req,res) => res.sendFile(INDEX, {root: __dirname } ) );

server.get('/MKP', (req, res) => res.sendFile('./pages/markup.html', { root: __dirname } ))
