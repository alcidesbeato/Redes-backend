'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estoque extends Model {
    //
    static associate(models) {
      // 
    }
  };
  estoque.init({
    localizacao: DataTypes.STRING,
    quantidade: DataTypes.INT
  }, {
    sequelize,
    modelName: 'Estoque',
  });
  return estoque;
};