import { aboutUsConstants } from '../../actions/constants';



const initialState = {
    aboutUs: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case aboutUsConstants.GET_ABOUT_US_REQUEST:
            state = {
                ...state,
                loading: true

            }
            break
        case aboutUsConstants.GET_ABOUT_US_SUCCESS:
            state = {
                ...state,
                aboutUs: action.payload.aboutUs,
                loading: false

            }
            break
        case aboutUsConstants.GET_ABOUT_US_FAILURE:
            state = {
                ...state,
                loading: false

            }
            break
    }
    return state
}