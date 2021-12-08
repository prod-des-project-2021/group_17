import Types from '../types';

export const signInSucceeded = (authUser) => {
	return {
		type: Types.SIGN_IN_SUCCEEDED,
		payload: authUser
	};
};
