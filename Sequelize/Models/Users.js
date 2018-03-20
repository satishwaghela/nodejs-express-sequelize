module.exports = function(db){
	const User = db.sequelize.define('users', {
	  firstname: {
	    type: db.Sequelize.STRING
	  },
	  lastname: {
	    type: db.Sequelize.STRING
	  }
	});
	return User;
}