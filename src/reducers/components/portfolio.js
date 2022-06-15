import { portfolioConstants } from "../../actions/constants"


const initialState = {
    portfolio: [],
    portfolioDetails: {},
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case portfolioConstants.DELETE_PORTFOLIO_BY_ID_SUCCESS:
            return state.portfolio.filter((portfolio) => portfolio._id !== action.payload)
        case portfolioConstants.UPDATE_PORTFOLIO_BY_ID_SUCCESS:
            return state.portfolio.map((portfolio) => portfolio._id === action.payload._id ? action.payload : portfolio)


        case portfolioConstants.GET_ALL_PORTFOLIO_SUCCESS:
            state = {
                ...state,
                portfolio: action.payload.portfolio,

            }
            break
        case portfolioConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setFileView = (payload) => ({ type: portfolioConstants.SET_VIEW, payload })
