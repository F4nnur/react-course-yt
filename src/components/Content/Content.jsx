import React from 'react';
import Post from "./Posts/Post/Post";
import ProfileInfo from "./ProfileInfo";

const Content = () => {

    let postData = [
        {id: 1, data: 'Hi'},
        {id: 2, data: 'Hello'},
        {id: 3, data: 'Cool'},
    ]
    return (
        <div>
            <ProfileInfo/>
            { postData.map(data => <Post message={data.data}/>)}
        </div>
    );
};

export default Content;