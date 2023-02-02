import React from 'react';
import Post from "./Posts/Post/Post";
import ProfileInfo from "./ProfileInfo";

const Content = () => {
    return (
        <div>
            <ProfileInfo/>
            <Post message={"Hi"}/>
            <Post message={"Hello"}/>
        </div>
    );
};

export default Content;