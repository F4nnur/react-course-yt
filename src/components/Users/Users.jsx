import React from 'react';
import image from '../../image_2.png'
import s from "./style.module.scss";
import {NavLink} from "react-router-dom";
const Users = (props) => {
    let pageCount = Math.ceil(props.count / props.page);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && s.selectPage}
                                     onClick={() => {
                                         props.onPageChange(p)
                                     }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt={'i'} src={u.photos.small != null ? u.photos.small : image}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.following.some(id => id === u.id)} onClick={() => {
                                        props.onUserUnFollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.following.some(id => id === u.id)} onClick={() => {
                                        props.onUserFollow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.county"}</div>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;