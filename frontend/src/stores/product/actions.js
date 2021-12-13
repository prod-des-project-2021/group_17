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

export const getProducts = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	let result = await ProductService().getProductsData(token)
	if(result) dispatch(C.getProductSucceeded(result));
};