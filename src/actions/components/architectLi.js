import axios from "../../helpers/axios"
import { architectLiConstants } from "../constants"
import { updatedArchitectLi, deletedArchitectLi } from '../api/architectLi';

export const getArchitectLi = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectLiConstants.GET_ARCHITECT_LI_REQUEST })
            const res = await axios.get("architectLi/get")
            if (res.status === 200) {
                const { architectLi } = res.data
                dispatch({
                    type: architectLiConstants.GET_ARCHITECT_LI_SUCCESS,
                    payload: {
                        architectLi
                    }
                })
            } else { 
                dispatch({ type: architectLiConstants.GET_ARCHITECT_LI_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addArchitectLi = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: architectLiConstants.ADD_ARCHITECT_LI_REQUEST })
            const res = await axios.post("architectLi/create", form)
            if (res.status === 201) {
                dispatch({ type: architectLiConstants.ADD_ARCHITECT_LI_SUCCESS })
                dispatch(getArchitectLi())
            } else {
                dispatch({ type: architectLiConstants.ADD_ARCHITECT_LI_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updateArchitectLi = (id, architectLi) => async (dispatch) => {
    try {
        const { data } = await updatedArchitectLi(id, architectLi)
        dispatch({
            type: architectLiConstants.UPDATE_ARCHITECT_LI_SUCCESS, payload: data
        })
        dispatch(getArchitectLi())
    } catch (error) {
        console.log(error);
    }
}


export const deleteArchitectLi = (id) => async (dispatch) => {
    try {
        await deletedArchitectLi(id);
        dispatch({ type: architectLiConstants.DELETE_ARCHITECT_LI_SUCCESS, payload: id });
        dispatch(getArchitectLi())
    } catch (error) {
        console.log(error);
    }
}