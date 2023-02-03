import React from 'react';
import s from './Post.module.scss';
import {addPostAC, changeTextAC} from "../../../../redux/state";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    const showElement = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostAC(text))
    }

    let changeText = () => {
        props.dispatch(changeTextAC(newPostElement.current.value))
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