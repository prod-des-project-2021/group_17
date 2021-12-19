import Types from '../types';

const initialState = {
    products: null,
    error: undefined,
    cart: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_PRODUCT_SUCCEEDED:
            return {
                ...state,
                products: payload,
            };
        case Types.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            }
        case Types.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item !== payload),
            }
        default:
            return state;
    }
};

export default reducer;
