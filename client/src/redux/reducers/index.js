import { GET_GOAT, CHANGE_NAME } from '../constants'

export const goatReducer = (state = { name: "gary" }, { type, payload }) => {
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: payload.name
            }
        default:
            return state
    }
}