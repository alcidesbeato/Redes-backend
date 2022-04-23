module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estoque', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      localizacao: {
        type: Sequelize.STRING 
      },
      quantidade: {
        type: Sequelize.INT
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Estoque');
  }
};