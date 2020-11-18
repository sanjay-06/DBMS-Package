const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const hostelallot = sequelize.define('hostels', {
    StudentId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Block:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    RoomNo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
      timestamps: false
}, {
    tableName: 'hostels'
  },
   {
    freezeTableName: true
  });

module.exports =  hostelallot;
