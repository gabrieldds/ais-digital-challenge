class MovieService {
  constructor (movieModel, translationsModel, api) {
    this.movieModel = movieModel
    this.translationsModel = translationsModel
    this.api = api

    this.getFromUrl = this.getFromUrl.bind(this)
    this.getById = this.getById.bind(this)
  }

  async getFromUrl (id) {
    const pathMovie = `/${id}`
    const pathTranslation = `/${id}/translations`

    const movieData = await this.api.get(pathMovie)
    const { translations } = await this.api.get(pathTranslation)

    const {
      backdrop_path, belongs_to_collection, genres,
      homepage, poster_path, production_companies, production_countries,
      title, spoken_languages, ...movie
    } = movieData

    return {
      movie,
      translations
    }
  }

  async seed (id) {
    const { movie, translations } = await this.getFromUrl(id)
    console.log(movie)
    const movieCreated = await this.movieModel.create(movie, { silent: true })

    translations.forEach(async translation => {
      translation.movieId = id
      await this.translationsModel.create(translation, { silent: true })
    })

    return movieCreated
  }

  async getById (id) {
    const result = await this.translationsModel.findAll({
      where: {
        movieId: id
      },
      include: {
        model: this.movieModel,
        required: true
      }
    })

    return result
  }
}

module.exports = MovieService
