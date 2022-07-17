import { contactConstants } from '../../actions/constants';



const initialState = {
    contact: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case contactConstants.DELETE_CONTACT_SUCCESS:
            return state.contact.filter((contact) => contact._id !== action.payload)
        case contactConstants.UPDATE_CONTACT_SUCCESS:
            return state.contact.map((contact) => contact._id === action.payload._id ? action.payload : contact)


        case contactConstants.GET_CONTACT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case contactConstants.GET_CONTACT_SUCCESS:
            state = {
                ...state,
                loading: false,
                contact: action.payload.contact
            }
            break
        case contactConstants.GET_CONTACT_FAILURE:
            state = {
                ...state,
                loading: false,
            }
            break
    }
    return state
}