import React, {Component} from 'react';
import s from './Post.module.scss';

class MyPosts extends Component {
    render() {
        let newPostElement = React.createRef();

        const showElement = () => {
            let text = newPostElement.current.value;
            alert(text)
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
}

export default MyPosts;