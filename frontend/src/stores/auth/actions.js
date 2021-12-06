
import * as C from './creators';

export const signIn = (email, password) => async (dispatch) => {
    // try {
    //     dispatch(C.signInRequested());
    //     let auth = await AuthService.logIn(email, password);
    //     if (auth.status !== 200) {
    //         return dispatch(C.signInFailed(auth.message));
    //     }
    //     await localStorage.setItem('uhelp_token', auth.data.token)
    //     dispatch(C.signInSucceeded(auth.data));
    // } catch (error) {
    //     dispatch(C.signInFailed(error));
    // }
};

export const getCurrent = () => async (dispatch) => {
    // try {
    //     dispatch(C.getCurrent());
    //     let auth = await AuthService.getCurrentUser();
    //     dispatch(C.getCurrentSucceeded(auth.data));
    // } catch (error) {
    //     dispatch(C.getCurrentFailed(error));
    // }
};

export const signOut = () => async (dispatch) => {

    // try {
    //     dispatch(C.signOutRequested());

    //     await AuthService.signOut();

    //     dispatch(C.signOutSucceeded());
    // } catch (error) {
    //     dispatch(C.signOutFailed(error));
    // }
};

export const signUp = (firstName, lastName, email, password, dob, proofOfEnrolment, roleId) => async (dispatch) => {
    // try {
    //     dispatch(C.signUpRequested());
    //     let auth = await AuthService.signUp(firstName, lastName, email, password, dob, proofOfEnrolment, roleId);
    //     if (auth.status !== 201) {
    //         return dispatch(C.signUpFailed(auth.message));
    //     }
    //     dispatch(C.signUpSucceeded(auth.data));
    // } catch (error) {
    //     dispatch(C.signUpFailed(error));
    // }
};

export const setToken = (token) => async (dispatch) => {
    // if (token) {
    //     let result = await AuthService.getCurrentUser();
    //     try {
    //         dispatch(C.setToken(token));
    //         dispatch(C.setUser(result?.data));
    //     }
    //     catch (e) { console.error(e) }
    // }
};

