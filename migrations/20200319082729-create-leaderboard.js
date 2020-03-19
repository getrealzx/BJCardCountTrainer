'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leaderboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameswon: {
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
    return queryInterface.dropTable('leaderboards');
  }
};