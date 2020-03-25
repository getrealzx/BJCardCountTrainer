'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gameRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "players",
          key: "id"
        }
      },
      gameID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "games",
          key: "id"
        }
      },
      winnings: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gameRecords');
  }
};