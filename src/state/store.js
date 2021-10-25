import { combineReducers, createStore } from 'redux'
import { loginPageReducer } from './loginPageReducer'

const stateFromReducers = combineReducers({
    loginPage: loginPageReducer,
})

export const store = createStore(stateFromReducers)
