const { request } = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

const createOrder = async (pid, uid) => {
    body = {}
    body.status = "in order";
    body.user_id = uid;
    body.product_id = pid;
    const order = Order.build(body);
    
    await order.save();
}

const fetchOrderByProdAndUser = async (pid, uid) => {
    return await Order.findOne({where: {product_id: pid, user_id: uid}}).then(function (prod){
        if(!prod)
            return null;
        else
            return prod.dataValues;
    });
}

const fetchOrderByUser = async (uid) => {
    return await Order.findAll({where: {user_id: uid}}).then(function(o) {
        return o.map(function(obj) {return obj.dataValues.product_id});
    });
}

module.exports = {
    createOrder, fetchOrderByProdAndUser, fetchOrderByUser
}