const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');
const marks = sequelize.define('semresults', {
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
    SubjectName:
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  Credit:
  {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
  },
  Grade :
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  Result:
{
    type: DataTypes.STRING,
    allowNull: false
}
},{
      timestamps: false
}, {
    tableName: 'semresults'
  },
   {
    freezeTableName: true
  });

module.exports =  marks;