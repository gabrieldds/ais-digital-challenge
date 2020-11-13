'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      imdb_id: {
        type: DataTypes.STRING
      },
      adult: {
        type: DataTypes.BOOLEAN
      },
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
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Movies')
  }
}
