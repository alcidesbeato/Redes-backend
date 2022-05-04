module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Local', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      localizacao: {
        type: Sequelize.STRING 
      },
      quantidade: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Local');
  },
};
