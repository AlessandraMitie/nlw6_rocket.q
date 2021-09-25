const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// route guarda todas as funcionalidades de Router que o express tem
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

// formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route