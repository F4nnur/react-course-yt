import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";
import kek from "../../kek.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.Fon} src={image}/>
            </div>
            <div>
                <img className={s.Avatar} src={kek}/>
            </div>
        </div>
    );
};

export default ProfileInfo;