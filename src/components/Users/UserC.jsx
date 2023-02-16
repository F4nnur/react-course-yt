import React, {Component} from 'react';
import image from "../../image_2.png";
import axios from "axios";

class UserC extends Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    };
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
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
                                        onClick={() =>{this.props.onUserUnFollow(u.id)}}>
                                        Unfollow
                                    </button>
                                    : <button
                                        onClick={() => {this.props.onUserFollow(u.id)}}
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