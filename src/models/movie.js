const { DataTypes, Model } = require('sequelize')

class Movie extends Model {
  static init (sequelize) {
    super.init({
      imdb_id: DataTypes.STRING,
      adult: DataTypes.BOOLEAN,
      budget: {
        type: DataTypes.INTEGER
      },
      original_language: {
        type: DataTypes.STRING
      },
      original_title: {
        type: DataTypes.CHAR
      },
      overview: {
        type: DataTypes.TEXT
      },
      popularity: {
        type: DataTypes.DECIMAL
      },
      release_date: {
        type: DataTypes.STRING
      },
      revenue: {
        type: DataTypes.INTEGER
      },
      runtime: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.STRING
      },
      tagline: {
        type: DataTypes.STRING
      },
      vote_average: {
        type: DataTypes.DECIMAL
      },
      vote_count: {
        type: DataTypes.INTEGER
      }
    }, {
      sequelize,
      modelName: 'Movie'
    })
  }
}

module.exports = Movie
