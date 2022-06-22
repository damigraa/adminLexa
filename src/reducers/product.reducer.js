import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    view: 'list',
    activeCategory: 1,
    currentCategory: "",
    totalCount: 0,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.DELETE_PRODUCT_BY_ID_SUCCESS:
            return state.products.filter((products) => products._id !== action.payload)
        case productConstants.UPDATE_PRODUCT_BY_ID_SUCCESS:
            return state.products.map((products) => products._id === action.payload._id ? action.payload : products)
        case productConstants.GET_PRODUCTS_BY_SLUG_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case productConstants.GET_PRODUCTS_BY_SLUG_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                totalCount: action.payload.total__count

            };
            break;
        case productConstants.GET_PRODUCTS_BY_SLUG_FAILURE:
            state = {
                ...state,
                loading: false
            };
            break;
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case productConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
        case productConstants.SET_CURRENT_CATEGORY:
            state = {
                ...state,
                currentCategory: action.payload
            }
            break;
        case productConstants.SET_ACTIVE_CATEGORY:
            state = {
                ...state,
                activeCategory: action.payload
            }
            break;
    }

    return state;
}
export const setCurrentCategory = (currentCategory) => ({ type: productConstants.SET_CURRENT_CATEGORY, payload: currentCategory })
export const setFileView = (payload) => ({ type: productConstants.SET_VIEW, payload })
export const setActiveCategory = (payload) => ({ type: productConstants.SET_ACTIVE_CATEGORY, payload })
export const setProduct = (products) => ({ type: productConstants.GET_ALL_PRODUCTS_SUCCESS, payload: products })