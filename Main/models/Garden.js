// Will define the collumns in our prject data folder

//  create unique ID for each item in project data folder.

// will need four columns in THIS folder

// make ID coumn in here and make sequal do it for us

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gardens extends Model {}

Gardens.init (
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gardens',
  }
);

module.exports = Gardens;