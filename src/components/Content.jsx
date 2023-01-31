import React from 'react';
import s from "../style.module.scss";
import image from "../image_2.png";
import kek from "../kek.jpg";

const Content = () => {
    return (
        <div className={s.Content}>
            <div>
                <img className={s.Fon} src={image}/>
            </div>
            <div>
                <img className={s.Avatar} src={kek}/>
            </div>
        </div>
    );
};

export default Content;