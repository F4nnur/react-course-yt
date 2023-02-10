const addPost = "addPost";
let initialState = {
    postData: [
        {id: 1, data: 'Hi'},
        {id: 2, data: 'Hello'},
        {id: 3, data: 'Cool'},
    ],
}
const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                data: action.text
            };
            let state2 = {...state}
            state2.postData = [...state.postData]
            state2.postData.push(newPost);
            return state2;
        default:
            return state
    }
}

export const addPostAC = (text) => {
    return{
        type: addPost,
        text: text
    }
};

export default addPostReducer;