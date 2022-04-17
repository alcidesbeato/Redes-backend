'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuarios.init({
    name: DataTypes.STRING,
    senha: DataTypes.STRING,
    reais: DataTypes.INTEGER,
    dolars: DataTypes.INTEGER,
    fazendeiros: DataTypes.INTEGER,
    quant_galinhas: DataTypes.INTEGER,
    quant_vaca: DataTypes.INTEGER,
    quant_porco: DataTypes.INTEGER,
    quant_ovelha: DataTypes.INTEGER,
    quant_cavalo: DataTypes.INTEGER,
    quant_peixe: DataTypes.INTEGER,
    quant_abelha: DataTypes.INTEGER,
    quant_camarao: DataTypes.INTEGER,
    quant_girafa: DataTypes.INTEGER,
    quant_lontra: DataTypes.INTEGER,
    upgrade_galinhas: DataTypes.INTEGER,
    upgrade_vaca: DataTypes.INTEGER,
    upgrade_porco: DataTypes.INTEGER,
    upgrade_ovelha: DataTypes.INTEGER,
    upgrade_cavalo: DataTypes.INTEGER,
    upgrade_peixe: DataTypes.INTEGER,
    upgrade_abelha: DataTypes.INTEGER,
    upgrade_camarao: DataTypes.INTEGER,
    upgrade_girafa: DataTypes.INTEGER,
    upgrade_lontra: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};