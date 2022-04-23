'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rel_estoque_produto extends Model {
   //
    static associate(models) {
      // 
    }
  };
  rel_estoque_produto.init({
    id_produto: DataTypes.STRING,
    id_estoque: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rel_Estoque_Produto',
  });
  return rel_estoque_produto;
};