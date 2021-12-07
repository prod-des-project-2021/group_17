const Product = require("../models/Product");

const createProduct = async (request) => {
    const usrID = request.user.id;

    request.body.user_id = usrID;
    const product = Product.build(request.body);
    
    await product.save();
}

const fetchProduct = async() => {
    return await Product.findAll({attributes:{exclude: ['user_id']}}).then(function(p) {
        return p.map(function(obj) {return obj.dataValues});
    });
}

const fetchProductById = async(pid) => {
    return await Product.findOne({where: {id: pid}}).then(function (prod) {
        if(!prod)
            return null;
        else
            return prod.dataValues;
    });
}

const removeProduct = async(pid) => {
    await Product.destroy({where: {id: pid}});
}

const editProduct = async(content, pid) => {
    prod = Product.findOne({where: {id: pid}});
    
    var to_update = {};
    for(var key of Object.keys(content)){
        if(key != "user_id")
            to_update[key] = content[key];
    }
    
    await Product.update(to_update, {where: {id: pid}});
}

module.exports = {
    createProduct, fetchProduct, removeProduct, fetchProductById, editProduct
}