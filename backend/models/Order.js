const db = require('../config/db')
const { Sequelize } = require('sequelize');
const User = require('./User');
const Product = require('./Product');

var Order = db.define('order', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

Order.belongsTo(User, {foreignKey: 'user_id'});
Order.belongsTo(Product, {foreignKey: 'product_id'});

module.exports = Order;