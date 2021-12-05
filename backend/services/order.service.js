const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

const createOrder = async (request) => {

    //  console.log(request.user);
    const usrID = request.user.id;
    const prodID = request.params.pid;

    request.body.status = "in order";
    request.body.user_id = usrID;
    request.body.product_id = prodID;
    const order = Order.build(request.body);
    
    console.log("Order saved");
    
    await order.save();

    //console.log(usrID);
}

module.exports = {
    createOrder
}