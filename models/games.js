'use strict';
module.exports = (sequelize, DataTypes) => {
  const games = sequelize.define('games', {
    amount: DataTypes.INTEGER
  }, {});
  games.associate = function(models) {
    // associations can be defined here
    games.hasMany(models.leaderboard, {foreignKey: 'gameID'})


  };
  return games;
};