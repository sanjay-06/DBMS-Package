const { DataTypes } = require('sequelize');
let sequelize = require('../connection/dbconnection');

const hostelfee = sequelize.define('hostel_feestructs', {
    Head:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Amount:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
      timestamps: false
}, {
    tableName: 'hostel_feestructs'
  },
   {
    freezeTableName: true
  });

module.exports =  hostelfee;
