'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Translations', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
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
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Translations')
  }
}
