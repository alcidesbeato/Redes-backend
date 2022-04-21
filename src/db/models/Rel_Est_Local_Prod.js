'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rel_est_local_prod extends Model {
   //
    static associate(models) {
      //
    }
  };
  rel_est_local_prod.init({
    quantidade_estoque: DataTypes.INTEGER,
    quantidade_local: DataTypes.INTEGER,
    codigo_estoque: DataTypes.STRING,
    codigo_produto: DataTypes.STRING,
    codigo_local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rel_Est_Local_Prod',
  });
  return rel_est_local_prod;
};