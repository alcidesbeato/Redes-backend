module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estoque', {
      id: { type: Sequelize.UUID, primaryKey: true },
      lote: { type: Sequelize.STRING },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Estoque');
  },
};
