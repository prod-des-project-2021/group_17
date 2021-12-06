const { connectionManager } = require("../config/db");
const Product = require("../models/Product");
const { use } = require("../routes");
const {createProduct, fetchProduct, fetchProductById, removeProduct, editProduct} = require("../services/product.service")

const addProduct = async (req, res, next) => {
    try {
      await createProduct(req)
      res.sendStatus(201)
      next()
    } catch(e) {
      res.status(500)
      res.send(e.message)
      console.log(e.message)
    }
};

const getProduct = async (req, res, next) => {
  try {
		prod = await fetchProduct();
    res.status(200);
		res.send(prod);
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(400);
	}
};

const getProductbyId = async (req, res, next) => {
	try {
		prod = await fetchProductById(req.params.pid);

		if (!prod) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.send(prod);
		}
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(400);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
    prod = await fetchProductById(req.params.pid);

    if(prod.user_id == req.user.id || req.user.isAdmin){
      await removeProduct(req.params.pid);
      res.sendStatus(200);
    }
    else{
      res.sendStatus(401);
    }
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(400);
	}
};

const updateProduct = async (req, res, next) => {
	try {
    prod = await fetchProductById(req.params.pid);

    if(!prod){
       res.sendStatus(404);
    }
    else{
      if(prod.user_id == req.user.id || req.user.isAdmin){
        await editProduct(req.body, req.params.pid);
        res.sendStatus(200);
      }
      else{
        console.log("A");
        res.sendStatus(401);
      }
    }
    
		
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(400);
	}
};

module.exports = {
    addProduct, getProduct, getProductbyId, deleteProduct, updateProduct
}