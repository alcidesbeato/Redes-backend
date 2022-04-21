module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estoque', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lote: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Estoque');
  }
};