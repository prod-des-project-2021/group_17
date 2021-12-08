const db = require('../config/db')
const { Sequelize } = require('sequelize');

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
    relevance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = ProductCategory;