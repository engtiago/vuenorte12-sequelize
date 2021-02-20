'use strict';

// migration
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      IDUser: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      vchUser: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      vchDescricao: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Date.now
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
