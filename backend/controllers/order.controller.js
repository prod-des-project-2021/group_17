const { connectionManager, models } = require("../config/db");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { use } = require("../routes");
const orderService = require("../services/order.service");
const { fetchProductById, editProduct} = require("../services/product.service");
const { editUser } = require("../services/user.service");
const { getUserbyId } = require("./user.controller");
const {createOrder, fetchOrderByProdAndUser, fetchOrderByUser} = orderService;

const addProductToOrder = async (req, res, next) => {
    var error = {status:"", error:[]};

    var order = await fetchOrderByProdAndUser(req.body.product_id, req.user.id);

    console.log(order);

    if(order){
        res.status(403);
        error.status = 403;
        error.error.push("Product already added");
        return res.send(error);
    }

    try {
        await createOrder(req.params.pid, req.user.id);
        res.sendStatus(201);
        next();
    } catch(e) {
        res.status(500);
        error.status = 500;
        error.error.push(e.message);
        return res.send(error);
    }
};

const orderCheckout = async(req, res, next) => {
    var error = {status:"", error:[]};
    var availability = true;

    try {
        console.log(req.user);
        var products = [];
        products = req.body.products;
        var totalCost = 0;
        for(let i = 0; i < products.length; ++i){
            var prod = await fetchProductById(products[i]);

            if(!prod || prod.status != "0"){
                availability = false;

                res.status(400);
                error.status = 400;
                error.error.push("Product inexistent or unavailable");
                return res.send(error); 
            }

            totalCost += prod.price;
        }

        if(req.user.credits < totalCost){
            res.status(400);
            error.status = 400;
            error.error.push("Insufficient funds");
            return res.send(error); 
        }

        for(let i = 0; i < products.length; ++i){
            await editProduct({"status": "1"}, products[i]);
            await createOrder(products[i], req.user.id);
        }
        await editUser({"credits": req.user.credits-totalCost}, req.user.id);
        res.sendStatus(201);
        next();
    } catch(e) {
        res.status(500);
        error.status = 500;
        error.error.push(e.message);
        return res.send(error);
    }
};

module.exports = {
    addProductToOrder, orderCheckout
}