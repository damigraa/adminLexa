import axios from "../../helpers/axios"
import { aboutUsConstants } from '../constants';
import { deletedAboutUs, updatedAboutUs } from '../api/aboutUs';


export const getAboutUs = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: aboutUsConstants.GET_ABOUT_US_REQUEST })
            const res = await axios.get("aboutUs/get")
            if (res.status === 200) {
                const { aboutUs } = res.data
                dispatch({
                    type: aboutUsConstants.GET_ABOUT_US_SUCCESS,
                    payload: {
                        aboutUs
                    }
                })
            } else {
                dispatch({ type: aboutUsConstants.GET_ABOUT_US_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addAboutUs = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: aboutUsConstants.ADD_ABOUT_US_REQUEST })
            const res = await axios.post("aboutUs/create", form)
            if (res.status === 201) {
                dispatch({ type: aboutUsConstants.ADD_ABOUT_US_SUCCESS })
                dispatch(getAboutUs())
            } else {
                dispatch({ type: aboutUsConstants.ADD_ABOUT_US_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updateAboutUs = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedAboutUs(id, post)
        dispatch({
            type: aboutUsConstants.GET_ABOUT_US_SUCCESS, payload: data
        })
        dispatch(getAboutUs())
    } catch (error) {
        console.log(error);
    }
}

export const deleteAboutUs = (id) => async (dispatch) => {
    try {
        await deletedAboutUs(id);
        dispatch({ type: aboutUsConstants.DELETE_ABOUT_US_SUCCESS, payload: id });
        dispatch(getAboutUs())
    } catch (error) {
        console.log(error);
    }
}