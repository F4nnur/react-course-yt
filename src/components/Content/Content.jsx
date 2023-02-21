import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./Posts/Post/MyPostsContainer";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Content;