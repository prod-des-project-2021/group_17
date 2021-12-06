const { connectionManager, models } = require("../config/db");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { use } = require("../routes");
const orderService = require("../services/order.service");
const {createOrder} = orderService;

const addOrder = async (req, res, next) => {
    try {
        req.status = "A";
        await createOrder(req);
        res.sendStatus(201);
        next();
    } catch(e) {
        res.status(500)
        res.send(e.message)
        console.log(e.message)
    }
};


module.exports = {
    addOrder
}