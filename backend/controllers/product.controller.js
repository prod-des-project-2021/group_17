const { connectionManager } = require("../config/db");
const Product = require("../models/Product");
const { use } = require("../routes");
const productService = require("../services/product.service")
const {createProduct} = productService

const addProduct = async (req, res, next) => {
    const content = req.body;
    try {
      await createProduct(content)
      res.sendStatus(201)
      next()
    } catch(e) {
      res.status(500)
      res.send(e.message)
      console.log(e.message)
    }
  }



module.exports = {
    addProduct
}