'use strict';
module.exports = (sequelize, DataTypes) => {
  const leaderboard = sequelize.define('leaderboard', {
    gameswon: DataTypes.INTEGER
  }, {});
  leaderboard.associate = function(models) {
    // associations can be defined here
    leaderboard.belongsTo(models.games, {foreignKey: 'gameID'})
    leaderboard.belongsTo(models.players, {foreignKey: 'playerID'})


  };
  return leaderboard;
};