// importar o express
const express = require('express')
const route = require('./route')
// importar o módulo path:
const path = require('path')

// criar o server (que será o express iniciado)
const server = express()

// falar para o express que a view engine vai ser o ejs
server.set('view engine', 'ejs')

server.use(express.static("public"))

//path vai pegar o caminho da pasta que o projeto está
//join vai juntar o dirname com a pasta views
// dirname é a pasta onde está este arquivo (server.js), no caso está se referindo à pasta src
server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))