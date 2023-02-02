import React from 'react';
import s from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={s.Nav}>
            <div>
                <a href='/content'>
                    Profile
                </a>
            </div>
            <div>
                <a href='/dialogs'>
                    Messages
                </a>
            </div>
            <div>
                <a href='/news'>
                    News
                </a>
            </div>
            <div>
                <a href='/music'>
                    Music
                </a>
            </div>
            <div>
                <a href='/settings'>
                    Settings
                </a>
            </div>
        </nav>
    );
};

export default Nav;