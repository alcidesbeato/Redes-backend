export default (sequelize, type) => {
    const Local = sequelize.define('Local',
      {
        id: {
          type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
        },
        nome: { type: type.STRING, field: 'nome' },
        quantidade: { type: type.INTEGER, field: 'quantidade' },


      },
      {
        tableName: 'Local',
        freezeTableName: true,
        timestamps: true,
      });
  
      Local.associate = (models) => {
        Local.hasOne(models.Rel_Est_Local_Prod, {
          as: 'Rel_Est_Local_Prod',
          foreignKey: 'id',
        });

        Local.hasOne(models.Rel_Est_Local_Prod, {
          as: 'Rel_Est_Local_Prod',
          foreignKey: 'quantidade',
        });
      };
  
    return Local;
  };
  