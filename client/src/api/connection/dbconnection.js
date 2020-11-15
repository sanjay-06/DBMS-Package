const { Sequelize } = require ('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
{
    host: dbConfig.dbHost,
    dialect: 'mysql'
});

async function init()
{
    try 
    {
        await sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
    } 
    catch (error) 
    {
        console.error('Unable to connect to the database:', error);
    }
}

init();

module.exports = sequelize;