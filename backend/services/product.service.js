const fs = require("fs")
const Product = require("../models/Product");
const Product_Picure = require("../models/Product_Pictures");
const Category = require("../models/Product_Category")

const saveProductPicture = async (pid, ppid, data) => {
    
    let img = data.split(';base64,').pop();
    var ext = data.substring(data.indexOf('/') + 1, data.indexOf(';base64'));
    

    var url = "./pics/name" + String(pid) + "." + String(ppid) + "." + ext;
    var body = {picture_url: url, product_id: pid};
    var pic = Product_Picure.build(body);

    

    fs.writeFile("./"+url, img, {encoding: 'base64'}, function(err) {
        console.log('File created');
    });

    await pic.save(); 
}

const createProduct = async (request) => {
    const usrID = request.user.id;

    request.body.user_id = usrID;

    var cat = Category.findOne({where: {category_name: request.body.category}});
    var catID = Category.findOne({where: {category_name: 'Other'}}).id;

    if(cat)
        catID = cat.id;

    request.body.category = catID;
    const product = Product.build(request.body);
    await product.save();

    const prod_id = product.id;

    if(request.body.files){
        for(let i = 0; i < request.body.files.length; ++i){
            try{
                await saveProductPicture(prod_id, i, String(request.body.files[i]));
            }
            catch(e){
                console.log(e);
            }
        }
    }
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

const fetchProductByCategory = async(category) => {
    return await Product.findAll({where:{category: category}}).then(function(p) {
        return p.map(function(obj) {return obj.dataValues});
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
    createProduct, fetchProduct, removeProduct, fetchProductById, fetchProductByCategory, editProduct
}