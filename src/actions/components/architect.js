import axios from "../../helpers/axios"
import { architectConstants } from "../constants"
import { updatedArchitect, deletedArchitect } from '../api/architect';

export const getArchitect = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectConstants.GET_ARCHITECT_REQUEST })
            const res = await axios.get("architect/get")
            if (res.status === 200) {
                const { architect } = res.data
                dispatch({
                    type: architectConstants.GET_ARCHITECT_SUCCESS,
                    payload: {
                        architect
                    }
                })
            } else { 
                dispatch({ type: architectConstants.GET_ARCHITECT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addArchitect = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectConstants.ADD_ARCHITECT_REQUEST })
            const res = await axios.post("architect/create", form)
            if (res.status === 201) {
                dispatch({ type: architectConstants.ADD_ARCHITECT_SUCCESS })
                dispatch(getArchitect())
            } else {
                dispatch({ type: architectConstants.ADD_ARCHITECT_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateArchitect = (id, architect) => async (dispatch) => {
    try {
        const { data } = await updatedArchitect(id, architect)
        dispatch({
            type: architectConstants.UPDATE_ARCHITECT_SUCCESS, payload: data
        })
        dispatch(getArchitect())
    } catch (error) {
        console.log(error);
    }
}


export const deleteArchitect = (id) => async (dispatch) => {
    try {
        await deletedArchitect(id);
        dispatch({ type: architectConstants.DELETE_ARCHITECT_SUCCESS, payload: id });
        dispatch(getArchitect())
    } catch (error) {
        console.log(error);
    }
}