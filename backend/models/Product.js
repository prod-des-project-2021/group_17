const db = require('../config/db')
const { Sequelize } = require('sequelize');
const User = require('./User');

var Product = db.define('product', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull:false
    },
    description: {
        type: Sequelize.STRING,
        allowNull:true
    },
    status: {
        type: Sequelize.STRING,
        allowNull:false
    },
    date_of_posting: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.NOW
    }
});

Product.belongsTo(User, {foreignKey: 'user_id'});

module.exports = Product;