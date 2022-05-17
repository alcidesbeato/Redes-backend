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
    quantidade: DataTypes.INTEGER,
    lote: DataTypes.STRING,
    data_validade: DataTypes.STRING,
    data_fabricacao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};