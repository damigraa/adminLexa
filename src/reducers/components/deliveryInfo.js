import { deliveryInfoConstants } from '../../actions/constants';



const initialState = {
    deliveryInfo: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case deliveryInfoConstants.DELETE_DELIVERY_INFO_SUCCESS:
            return state.deliveryInfo.filter((deliveryInfo) => deliveryInfo._id !== action.payload)
        case deliveryInfoConstants.UPDATE_DELIVERY_INFO_SUCCESS:
            return state.deliveryInfo.map((deliveryInfo) => deliveryInfo._id === action.payload ? action.payload : deliveryInfo)
        case deliveryInfoConstants.GET_DELIVERY_INFO_SUCCESS:
            state = {
                ...state,
                deliveryInfo: action.payload.deliveryInfo
            }
            break
    }
    return state
}