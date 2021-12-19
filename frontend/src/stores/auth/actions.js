import * as C from './creators';
import UserService from '../../services/UserService';
import { setError } from '../error/creators';

export const signIn = (email, password) => async (dispatch) => {
	try {
		let auth = await UserService().signIn(email, password);
		if (auth.hasOwnProperty('accessToken')) {
			localStorage.setItem('token', auth.accessToken);
            dispatch(C.setToken(auth.accessToken));
		}
		if(auth.hasOwnProperty('error')){
			dispatch(setError(auth.error));
		}
	} catch (error) {
		dispatch(setError(error));
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
	    dispatch(setError(error));
	}
};

export const signUp = (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => async (dispatch) => {
	try {
	    let auth = await UserService().signUp(firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password);
        if (auth.hasOwnProperty('accessToken')) {
			localStorage.setItem('token', auth.accessToken);
            dispatch(C.setToken(auth.accessToken));
		}
		if(auth.hasOwnProperty('error')){
			dispatch(setError(auth.error));
		}
	} catch (error) {
	    dispatch(setError(error));
	}
};

export const saveChanges = (firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password) => async (dispatch) => {
	try {
		let token = localStorage.getItem("token");
	    let auth = await UserService().saveChanges(firstName, lastName, dateOfBirth, gender, adress, phoneNumber, Email, password, token);
		if(auth.hasOwnProperty('error')){
			dispatch(setError(auth.error));
		}
		else if(auth) dispatch(setError("User Updated!"));
	} catch (error) {
	    dispatch(setError(error));
	}
};


export const deleteUser = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		let result = await UserService().deleteUser(token)
		if(result) {
			dispatch(C.deleteUserSucceeded(result));
			localStorage.clear('token');
		}
		if(result.hasOwnProperty('error')){
			dispatch(setError(result.error));
		}
	} catch (error) {
	    dispatch(setError(error));
	}
} 

export const setUser = () => async (dispatch) => {
	try {
	    let token = localStorage.getItem("token");
		let me = await UserService().getMe(token);
		if(me.hasOwnProperty("first_name")) dispatch(C.setUser(me));
		else throw new Error("Expired session");	
	} catch (error) 
	{
		dispatch(setError(error));
		localStorage.removeItem("token");
	    dispatch(C.clearToken());
	}
};

export const addCredits = (credits) => async (dispatch) => {
	try {
	    let token = localStorage.getItem("token");
		let result = await UserService().addCredits(token,credits);
		if(result.hasOwnProperty('error')){
			setError(result.error);
		}
		else if(result) dispatch(setError("Credits Added"));
		let me = await UserService().getMe(token);
		if(me.hasOwnProperty("first_name")) dispatch(C.setUser(me));
		else throw new Error("Expired session");
	} catch (error) {
		dispatch(setError(error));
	}
};