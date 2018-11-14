//initial state
const initialState = {
    user: {}
}

//define strings to variables
const USER_DATA = 'USER_DATA'

//reducer function
export default function reducer (state=initialState, action) {
    switch (action.type) {
        case USER_DATA:
        return {...state, user: action.payload}
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