const { DataTypes, Model } = require('sequelize')

class Translations extends Model {
  static init (sequelize) {
    super.init({
      iso_3166_1: {
        type: DataTypes.STRING
      },
      iso_639_1: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      overview: {
        type: DataTypes.TEXT
      },
      homepage: {
        type: DataTypes.STRING
      }
    }, {
      sequelize,
      modelName: 'Movie'
    })
  }
}

module.exports = Translations
