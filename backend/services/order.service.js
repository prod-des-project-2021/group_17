const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

const createOrder = async (pid, uid) => {
    request = {}
    request.status = "in order";
    request.user_id = uid;
    request.product_id = pid;
    const order = Order.build(request);
    
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
        return o.map(function(obj) {return obj.dataValues});
    });
}

module.exports = {
    createOrder, fetchOrderByProdAndUser, fetchOrderByUser
}