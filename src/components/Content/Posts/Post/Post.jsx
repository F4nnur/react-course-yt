import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.item}>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;