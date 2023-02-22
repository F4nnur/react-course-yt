const addPost = "addPost";
const changeText = "changeText";
const setUserProfile = "setUserProfile";

let initialState = {
    postData: [
        {id: 1, data: 'Hi'},
        {id: 2, data: 'Hello'},
        {id: 3, data: 'Cool'},
    ],
    textForChange: '',
    profile: null
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
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: addPost, text: text});
export const changeTextAC = (text) => ({type: changeText, text: text});
export const userProfile = (profile) => ({type: setUserProfile, profile})
export default addPostReducer;