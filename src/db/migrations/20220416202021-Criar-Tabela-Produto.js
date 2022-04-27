module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Produto');
  },
};
