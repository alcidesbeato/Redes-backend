module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rel_Local_Produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_produto: { 
        type: Sequelize.STRING 
      },
      id_local: { 
        type: Sequelize.STRING 
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
    await queryInterface.dropTable('Rel_Local_Produto');
  },
};