import Types from '../types';

const initialState = {
    error: null
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.SET_ERROR:
            return {
                error: payload,
            };
        case Types.CLEAR_ERROR:
            return {
                error: null,
            };
        default:
            return state;
    }
};

export default reducer;
