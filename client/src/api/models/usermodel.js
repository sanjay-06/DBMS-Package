const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const User = sequelize.define('studentslogins', {
    username:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    email_address:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
  },{
      timestamps: false
});
module.exports =  User;