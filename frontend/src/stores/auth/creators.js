import Types from '../types';
// Sign In
export const signInSucceeded = (authUser) => {
	return {
		type: Types.SIGN_IN_SUCCEEDED,
		payload: authUser
	};
};
export const signInFailed = (error) => {
	return {
		type: Types.SIGN_IN_FAILED,
		payload: error
	};
};
// Sign Out
export const signOutSucceeded = () => {
	return {
		type: Types.SIGN_OUT_SUCCEEDED
	};
};
export const signOutFailed = (error) => {
	return {
		type: Types.SIGN_OUT_FAILED,
		payload: error
	};
};
//Sign UP
export const signUpSucceeded = (authUser) => ({
	type: Types.SIGN_UP_SUCCEEDED,
	payload: authUser
});
export const signUpFailed = (error) => ({
	type: Types.SIGN_UP_FAILED,
	payload: error
});
//User State
export const setToken = (token) => ({
	type: Types.SET_USER_TOKEN,
	payload: token
});
export const clearToken = () => ({
	type: Types.CLEAR_USER_TOKEN
});
export const setUser = (user) => {
	return {
		type: Types.SET_USER,
		payload: user
	};
};

//delete
export const deleteUserSucceeded = (user) => {
	return {
		type: Types.DELETE_USER_SUCCEEDED,
		payload: user
	};
};

export const saveChangesFailed = (error) => {
	return {
		type: Types.SAVE_CHANGES_FAILED,
		payload: error
	};
};
