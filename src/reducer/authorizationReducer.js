import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authorizationReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                dispatch(setUserData(id, email, login))
            }
        })
    }
}

export default authorizationReducer;