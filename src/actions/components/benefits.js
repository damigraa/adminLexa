import axios from "../../helpers/axios"
import { benefitsConstants } from '../constants';
import { deletedBenefits, updatedBenefits } from '../api/benefits';


export const getBenefits = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: benefitsConstants.GET_BENEFITS_REQUEST })
            const res = await axios.get("benefits/get")
            if (res.status === 200) {
                const { benefits } = res.data
                dispatch({
                    type: benefitsConstants.GET_BENEFITS_SUCCESS,
                    payload: {
                        benefits
                    }
                })
            } else {
                dispatch({ type: benefitsConstants.GET_BENEFITS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addBenefits = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: benefitsConstants.ADD_BENEFITS_REQUEST })
            const res = await axios.post("benefits/create", form)
            if (res.status === 201) {
                dispatch({ type: benefitsConstants.ADD_BENEFITS_SUCCESS })
                dispatch(getBenefits())
            } else {
                dispatch({ type: benefitsConstants.ADD_BENEFITS_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updateBenefits = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedBenefits(id, post)
        dispatch({
            type: benefitsConstants.GET_BENEFITS_SUCCESS, payload: data
        })
        dispatch(getBenefits())
    } catch (error) {
        console.log(error);
    }
}

export const deleteBenefits = (id) => async (dispatch) => {
    try {
        await deletedBenefits(id);
        dispatch({ type: benefitsConstants.DELETE_BENEFITS_SUCCESS, payload: id });
        dispatch(getBenefits())
    } catch (error) {
        console.log(error);
    }
}