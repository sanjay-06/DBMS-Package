const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const editor = sequelize.define('subjects', {
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
      allowNull: false
  },
  StaffName:
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  StaffId:
  {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
},{
      timestamps: false
}, {
    tableName: 'subjects'
  },
   {
    freezeTableName: true
  });

module.exports =  editor;