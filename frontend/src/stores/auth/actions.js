import * as C from './creators';
import UserService from '../../services/UserService';

export const signIn = (email, password) => async (dispatch) => {
	try {
		let auth = await UserService().signIn(email, password);
		if (auth.hasOwnProperty('accessToken')) {
			localStorage.setItem('token', auth.accessToken);
            dispatch(C.setToken(auth.accessToken));
		}
	} catch (error) {
		dispatch(C.signInFailed(error));
	}
};

export const getCurrent = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	if(token) dispatch(C.setToken(token));
};

export const signOut = () => async (dispatch) => {
	try {
	    localStorage.removeItem("token");
	    dispatch(C.clearToken());
	} catch (error) {
	    dispatch(C.signOutFailed(error));
	}
};

export const signUp = (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => async (dispatch) => {
	try {
	    let auth = await UserService().signUp(firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password);
        if (auth.hasOwnProperty('accessToken')) {
			localStorage.setItem('token', auth.accessToken);
            dispatch(C.setToken(auth.accessToken));
		}
		console.log(auth);
	} catch (error) {
	    dispatch(C.signUpFailed(error));
	}
};

export const saveChanges = (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => async (dispatch) => {
	try {
		let token = localStorage.getItem("token");
	    let auth = await UserService().saveChanges(firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password, token);
		console.log(auth);
	} catch (error) {
	    dispatch(C.signUpFailed(error));
	}
};

export const deleteUser = (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => async (dispatch) => {
	try {
		let token = localStorage.getItem("token");
	    let auth = await UserService().deleteUser(firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password, token);
		console.log(auth);
	} catch (error) {
	    dispatch(C.signUpFailed(error));
	}
};

export const setUser = () => async (dispatch) => {
	try {
	    let token = localStorage.getItem("token");
		let me = await UserService().getMe(token);
		if(me.hasOwnProperty("first_name")) dispatch(C.setUser(me));
		else throw new Error("Expired session");
		
	} catch (error) {
		localStorage.removeItem("token");
	    dispatch(C.clearToken());
	}
};