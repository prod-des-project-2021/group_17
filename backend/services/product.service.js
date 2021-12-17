const fs = require("fs")
const Product = require("../models/Product");
const Product_Picure = require("../models/Product_Pictures");
const Category = require("../models/Product_Category")
const seq = require('sequelize');
const { Sequelize } = require("../config/db");

const saveProductPicture = async (pid, ppid, data) => {

    var img = data.split(';base64,').pop();
    var ext = data.substring(data.indexOf('/') + 1, data.indexOf(';base64'));
    
    var dir = "./pics/"
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
        

    var url = dir + "name" + String(pid) + "." + String(ppid) + "." + ext;
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

    var cat = await Category.findOne({where: {category_name: request.body.category}}).then(function (category) {
        if(!category)
            return null;
        else
            return category.dataValues;
    });

    var catID = await Category.findOne({where: {category_name:  'Other'}}).then(function (category) {
        return category.dataValues.id;
    });

    console.log(catID);

    if(cat)
        catID = cat.id;

    console.log(catID);
    
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
    return await Product.findAll({attributes:{exclude: ['user_id']}}).then(async function(p) {
        var prods = p.map(async function(obj) {
            let newEl = obj.dataValues;
            newEl.picture = await getOnePicture(newEl.id);
            return newEl;    
        });

        var newObj = Promise.all(prods);
        
        return newObj;
    });
}

const fetchAvailableProducts = async() => {
    return await Product.findAll({attributes:{where: {status: 0}, exclude: ['user_id']}}).then(async function(p) {
        var prods = p.map(async function(obj) {
            let newEl = obj.dataValues;
            newEl.picture = await getOnePicture(newEl.id);
            return newEl;    
        });

        var newObj = Promise.all(prods);
        
        return newObj;
    });
}

const fetchProductById = async(pid) => {
    return await Product.findOne({where: {id: pid}}).then(async function (prod) {
        if(!prod)
            return null;
        else{
            prod.dataValues.picture = await getAllPictures(prod.id);
            return prod.dataValues;
        }
            
    });
}

const fetchOnlyProduct = async(pid) => {
    return await Product.findOne({where: {id: pid}}).then(async function (prod) {
        if(!prod)
            return null;
        else{
            return prod.dataValues;
        }          
    });
}

const fetchProductByCategory = async(category) => {
    return await Product.findAll({attributes:{where:{category: category}, exclude: ['user_id']}}).then(async function(p) {
        var prods = p.map(async function(obj) {
            let newEl = obj.dataValues;
            newEl.picture = await getOnePicture(newEl.id);
            return newEl;    
        });

        var newObj = Promise.all(prods);
        
        return newObj;
    });
}

const fetchProductByWord = async(word) => {
    let verifier = {name: {[seq.substring]: 'cool'}}
    return await Product.findAll({where:
        {
            [Sequelize.Op.or]: [
            {
                name: {
                    [Sequelize.Op.substring]: word
                }
            },
            {
                description: {
                    [Sequelize.Op.substring]: word
                }
            }
        ]
    }

        //Sequelize.where(
        //    Sequelize.fn('LOCATE', word, Sequelize.col('name')),
        //    Sequelize.Op.ne,
        //    0
        //)
    
    }).then(async function(p) 
    {
        var prods = p.map(async function(obj) {
            let newEl = obj.dataValues;
            newEl.picture = await getOnePicture(newEl.id);
            return newEl;    
        });

        var newObj = Promise.all(prods);
        
        return newObj;
    });
}

const removeProduct = async(pid) => {
    await Product_Picure.destroy({where: {product_id: pid}});
    await Product.destroy({where: {id: pid}});
}

const editProduct = async(content, pid) => {
    var prod = Product.findOne({where: {id: pid}});
    
    var to_update = {};
    for(var key of Object.keys(content)){
        if(key != "user_id")
            to_update[key] = content[key];
    }
    
    await Product.update(to_update, {where: {id: pid}});
}

const getOnePicture = async(pid) => {
    var pic = await Product_Picure.findOne({where: {product_id: pid}});
    var pics = [];

    if(pic){
        if(fs.existsSync("./"+pic.dataValues.picture_url)){
            var content = fs.readFileSync("./"+pic.dataValues.picture_url, {encoding: 'base64'});
            pics.push(String(content));    
        }
        
    }
    return pics;
}


const getAllPictures = async(pid) => {
    var allpics = await Product_Picure.findAll({where: {product_id: pid}}).then(function(p) {return p.map(function(obj) {return obj.dataValues})});
    var pic;
    var pics = [];
    
    for(let i=0; i < allpics.length; ++i){
        
        pic = allpics[i];
        
        console.log(pic);
        
        if(pic){
           
           var content = fs.readFileSync("./"+pic.picture_url, {encoding: 'base64'});
           pics.push(String(content));
        }
    }

    return pics;
}

const IncreaseRelevanceScore = async(cid) => {
    await Category.increment('relevance', {by: 1, where: { id: cid } });
}

module.exports = {
    createProduct, fetchProduct, removeProduct, fetchProductById, fetchProductByWord, fetchProductByCategory, fetchAvailableProducts, fetchOnlyProduct, editProduct, getOnePicture, getAllPictures,IncreaseRelevanceScore
}