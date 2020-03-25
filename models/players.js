'use strict';
module.exports = (sequelize, DataTypes) => {
  const players = sequelize.define('players', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bankroll: DataTypes.INTEGER
  }, {});
  players.associate = function(models) {
    // associations can be defined here
    players.belongsTo(models.gameRecord, {foreignKey: 'id'})

  };
  return players;
};