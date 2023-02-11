const addPost = "addPost";
const changeText = "changeText";

let initialState = {
    postData: [
        {id: 1, data: 'Hi'},
        {id: 2, data: 'Hello'},
        {id: 3, data: 'Cool'},
    ],
    textForChange: ''
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
        default:
            return state
    }
}

export const addPostAC = (text) => ({type: addPost, text: text});
export const changeTextAC = (text) => ({type: changeText, text: text});
export default addPostReducer;