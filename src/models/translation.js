const { DataTypes, Model } = require('sequelize')

class Translation extends Model {
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
      },
      movieId: {
        type: DataTypes.INTEGER
      }
    }, {
      sequelize,
      modelName: 'Translation'
    })
  }
}

Translation.associate = (models) => {
  models.translation.belongsTo(models.User, { targetKey: 'movieId' })
}

module.exports = Translation
