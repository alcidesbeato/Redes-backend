'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rel_local_produto extends Model {
   //
    static associate(models) {
      // 
    }
  };
  rel_local_produto.init({
    id_produto: DataTypes.STRING,
    id_local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rel_Local_Produto',
  });
  return rel_local_produto;
};