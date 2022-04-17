module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rel_Est_Local_Prod', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo_estoque: { 
        type: Sequelize.STRING 
      },
      codigo_produto: { 
        type: Sequelize.STRING 
      },
      codigo_local: { 
        type: Sequelize.STRING 
      },
      quantidade_estoque: { 
        type: Sequelize.INTEGER 
      },
      quantidade_local: { 
        type: Sequelize.INTEGER 
      },
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Rel_Est_Local_Prod');
  },
};
