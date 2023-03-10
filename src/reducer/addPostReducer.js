import {profileAPI} from "../api/api";

const addPost = "addPost";
const changeText = "changeText";
const setUserProfile = "setUserProfile";
const setStatus = "getStatus";

let initialState = {
    postData: [
        {id: 1, data: 'Hi'},
        {id: 2, data: 'Hello'},
        {id: 3, data: 'Cool'},
    ],
    textForChange: '',
    profile: null,
    status: ''
}
const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                data: action.text
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                textForChange: ''
            }
        case changeText:
            return {
                ...state,
                textForChange: action.text
            }
        case setUserProfile:
            return {...state, profile: action.profile}
        case setStatus:
            return {...state, status: [action.status]}
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: addPost, text: text});
export const changeTextAC = (text) => ({type: changeText, text: text});
export const userProfile = (profile) => ({type: setUserProfile, profile})
export const addStatus = (status) => ({type: setStatus, status})
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(addStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode ===  0) {
                dispatch(addStatus(response.data))
            }
        })
    }
}
export default addPostReducer;