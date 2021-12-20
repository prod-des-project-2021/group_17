const db = require('../config/db')
const { Sequelize } = require('sequelize');

var User = db.define('user', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
    address: {
        type: Sequelize.STRING,
        allowNull:false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull:false
    },
    credits: {
        type: Sequelize.FLOAT,
        allowNull:false,
        defaultValue: 0
    },
    gender: {
        type: Sequelize.ENUM('M','F'),
        allowNull:false
    },
    dob: {
        type: Sequelize.DATE,
        allowNull:false
    },
    profile_picture: {
        type: Sequelize.STRING,
        allowNull:true
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:0
    }
});

module.exports = User;