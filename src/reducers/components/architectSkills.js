import { architectSkillsConstants } from "../../actions/constants"


const initialState = {
    architectSkills: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case architectSkillsConstants.DELETE_ARCHITECT_SKILLS_SUCCESS:
            return state.architectSkills.filter((architectSkills) => architectSkills._id !== action.payload)
        case architectSkillsConstants.UPDATE_ARCHITECT_SKILLS_SUCCESS:
            return state.architectSkills.map((architectSkills) => architectSkills._id === action.payload._id ? action.payload : architectSkills)


        case architectSkillsConstants.GET_ARCHITECT_SKILLS_SUCCESS:
            state = {
                ...state,
                architectSkills: action.payload.architectSkills,

            }
            break
    }
    return state
}
