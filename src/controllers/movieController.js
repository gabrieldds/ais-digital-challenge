class MovieController {
  constructor (movieService) {
    this.movieService = movieService
  }

  async seed (req, res) {
    const { id } = req.params
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
