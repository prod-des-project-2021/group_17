import * as C from './creators';
import ProductService from '../../services/ProductService';
import OrderService from '../../services/OrderService';
import { setUser } from '../auth/actions';
import { setError } from '../error/creators';

const { postProductData } = ProductService();

export const addProduct = (name, description, category, price, files) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let fileArray = files.map((f) => { return f.base64 });
		let result = postProductData(name, price, description, fileArray, category, token);
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		else {
			dispatch(setError("Product Added Successfully!"));
		}

	} catch (error) {
		dispatch(setError(error));
	}
};

export const getProducts = (id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = null;
		if (id == null) result = await ProductService().getProductsData(token)
		else result = await ProductService().getProductsDataCategory(token, id)
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		else if (result) dispatch(C.getProductSucceeded(result));
	} catch (error) {
		dispatch(setError(error));
	}
};

export const deleteProduct = (product_id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = await ProductService().deleteProductData(product_id, token)
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		else if (result) {
			dispatch(C.deleteProductSucceeded(result))
			dispatch(getOwnProducts())
			dispatch(setError("Product Deleted Successfully!"));
		}
	} catch (error) {
		dispatch(setError(error));
	}
}

export const addProductToCart = (product) => async (dispatch) => {
	dispatch(C.addProductToCart(product));
}

export const removeProductFromCart = (product) => async (dispatch) => {
	dispatch(C.removeProductFromCart(product));
}

export const getOwnProducts = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = await ProductService().getOwnProductsData(token)
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		else if (result) dispatch(C.getProductSucceeded(result));
	} catch (error) {
		dispatch(setError(error));
	}
};

export const checkout = (products) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = await OrderService().orderData(products, token)
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		dispatch(setUser());
		products.map((pr) => { return dispatch(C.removeProductFromCart(pr)) });
	} catch (error) {
		dispatch(setError(error));
	}
};

export const getOrders = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = await OrderService().getMyOrders(token)
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
		else if(result) dispatch(C.getOrders(result));
	} catch (error) {
		dispatch(setError(error));
	}
}