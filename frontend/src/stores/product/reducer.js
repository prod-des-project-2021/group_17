import Types from '../types';

const initialState = {
    products: null,
    error: undefined,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_PRODUCT_SUCCEEDED:
            return {
                ...state,
                products: payload,
            };
        default:
            return state;
    }
};

export default reducer;
