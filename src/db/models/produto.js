export default (sequelize, type) => {
    const Produto = sequelize.define('Produto',
      {
        id: {
          type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
        },
        nome: { type: type.STRING, field: 'nome' },
        valor: { type: type.FLOAT, field: 'valor' },

      },
      {
        tableName: 'Produto',
        freezeTableName: true,
        timestamps: true,
      });
  
      Produto.associate = (models) => {
        Produto.hasOne(models.Rel_Est_Local_Prod, {
          as: 'Rel_Est_Local_Prod',
          foreignKey: 'id',
        });
      };
  
    return Produto;
  };
  