import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";
import kek from "../../kek.jpg";
import Post from "./Posts/Post/Post";

const Content = () => {
    return (
        <div className={s.Content}>
            <div>
                <img className={s.Fon} src={image}/>
            </div>
            <div>
                <img className={s.Avatar} src={kek}/>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Content;