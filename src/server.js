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

// middleware: mandou algo pela rota, passa primeiro pelo middleware e depois vai para o controller
// pegar o conteúdo que vem do formulário, decodificar (urlencoded) e passar para o controller
server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))