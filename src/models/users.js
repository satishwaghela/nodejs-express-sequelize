import Sequelize from 'sequelize';

export default function (sequelize) {
  const Users = sequelize.define('users', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  }, {
    schema: 'admin'
  });

	return Users;
}