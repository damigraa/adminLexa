import { architectLiConstants } from "../../actions/constants"


const initialState = {
    architectLi: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case architectLiConstants.DELETE_ARCHITECT_LI_SUCCESS:
            return state.architectLi.filter((architectLi) => architectLi._id !== action.payload)
        case architectLiConstants.UPDATE_ARCHITECT_LI_SUCCESS:
            return state.architectLi.map((architectLi) => architectLi._id === action.payload._id ? action.payload : architectLi)


        case architectLiConstants.GET_ARCHITECT_LI_SUCCESS:
            state = {
                ...state,
                architectLi: action.payload.architectLi,

            }
            break
    }
    return state
}
