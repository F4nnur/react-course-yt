import React from 'react';
import Post from "./Posts/Post/Post";
import ProfileInfo from "./ProfileInfo";

const Content = (props) => {

    return (
        <div>
            <ProfileInfo/>
            {props.state.postData.map(dataPost => <Post message={dataPost.data}/>)}
        </div>
    );
};

export default Content;