'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class local extends Model {
    //
    static associate(models) {
      // 
    }
  };
  local.init({
    localizacao: DataTypes.STRING,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Local',
  });
  return local;
};