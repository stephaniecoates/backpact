//initial state
const initialState = {
    user: {},
    alert: {},
    modalVisible: false
}

//define strings to variables
const USER_DATA = 'USER_DATA'
const ALERT_DATA = 'ALERT_DATA'
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

//reducer function
export default function reducer (state=initialState, action) {
    switch (action.type) {
        case USER_DATA:
        return {...state, user: action.payload}

        case ALERT_DATA:
        return {...state, alert: action.payload}

        case SHOW_MODAL:
        return {...state, modalVisible: action.payload}

        case HIDE_MODAL:
        return {...state, modalVisible: action.payload}

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

export function showModal () {
    return {
    type: SHOW_MODAL,
    payload: true
    }
}

export function hideModal () {
    return {
    type: SHOW_MODAL,
    payload: false
    }
}