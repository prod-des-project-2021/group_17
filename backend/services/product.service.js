const Product = require("../models/Product");

const createProduct = async (content) => {
    const product = Product.build(content);
    await product.save();
    
    console.log("Product saved");
}

module.exports = {
    createProduct
}