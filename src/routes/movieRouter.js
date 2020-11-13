const express = require('express')
const MovieController = require('../controllers/movieController')
const MovieService = require('../services/movieService')
const { Movie, Translation } = require('../models')
const Api = require('../utils/api')

const router = express.Router()
const api = new Api(process.env.BASE_URL, process.env.API_KEY)
const movieService = new MovieService(Movie, Translation, api)
const movieController = new MovieController(movieService)

router.get('/:id', movieController.getById)
router.post('/seed', movieController.seed)

module.exports = router
