const TranslationModel = (sequelize, DataTypes) => {
  const Translation = sequelize.define('Translation', {
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
    timestamps: false
  })

  Translation.associate = (models) => {
    Translation.belongsTo(models.Movie, { foreignKey: 'movieId' })
  }

  return Translation
}

module.exports = TranslationModel
