import Types from '../types';

const initialState = {
    user: null,
    loading: false,
    error: undefined,
    token: null,
    isLogged: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.SIGN_IN_SUCCEEDED:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                user: payload.user,
                loading: false,
                token: payload.token,
                isLogged: true
            };

        case Types.SIGN_IN_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case Types.SIGN_OUT_SUCCEEDED:
            localStorage.removeItem('token');

            return {
                ...state,
                user: null,
                isLogged: false,
                loading: false,
                token: null
            };
        case Types.SIGN_OUT_FAILED:
            localStorage.removeItem('token');

            return {
                ...state,
                loading: false,
                isLogged: false,
                error: payload
            };
        case Types.SIGN_UP_SUCCEEDED:
            return {
                ...state,
                user: payload.user,
                loading: false,
                token: payload.token,
                isLogged: true
            };
        case Types.SIGN_UP_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case Types.SET_USER:
            return {
                ...state,
                user: payload
            };
        case Types.SET_USER_TOKEN:
            return {
                ...state,
                token: payload
            };
        case Types.CLEAR_USER_TOKEN:
            return {
                ...state,
                token: null
            };
        case Types.GET_CURRENT_SUCCEEDED:
            return {
                ...state,
                user: payload,
                isLogged: payload != null ? true : false,
                loading: false
            }
        case Types.SAVE_CHANGES_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case Types.DELETE_USER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                user: null
            };

        default:
            return state;
    }
};

export default reducer;
