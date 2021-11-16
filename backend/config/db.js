const { Sequelize } = require('sequelize');
const config = require('../config/config')

module.exports = new Sequelize(config.db.database, config.db.user, config.db.password, {
	host: config.db.host,
	dialect: config.db.dialect,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	define: {
		timestamps: false
	},
	port: config.db.port
});
