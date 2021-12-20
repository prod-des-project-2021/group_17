const ProductCategory = require('../models/Product_Category')

const Populate = async () => {
    let cat = ["Other","Games","Kitchen","Sport","Clothes","Home"];
    for(let i = 0; i<cat.length;i++){
        const [pp, created] = await ProductCategory.findOrCreate({
            where: { category_name: cat[i] }
          }); 
    }  
}

module.exports = Populate;