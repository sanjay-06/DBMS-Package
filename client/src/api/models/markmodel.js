const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');
const marks = sequelize.define('marks', {
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
    CA1_Mark :
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  CA2_Mark:
  {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
  },
  Assignment_Mark :
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  Tutorial_Mark :
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
    tableName: 'marks'
  },
   {
    freezeTableName: true
  });

module.exports =  marks;