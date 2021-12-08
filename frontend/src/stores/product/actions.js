import * as C from './creators';
import ProductService from '../../services/ProductService';

const {postProductData} = ProductService();

export const addProduct = (name,description,category,price,files) => async (dispatch) => {
	try {
	    files.forEach(function(v){ delete v.file });
		console.log(files);
		//postProductData(name,price,description,files,category);
	} catch (error) {
	    console.log(error);
	}
};