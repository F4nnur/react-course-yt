import React from 'react';
import Post from "./Posts/Post/Post";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./Posts/Post/MyPosts";

const Content = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}/>
            {props.state.postData.map(dataPost => <Post message={dataPost.data}/>)}
        </div>
    );
};

export default Content;