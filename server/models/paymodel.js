const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');
const marks = sequelize.define('payments', {
    StudentId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    CourseName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalAmount:
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  PaymentStatus:
  {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
  },
},{
      timestamps: false
}, {
    tableName: 'payments'
  },
   {
    freezeTableName: true
  });

module.exports =  marks;