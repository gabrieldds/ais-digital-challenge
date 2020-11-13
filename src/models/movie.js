const MovieModel = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
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
    timestamps: false
  })

  Movie.associate = (models) => {
    Movie.hasMany(models.Translation, { foreignKey: 'id' })
  }

  return Movie
}

module.exports = MovieModel
