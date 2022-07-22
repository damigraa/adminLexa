import { architectConstants } from "../../actions/constants"


const initialState = {
    architect: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case architectConstants.DELETE_ARCHITECT_SUCCESS:
            return state.architect.filter((architect) => architect._id !== action.payload)
        case architectConstants.UPDATE_ARCHITECT_SUCCESS:
            return state.architect.map((architect) => architect._id === action.payload._id ? action.payload : architect)


        case architectConstants.GET_ARCHITECT_SUCCESS:
            state = {
                ...state,
                architect: action.payload.architect,

            }
            break
    }
    return state
}
