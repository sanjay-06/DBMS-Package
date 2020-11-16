const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const fee = sequelize.define('fees', {
    CourseName:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    FeeHead:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
  CAmount:
  {
      type: DataTypes.STRING,
      allowNull: false
  },

},{
      timestamps: false
}, {
    tableName: 'fees'
  },
   {
    freezeTableName: true
  });

module.exports =  fee;