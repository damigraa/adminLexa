import { paymentListConstants } from '../../actions/constants';



const initialState = {
    paymentList: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case paymentListConstants.GET_PAYMENT_LIST_REQUEST:
            state = {
                ...state,
                loading: true

            }
            break
        case paymentListConstants.GET_PAYMENT_LIST_SUCCESS:
            state = {
                ...state,
                paymentList: action.payload.paymentList,
                loading: false

            }
            break
        case paymentListConstants.GET_PAYMENT_LIST_FAILURE:
            state = {
                ...state,
                loading: false

            }
            break
    }
    return state
}