module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Local', {
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
        type: Sequelize.INTEGER
      },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Local');
  },
};
