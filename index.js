const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const server = require("./app")

server.listen(PORT, () => console.log(`Escutando em ${PORT}`));