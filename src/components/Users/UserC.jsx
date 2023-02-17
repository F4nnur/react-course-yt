import React, {Component} from 'react';
import image from "../../image_2.png";
import axios from "axios";
import s from './style.module.scss';

class UserC extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.page}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCount(response.data.totalCount);
        })
    }
    onPageChange = (page) =>  {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.page}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }


    render() {
        let pageCount = Math.ceil(this.props.count / this.props.page);
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p && s.selectPage}
                            onClick={() => {this.onPageChange(p)}}>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img alt={'i'} src={image}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button
                                        onClick={() => {
                                            this.props.onUserUnFollow(u.id)
                                        }}>
                                        Unfollow
                                    </button>
                                    : <button
                                        onClick={() => {
                                            this.props.onUserFollow(u.id)
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
    }
}

export default UserC;