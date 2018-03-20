const Sequelize = require('sequelize');

const database = 'node_orm';
const userName = 'node_orm';
const password = 'orm123';

const sequelize = new Sequelize(database, userName, password, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models:{}
};

db.models.users = require('./Models/Users.js')(db);

module.exports = db;