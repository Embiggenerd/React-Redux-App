import { GET_BPI_USD, LOADING, CHANGE_NAME, ERROR } from '../constants'

export const goatReducer = (state = { name: "", price: null, loading: false, error: null }, { type, payload }) => {
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: payload.name
            }
        case GET_BPI_USD:
            return {
                ...state,
                price: payload.USD
            }
        case LOADING:
            return {
                ...state,
                loading: payload.loading
            }
        case ERROR:
            return {
                ...state,
                error: payload.error
            }
        default:
            return state
    }
}