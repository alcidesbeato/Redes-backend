export default (sequelize, type) => {
    const Rel_Est_Local_Prod = sequelize.define('Rel_Est_Local_Prod',
      {
        id: {
          type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
        },
        codigo_estoque: { type: type.STRING, field: 'codigo_estoque' },
        codigo_produto: { type: type.STRING, field: 'codigo_produto' },
        codigo_local: { type: type.STRING, field: 'codigo_local' },
        quantidade_estoque: { type: type.INTEGER, field: 'quantidade_estoque' },
        quantidade_local: { type: type.INTEGER, field: 'quantidade_local' },
      },
      {
        tableName: 'Rel_Est_Local_Prod',
        freezeTableName: true,
        timestamps: true,
      });
  
      Rel_Est_Local_Prod.associate = (models) => {
        Rel_Est_Local_Prod.hasOne(models.Estoque, {
          as: 'Estoque',
          foreignKey: 'codigo_estoque',
        });

        Rel_Est_Local_Prod.hasOne(models.Produto, {
          as: 'Produto',
          foreignKey: 'codigo_produto',
        });

        Rel_Est_Local_Prod.hasOne(models.Local, {
          as: 'Local',
          foreignKey: 'codigo_local',
        });

        Rel_Est_Local_Prod.hasOne(models.Local, {
          as: 'Local',
          foreignKey: 'quantidade_local',
        });

        Rel_Est_Local_Prod.hasOne(models.Estoque, {
          as: 'Estoque',
          foreignKey: 'quantidade_estoque',
        });
      };
  
    return Rel_Est_Local_Prod;
  };
  