import { createStore, MiddlewareAPI, applyMiddleware } from 'redux';
import { goatReducer } from '../reducers'
import thunk from 'redux-thunk'


export const store = createStore(goatReducer, applyMiddleware(thunk))