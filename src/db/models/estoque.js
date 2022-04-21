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
    lote: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estoque',
  });
  return estoque;
};