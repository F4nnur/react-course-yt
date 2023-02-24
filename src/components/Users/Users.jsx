import React from 'react';
import image from '../../image_2.png'
import s from "./style.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/folLow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "27115d36-cbfe-40d3-9944-a93868f77350"}
                                        }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.onUserUnFollow(u.id)
                                            }
                                        })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/foLlow/${u.id}`, {}, {withCredentials: true}).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.onUserFollow(u.id)
                                            }
                                        })
                                    }}>Follow</button>}
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