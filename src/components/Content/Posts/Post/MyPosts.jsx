import React from 'react';
import s from './Post.module.scss';
import Post from "./Post";

const MyPosts = (props) => {
    let postElements = props.post.map(dataPost => <Post message={dataPost.data}/>)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost(newPostElement.current.value);
    }

    let changeText = () => {
        let text = newPostElement.current.value;
        props.updateNewText(text);
    };
    return (
        <div className={s.PostBlock}>
            <h1>My posts</h1>
            <div>
                <textarea
                    onChange={changeText}
                    ref={newPostElement}
                    value={props.textForChange}/>
            </div>
            <div className={s.addButton}>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;