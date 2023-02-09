import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./Posts/Post/MyPostsContainer";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Content;