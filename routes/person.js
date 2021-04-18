const express = require('express')
const personRoute = express.Router()
const userController = require('../controllers/person')

personRoute.get('/listPersons', userController.listPersons)

module.exports = personRoute
