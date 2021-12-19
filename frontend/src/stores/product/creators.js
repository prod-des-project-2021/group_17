import Types from '../types';

export const getProductSucceeded = (product) => {
	return {
		type: Types.GET_PRODUCT_SUCCEEDED,
		payload: product
	};
};

export const deleteProductSucceeded = (product) => {
	return {
		type: Types.DELETE_PRODUCTS_SUCCEEDED,
		payload: product
	};
};

export const addProductToCart = (product) => {
	return {
		type: Types.ADD_PRODUCT_TO_CART,
		payload: product
	};
};

export const removeProductFromCart = (product) => {
	return {
		type: Types.REMOVE_PRODUCT_FROM_CART,
		payload: product
	};
};

export const getOrders = (order) => {
	return {
		type: Types.GET_ORDERS,
		payload: order
	};
};