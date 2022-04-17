module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: { 
        type: Sequelize.STRING 
      },
      valor: {
        type: Sequelize.FLOAT 
      },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Produto');
  },
};
