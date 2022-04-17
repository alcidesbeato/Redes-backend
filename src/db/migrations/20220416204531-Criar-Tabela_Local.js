module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Local', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING 
      },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Local');
  },
};
