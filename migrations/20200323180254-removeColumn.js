'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('games', 'username');
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('games', 'username');
    
  }
};
