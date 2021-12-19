import Types from '../types';

const initialState = {
    products: null,
    error: undefined,
    cart: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_PRODUCT_SUCCEEDED:
            let newProducts = payload.filter((product) => {
                if(state.products === null) return true
                if (state.products.some(p => p.id === product.id)) return false
                else return true
            })
            if(newProducts.length === 0) newProducts = state.products
            else newProducts.concat(state.products);
            return {
                ...state,
                products: newProducts,
            };
        case Types.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
                products: state.products.map((product) => product.id === payload.id ? { ...product, isSelected: true } : product)
            }
        case Types.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item !== payload),
                products: state.products.map((product) => product.id === payload.id ? { ...product, isSelected: false } : product)
            }
        default:
            return state;
    }
};

export default reducer;
