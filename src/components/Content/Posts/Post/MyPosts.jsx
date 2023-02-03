import React from 'react';
import s from './Post.module.scss';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    const showElement = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type: "addPost",
            text: text
        })
    }

    let changeText = () => {
        props.dispatch({
            type: "changeText",
            text: newPostElement.current.value
        })
    };

    return (
        <div className={s.PostBlock}>
            <h1>My posts</h1>
            <div>
                <textarea
                    onChange={changeText}
                    ref={newPostElement}/>
            </div>
            <div className={s.AddButton}>
                <button onClick={showElement}>Add</button>
            </div>
        </div>
    );
}

export default MyPosts;