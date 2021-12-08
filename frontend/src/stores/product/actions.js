import * as C from './creators';
import ProductService from '../../services/ProductService';

const {postProductData} = ProductService();

export const addProduct = (name,description,category,price,files) => async (dispatch) => {
	try {
		let fileArray = files.map((f) => {return f.base64});
		postProductData(name,price,description,fileArray,category);
	} catch (error) {
	    console.log(error);
	}
};