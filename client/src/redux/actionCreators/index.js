import axios from 'axios'
import { GET_BPI_USD, LOADING, CHANGE_NAME, ERROR } from '../constants'

/**
 * This first sets loading to true, then either sets error or price properies in state,
 * then sets loading to false again after either one gets back
 */
export const getBpiUSD = (path) => async dispatch => {
    const url = path ? `https://api.coindesk.com/v1/${path}/currentprice.json` : 'https://api.coindesk.com/v1/bpi/currentprice.json'
    dispatch({
        type: LOADING,
        payload: { loading: true }
    })

    try {
        const { data } = await axios.get(url)
        dispatch({
            type: GET_BPI_USD, payload: { USD: data.bpi.USD.rate }
        })

        dispatch({
            type: LOADING,
            payload: { loading: false }
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: {
                error
            }
        })

        dispatch({
            type: LOADING,
            payload: { loading: false }
        })
    }
}

export const changeName = name => dispatch => {
    dispatch({
        type: CHANGE_NAME,
        payload: {
            name
        }
    })
}