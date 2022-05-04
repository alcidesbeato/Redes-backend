module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produto', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      numero_produto: {
        type: Sequelize.INTEGER
      },
      nome: { 
        type: Sequelize.STRING 
      },
      origem: { 
        type: Sequelize.STRING 
      },
      lote: {
        type: Sequelize.STRING
      },
      data_fabricacao: { 
        type: Sequelize.DATE
      },
      data_validade: {
        type: Sequelize.DATE
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('Produto');
  },
};
