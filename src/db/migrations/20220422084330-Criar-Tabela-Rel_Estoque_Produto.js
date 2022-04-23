module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Rel_Estoque_Produto', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_produto: { 
          type: Sequelize.STRING 
        },
        id_estoque: { 
          type: Sequelize.STRING 
        },
      });
  
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('Rel_Estoque_Produto');
    },
  };
  