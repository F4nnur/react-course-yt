import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img alt={'l'} className={s.Fon} src={image}/>
            </div>
            <div>
                <img alt={'l'} className={s.Avatar} src={props.profile.photos.small}/>
            </div>
        </div>
    );
};

export default ProfileInfo;