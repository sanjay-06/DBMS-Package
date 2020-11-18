const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const hostelallot = sequelize.define('timetables', {
    SubjectId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    SubjectName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Slot:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
      timestamps: false
}, {
    tableName: 'timetables'
  },
   {
    freezeTableName: true
  });

module.exports =  hostelallot;
