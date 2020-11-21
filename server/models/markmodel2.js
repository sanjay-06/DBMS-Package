const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');
const marks = sequelize.define('lmarks', {
    StudentId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    SubjectId:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
Lab1_Mark:
  {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
  },
  Lab2_Mark  :
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  LabFinal_Mark  :
{
    type: DataTypes.STRING,
    allowNull: false
},
 Package_Mark :
{
    type: DataTypes.STRING,
    allowNull: false
},
},{
      timestamps: false
}, {
    tableName: 'lmarks'
  },
   {
    freezeTableName: true
  });

module.exports =  marks;