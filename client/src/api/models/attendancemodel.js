const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const attendance = sequelize.define('attendances', {
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
  PeriodNo:
  {
      type: DataTypes.STRING,
      allowNull: false
  },
  TotalPeriodNo:
  {
      type: DataTypes.STRING,
      allowNull: false
  },
},{
      timestamps: false
}, {
    tableName: 'student_login'
  },
   {
    freezeTableName: true
  });

module.exports =  attendance;