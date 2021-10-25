const SET_LOGIN = 'SET-LOGIN'

const initialState = {
    login: '',
}

export function loginPageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.login,
            }
        default:
            return state
    }
}

export const setLoginAC = (login) => {
    return { type: SET_LOGIN, login }
}
