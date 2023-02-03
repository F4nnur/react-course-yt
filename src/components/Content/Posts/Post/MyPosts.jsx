import React from 'react';
import s from './Post.module.scss';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    const showElement = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.PostBlock}>
            <h1>My posts</h1>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div className={s.AddButton}>
                <button onClick={showElement}>Add</button>
            </div>
        </div>
    );
}

export default MyPosts;