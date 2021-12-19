import * as C from './creators';
import ProductService from '../../services/ProductService';

const { postProductData } = ProductService();

export const addProduct = (name, description, category, price, files) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let fileArray = files.map((f) => { return f.base64 });
		postProductData(name, price, description, fileArray, category, token);
	} catch (error) {
		console.log(error);
	}
};

export const getProducts = (id) => async (dispatch) => {
	const token = localStorage.getItem('token');
	let result = null;
	if (id == null) result = await ProductService().getProductsData(token)
	else result = await ProductService().getProductsDataCategory(token, id)
	result.forEach(function (element) {
		element.isSelected = false;
	});
	if (result) dispatch(C.getProductSucceeded(result));
};

export const deleteProduct = (product_id) => async (dispatch) => {
	const token = localStorage.getItem('token');
	let result = await ProductService().deleteProductData(product_id, token)
	if (result) dispatch(C.deleteProductSucceeded(result));
}

export const addProductToCart = (product) => async (dispatch) => {
	dispatch(C.addProductToCart(product));
}

export const removeProductFromCart = (id) => async (dispatch) => {
	dispatch(C.removeProductFromCart(id));
}

export const getOwnProducts = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	let result = await ProductService().getOwnProductsData(token)
	if (result) dispatch(C.getProductSucceeded(result));
};
