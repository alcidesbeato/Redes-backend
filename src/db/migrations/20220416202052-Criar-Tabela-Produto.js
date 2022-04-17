module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produto', {
      id: { type: Sequelize.UUID, primaryKey: true },
      nome: { type: Sequelize.STRING },
      valor: { type: Sequelize.FLOAT },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Produto');
  },
};
