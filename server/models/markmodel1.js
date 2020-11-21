const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');
const marks = sequelize.define('tmarks', {
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
}
},{
      timestamps: false
}, {
    tableName: 'tmarks'
  },
   {
    freezeTableName: true
  });

module.exports =  marks;