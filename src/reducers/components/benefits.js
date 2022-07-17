import { benefitsConstants } from '../../actions/constants';



const initialState = {
    benefits: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case benefitsConstants.GET_BENEFITS_REQUEST:
            state = {
                ...state,
                loading: true

            }
            break
        case benefitsConstants.GET_BENEFITS_SUCCESS:
            state = {
                ...state,
                benefits: action.payload.benefits,
                loading: false

            }
            break
        case benefitsConstants.GET_BENEFITS_FAILURE:
            state = {
                ...state,
                loading: false

            }
            break
    }
    return state
}