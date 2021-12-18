const { connectionManager } = require("../config/db");
const Product = require("../models/Product");
const { use } = require("../routes");
const {createProduct, fetchProduct,fetchOnlyProduct, fetchOwnProducts, fetchAvailableProducts, fetchProductByWord, fetchProductById, fetchProductByCategory, removeProduct, editProduct} = require("../services/product.service")

const addProduct = async (req, res, next) => {
    var error = {status:"", error:[]};
  
    try {
      await createProduct(req);
      res.sendStatus(201);
      next();
    }catch(e){
      res.status(500);
      error.status = 500;
      error.error.push(e.message);
      return res.send(error);
    }
};

const getProduct = async (req, res, next) => {
  var error = {status:"", error:[]};

  try {
		prod = await fetchAvailableProducts(req.user.id);
    res.status(200);
		res.send(prod);
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const getProductByWord = async (req, res, next) => {
  var error = {status:"", error:[]};

  try {
		prod = await fetchProductByWord(req.body.word, req.user.id);
    res.status(200);
		res.send(prod);
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const getProductbyId = async (req, res, next) => {
  var error = {status:"", error:[]};
	try {
		var prod = await fetchProductById(req.params.pid);

		if (!prod) {
			error.status = 404;
      res.status(404);
      error.error.push("Product does not exist");
      return res.send(error);
		} else {
			res.status(200);
			res.send(prod);
		}
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const getOwnProduct = async (req, res, next) => {
  var error = {status:"", error:[]};

  try {
		prod = await fetchOwnProducts(req.user.id);
    res.status(200);
		res.send(prod);
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const getProductbyCategory = async (req, res, next) => {
  var error = {status:"", error:[]};
	try {
		prod = await fetchProductByCategory(req.params.cid, req.user.id);

		if (!prod) {
			error.status = 404;
      res.status(404);
      error.error.push("Product does not exist");
      return res.send(error);
		} else {
			res.status(200);
			res.send(prod);
		}
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const deleteProduct = async (req, res, next) => {
  var error = {status:"", error:[]};
	try {
    prod = await fetchOnlyProduct(req.params.pid);

    if(!prod){
      error.status = 404;
      res.status(404);
      error.error.push("Product does not exist");
      return res.send(error);
    }

    if(prod.user_id == req.user.id || req.user.isAdmin){
      console.log("A");
      await removeProduct(req.params.pid);
      res.sendStatus(200);
    }
    else{
      error.status = 403;
      res.status(403);
      error.error.push("Not allowed");
      return res.send(error);
    }
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

const updateProduct = async (req, res, next) => {
  var error = {status:"", error:[]};
	try {
    prod = await fetchProductById(req.params.pid);

    if(!prod){
      error.status = 404;
      res.status(404);
      error.error.push("Product not found");
      return res.send(error);
    }
    else{
      if(prod.user_id == req.user.id || req.user.isAdmin){
        await editProduct(req.body, req.params.pid);
        res.sendStatus(200);
      }
      else{
        error.status = 403;
        res.status(403);
        error.error.push("Not allowed");
        return res.send(error);
      }
    }
		next();
	} catch (e) {
		error.status = 400;
    res.status(400);
    error.error.push(e.message);
    return res.send(error);
	}
};

module.exports = {
    addProduct, getProduct, getProductbyId, getProductbyCategory, getProductByWord, deleteProduct, updateProduct, getOwnProduct
}