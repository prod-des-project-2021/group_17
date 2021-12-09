import * as C from './creators';
import ProductService from '../../services/ProductService';

const {postProductData } = ProductService();

export const addProduct = (name,description,category,price,files) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let fileArray = files.map((f) => {return f.base64});
		postProductData(name,price,description,fileArray,category,token);
	} catch (error) {
	    console.log(error);
	}
};

export const getProduct = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	let result = ProductService().getProductsData(token)
	if(token) dispatch(C.getProductSucceeded(result));
};