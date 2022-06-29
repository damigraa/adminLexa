import axios from "../../helpers/axios"
import { deliveryInfoConstants } from '../constants';
import { deletedDeliveryInfo, updatedDeliveryInfo } from './../api/deliveryInfo';


export const getDeliveryInfo = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: deliveryInfoConstants.GET_DELIVERY_INFO_REQUEST })
            const res = await axios.get("deliveryInfo/get")
            if (res.status === 200) {
                const { deliveryInfo } = res.data
                dispatch({
                    type: deliveryInfoConstants.GET_DELIVERY_INFO_SUCCESS,
                    payload: {
                        deliveryInfo
                    }
                })
            } else {
                dispatch({ type: deliveryInfoConstants.GET_DELIVERY_INFO_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addDeliveryInfo = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: deliveryInfoConstants.ADD_DELIVERY_INFO_REQUEST })
            const res = await axios.post("deliveryInfo/create", form)
            if (res.status === 201) {
                dispatch({ type: deliveryInfoConstants.ADD_DELIVERY_INFO_SUCCESS })
                dispatch(getDeliveryInfo())
            } else {
                dispatch({ type: deliveryInfoConstants.ADD_DELIVERY_INFO_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}


export const updateDeliveryInfo = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedDeliveryInfo(id, post)
        dispatch({
            type: deliveryInfoConstants.GET_DELIVERY_INFO_SUCCESS, payload: data
        })
        dispatch(getDeliveryInfo())
    } catch (error) {
        console.log(error);
    }
}

export const deleteDeliveryInfo = (id) => async (dispatch) => {
    try {
        await deletedDeliveryInfo(id);
        dispatch({ type: deliveryInfoConstants.DELETE_DELIVERY_INFO_SUCCESS, payload: id });
        dispatch(getDeliveryInfo())
    } catch (error) {
        console.log(error);
    }
}