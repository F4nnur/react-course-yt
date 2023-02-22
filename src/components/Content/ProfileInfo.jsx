import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";
import Preloader from "../UI/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt={'l'} className={s.Fon} src={image}/>
            </div>
            <div>
                <img alt={'l'} className={s.Avatar} src={props.profile.photos.large ?? image}/>
            </div>
        </div>
    );
};

export default ProfileInfo;