import axios from 'axios'
import { GET_GOAT, CHANGE_NAME } from '../constants'

export const getGoat = () => async dispatch => {
    const { data } = await axios.get('http://placegoat.com/200')
    console.log('GET_GOAT', data)
    dispatch({
        type: GET_GOAT, payload: { data }
    })
}

export const changeName = name => dispatch => {
    dispatch({
        type: CHANGE_NAME,
        payload: {
            name
        }
    })
}