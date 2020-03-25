'use strict';
module.exports = (sequelize, DataTypes) => {
  const gameRecord = sequelize.define('gameRecord', {
    playerID: DataTypes.INTEGER,
    gameID: DataTypes.INTEGER,
    winnings: DataTypes.INTEGER
  }, {});
  gameRecord.associate = function(models) {
    gameRecord.hasMany(models.games, {foreignKey: 'gameID'})
    gameRecord.hasMany(models.players, {foreignKey: 'id'})
  };
  return gameRecord;
};