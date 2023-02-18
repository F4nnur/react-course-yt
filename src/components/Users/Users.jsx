import React from 'react';
import image from '../../image_2.png'
import s from "./style.module.scss";

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
                                         props.onPageChange(p)}}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img alt={'i'} src={image}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button
                                        onClick={() => {
                                            props.onUserUnFollow(u.id)
                                        }}>
                                        Unfollow
                                    </button>
                                    : <button
                                        onClick={() => {
                                            props.onUserFollow(u.id)
                                        }}
                                    >
                                        Follow
                                    </button>}
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