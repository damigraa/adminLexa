import axios from "../../helpers/axios"
import { portfolioConstants } from "../constants"
import { updatedPortfolio, deletedPortfolio } from '../api/portfolio';

export const getPortfolio = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: portfolioConstants.GET_ALL_PORTFOLIO_REQUEST })
            const res = await axios.get("portfolio/get")
            if (res.status === 200) {
                const { portfolio } = res.data
                dispatch({
                    type: portfolioConstants.GET_ALL_PORTFOLIO_SUCCESS,
                    payload: {
                        portfolio
                    }
                })
            } else {
                dispatch({ type: portfolioConstants.GET_ALL_PORTFOLIO_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const addPortfolio = (form) => {
    return async (dispatch) => {
        try {
            dispatch({ type: portfolioConstants.ADD_PORTFOLIO_REQUEST })
            const res = await axios.post("portfolio/create", form)
            if (res.status === 201) {
                dispatch({ type: portfolioConstants.ADD_PORTFOLIO_SUCCESS })
                dispatch(getPortfolio())
            } else {
                dispatch({ type: portfolioConstants.ADD_PORTFOLIO_FAILURE })
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export const updatePortfolio = (id, portfolio) => async (dispatch) => {
    try {
        const { data } = await updatedPortfolio(id, portfolio)
        dispatch({
            type: portfolioConstants.UPDATE_PORTFOLIO_BY_ID_SUCCESS, payload: data
        })
        dispatch(getPortfolio())
    } catch (error) {
        console.log(error);
    }
}


export const deletePortfolio = (id) => async (dispatch) => {
    try {
        await deletedPortfolio(id);
        dispatch({ type: portfolioConstants.DELETE_PORTFOLIO_BY_ID_SUCCESS, payload: id });
        dispatch(getPortfolio())
    } catch (error) {
        console.log(error);
    }
}