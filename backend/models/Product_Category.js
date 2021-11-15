const db = require('../config/db')
const { Sequelize } = require('sequelize');
const Product = require('./Product');

var ProductCategory = db.define('product_category', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    relevence: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull:false
    }
});

ProductCategory.belongsTo(Product, {foreignKey: 'product_id'});

module.exports = ProductCategory;