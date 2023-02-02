import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                <div className={s.Dialog}>
                    <NavLink className={dialog => dialog.isActive ? s.active : s.Dialog} to={'/dialogs/1'}>Andrey</NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink className={dialog => dialog.isActive ? s.active : s.Dialog} to={'/dialogs/2'}>
                        Dima
                    </NavLink>
                </div>
                <div className={s.Dialog}>
                    <NavLink className={dialog => dialog.isActive ? s.active : s.Dialog} to={'/dialogs/3'}>
                        Olga
                    </NavLink>
                </div>
            </div>
            <div className={s.Messages}>
                <div className={s.Message}>Hi</div>
                <div className={s.Message}>Hello</div>
                <div className={s.Message}>Kek</div>
            </div>
        </div>
    );
};

export default Dialogs;