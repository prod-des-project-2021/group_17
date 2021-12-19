import Types from '../types';

export const setError = (error) => {
	return {
		type: Types.SET_ERROR,
		payload: error
	};
};

export const clearError = () => {
	return {
		type: Types.CLEAR_ERROR
	};
};