'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  produtos.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return produtos;
};