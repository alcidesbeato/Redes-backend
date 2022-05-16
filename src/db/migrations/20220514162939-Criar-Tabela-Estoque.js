'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoques', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estoques');
  }
};