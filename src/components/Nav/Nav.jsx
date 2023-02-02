import React from 'react';
import s from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.Nav}>
            <div className={s.item}>
                <NavLink className={navSata => navSata.isActive ? s.active : s.item} to='/content'>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogs'>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navSata => navSata.isActive ? s.active : s.item} to='/news'>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navSata => navSata.isActive ? s.active : s.item} to='/music'>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={navSata => navSata.isActive ? s.active : s.item} to='/settings'>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;