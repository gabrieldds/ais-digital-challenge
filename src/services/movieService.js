class MovieService {
  constructor (movieModel, translationsModel, api) {
    this.movieModel = movieModel
    this.translationsModel = translationsModel
    this.api = api
  }

  async getFromUrl (id) {
    const pathMovie = `/movie/${id}`
    const pathTranslation = `/movie/${id}/translations`

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
    const movieCreated = await this.movieModel.create(movie)

    translations.forEach(async translation => {
      translation.movieId = id
      await this.translationsModel.create(translation)
    })

    return movieCreated
  }

  async getById (id) {
    const movie = await this.movieModel.findByPk(id)
    const translations = await this.translationsModel.findAll({
      where: {
        movieId: id
      }
    })

    movie.translations = translations
    return movie
  }
}

module.exports = MovieService
