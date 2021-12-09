import Types from '../types';

export const getProductSucceeded = (product) => {
	return {
		type: Types.GET_PRODUCT_SUCCEEDED,
		payload: product
	};
};
