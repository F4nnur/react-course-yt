import React from 'react';
import s from './Post.module.scss';

const Post = () => {
    return (
        <div className={s.item}>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;