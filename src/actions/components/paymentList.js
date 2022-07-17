import axios from "../../helpers/axios"
import { paymentListConstants } from '../constants';
import { deletedPaymentList, updatedPaymentList } from '../api/paymentList';


export const getPaymentList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: paymentListConstants.GET_PAYMENT_LIST_REQUEST })
            const res = await axios.get("paymentList/get")
            if (res.status === 200) {
                const { paymentList } = res.data
                dispatch({
                    type: paymentListConstants.GET_PAYMENT_LIST_SUCCESS,
                    payload: {
                        paymentList
                    }
                })
            } else {
                dispatch({ type: paymentListConstants.GET_PAYMENT_LIST_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addPaymentList = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: paymentListConstants.ADD_PAYMENT_LIST_REQUEST })
            const res = await axios.post("paymentList/create", form)
            if (res.status === 201) {
                dispatch({ type: paymentListConstants.ADD_PAYMENT_LIST_SUCCESS })
                dispatch(getPaymentList())
            } else {
                dispatch({ type: paymentListConstants.ADD_PAYMENT_LIST_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updatePaymentList = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedPaymentList(id, post)
        dispatch({
            type: paymentListConstants.GET_PAYMENT_LIST_SUCCESS, payload: data
        })
        dispatch(getPaymentList())
    } catch (error) {
        console.log(error);
    }
}

export const deletePaymentList = (id) => async (dispatch) => {
    try {
        await deletedPaymentList(id);
        dispatch({ type: paymentListConstants.DELETE_PAYMENT_LIST_SUCCESS, payload: id });
        dispatch(getPaymentList())
    } catch (error) {
        console.log(error);
    }
}