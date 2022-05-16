'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rel_produto_local', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: {model: 'produtos', key: 'id'},
      },
      id_local: {
        type: Sequelize.STRING,
        references: {model: 'locals', key: 'id'},
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
    await queryInterface.dropTable('rel_produto_local');
  }
};