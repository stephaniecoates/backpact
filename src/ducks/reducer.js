//initial state
const initialState = {
    user: {},
    alert: {}
}

//define strings to variables
const USER_DATA = 'USER_DATA'
const ALERT_DATA = 'ALERT_DATA'

//reducer function
export default function reducer (state=initialState, action) {
    switch (action.type) {
        case USER_DATA:
        return {...state, user: action.payload}

        case ALERT_DATA:
        return {...state, alert: action.payload}

        default: return state;
    }
}

//action creators
export function updateUser (userData) {
    return {
        type: USER_DATA,
        payload: userData
    }
}

export function updateAlert (alertData) {
    return {
        type: ALERT_DATA,
        payload: alertData
    }
}