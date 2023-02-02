import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";
import kek from "../../kek.jpg";
import Post from "./Posts/Post/Post";

const Content = () => {
    return (
        <div>
            <div>
                <img className={s.Fon} src={image}/>
            </div>
            <div>
                <img className={s.Avatar} src={kek}/>
            </div>
            <Post message={"Hi"}/>
            <Post message={"Hello"}/>
        </div>
    );
};

export default Content;