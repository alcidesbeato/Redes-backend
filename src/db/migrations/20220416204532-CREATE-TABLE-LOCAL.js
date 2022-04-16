module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Local', {
      id: { type: Sequelize.UUID, primaryKey: true },
      nome: { type: Sequelize.STRING },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Local');
  },
};
