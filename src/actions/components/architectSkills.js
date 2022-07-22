import axios from "../../helpers/axios"
import { architectSkillsConstants } from "../constants"
import { updatedArchitectSkills, deletedArchitectSkills } from '../api/architectSkills';

export const getArchitectSkills = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectSkillsConstants.GET_ARCHITECT_SKILLS_REQUEST })
            const res = await axios.get("architectSkills/get")
            if (res.status === 200) {
                const { architectSkills } = res.data
                dispatch({
                    type: architectSkillsConstants.GET_ARCHITECT_SKILLS_SUCCESS,
                    payload: {
                        architectSkills
                    }
                })
            } else { 
                dispatch({ type: architectSkillsConstants.GET_ARCHITECT_SKILLS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addArchitectSkills = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectSkillsConstants.ADD_ARCHITECT_SKILLS_REQUEST })
            const res = await axios.post("architectSkills/create", form)
            if (res.status === 201) {
                dispatch({ type: architectSkillsConstants.ADD_ARCHITECT_SKILLS_SUCCESS })
                dispatch(getArchitectSkills())
            } else {
                dispatch({ type: architectSkillsConstants.ADD_ARCHITECT_SKILLS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateArchitectSkills = (id, architectSkills) => async (dispatch) => {
    try {
        const { data } = await updatedArchitectSkills(id, architectSkills)
        dispatch({
            type: architectSkillsConstants.UPDATE_ARCHITECT_SKILLS_SUCCESS, payload: data
        })
        dispatch(getArchitectSkills())
    } catch (error) {
        console.log(error);
    }
}


export const deleteArchitectSkills = (id) => async (dispatch) => {
    try {
        await deletedArchitectSkills(id);
        dispatch({ type: architectSkillsConstants.DELETE_ARCHITECT_SKILLS_SUCCESS, payload: id });
        dispatch(getArchitectSkills())
    } catch (error) {
        console.log(error);
    }
}