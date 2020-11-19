const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const staffUser = sequelize.define('stafflogins', {
    StaffId:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Password:
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
module.exports =  staffUser;