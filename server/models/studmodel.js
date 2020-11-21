const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const staffUser = sequelize.define('students', {
    FirstName :
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    MiddleName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    StudentId:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    DateOfBirth:
    {
    type: DataTypes.STRING,
    allowNull: false
    },
    Batch:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    CourseName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    DeptName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    StudentMobileNo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    ResidentStatus:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    FatherName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    ParentMobileNo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    District:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    State:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Country:
    {
        type: DataTypes.STRING,
        allowNull: false
    }, 
  },{
      timestamps: false
}, {
    tableName: 'students'
  },
   {
    freezeTableName: true
  });
module.exports =  staffUser;