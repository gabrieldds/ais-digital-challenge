class MovieController {
  constructor (movieService) {
    this.movieService = movieService
    this.seed = this.seed.bind(this)
    this.getById = this.getById.bind(this)
  }

  async seed (req, res) {
    const { id } = req.body
    const result = await this.movieService.seed(id)
    return res.status(201).send(result)
  }

  async getById (req, res) {
    const { id } = req.params
    const result = await this.movieService.getById(id)
    return res.json(result)
  }
}

module.exports = MovieController
