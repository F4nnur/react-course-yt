import React from 'react';
import {addPostAC} from "../../../../reducer/addPostReducer";
import {changeTextAC} from "../../../../reducer/changeTextReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    const addPost = (text) => {
        props.store.dispatch(addPostAC(text));
    }

    let changeText = (text) => {
        props.store.dispatch(changeTextAC(text));
    };
    return (
        <MyPosts
            addPost={addPost}
            updateNewText={changeText}
            post={state.mainPage.postData}
            textForChange={state.mainPage.textForChange}
        />
    );
}

export default MyPostsContainer;