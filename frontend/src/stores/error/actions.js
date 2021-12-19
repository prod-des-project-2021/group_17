import * as C from './creators';

export const setError = (message) => async (dispatch) => {
	dispatch(C.setError(message));
};

export const clearError = () => async (dispatch) => {
	dispatch(C.clearError());
};
