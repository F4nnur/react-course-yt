import React from 'react';
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.Dialog}>
            <NavLink className={dialog => dialog.isActive ? s.active : s.Dialog} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;