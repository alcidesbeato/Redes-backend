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
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Local',
  });
  return local;
};