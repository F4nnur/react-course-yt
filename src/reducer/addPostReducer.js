const addPost = "addPost";

const addPostReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                data: action.text
            };
            state.postData.push(newPost);
            return state;
        default:
            return state
    }
}

export default addPostReducer;