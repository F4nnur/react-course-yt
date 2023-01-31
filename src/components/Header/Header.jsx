import React from 'react';
import s from './Header.module.scss'
import logo from "../../new_logo.png";

const Header = () => {
    return (
        <header className={s.Header}>
            <img src={logo}/>
        </header>
    );
}


export default Header;