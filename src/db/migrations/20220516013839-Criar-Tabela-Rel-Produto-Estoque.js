'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rel_produto_estoque', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: {model: 'produtos', key: 'id'},
      },
      id_estoque: {
        type: Sequelize.STRING,
        references: {model: 'estoques', key: 'id'},
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
    await queryInterface.dropTable('rel_produto_estoque');
  }
};