export default (sequelize, type) => {
    const Estoque = sequelize.define('Estoque',
      {
        id: {
          type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
        },
        lote: { type: type.STRING, field: 'lote' },
        quantidade: { type: type.INTEGER, field: 'quantidade' },

      },
      {
        tableName: 'Estoque',
        freezeTableName: true,
        timestamps: true,
      });
  
      Estoque.associate = (models) => {
        Estoque.hasOne(models.Rel_Est_Local_Prod, {
          as: 'Rel_Est_Local_Prod',
          foreignKey: 'id',
        });

        Estoque.hasOne(models.Rel_Est_Local_Prod, {
          as: 'Rel_Est_Local_Prod',
          foreignKey: 'quantidade',
        });
      };
  
    return Estoque;
  };
  