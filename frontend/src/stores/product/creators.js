import Types from '../types';

export const getProductSucceeded = (product) => {
	return {
		type: Types.GET_PRODUCT_SUCCEEDED,
		payload: product
	};
};

export const deleteProductsSucceeded = (product) => {
	return {
		type: Types.DELETE_PRODUCTS_SUCCEEDED,
		payload: product
	};
};
