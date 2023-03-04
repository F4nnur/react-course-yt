import React from 'react';
import s from "./Content.module.scss";
import image from "../../image_2.png";
import Preloader from "../UI/Preloader";
import {Navigate} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.isAuth) return <Navigate to={'/login'}/>
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
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;