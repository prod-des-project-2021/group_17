  const db = require('../config/db')
const { Sequelize } = require('sequelize');
const Product = require('./Product');

var ProductPictures = db.define('product_pictures', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    picture_url: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

ProductPictures.belongsTo(Product, {foreignKey: 'product_id'});

module.exports = ProductPictures;