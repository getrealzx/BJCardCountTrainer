'use strict';
module.exports = (sequelize, DataTypes) => {
  const transferlog = sequelize.define('transferlog', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  transferlog.associate = function(models) {
    // associations can be defined here
  };
  return transferlog;
};