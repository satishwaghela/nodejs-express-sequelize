import Sequelize from 'sequelize';
import Users from './users';

const sequelize = new Sequelize(
  process.env.DATABASE || 'asimily',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASSWORD || 'postgres',
  {
    host: '10.129.86.36',
    dialect: 'postgres',
    define: {
      createdAt: 'create_time',
      updatedAt: 'last_updated_time'
    }
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = {
  Users: Users(sequelize)
};

export { sequelize };
export default models;
