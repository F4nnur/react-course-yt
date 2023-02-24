import React from 'react';
import s from './Header.module.scss'
import logo from "../../new_logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.Header}>
            <img alt={'k'} src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    props.login
                    : <NavLink className={s.loginBlock} to={"/login"}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}


export default Header;