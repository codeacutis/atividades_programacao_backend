const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Endereco = sequelize.define(
  "Endereco",
  {
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
        args:[2,2],
        msg: "O estado deve conter exatamente 2 caracteres."
        }
    }
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
        args:[9,9],
        msg: "O cep deve conter exatamente 9 caracteres."
        }
    }
    },
  },
  {
    tableName: "enderecos",
  }
);

module.exports = Endereco;