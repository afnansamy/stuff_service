'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stuff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stuff.init({
      id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        },
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          isEmail: true,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone_number: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      job_title: {
          type: DataTypes.STRING,
          allowNull: false
      },
  },
  {
    sequelize,
    tableName: "stuff",
    modelName: 'Stuff',
  });
  return Stuff;
};
