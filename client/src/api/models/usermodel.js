const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const User = sequelize.define('student_login', {
    StudentId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Student_Password:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
  },{
      timestamps: false
}, {
    tableName: 'student_login'
  },
   {
    freezeTableName: true
  });
module.exports =  User;